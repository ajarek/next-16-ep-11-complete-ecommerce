"use client"

import { Products } from "@/data/data.js"
import ProductCard from "@/components/ProductCard"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

const CollectionPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const filteredProducts =
    selectedCategory === "All"
      ? Products
      : Products.filter((product) => product.category === selectedCategory)
  const searchProducts = filteredProducts.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  )
  return (
    <div className=' min-h-[calc(100vh-4rem)] flex flex-col items-start justify-start px-8 max-sm:px-4 gap-1   '>
      <h1 className='text-3xl font-semibold mt-4'>
        All <span className='text-primary'>Products</span>
      </h1>
      <p className='w-full sm:max-w-xl text-muted-foreground'>
        Explore our collection of unique and handcrafted products.
      </p>
      <div className="w-full flex flex-wrap items-center gap-4">
        <div className='flex flex-wrap items-center gap-2'>
          <Button
            onClick={() => setSelectedCategory("All")}
            className=' bg-secondary hover:bg-secondary/80 px-4 cursor-pointer text-2xl rounded-xl'
          >
            All
          </Button>
          <Button
            onClick={() => setSelectedCategory("Women")}
            className=' bg-secondary hover:bg-secondary/80 px-4 cursor-pointer text-2xl rounded-xl'
          >
            Women
          </Button>
          <Button
            onClick={() => setSelectedCategory("Men")}
            className=' bg-secondary hover:bg-secondary/80 px-4 cursor-pointer text-2xl rounded-xl'
          >
            Men
          </Button>
          <Button
            onClick={() => setSelectedCategory("Kids")}
            className=' bg-secondary hover:bg-secondary/80 px-4 cursor-pointer text-2xl rounded-xl'
          >
            Kids
          </Button>
        </div>
        <div className='w-1/4 max-sm:w-full relative flex items-center gap-4 '>
          <Input
            type='search'
            placeholder='Search'
            onChange={(e) => setSearchQuery(e.target.value)}
            value={searchQuery || ""}
            className='px-10 rounded-xl'
          />
          <Search className='absolute left-2 top-1/2 -translate-y-1/2' />
        </div>
      </div>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 place-items-center mt-8'>
        {searchProducts.map((product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  )
}

export default CollectionPage
