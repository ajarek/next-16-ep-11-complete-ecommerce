"use client"

import { toast } from "sonner"
import { Button } from "./ui/button"
import { removeFromShoppingList } from "@/lib/action"
import { redirect } from "next/navigation"
import { Trash2 } from "lucide-react"

interface ButtonDeleteShoppingListProps {
  Id: string
}

const ButtonDeleteShoppingList = ({ Id }: ButtonDeleteShoppingListProps) => {
  const handleRemoveFromShoppingList = async () => {
    await removeFromShoppingList(Id)
    toast.success(" deleted from ShoppingList")
    redirect("/seller/order")
  }

  return (
    <Button
      variant='outline'
      size='icon'
      className={`cursor-pointer  hover:text-red-500  transition-colors duration-200`}
      onClick={handleRemoveFromShoppingList}
    >
      <Trash2 className='h-4 w-4' />
    </Button>
  )
}

export default ButtonDeleteShoppingList
