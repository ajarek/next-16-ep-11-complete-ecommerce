import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"
import type { Product } from "@/types/typeProducts"

type ProductState = {
  items: Product[]
  addItemToCart: (item: Product) => void
  removeItemFromCart: (id: string) => void
  total: () => number
  increment: (id: string) => void
  decrement: (id: string) => void
  removeAllFromCart: () => void
}

export const useCartStore = create<ProductState>()(
  persist(
    (set, get) => ({
      items: [],

      addItemToCart: (item: Product) =>
        set((state) => ({
          items: [item, ...state.items],
        })),

      removeItemFromCart: (id) =>
        set((state) => ({
          items: state.items.filter((item) => item._id !== id),
        })),

      removeAllFromCart: () => set({ items: [] }),

      total: () =>
        get().items.reduce(
          (acc, item) => acc + item.offerPrice * (item.quantity ?? 1),
          0
        ),

      increment: (id: string) =>
        set((state) => ({
          items: state.items.map((item) =>
            item._id === id
              ? { ...item, quantity: (item.quantity ?? 1) + 1 }
              : item
          ),
        })),
      decrement: (id: string) =>
        set((state) => ({
          items: state.items.map((item) =>
            item._id === id
              ? {
                  ...item,
                  quantity:
                    item.quantity && item.quantity > 1 ? item.quantity - 1 : 1,
                }
              : item
          ),
        })),
    }),

    { name: "cartStore", storage: createJSONStorage(() => localStorage) }
  )
)
