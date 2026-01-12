import mongoose from "mongoose"

export type ShoppingList = {
  username: string
  productId: string[]
  quantity: number[]
  total: number[]
  method: string
}

const shoppingListSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: false, min: 3, max: 100 },
    productId: { type: [String], required: true },
    quantity: { type: [Number], required: true },
    total: { type: [Number], required: true },
    method: { type: String, required: true },
  },
  { timestamps: true }
)

if (mongoose.models?.ShoppingList) {
  delete mongoose.models.ShoppingList
}

export const ShoppingList = mongoose.model("ShoppingList", shoppingListSchema)
