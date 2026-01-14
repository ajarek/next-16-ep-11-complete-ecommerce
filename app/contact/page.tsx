"use client"

import React from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageSquare,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react"
import { toast } from "sonner"

const ContactPage = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    toast.success("Message sent successfully!")
    e.currentTarget.reset()
  }

  return (
    <div className='min-h-screen relative overflow-hidden bg-background'>
      {/* Decorative background elements */}
      <div className='absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none'>
        <div className='absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]' />
        <div className='absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px]' />
      </div>

      <div className='max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8 relative z-10'>
        {/* Header section */}
        <div className='text-center mb-16 animate-in fade-in slide-in-from-top duration-1000'>
          <h1 className='text-4xl md:text-6xl font-black tracking-tight mb-4 bg-linear-to-r from-primary to-orange-500 bg-clip-text text-transparent underline decoration-primary underline-offset-8'>
            Get in Touch
          </h1>
          <p className='text-muted-foreground text-lg max-w-2xl mx-auto mt-8 font-medium'>
            Have questions about our products or need assistance? Our team is
            here to help you every step of the way.
          </p>
        </div>

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-start'>
          {/* Contact Information */}
          <div className='space-y-8 animate-in fade-in slide-in-from-left duration-1000'>
            <div>
              <h2 className='text-2xl font-bold mb-6 flex items-center gap-2'>
                <MessageSquare className='text-primary' />
                Contact Information
              </h2>
              <p className='text-muted-foreground mb-8 text-lg'>
                Fill out the form and our team will get back to you within 24
                hours.
              </p>
            </div>

            <div className='grid gap-6'>
              <ContactCard
                icon={<Mail className='text-primary' />}
                title='Email Us'
                detail='support@shopdelight.com'
                subtext='Online support 24/7'
              />
              <ContactCard
                icon={<Phone className='text-primary' />}
                title='Call Us'
                detail='+1 (555) 123-4567'
                subtext='Mon-Fri, 9:00 AM - 6:00 PM'
              />
              <ContactCard
                icon={<MapPin className='text-primary' />}
                title='Visit Us'
                detail='123 Commerce St, Market City, ST 12345'
                subtext='Main Headquarters'
              />
              <ContactCard
                icon={<Clock className='text-primary' />}
                title='Working Hours'
                detail='Monday - Friday: 9:00 AM - 6:00 PM'
                subtext='Saturday: 10:00 AM - 2:00 PM'
              />
            </div>

            {/* Social Media */}
            <div className='pt-8'>
              <h3 className='text-lg font-bold mb-6 text-primary'>Follow Us</h3>
              <div className='flex gap-4'>
                {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                  <Button
                    key={i}
                    variant='outline'
                    size='icon'
                    className='rounded-xl border-2 border-zinc-200 dark:border-zinc-800 hover:bg-primary hover:text-white hover:scale-110 hover:-translate-y-1 transition-all duration-300 shadow-sm'
                  >
                    <Icon size={20} />
                  </Button>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className='border-2 border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden bg-card/60 backdrop-blur-md animate-in fade-in slide-in-from-right duration-1000 rounded-3xl'>
            <CardContent className='p-8 md:p-12'>
              <form onSubmit={handleSubmit} className='space-y-6'>
                <div className='grid grid-cols-1 sm:grid-cols-2 gap-6'>
                  <div className='space-y-3'>
                    <Label
                      htmlFor='first-name'
                      className='text-sm font-bold uppercase tracking-wider text-muted-foreground'
                    >
                      First Name
                    </Label>
                    <Input
                      id='first-name'
                      placeholder='John'
                      className='bg-background/50 h-12 border-2 focus-visible:ring-primary/30 rounded-xl transition-all'
                      required
                    />
                  </div>
                  <div className='space-y-3'>
                    <Label
                      htmlFor='last-name'
                      className='text-sm font-bold uppercase tracking-wider text-muted-foreground'
                    >
                      Last Name
                    </Label>
                    <Input
                      id='last-name'
                      placeholder='Doe'
                      className='bg-background/50 h-12 border-2 focus-visible:ring-primary/30 rounded-xl transition-all'
                      required
                    />
                  </div>
                </div>

                <div className='space-y-3'>
                  <Label
                    htmlFor='email'
                    className='text-sm font-bold uppercase tracking-wider text-muted-foreground'
                  >
                    Email Address
                  </Label>
                  <Input
                    id='email'
                    type='email'
                    placeholder='john@example.com'
                    className='bg-background/50 h-12 border-2 focus-visible:ring-primary/30 rounded-xl transition-all'
                    required
                  />
                </div>

                <div className='space-y-3'>
                  <Label
                    htmlFor='subject'
                    className='text-sm font-bold uppercase tracking-wider text-muted-foreground'
                  >
                    Subject
                  </Label>
                  <select
                    id='subject'
                    className='w-full h-12 px-4 rounded-xl border-2 border-input bg-background/50 text-sm focus:ring-2 focus:ring-primary/30 outline-none transition-all cursor-pointer appearance-none'
                    required
                  >
                    <option>General Inquiry</option>
                    <option>Order Support</option>
                    <option>Partnership</option>
                    <option>Feedback & Suggestions</option>
                  </select>
                </div>

                <div className='space-y-3'>
                  <Label
                    htmlFor='message'
                    className='text-sm font-bold uppercase tracking-wider text-muted-foreground'
                  >
                    Your Message
                  </Label>
                  <Textarea
                    id='message'
                    placeholder='How can we help you today?'
                    className='min-h-[160px] bg-background/50 border-2 focus-visible:ring-primary/30 rounded-xl transition-all resize-none p-4'
                    required
                  />
                </div>

                <Button
                  type='submit'
                  className='w-full h-14 text-lg font-black group relative overflow-hidden transition-all duration-500 rounded-xl shadow-lg shadow-primary/20 hover:shadow-primary/40'
                >
                  <span className='relative z-10 flex items-center justify-center gap-2 text-white transition-transform group-hover:scale-105'>
                    Send Message{" "}
                    <Send className='w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform' />
                  </span>
                  <div className='absolute inset-0 bg-linear-to-r from-primary via-orange-500 to-primary bg-size-[200%_auto] animate-gradient group-hover:opacity-100 transition-opacity duration-300' />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

const ContactCard = ({
  icon,
  title,
  detail,
  subtext,
}: {
  icon: React.ReactNode
  title: string
  detail: string
  subtext: string
}) => (
  <div className='flex gap-4 p-5 rounded-2xl border-2 border-zinc-200 dark:border-zinc-800 bg-card/40 backdrop-blur-sm hover:border-primary/50 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group'>
    <div className='p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 flex items-center justify-center'>
      {icon}
    </div>
    <div className='flex flex-col justify-center'>
      <h3 className='font-bold text-lg mb-0.5'>{title}</h3>
      <p className='text-foreground font-semibold'>{detail}</p>
      <p className='text-muted-foreground text-sm font-medium'>{subtext}</p>
    </div>
  </div>
)

export default ContactPage
