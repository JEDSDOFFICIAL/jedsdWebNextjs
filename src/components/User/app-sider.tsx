import { Calendar, ChevronDown, ChevronUp, Home, Inbox, Search, Settings, User2 } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "../ui/dropdown-menu"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible"

// Menu items.
const items = [
  {
    title: "Home",
    url: "#",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

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
