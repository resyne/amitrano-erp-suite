import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Package,
  Users,
  UserCircle,
  Briefcase,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
} from "@/components/ui/sidebar";

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Magazzino",
    url: "/magazzino",
    icon: Package,
  },
  {
    title: "Fornitori",
    url: "/fornitori",
    icon: Briefcase,
  },
  {
    title: "Clienti",
    url: "/clienti",
    icon: Users,
  },
  {
    title: "Dipendenti",
    url: "/dipendenti",
    icon: UserCircle,
  },
];

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-border">
      <SidebarHeader className="border-b border-border p-6">
        <h1 className="text-2xl font-bold gradient-primary bg-clip-text text-transparent">
          Amitrano Group
        </h1>
        <p className="text-sm text-muted-foreground">ERP System</p>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end
                      className={({ isActive }) =>
                        isActive
                          ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                          : "hover:bg-sidebar-accent/50"
                      }
                    >
                      <item.icon className="h-5 w-5" />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
