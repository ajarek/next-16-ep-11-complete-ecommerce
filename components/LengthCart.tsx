"use client"

import { useCartStore } from "@/store/cartStore"

const LengthCart = () => {
  const { items } = useCartStore()
  const length = items.reduce((acc, item) => acc + (item.quantity ?? 1), 0)
  return (
    <div className='w-5 h-5 bg-primary text-white flex items-center justify-center rounded-full'>
      {length}
    </div>
  )
}

export default LengthCart
