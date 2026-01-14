import { currentUser } from "@clerk/nextjs/server"
import type { ShoppingList } from "@/lib/models"
import { getShoppingAll } from "@/lib/action"

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Phone, Trash2 } from "lucide-react"

const shipping = 5

const OrderList = async () => {
  const user = await currentUser()
  const shoppingList = await getShoppingAll()

  return (
    <div className='w-full flex flex-col gap-4'>
      <h1 className='text-2xl font-bold'>OrderList</h1>
      <Table className='w-full'>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className=''>Products</TableHead>
            <TableHead>Quantity</TableHead>
            <TableHead>Price total</TableHead>
            <TableHead>Date</TableHead>
            <TableHead>Method</TableHead>
            <TableHead>Buyer</TableHead>
            <TableHead className=''>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {shoppingList.map((item: ShoppingList) =>
            item.name.map((name: string, index: number) => (
              <TableRow
                key={`${item._id?.toString()}-${index}`}
                className=''
              >
                <TableCell className='font-medium'>
                  <div className='flex flex-col items-start gap-4'>
                    <Image
                      src={item.images[index]}
                      alt={name}
                      width={50}
                      height={55}
                      className='rounded-xl'
                    />
                    <span>{name}</span>
                  </div>
                </TableCell>
                <TableCell className=''>{item.quantity[index]}</TableCell>
                {index === 0 && (
                  <TableCell rowSpan={item.name.length}>
                    $
                    {item.total.reduce((acc, curr) => acc + curr, 0) + shipping}
                  </TableCell>
                )}

                <TableCell>
                  {item.createdAt?.toLocaleString().split("T")[0] || "N/A"}
                </TableCell>
                {index === 0 && (
                  <TableCell rowSpan={item.name.length}>
                    {item.method[0]}
                  </TableCell>
                )}
                {index === 0 && (
                  <TableCell rowSpan={item.name.length}>
                    <div>
                      <p>
                        {user?.firstName} {user?.lastName}
                      </p>
                      <p>{user?.emailAddresses[0].emailAddress}</p>
                      <p>
                        {user?.publicMetadata?.zipcode as string}{" "}
                        {user?.publicMetadata?.city as string}
                        {user?.publicMetadata?.street as string}
                      </p>
                      <p className='flex items-center gap-2'>
                        <Phone /> {user?.publicMetadata?.phone as string}
                      </p>
                    </div>
                  </TableCell>
                )}
                {index === 0 && (
                  <TableCell rowSpan={item.name.length}>
                    <Button
                      variant='ghost'
                      className='cursor-pointer rounded-xl'
                    >
                      <Trash2 className='w-5 h-5 ' />
                    </Button>
                  </TableCell>
                )}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  )
}

export default OrderList
