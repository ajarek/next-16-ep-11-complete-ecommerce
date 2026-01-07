import Logo from "./Logo"
import Link from "next/link"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react"

const Footer = () => {
  return (
    <footer className='border-t-2 border-zinc-400 mt-20 pt-8 pb-8 bg-zinc-50/50 dark:bg-zinc-900/50'>
      <div className='max-w-7xl mx-auto px-8 max-sm:px-4'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16'>
          {/* Brand Section */}
          <div className='flex flex-col gap-6'>
            <Logo />
            <p className='text-muted-foreground text-sm leading-relaxed'>
              Discover a world of premium products curated just for you.
              ShopDelight brings you the best in quality and style.
            </p>
            <div className='flex gap-4'>
              <SocialLink href='#' icon={<Facebook size={18} />} />
              <SocialLink href='#' icon={<Twitter size={18} />} />
              <SocialLink href='#' icon={<Instagram size={18} />} />
              <SocialLink href='#' icon={<Linkedin size={18} />} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className='font-semibold text-lg mb-6 text-primary'>Shop</h3>
            <div className='flex flex-col gap-4'>
              <FooterLink href='/'>Home</FooterLink>
              <FooterLink href='/collections'>Collections</FooterLink>
              <FooterLink href='/new-arrivals'>New Arrivals</FooterLink>
              <FooterLink href='/bestsellers'>Bestsellers</FooterLink>
            </div>
          </div>

          {/* Support */}
          <div>
            <h3 className='font-semibold text-lg mb-6 text-primary'>Support</h3>
            <div className='flex flex-col gap-4'>
              <FooterLink href='/contact'>Contact Us</FooterLink>
              <FooterLink href='/faq'>FAQ</FooterLink>
              <FooterLink href='/shipping'>Shipping & Returns</FooterLink>
              <FooterLink href='/terms'>Terms of Service</FooterLink>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className='font-semibold text-lg mb-6 text-primary'>Contact</h3>
            <div className='flex flex-col gap-4 text-muted-foreground text-sm'>
              <div className='flex items-center gap-3'>
                <MapPin size={18} className='text-primary shrink-0' />
                <span>123 Commerce St, Market City, ST 12345</span>
              </div>
              <div className='flex items-center gap-3'>
                <Phone size={18} className='text-primary shrink-0' />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className='flex items-center gap-3'>
                <Mail size={18} className='text-primary shrink-0' />
                <span>support@shopdelight.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-zinc-200 dark:border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground'>
          <p>
            &copy; {new Date().getFullYear()} ShopDelight. All rights reserved.
          </p>
          <div className='flex gap-6'>
            <Link
              href='/privacy'
              className='hover:text-primary transition-colors'
            >
              Privacy Policy
            </Link>
            <Link
              href='/terms'
              className='hover:text-primary transition-colors'
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Helper components for cleaner code
const FooterLink = ({
  href,
  children,
}: {
  href: string
  children: React.ReactNode
}) => (
  <Link
    href={href}
    className='text-muted-foreground hover:text-primary hover:translate-x-1 transition-all duration-300 text-sm w-fit'
  >
    {children}
  </Link>
)

const SocialLink = ({
  href,
  icon,
}: {
  href: string
  icon: React.ReactNode
}) => (
  <Link
    href={href}
    className='bg-primary/10 p-2.5 rounded-full text-primary hover:bg-primary hover:text-white hover:scale-110 transition-all duration-300'
  >
    {icon}
  </Link>
)

export default Footer
