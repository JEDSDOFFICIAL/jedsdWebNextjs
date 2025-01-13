import {  ChevronDown} from "lucide-react"

import {
  Sidebar,
  SidebarContent,

  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"




export function AppSidebar() {
  return (
    <Sidebar >
    <SidebarHeader>
<SidebarMenu>
 <SidebarMenuItem>
   <DropdownMenu>
     <DropdownMenuTrigger asChild>
       <SidebarMenuButton>
         Select Workspace
         <ChevronDown className="ml-auto" />
       </SidebarMenuButton>
     </DropdownMenuTrigger>
     <DropdownMenuContent className="w-[--radix-popper-anchor-width]">
       <DropdownMenuItem>
         <span>Acme Inc</span>
       </DropdownMenuItem>
       <DropdownMenuItem>
         <span>Acme Corp.</span>
       </DropdownMenuItem>
     </DropdownMenuContent>
   </DropdownMenu>
 </SidebarMenuItem>
</SidebarMenu>
</SidebarHeader>
<SidebarContent />
</Sidebar>
  )
}
