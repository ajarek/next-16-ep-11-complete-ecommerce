"use client"

import { useState, useSyncExternalStore } from "react"

import { useCartStore } from "@/store/cartStore"
import LengthCart from "@/components/LengthCart"
import Image from "next/image"
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Minus, Plus, Trash2, Undo2, Loader2 } from "lucide-react"
import Link from "next/link"
import { useUser } from "@clerk/nextjs"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { toast } from "sonner"
import { addShoppingList } from "@/lib/action"

const taxRate = 23
const shipping = 5

const Cart = () => {
  const { user } = useUser()

  const [loading, setLoading] = useState(false)
  const [paymentMethod, setPaymentMethod] = useState<string>("Cash")
  const {
    items: storeItems,
    removeItemFromCart,
    increment,
    decrement,
    total: storeTotal,
  } = useCartStore()
  //Dzięki temu środowisko klienta jest poprawnie identyfikowane i nie pojawia się ostrzeżenie „setState in effect” (stan ustawiony na wartość) i jest to zalecane podejście React 18+ do obsługi synchronizacji środowiska sklepu.
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )

  const items = isClient ? storeItems : []
  const total = () => (isClient ? storeTotal() : 0)

  const handleCheckout = async () => {
    if (!user) {
      return toast.error("Please log in to proceed to checkout")
    }

    if (
      !user.publicMetadata.street ||
      !user.publicMetadata.city ||
      !user.publicMetadata.country ||
      !user.publicMetadata.zipcode ||
      !user.publicMetadata.phone
    ) {
      return toast.error(
        "Please complete your shipping address in specific profile page"
      )
    }

    if (items.length === 0) {
      return toast.error("Cart is empty")
    }

    if (paymentMethod !== "Card") {
      return toast.info(
        "Only Card payment is integrated with Stripe Checkout for now."
      )
    }

    try {
      setLoading(true)
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items,
          email: user?.primaryEmailAddress?.emailAddress,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        window.location.href = data.url
      } else {
        console.error("Checkout error:", data)
        toast.error(
          `Checkout failed: ${
            data.details?.message || data.error || "Unknown error"
          }`
        )
      }
      await addShoppingList({
        username: user.id,
        productId: items.map((item) => item._id),
        images: items.map((item) => item.images[0]),
        name: items.map((item) => item.name),
        quantity: items.map((item) => item.quantity ?? 1),
        total: items.map((item) => item.offerPrice * (item.quantity ?? 1)),
        method: items.map(() => paymentMethod),
      })
    } catch (error) {
      console.error(error)
      toast.error("Something went wrong. Check console for details.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className=' min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-8 max-sm:px-4 gap-8 '>
      <div className='w-full min-h-[calc(100vh-4rem)] grid grid-cols-1 lg:grid-cols-[2fr_1fr] place-items-center gap-8 border-4'>
        <div className='w-full h-full border-4 p-4 border-primary'>
          <div className='flex items-center gap-4 '>
            <h1 className='text-2xl font-semibold'>Shopping Cart</h1>
            <LengthCart />
            <span className='text-primary'>items</span>
          </div>
          <Table>
            <TableCaption className='text-left'>
              <Link
                href='/collections'
                className='flex items-center gap-2 text-primary'
              >
                <Undo2 className='w-5 h-5' />
                Continue Shopping
              </Link>
            </TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>Product Details</TableHead>
                <TableHead>Subtotal</TableHead>
                <TableHead className='text-center'>Quantity</TableHead>
                <TableHead>Total</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {items.map((item) => (
                <TableRow key={item._id}>
                  <TableCell className='font-medium'>
                    <div className='flex flex-wrap items-center gap-4'>
                      <Image
                        src={item.images[0]}
                        alt={item.name}
                        width={50}
                        height={55}
                        className='rounded-xl'
                      />
                      <span>{item.name}</span>
                    </div>
                  </TableCell>
                  <TableCell>${item.offerPrice.toFixed(2)}</TableCell>
                  <TableCell className=' text-center'>
                    <div className='flex items-center justify-center gap-2 '>
                      <Button
                        variant='ghost'
                        onClick={() => decrement(item._id)}
                        className='cursor-pointer rounded-xl'
                      >
                        <Minus className='w-5 h-5 ' />
                      </Button>
                      <span>{item.quantity ?? 1}</span>
                      <Button
                        variant='ghost'
                        onClick={() => increment(item._id)}
                        className='cursor-pointer rounded-xl'
                      >
                        <Plus className='w-5 h-5 ' />
                      </Button>
                    </div>
                  </TableCell>
                  <TableCell className=''>
                    ${(item.offerPrice * (item.quantity ?? 1)).toFixed(2)}
                  </TableCell>
                  <TableCell>
                    <Button
                      variant='ghost'
                      onClick={() => removeItemFromCart(item._id)}
                      className='cursor-pointer rounded-xl'
                    >
                      <Trash2 className='w-5 h-5 ' />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className='w-full h-full border-4 p-4 border-secondary flex flex-col gap-4'>
          <h1 className='text-2xl font-semibold'>Order Summary</h1>
          {storeItems.length === 0 ? (
            <p className='text-center text-muted-foreground'>
              Your cart is empty
            </p>
          ) : (
            <div className='w-full h-full flex flex-col gap-4'>
              <div>
                <h2 className='text-xl uppercase'>Shipping Address</h2>
                {user?.publicMetadata.country ||
                user?.publicMetadata.city ||
                user?.publicMetadata.zipcode ||
                user?.publicMetadata.street ||
                user?.publicMetadata.phone ? (
                  <>
                    <p className='flex items-center gap-2 text-muted-foreground'>
                      Country:{" "}
                      <span className='text-primary'>
                        {user?.publicMetadata.country as string}
                      </span>
                    </p>

                    <p className='flex items-center gap-2 text-muted-foreground'>
                      City:{" "}
                      <span className='text-primary'>
                        {user?.publicMetadata.city as string}
                      </span>
                    </p>
                    <p className='flex items-center gap-2 text-muted-foreground'>
                      Zipcode:{" "}
                      <span className='text-primary'>
                        {user?.publicMetadata.zipcode as string}
                      </span>
                    </p>
                    <p className='flex items-center gap-2 text-muted-foreground'>
                      Street:{" "}
                      <span className='text-primary'>
                        {user?.publicMetadata.street as string}
                      </span>
                    </p>
                    <p className='flex items-center gap-2 text-muted-foreground'>
                      Phone:{" "}
                      <span className='text-primary'>
                        {user?.publicMetadata.phone as string}
                      </span>
                    </p>
                  </>
                ) : (
                  <div className='flex items-center gap-2 text-muted-foreground'>
                    <p>No shipping address found</p>
                    <Button
                      asChild
                      variant='outline'
                      className='cursor-pointer rounded-xl'
                    >
                      <Link
                        href='/profile'
                        className='text-primary hover:text-primary/80 transition-colors'
                      >
                        Add Address
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
              <hr />
              <div>
                <h2 className='text-xl uppercase'>Payment Method</h2>
                <Select onValueChange={setPaymentMethod} defaultValue='Cash'>
                  <SelectTrigger className='w-[180px]'>
                    <SelectValue placeholder='Select payment method' />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='Cash'>Cash on delivery</SelectItem>
                    <SelectItem value='Card'>Card</SelectItem>
                    <SelectItem value='PayPal'>PayPal</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <hr />
              <div>
                <div className='flex items-center justify-between '>
                  <span>Subtotal</span>
                  <span>${total().toFixed(2)}</span>
                </div>
                <div className='flex items-center justify-between'>
                  <span>Shipping</span>
                  <span>${shipping}</span>
                </div>
                <div className='flex items-center justify-between'>
                  <span>Including tax ({taxRate}%)</span>
                  <span>
                    $
                    {(
                      ((total() + shipping) * taxRate) /
                      (100 + taxRate)
                    ).toFixed(2)}
                  </span>
                </div>
                <div className='flex items-center justify-between text-xl font-semibold'>
                  <span>Total</span>
                  <span>${(total() + shipping).toFixed(2)}</span>
                </div>
                <div>
                  <p>Payment Method: {paymentMethod}</p>
                </div>
                <Button
                  className='w-full mt-6 cursor-pointer'
                  onClick={handleCheckout}
                  disabled={loading || items.length === 0}
                >
                  {loading && <Loader2 className='mr-2 h-4 w-4 animate-spin' />}
                  Checkout
                </Button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Cart
