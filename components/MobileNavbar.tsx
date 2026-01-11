"use client"

import { Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import { Button } from "./ui/button"
import { User } from "@/types/typeUsers"

interface MobileNavbarProps {
  isAuthenticated: boolean
  user: User | null
}

const MobileNavbar = ({ isAuthenticated, user }: MobileNavbarProps) => {
  const [open, setOpen] = useState(false)

  const toggle = () => setOpen(!open)

  return (
    <div className='lg:hidden'>
      <Button
        variant='ghost'
        size='icon'
        onClick={toggle}
        className='relative z-50'
      >
        {open ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
      </Button>

      {open && (
        <div className='fixed inset-0 z-40 bg-background/95 backdrop-blur-sm flex flex-col items-center justify-center gap-8 animate-in fade-in zoom-in-95 duration-200'>
          <nav className='flex flex-col items-center gap-8 text-center'>
              <Link
          href='/'
          className='text-xl hover:text-primary focus:text-primary focus:underline focus:underline-offset-8'
        >
          Home
        </Link>
        <Link
          href='/collections'
          className='text-xl hover:text-primary focus:text-primary focus:underline focus:underline-offset-8'
        >
          Collections
        </Link>
        <Link
          href='/contact'
          className='text-xl hover:text-primary focus:text-primary focus:underline focus:underline-offset-8'
        >
          Contact
        </Link>

         {isAuthenticated && user?.publicMetadata.role === "seller" && (
          <Link
            href='/seller'
            className='text-xl hover:text-primary focus:text-primary focus:underline focus:underline-offset-8'
          >
            Seller
          </Link>
        )}
      </nav>
        </div>
      )}
    </div>
  )
}

export default MobileNavbar
