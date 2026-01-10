import Logo from "./Logo"
import Link from "next/link"
import { ModeToggle } from "@/components/ModeToggle"
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs"
import { Handbag, LogIn, UserRoundPen } from "lucide-react"
import { Button } from "./ui/button"
import { auth } from "@clerk/nextjs/server"
import MobileNavbar from "./MobileNavbar"
import LengthCart from "./LengthCart"
import ButtonCleanCart from "./ButtonCleanCart"


const Navbar = async () => {
  const { isAuthenticated } = await auth()

  return (
    <div className='h-16 flex items-center justify-between px-8 max-sm:px-4 border-b-2 border-zinc-400'>
      <Logo />

      <div className='flex items-center gap-8 max-lg:hidden'>
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

        {isAuthenticated && (
          <Link
            href='/dashboard'
            className='text-xl hover:text-primary focus:text-primary focus:underline focus:underline-offset-8'
          >
            Seller
          </Link>
        )}
      </div>
      <div className='flex items-center gap-8 '>
        <MobileNavbar isAuthenticated={!!isAuthenticated} />
        <Link href='/cart' className='relative'>
          <Handbag />
          <span className='absolute -top-2 -right-3 flex items-center justify-center rounded-full'><LengthCart /></span>
        </Link>
        <ModeToggle />
        <SignedOut>
          <SignInButton>
            <Button size='icon' className='bg-secondary cursor-pointer rounded-xl'>
              <LogIn className='w-5 h-5 ' />
            </Button>
          </SignInButton>
          <SignUpButton>
            <Button size='icon' className='cursor-pointer rounded-xl'>
              <UserRoundPen className='w-5 h-5 ' />
            </Button>
          </SignUpButton>
          <ButtonCleanCart />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  )
}

export default Navbar
