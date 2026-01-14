import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { ListOrdered, SquareChartGantt, ClipboardList } from "lucide-react"
import Link from "next/link"

const items = [
  {
    title: "Products List",
    url: "/seller",
    icon: ClipboardList,
  },
  {
    title: "Order List",
    url: "/seller/order",
    icon: ListOrdered,
  },
  {
    title: "Users List",
    url: "/seller/users",
    icon: SquareChartGantt,
  },
]

const SellerLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarContent className='py-8 '>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <Link href={item.url}>
                        <item.icon className='w-6 h-6' />
                        <span className='text-xl'>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
      <SidebarTrigger />
      {children}
    </SidebarProvider>
  )
}

export default SellerLayout
