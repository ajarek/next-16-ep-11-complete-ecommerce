import { auth, clerkClient } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export async function POST(req: Request) {
  const { userId } = await auth()
  const client = await clerkClient()
  const data = await req.json()

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 })
  }

  await client.users.updateUserMetadata(userId, {
    publicMetadata: data,
  })

  return NextResponse.json({ success: "Address updated" })
}
