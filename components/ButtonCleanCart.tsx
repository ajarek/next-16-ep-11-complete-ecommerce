"use client"
import { useCartStore } from "@/store/cartStore"
import { useEffect } from "react"

const ButtonCleanCart = () => {
  const { removeAllFromCart } = useCartStore()

  useEffect(() => {
    removeAllFromCart()
    localStorage.clear()
  }, [removeAllFromCart])

  return null
}

export default ButtonCleanCart
