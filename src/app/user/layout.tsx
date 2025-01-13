import { cookies } from "next/headers"

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/User/app-sider"


function Layout({ children }: { children: React.ReactNode }) {
  

  return (
    <SidebarProvider >
      <AppSidebar />
      <main className="flex flex-col w-full h-screen overflow-hidden">
        <SidebarTrigger />
        {children}
      </main>
    </SidebarProvider>
  )
}

export default Layout