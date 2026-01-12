"use client"

import { toast } from "sonner"
import { Button } from "./ui/button"
import { removeFromWatchlist } from "@/lib/action"
import { redirect } from "next/navigation"
import { Trash2 } from "lucide-react"

interface ButtonDeleteWatchlistProps {
  coinId: string
}

const ButtonDeleteWatchlist = ({ coinId }: ButtonDeleteWatchlistProps) => {
  const handleRemoveFromWatchlist = async () => {
    await removeFromWatchlist(coinId)
    toast.success("Coin deleted from watchlist")
    redirect("/dashboard")
  }

  return (
    <Button
      variant='outline'
      size='icon'
      className={`cursor-pointer  hover:text-red-500  transition-colors duration-200`}
      onClick={handleRemoveFromWatchlist}
    >
      <Trash2 className='h-4 w-4' />
    </Button>
  )
}

export default ButtonDeleteWatchlist
