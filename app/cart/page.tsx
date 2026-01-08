"use client"

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
import { Minus, Plus, Trash2, Undo2 } from "lucide-react"
import Link from "next/link"

const taxRate = 23
const shipping = 5

const Cart = () => {
  const { items, removeItemFromCart, increment, decrement, total } = useCartStore()
  return (
    <div className=' min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-8 max-sm:px-4 gap-8 '>
      <div className='w-full h-[calc(100vh-4rem)] grid grid-cols-1 md:grid-cols-[2fr_1fr] place-items-center gap-8 border-4'>
        <div className='w-full h-full border-4 p-4 border-red-500'>
          <div className='flex items-center gap-4 '>
            <h1 className='text-2xl font-semibold'>Shopping Cart</h1>
            <LengthCart />
            <span className='text-primary'>items</span>
          </div>
          <Table>
            <TableCaption className='text-left'><Link href="/collections" className="flex items-center gap-2 text-primary">
            <Undo2 className="w-5 h-5" />
            Continue Shopping
            </Link></TableCaption>
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
        <div className='w-full h-full border-4 p-4 border-green-500'>
          <h1 className='text-2xl font-semibold'>Order Summary</h1>
          <div className='flex items-center justify-between'>
            <span>Subtotal</span>
            <span>${total().toFixed(2)}</span>
          </div>
          <div className='flex items-center justify-between'>
            <span>Shipping</span>
            <span>${shipping}</span>
          </div>
          <div className='flex items-center justify-between'>
            <span>Including tax ({taxRate}%)</span>
            <span>${(((total()+shipping)*taxRate)/(100+taxRate)).toFixed(2)}</span>
          </div>
          <div className='flex items-center justify-between text-xl font-semibold'>
            <span>Total</span>
            <span>${((total() + shipping).toFixed(2))}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
