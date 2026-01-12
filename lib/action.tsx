"use server"

import connectToDb from "./connectToDb"
import {ShoppingList } from "./models"
import { revalidatePath } from "next/cache"

import { redirect } from "next/navigation"

export const addShoppingList = async (formData:ShoppingList) => {
  const { username, productId, quantity, total, method } = formData
  try {
    await connectToDb()
    const newShoppingList = new ShoppingList({
     username,
     productId,
     quantity,
     total,
     method,
    })
    await newShoppingList.save()
    console.log("saved" + newShoppingList)
    revalidatePath("/seller/order")
    
  } catch (err) {
    console.log(err)
  }
}

export const getShoppingList = async (username: string) => {
  try {
    await connectToDb()
    const shoppingList = await ShoppingList.find({ username })
    return JSON.parse(JSON.stringify(shoppingList))
  } catch (err) {
    console.log(err)
  }
}

export const removeFromShoppingList = async (Id: string) => {
  try {
    await connectToDb()
    await ShoppingList.deleteOne({ _id: Id })
    revalidatePath("/seller/order")
    redirect("/seller/order")
  } catch (err) {
    console.log(err)
  }
}
