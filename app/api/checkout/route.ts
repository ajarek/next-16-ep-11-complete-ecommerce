import { stripe } from "@/lib/stripe"
import { Product } from "@/types/typeProducts"
import { NextResponse } from "next/server"

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
}

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders })
}

export async function POST(req: Request) {
  try {
    const { items, email } = await req.json()

    const line_items = items.map((item: Product) => ({
      quantity: item.quantity ?? 1,
      price_data: {
        currency: "usd",
        product_data: {
          name: item.name,
          // Only send images if they are valid URLs. Stripe requires valid public URLs.
          // If you are testing locally with localhost images, Stripe server cannot see them.
          // We can either filter them or send no images for local dev if they are not public.
          images: item.images.filter((img) => img.startsWith("http")),
        },
        unit_amount: Math.round(item.offerPrice * 100),
      },
    }))

    const session = await stripe.checkout.sessions.create({
      line_items,
      mode: "payment",
      success_url: `${process.env.NEXT_PUBLIC_URL}/success`,
      cancel_url: `${process.env.NEXT_PUBLIC_URL}/cart?canceled=1`,
      customer_email: email, // Optional: Pre-fill customer email if available
      // metadata: {
      //   orderId: "123456", // Example
      // },
      phone_number_collection: {
        enabled: true,
      },
      shipping_options: [
        {
          shipping_rate_data: {
            type: "fixed_amount",
            fixed_amount: {
              amount: 500,
              currency: "usd",
            },
            display_name: "Delivery",
          },
        },
      ],
    })

    return NextResponse.json(
      { url: session.url },
      {
        headers: corsHeaders,
      }
    )
  } catch (error) {
    console.error("[CHECKOUT_ERROR]", error)
    return NextResponse.json(
      { error: "Internal error", details: error },
      { status: 500 }
    )
  }
}
