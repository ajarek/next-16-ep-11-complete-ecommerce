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
          // Wysyłaj obrazy tylko wtedy, gdy są to prawidłowe adresy URL. Stripe wymaga prawidłowych publicznych adresów URL.
          // Jeśli testujesz lokalnie z obrazami z lokalnego hosta, serwer Stripe ich nie widzi.
          // Możemy je filtrować lub nie wysyłać żadnych obrazów do lokalnego środowiska programistycznego, jeśli nie są publiczne.
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
      customer_email: email, // Opcjonalnie: Wstępnie wypełnij adres e-mail klienta, jeśli jest dostępny
      // metadane: {
      // orderId: "123456", // Przykład
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
