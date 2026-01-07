import HeroSection from "@/components/HeroSection"
import NewArrivals from "@/components/NewArrivals"

export default function Home() {
  return (
    <div className=' min-h-screen flex flex-col items-start justify-start px-8 max-sm:px-4 pb-8 gap-8 '>
      <HeroSection />
      <NewArrivals />
    </div>
  )
}
