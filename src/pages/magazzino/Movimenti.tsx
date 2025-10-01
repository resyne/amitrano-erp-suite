import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowDownToLine, ArrowUpFromLine, RefreshCw } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const movimenti = [
  { id: "M001", tipo: "Carico", prodotto: "Laptop Dell XPS 15", quantita: 20, data: "15/01/2025", operatore: "Chiara L." },
  { id: "M002", tipo: "Scarico", prodotto: "Mouse Logitech", quantita: -15, data: "15/01/2025", operatore: "Paolo G." },
  { id: "M003", tipo: "Rettifica", prodotto: "Monitor Samsung", quantita: 5, data: "14/01/2025", operatore: "Andrea S." },
  { id: "M004", tipo: "Carico", prodotto: "Tastiera Meccanica", quantita: 30, data: "14/01/2025", operatore: "Chiara L." },
  { id: "M005", tipo: "Scarico", prodotto: "Webcam HD Pro", quantita: -8, data: "13/01/2025", operatore: "Paolo G." },
];

export default function Movimenti() {
  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Movimenti Magazzino"
        description="Registro di tutti i movimenti di magazzino"
        onAddClick={() => {}}
        addButtonText="Nuovo Movimento"
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="gradient-card border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/20">
                <ArrowDownToLine className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Carichi Oggi</p>
                <p className="text-2xl font-bold">2</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="gradient-card border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-destructive/20">
                <ArrowUpFromLine className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Scarichi Oggi</p>
                <p className="text-2xl font-bold">1</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="gradient-card border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-secondary">
                <RefreshCw className="h-6 w-6 text-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Rettifiche</p>
                <p className="text-2xl font-bold">1</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="gradient-card border-border/50">
        <CardContent className="pt-6">
          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead>ID</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Prodotto</TableHead>
                  <TableHead className="text-right">Quantità</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Operatore</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {movimenti.map((movimento) => (
                  <TableRow 
                    key={movimento.id}
                    className="hover:bg-secondary/30 transition-colors cursor-pointer"
                  >
                    <TableCell className="font-medium">{movimento.id}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        movimento.tipo === "Carico" 
                          ? "bg-primary/20 text-primary" 
                          : movimento.tipo === "Scarico"
                          ? "bg-destructive/20 text-destructive"
                          : "bg-secondary text-foreground"
                      }`}>
                        {movimento.tipo}
                      </span>
                    </TableCell>
                    <TableCell>{movimento.prodotto}</TableCell>
                    <TableCell className={`text-right font-medium ${
                      movimento.quantita > 0 ? "text-primary" : "text-destructive"
                    }`}>
                      {movimento.quantita > 0 ? "+" : ""}{movimento.quantita}
                    </TableCell>
                    <TableCell>{movimento.data}</TableCell>
                    <TableCell>{movimento.operatore}</TableCell>
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
