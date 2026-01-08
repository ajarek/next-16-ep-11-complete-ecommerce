import Image from "next/image"
import { Products } from "@/data/data.js"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import ProductCard from "@/components/ProductCard"
import ButtonAddCart from "@/components/ButtonAddCart"
import { ShoppingBag, ShoppingCart } from "lucide-react"

const ProductPage = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  const product = Products.find((product) => product._id === id)
  const quantity = 1
  if (!product) {
    return <div>Product not found</div>
  }
  return (
    <div className=' min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center px-8 max-sm:px-4 gap-8 '>
      <div className='w-full  grid grid-cols-1 md:grid-cols-2 place-items-center gap-8'>
        <div className='relative p-4'>
          <Image
            src={product?.images[0]}
            alt={product?.name}
            width={500}
            height={500}
            className='rounded-t-2xl shadow-xl'
          />
        </div>
        <div className='flex flex-col items-start justify-center gap-4'>
          <h1 className='text-3xl font-semibold'>{product?.name}</h1>
          <p>{product?.popular ? "⭐⭐⭐⭐⭐(5)" : "⭐⭐⭐⭐(4)"}</p>
          <div className='flex items-center gap-2'>
            <p className='text-muted-foreground'>
              <span>Category:</span>{" "}
              <span className='font-semibold'>{product?.category}</span>
            </p>
            <p className='text-muted-foreground'>
              <span>Sub Category:</span>{" "}
              <span className='font-semibold'>{product?.subCategory}</span>
            </p>
          </div>
          <p className='text-muted-foreground'>{product?.description}</p>
          <div className='flex items-center gap-2'>
            <p className='text-muted-foreground line-through'>
              ${product?.price.toFixed(2)}
            </p>
            <p className='text-primary text-xl font-semibold '>
              ${(product?.offerPrice).toFixed(2)}
            </p>
          </div>
          <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-4'>
            <Button
              asChild
              className='bg-primary text-white px-4 py-2 rounded-xl hover:bg-primary/80 transition-colors cursor-pointer '
            > 
            <div className="flex items-center gap-2">
            <ShoppingCart className='w-4 h-4' />
              <Link href='/collections'>Buy Now</Link>
            </div>
            </Button>
            <ButtonAddCart product={{ ...product, quantity }} />
          </div>
        </div>
      </div>
      <div className='w-full flex flex-col items-start justify-center gap-4'>
        <h1 className='text-3xl font-semibold'>Related Products</h1>
        <p className='w-full sm:max-w-xl text-muted-foreground'>
          Explore our collection of high-quality products, carefully curated to
          meet your needs. From durable materials to stylish designs, we offer a
          range of options to suit your preferences.
        </p>
        <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 place-items-center'>
          {Products.filter(
            (productRelated) => productRelated.category === product.category
          )
            .slice(0, 5)
            .map((productRelated) => (
              <ProductCard key={productRelated._id} product={productRelated} />
            ))}
        </div>
      </div>
    </div>
  )
}

export default ProductPage
