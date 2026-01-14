import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { clerkClient } from "@clerk/nextjs/server"
import Image from "next/image"

const Avatar = ({
  src,
  alt,
  fallback,
}: {
  src?: string
  alt?: string
  fallback: string
}) => (
  <div className='h-9 w-9 rounded-full overflow-hidden border bg-muted flex items-center justify-center relative'>
    {src ? (
      <Image
        src={src}
        alt={alt || "User"}
        width={100}
        height={100}
        className='h-full w-full object-cover'
      />
    ) : (
      <span className='text-sm font-semibold text-muted-foreground'>
        {fallback}
      </span>
    )}
  </div>
)

const UsersList = async () => {
  // Bezpośrednie pobieranie użytkowników za pomocą clerkClient w celu uzyskania lepszej wydajności w komponentach serwera
  const client = await clerkClient()
  const { data: users } = await client.users.getUserList({
    limit: 100,
  })

  return (
    <div className='w-full flex flex-col items-start justify-start p-4'>
      <h1 className='text-2xl font-bold mb-6 text-foreground'>
        Users Management
      </h1>
      <div className='w-full rounded-xl border bg-card shadow-sm overflow-hidden'>
        <Table className=''>
          <TableHeader className='bg-muted/50'>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead className='text-right'>Joined</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow
                key={user.id}
                className='hover:bg-muted/30 transition-colors'
              >
                <TableCell className='font-medium'>
                  <div className='flex items-center gap-3'>
                    <Avatar
                      src={user.imageUrl}
                      alt={user.firstName || "User"}
                      fallback={
                        user.firstName?.charAt(0) ||
                        user.emailAddresses[0]?.emailAddress
                          ?.charAt(0)
                          .toUpperCase()
                      }
                    />
                    <div className='flex flex-col text-left'>
                      <span className='text-sm font-semibold'>
                        {user.firstName} {user.lastName}
                      </span>
                      <span className='text-xs text-muted-foreground'>
                        ID: {user.id.slice(0, 8)}...
                      </span>
                    </div>
                  </div>
                </TableCell>
                <TableCell className='text-sm'>
                  {user.emailAddresses[0]?.emailAddress}
                </TableCell>
                <TableCell>
                  <span
                    className={`px-2 py-1 rounded-full text-xs font-medium ${
                      user.publicMetadata?.role === "admin"
                        ? "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400"
                        : user.publicMetadata?.role === "seller"
                        ? "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400"
                        : "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                    }`}
                  >
                    {String(user.publicMetadata?.role || "user")}
                  </span>
                </TableCell>
                <TableCell className='text-right text-sm text-muted-foreground'>
                  {new Date(user.createdAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "short",
                    day: "numeric",
                  })}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  )
}

export default UsersList
