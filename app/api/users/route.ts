// app/api/users/route.ts or pages/api/users.ts

import { auth, clerkClient } from "@clerk/nextjs/server"
import { NextResponse } from "next/server"

export async function GET(request: Request) {
  try {
    const { userId } = await auth()
    if (!userId) {
      return new NextResponse("Unauthorized", { status: 401 })
    }
    // Pobierz instancję klienta
    const client = await clerkClient()

    // Pobierz pierwszą stronę użytkowników
    const users = await client.users.getUserList({
      limit: 100, // Max 100 per request
    })

    // Jeśli potrzebujesz wszystkich użytkowników (przechodzenie przez wszystkie)
    let allUsers = [...users.data]
    let hasMore = users.totalCount > allUsers.length
    let page = 1

    while (hasMore) {
      const nextPage = await client.users.getUserList({
        limit: 100,
        offset: page * 100,
      })
      allUsers = [...allUsers, ...nextPage.data]
      hasMore = users.totalCount > allUsers.length
      page++
    }

    return NextResponse.json({ users: allUsers })
  } catch (error) {
    console.error("Error fetching users:", error)
    return NextResponse.json(
      { error: "Failed to fetch users" },
      { status: 500 }
    )
  }
}
