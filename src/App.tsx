import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/AppSidebar";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";

// Magazzino
import Inventario from "./pages/magazzino/Inventario";
import Movimenti from "./pages/magazzino/Movimenti";
import OrdiniAcquisto from "./pages/magazzino/OrdiniAcquisto";
import Categorie from "./pages/magazzino/Categorie";

// Fornitori
import ElencoFornitori from "./pages/fornitori/ElencoFornitori";
import OrdiniFornitori from "./pages/fornitori/OrdiniFornitori";
import Valutazioni from "./pages/fornitori/Valutazioni";

// Clienti
import ElencoClienti from "./pages/clienti/ElencoClienti";
import Opportunita from "./pages/clienti/Opportunita";
import OrdiniClienti from "./pages/clienti/OrdiniClienti";
import Contratti from "./pages/clienti/Contratti";

// Dipendenti
import ElencoDipendenti from "./pages/dipendenti/ElencoDipendenti";
import Presenze from "./pages/dipendenti/Presenze";
import BustePaga from "./pages/dipendenti/BustePaga";
import Formazione from "./pages/dipendenti/Formazione";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <SidebarProvider>
          <div className="flex min-h-screen w-full">
            <AppSidebar />
            <div className="flex-1 flex flex-col">
              <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-6">
                <SidebarTrigger />
              </header>
              <main className="flex-1 p-6">
                <Routes>
                  <Route path="/" element={<Index />} />
                  
                  {/* Magazzino Routes */}
                  <Route path="/magazzino/inventario" element={<Inventario />} />
                  <Route path="/magazzino/movimenti" element={<Movimenti />} />
                  <Route path="/magazzino/ordini" element={<OrdiniAcquisto />} />
                  <Route path="/magazzino/categorie" element={<Categorie />} />
                  
                  {/* Fornitori Routes */}
                  <Route path="/fornitori/elenco" element={<ElencoFornitori />} />
                  <Route path="/fornitori/ordini" element={<OrdiniFornitori />} />
                  <Route path="/fornitori/valutazioni" element={<Valutazioni />} />
                  
                  {/* Clienti Routes */}
                  <Route path="/clienti/elenco" element={<ElencoClienti />} />
                  <Route path="/clienti/opportunita" element={<Opportunita />} />
                  <Route path="/clienti/ordini" element={<OrdiniClienti />} />
                  <Route path="/clienti/contratti" element={<Contratti />} />
                  
                  {/* Dipendenti Routes */}
                  <Route path="/dipendenti/elenco" element={<ElencoDipendenti />} />
                  <Route path="/dipendenti/presenze" element={<Presenze />} />
                  <Route path="/dipendenti/buste-paga" element={<BustePaga />} />
                  <Route path="/dipendenti/formazione" element={<Formazione />} />
                  
                  {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </main>
            </div>
          </div>
        </SidebarProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
