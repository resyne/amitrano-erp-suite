import { NavLink, useLocation } from "react-router-dom";
import { useState } from "react";
import {
  LayoutDashboard,
  Package,
  Users,
  UserCircle,
  Briefcase,
  ChevronDown,
  BarChart3,
  ShoppingCart,
  TruckIcon,
  ClipboardList,
  FileText,
  Star,
  Handshake,
  Target,
  CalendarClock,
  Wallet,
  GraduationCap,
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
  SidebarMenuSub,
  SidebarMenuSubItem,
  SidebarMenuSubButton,
  SidebarHeader,
} from "@/components/ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const menuItems = [
  {
    title: "Dashboard",
    url: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Magazzino",
    icon: Package,
    subItems: [
      { title: "Inventario", url: "/magazzino/inventario", icon: BarChart3 },
      { title: "Movimenti", url: "/magazzino/movimenti", icon: TruckIcon },
      { title: "Ordini Acquisto", url: "/magazzino/ordini", icon: ShoppingCart },
      { title: "Categorie", url: "/magazzino/categorie", icon: ClipboardList },
    ],
  },
  {
    title: "Fornitori",
    icon: Briefcase,
    subItems: [
      { title: "Elenco Fornitori", url: "/fornitori/elenco", icon: Briefcase },
      { title: "Ordini Fornitori", url: "/fornitori/ordini", icon: FileText },
      { title: "Valutazioni", url: "/fornitori/valutazioni", icon: Star },
    ],
  },
  {
    title: "Clienti",
    icon: Users,
    subItems: [
      { title: "Elenco Clienti", url: "/clienti/elenco", icon: Users },
      { title: "Opportunità", url: "/clienti/opportunita", icon: Target },
      { title: "Ordini Clienti", url: "/clienti/ordini", icon: Handshake },
      { title: "Contratti", url: "/clienti/contratti", icon: FileText },
    ],
  },
  {
    title: "Dipendenti",
    icon: UserCircle,
    subItems: [
      { title: "Elenco Dipendenti", url: "/dipendenti/elenco", icon: UserCircle },
      { title: "Presenze", url: "/dipendenti/presenze", icon: CalendarClock },
      { title: "Buste Paga", url: "/dipendenti/buste-paga", icon: Wallet },
      { title: "Formazione", url: "/dipendenti/formazione", icon: GraduationCap },
    ],
  },
];

export function AppSidebar() {
  const location = useLocation();
  const [openSections, setOpenSections] = useState<string[]>(["Magazzino", "Fornitori", "Clienti", "Dipendenti"]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) =>
      prev.includes(title) ? prev.filter((t) => t !== title) : [...prev, title]
    );
  };

  return (
    <Sidebar className="border-r border-border">
      <SidebarHeader className="border-b border-border p-6">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold text-primary">
            Amitrano Group
          </h1>
          <p className="text-sm text-muted-foreground">ERP System</p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => {
                if (item.subItems) {
                  const isOpen = openSections.includes(item.title);
                  const hasActiveChild = item.subItems.some((sub) => location.pathname === sub.url);

                  return (
                    <Collapsible
                      key={item.title}
                      open={isOpen}
                      onOpenChange={() => toggleSection(item.title)}
                    >
                      <SidebarMenuItem>
                        <CollapsibleTrigger asChild>
                          <SidebarMenuButton className="w-full">
                            <item.icon className="h-5 w-5" />
                            <span>{item.title}</span>
                            <ChevronDown
                              className={`ml-auto h-4 w-4 transition-transform ${
                                isOpen ? "rotate-180" : ""
                              }`}
                            />
                          </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                          <SidebarMenuSub>
                            {item.subItems.map((subItem) => (
                              <SidebarMenuSubItem key={subItem.url}>
                                <SidebarMenuSubButton asChild>
                                  <NavLink
                                    to={subItem.url}
                                    className={({ isActive }) =>
                                      isActive
                                        ? "bg-sidebar-accent text-sidebar-accent-foreground font-medium"
                                        : "hover:bg-sidebar-accent/50"
                                    }
                                  >
                                    <subItem.icon className="h-4 w-4" />
                                    <span>{subItem.title}</span>
                                  </NavLink>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            ))}
                          </SidebarMenuSub>
                        </CollapsibleContent>
                      </SidebarMenuItem>
                    </Collapsible>
                  );
                }

                return (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <NavLink
                        to={item.url!}
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
                );
              })}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
