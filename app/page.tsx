import Image from "next/image"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/HeroSection"

export default function Home() {
  return (
    <div className=' min-h-screen flex flex-col items-start justify-start px-8 max-sm:px-4 gap-8 '>
     
     <HeroSection/>
      <section className="w-full h-[600px] text-center">
        <h2>Featured Products</h2>
      </section>
    </div>
  )
}
