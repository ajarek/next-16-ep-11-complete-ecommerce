"use client"

import { useCartStore } from "@/store/cartStore"
import { useSyncExternalStore } from "react"

const LengthCart = () => {
  const { items } = useCartStore()
  const isClient = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false
  )

  const length = isClient
    ? items.reduce((acc, item) => acc + (item.quantity ?? 1), 0)
    : 0
  return (
    <div className='w-5 h-5 bg-primary text-white flex items-center justify-center rounded-full'>
      {length}
    </div>
  )
}

export default LengthCart
