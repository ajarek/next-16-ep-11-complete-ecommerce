import Image from "next/image"

const Logo = () => {
  return (
    <div className='flex items-center gap-2'>
      <Image src='/images/logo.png' alt='Logo' width={40} height={40} />
      <h1 className='lg:text-3xl sm:text-2xl text-xl font-semibold'>
        Shop<span className='text-primary'>Delight</span>
      </h1>
    </div>
  )
}

export default Logo
