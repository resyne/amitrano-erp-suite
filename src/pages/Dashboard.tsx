import { Package, Users, UserCircle, Briefcase, TrendingUp, ShoppingCart } from "lucide-react";
import { StatCard } from "@/components/StatCard";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Dashboard"
        description="Panoramica generale dell'ERP Amitrano Group"
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Prodotti in Magazzino"
          value="1,284"
          icon={Package}
          trend="+12% dal mese scorso"
        />
        <StatCard
          title="Clienti Attivi"
          value="342"
          icon={Users}
          trend="+8% dal mese scorso"
        />
        <StatCard
          title="Fornitori"
          value="89"
          icon={Briefcase}
          description="Fornitori attivi"
        />
        <StatCard
          title="Dipendenti"
          value="47"
          icon={UserCircle}
          description="Staff totale"
        />
      </div>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-primary" />
              Vendite Recenti
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { cliente: "Tech Solutions Srl", importo: "€12,500", data: "Oggi" },
                { cliente: "Digital Corp", importo: "€8,320", data: "Ieri" },
                { cliente: "Innovation Ltd", importo: "€15,800", data: "2 giorni fa" },
              ].map((vendita, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                  <div>
                    <p className="font-medium">{vendita.cliente}</p>
                    <p className="text-sm text-muted-foreground">{vendita.data}</p>
                  </div>
                  <p className="font-bold text-primary">{vendita.importo}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="gradient-card border-border/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <ShoppingCart className="h-5 w-5 text-primary" />
              Ordini in Corso
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {[
                { ordine: "ORD-2024-001", stato: "In Lavorazione", cliente: "ABC Company" },
                { ordine: "ORD-2024-002", stato: "Spedito", cliente: "XYZ Industries" },
                { ordine: "ORD-2024-003", stato: "In Lavorazione", cliente: "Global Tech" },
              ].map((ordine, i) => (
                <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-background/50 hover:bg-background/80 transition-colors">
                  <div>
                    <p className="font-medium">{ordine.ordine}</p>
                    <p className="text-sm text-muted-foreground">{ordine.cliente}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    ordine.stato === "Spedito" 
                      ? "bg-primary/20 text-primary" 
                      : "bg-secondary text-secondary-foreground"
                  }`}>
                    {ordine.stato}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
