import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Product } from "@/types/typeProducts"
import { Button } from "./ui/button"
import Image from "next/image"
import Link from "next/link"

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className='w-full pt-0 rounded-t-2xl overflow-hidden shadow-xl'>
      <CardHeader className='w-full px-0 '>
        <div className='w-full flex items-center justify-center '>
        <Image
          src={
            product.images && product.images[0]
              ? product.images[0]
              : "/images/not-found.png"
          }
          alt={product.name}
          width={333}
          height={399}
          className='w-full rounded-t-2xl'
        />
        </div>
        <CardTitle className='px-4 '>
          <span className='text-sm text-muted-foreground'>
            {product.category}
          </span>
          <h1>{product.name}</h1>
        </CardTitle>
      </CardHeader>
      <CardContent className='px-4 '>
        <CardDescription>{product.description.slice(0, 22)}...</CardDescription>
      </CardContent>
      <CardFooter className='flex items-center justify-between'>
        <CardAction>${product.price.toFixed(2)}</CardAction>
        <Button asChild className='cursor-pointer rounded-xl'>
          <Link href={`/product/${product._id}`}>View Product</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

export default ProductCard
