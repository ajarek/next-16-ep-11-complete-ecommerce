import Image from "next/image"
import { ButtonGroup } from "@/components/ui/button-group"
import { Button } from "./ui/button"
import Link from "next/link"

const HeroSection = () => {
  return (
    <div className='w-full min-h-[600px] grid grid-cols-1 md:grid-cols-2 items-center justify-center mt-4 '>
      <div className='w-full h-full flex flex-col items-start justify-center gap-6'>
        <h2 className='text-2xl font-semibold uppercase'>Trendy Treasures</h2>
        <h1 className='text-5xl font-bold'>
          Elevate Your Look{" "}
          <span className='text-primary'>With Every Click.</span> Shop Today!
        </h1>
        <p className='max-w-xl text-muted-foreground'>
          Discover the latest trends and styles with our trendy collection. Shop
          now and elevate your look with every click.
        </p>
        <ButtonGroup>
          <ButtonGroup>
            <Button className='h-12 px-4 text-black bg-white hover:bg-white hover:text-black rounded-l-xl'>
              30% Off <br /> On All Items
            </Button>
            <Button
              asChild
              className='h-12 px-4 cursor-pointer text-2xl rounded-r-xl'
            >
              <Link href='/collections'>Shop Now</Link>
            </Button>
          </ButtonGroup>
        </ButtonGroup>
      </div>
      <div className='relative w-full h-[600px]'>
        <Image
          src='/images/bg.png'
          alt='Hero Image'
          fill
          className='object-contain'
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
      </div>
    </div>
  )
}

export default HeroSection
