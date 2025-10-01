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
  { id: "OA-2025-001", fornitore: "Tech Supplies Italia", data: "10/01/2025", stato: "In Attesa", importo: "€15,430" },
  { id: "OA-2025-002", fornitore: "Office Pro", data: "12/01/2025", stato: "Confermato", importo: "€8,920" },
  { id: "OA-2025-003", fornitore: "Global Components", data: "14/01/2025", stato: "Spedito", importo: "€22,150" },
  { id: "OA-2025-004", fornitore: "Digital Warehouse", data: "15/01/2025", stato: "In Attesa", importo: "€12,340" },
];

export default function OrdiniAcquisto() {
  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Ordini di Acquisto"
        description="Gestione ordini verso fornitori"
        onAddClick={() => {}}
        addButtonText="Nuovo Ordine"
      />

      <div className="grid gap-4 md:grid-cols-4">
        {["In Attesa", "Confermato", "Spedito", "Completato"].map((stato) => (
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
                  <TableHead>Fornitore</TableHead>
                  <TableHead>Data Ordine</TableHead>
                  <TableHead>Stato</TableHead>
                  <TableHead className="text-right">Importo</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {ordini.map((ordine) => (
                  <TableRow 
                    key={ordine.id}
                    className="hover:bg-secondary/30 transition-colors cursor-pointer"
                  >
                    <TableCell className="font-medium">{ordine.id}</TableCell>
                    <TableCell>{ordine.fornitore}</TableCell>
                    <TableCell>{ordine.data}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        ordine.stato === "Spedito" 
                          ? "bg-primary/20 text-primary" 
                          : ordine.stato === "Confermato"
                          ? "bg-secondary text-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {ordine.stato}
                      </span>
                    </TableCell>
                    <TableCell className="text-right font-bold text-primary">{ordine.importo}</TableCell>
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
