import { currentUser } from "@clerk/nextjs/server"
import type { ShoppingList } from "@/lib/models"
import { getShoppingList  } from "@/lib/action"
import { Products  } from "@/data/data.js"
import type { Product } from "@/types/typeProducts"
const OrderList = async () => {
  const user = await currentUser()
  const shoppingList = await getShoppingList(user?.id || "")
  const watchedProducts = shoppingList
    ?.map((item: ShoppingList) => item.productId)
    .join(",")
    .split(",")

  const products = Products.filter((item: Product) =>
    watchedProducts?.includes(item._id)
  )

  return (
    <div>
      <h1>OrderList</h1>
      <p>{JSON.stringify(products)}</p>
      <p>{JSON.stringify(shoppingList)}</p>
    </div>
  )
}

export default OrderList
