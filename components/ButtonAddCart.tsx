"use client"

import { useCartStore } from "@/store/cartStore"
import { useRouter } from "next/navigation"
import type { Product } from "@/types/typeProducts"
import { toast } from "sonner"
import { Handbag, ShoppingBag } from "lucide-react"
import { Button } from "./ui/button"

const ButtonAddCart = ({ product }: { product: Product }) => {
  const router = useRouter()
  const { addItemToCart, items } = useCartStore()

  const {
    _id,
    userId,
    name,
    description,
    price,
    offerPrice,
    images,
    category,
    date,
    subCategory,
    quantity,
  } = product

  return (
    <Button
      onClick={() => {
        if (items.some((i) => i._id === _id)) {
          toast("Product is already in the cart")
          router.push("/collections")
          return
        }
        addItemToCart({
          _id,
          userId,
          name,
          description,
          price,
          offerPrice,
          images,
          category,
          date,
          subCategory,
          popular: false, 
          new: false, 
          quantity,
        })

        toast.success("Product added to cart")
        router.push("/collections")
      }}
      aria-label='Add to cart'
      className='bg-secondary text-white px-4 py-2 rounded-xl hover:bg-secondary/80 transition-colors cursor-pointer'
    >
      <Handbag className='w-4 h-4' />
      <span className='ml-2'> Add to Cart</span>
    </Button>
  )
}

export default ButtonAddCart
