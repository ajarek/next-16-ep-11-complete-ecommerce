import { auth, clerkClient } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export async function POST() {
  const { userId } = await auth()
  const client = await clerkClient()

  if (!userId) {
    return new NextResponse("Unauthorized", { status: 401 })
  }

  await client.users.updateUserMetadata(userId, {
    publicMetadata: {
      birthday: "1990-01-01",
    },
  })

  return NextResponse.json({ success: true })
}
