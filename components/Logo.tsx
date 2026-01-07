import Image from "next/image"
import Link from "next/link"

const Logo = () => {
  return (
    <Link href='/' className='flex items-center gap-2'>
      <Image src='/images/logo.png' alt='Logo' width={40} height={40} className="max-sm:hidden" />
      <h1 className='lg:text-3xl sm:text-2xl text-xl font-semibold'>
        Shop<span className='text-primary'>Delight</span>
      </h1>
    </Link>
  )
}

export default Logo
