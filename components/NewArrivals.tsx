import { Products } from "@/data/data.js"
import ProductCard from "./ProductCard"

const NewArrivals = () => {
  return (
    <div className='w-full h-full flex flex-col items-start justify-center gap-6'>
      <h1 className='text-3xl font-semibold'>
        New <span className='text-primary'>Arrivals</span>
      </h1>
      <p className='max-w-xl text-muted-foreground'>
        Explore our collection of stylish clothing and footwear made for
        comfort, quality, and everyday confidence.
      </p>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center">
        {Products
        .filter((product) => product.new)
        .map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default NewArrivals
