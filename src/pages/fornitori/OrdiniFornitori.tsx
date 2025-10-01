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
  { id: "OF-001", fornitore: "Tech Supplies Italia", data: "10/01/2025", consegna: "20/01/2025", stato: "Confermato", totale: "€15,430" },
  { id: "OF-002", fornitore: "Office Pro", data: "12/01/2025", consegna: "18/01/2025", stato: "In Transito", totale: "€8,920" },
  { id: "OF-003", fornitore: "Global Components", data: "14/01/2025", consegna: "22/01/2025", stato: "Preparazione", totale: "€22,150" },
  { id: "OF-004", fornitore: "Digital Warehouse", data: "15/01/2025", consegna: "25/01/2025", stato: "Confermato", totale: "€12,340" },
];

export default function OrdiniFornitori() {
  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Ordini ai Fornitori"
        description="Tracking ordini e consegne"
        onAddClick={() => {}}
        addButtonText="Nuovo Ordine"
      />

      <Card className="gradient-card border-border/50">
        <CardContent className="pt-6">
          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead>ID Ordine</TableHead>
                  <TableHead>Fornitore</TableHead>
                  <TableHead>Data Ordine</TableHead>
                  <TableHead>Consegna Prevista</TableHead>
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
                    <TableCell>{ordine.fornitore}</TableCell>
                    <TableCell>{ordine.data}</TableCell>
                    <TableCell>{ordine.consegna}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        ordine.stato === "In Transito" 
                          ? "bg-primary/20 text-primary" 
                          : "bg-secondary text-foreground"
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
