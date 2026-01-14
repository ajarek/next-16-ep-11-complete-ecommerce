"use client"

import { useEffect } from "react"
import { useCartStore } from "@/store/cartStore"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { useSearchParams } from "next/navigation"

const SuccessPage = () => {
  const removeAllFromCart = useCartStore((state) => state.removeAllFromCart)
  const searchParams = useSearchParams()

  // W razie potrzeby sprawdź, czy dotarliśmy tutaj z przepływu płatności, ale na razie zakładamy, że
  // dostęp do tej strony oznacza powodzenie lub możemy ją po prostu wyczyścić.
  // Najlepiej byłoby sprawdzić session_id, ale żądanym zachowaniem jest czyszczenie podczas montowania.

  useEffect(() => {
    removeAllFromCart()
  }, [removeAllFromCart])

  return (
    <div className='flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] bg-background text-foreground animate-in fade-in zoom-in duration-500'>
      <div className='p-8 text-center space-y-6 max-w-md w-full'>
        <div className='flex justify-center'>
          <CheckCircle2 className='w-24 h-24 text-green-500 animate-bounce' />
        </div>

        <h1 className='text-4xl font-bold tracking-tight'>Thank You!</h1>

        <p className='text-xl text-muted-foreground'>
          Your payment was successful. We have received your order and sent a
          confirmation email.
        </p>

        <div className='pt-6'>
          <Button
            asChild
            className='w-full h-12 text-lg rounded-xl transform hover:scale-105 transition-all'
          >
            <Link href='/collections'>
              Continue Shopping <ArrowRight className='ml-2 w-5 h-5' />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default SuccessPage
