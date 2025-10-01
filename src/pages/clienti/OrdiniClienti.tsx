import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const ordini = [
  { id: "ORD-2025-001", cliente: "Tech Solutions Srl", data: "15/01/2025", stato: "In Lavorazione", totale: "€12,500" },
  { id: "ORD-2025-002", cliente: "Digital Corp", data: "14/01/2025", stato: "Spedito", totale: "€8,320" },
  { id: "ORD-2025-003", cliente: "Innovation Ltd", data: "13/01/2025", stato: "Completato", totale: "€15,800" },
  { id: "ORD-2025-004", cliente: "Future Systems", data: "15/01/2025", stato: "In Lavorazione", totale: "€6,450" },
];

export default function OrdiniClienti() {
  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Ordini Clienti"
        description="Gestione ordini e spedizioni"
        onAddClick={() => {}}
        addButtonText="Nuovo Ordine"
      />

      <div className="grid gap-4 md:grid-cols-4">
        {["In Lavorazione", "Spedito", "Completato", "Annullato"].map((stato) => (
          <Card key={stato} className="gradient-card border-border/50">
            <CardContent className="pt-6">
              <p className="text-sm text-muted-foreground">{stato}</p>
              <p className="text-2xl font-bold">
                {ordini.filter(o => o.stato === stato).length}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Card className="gradient-card border-border/50">
        <CardContent className="pt-6">
          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead>Numero Ordine</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Stato</TableHead>
                  <TableHead className="text-right">Totale</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ordini.map((ordine) => (
                  <TableRow 
                    key={ordine.id}
                    className="hover:bg-secondary/30 transition-colors cursor-pointer"
                  >
                    <TableCell className="font-medium">{ordine.id}</TableCell>
                    <TableCell>{ordine.cliente}</TableCell>
                    <TableCell>{ordine.data}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        ordine.stato === "Completato" 
                          ? "bg-primary/20 text-primary" 
                          : ordine.stato === "Spedito"
                          ? "bg-secondary text-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {ordine.stato}
                      </span>
                    </TableCell>
                    <TableCell className="text-right font-bold text-primary">{ordine.totale}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
