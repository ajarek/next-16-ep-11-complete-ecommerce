"use client"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Trash2 } from "lucide-react"
import { Products as items } from "@/data/data.js"
import { useState } from "react"

const SellerPage = () => {
  const [sortOrder, setSortOrder] = useState("asc")
  const sortedItems = [...items].sort((a, b) => {
    if (sortOrder === "price") {
      return a.price - b.price
    } else if (sortOrder === "details") {
      return a.name.localeCompare(b.name)
    } else if (sortOrder === "category") {
      return a.category.localeCompare(b.category)
    } else if (sortOrder === "subtotal") {
      return a.offerPrice - b.offerPrice
    } else if (sortOrder === "action") {
      return a._id.localeCompare(b._id)
    }
    return 0
  })
  return (
    <div className='min-h-[calc(100vh-4rem)] w-full flex flex-col items-center justify-start  '>
      <h1>All Products</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>
              <Button
                variant='ghost'
                className='cursor-pointer hover:bg-transparent'
                onClick={() => setSortOrder("details")}
              >
                Product Details
              </Button>
            </TableHead>
            <TableHead>
              <Button
                variant='ghost'
                className='cursor-pointer hover:bg-transparent'
                onClick={() => setSortOrder("category")}
              >
                Category
              </Button>
            </TableHead>
            <TableHead>
              <Button
                variant='ghost'
                className='cursor-pointer hover:bg-transparent'
                onClick={() => setSortOrder("subtotal")}
              >
                Subtotal
              </Button>
            </TableHead>
            <TableHead>
              <Button
                variant='ghost'
                className='cursor-pointer hover:bg-transparent'
                onClick={() => setSortOrder("price")}
              >
                Price
              </Button>
            </TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {sortedItems.map((item) => (
            <TableRow key={item._id}>
              <TableCell className='font-medium'>
                <div className='flex flex-wrap items-center gap-4'>
                  <Image
                    src={item.images[0]}
                    alt={item.name}
                    width={50}
                    height={55}
                    className='rounded-xl'
                  />
                  <span>{item.name}</span>
                </div>
              </TableCell>
              <TableCell className=''>{item.category}</TableCell>
              <TableCell>${item.offerPrice.toFixed(2)}</TableCell>

              <TableCell>${item.price.toFixed(2)}</TableCell>

              <TableCell>
                <Button variant='ghost' className='cursor-pointer rounded-xl'>
                  <Trash2 className='w-5 h-5 ' />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default SellerPage
