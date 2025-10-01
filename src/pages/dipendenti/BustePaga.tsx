import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const bustepaga = [
  { dipendente: "Andrea Santoro", mese: "Gennaio 2025", lordo: "€4,500", netto: "€3,150", stato: "Pagato" },
  { dipendente: "Chiara Lombardi", mese: "Gennaio 2025", lordo: "€3,200", netto: "€2,380", stato: "Pagato" },
  { dipendente: "Davide Costa", mese: "Gennaio 2025", lordo: "€3,800", netto: "€2,750", stato: "In Elaborazione" },
  { dipendente: "Silvia Marchetti", mese: "Gennaio 2025", lordo: "€3,500", netto: "€2,590", stato: "Pagato" },
  { dipendente: "Paolo Gentile", mese: "Gennaio 2025", lordo: "€4,200", netto: "€2,980", stato: "In Elaborazione" },
];

export default function BustePaga() {
  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Buste Paga"
        description="Gestione cedolini e pagamenti"
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="gradient-card border-border/50">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Totale Lordo</p>
            <p className="text-2xl font-bold">€19,200</p>
          </CardContent>
        </Card>
        <Card className="gradient-card border-border/50">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Totale Netto</p>
            <p className="text-2xl font-bold text-primary">€13,850</p>
          </CardContent>
        </Card>
        <Card className="gradient-card border-border/50">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">In Elaborazione</p>
            <p className="text-2xl font-bold">
              {bustepaga.filter(b => b.stato === "In Elaborazione").length}
            </p>
          </CardContent>
        </Card>
      </div>

      <Card className="gradient-card border-border/50">
        <CardContent className="pt-6">
          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead>Dipendente</TableHead>
                  <TableHead>Periodo</TableHead>
                  <TableHead className="text-right">Lordo</TableHead>
                  <TableHead className="text-right">Netto</TableHead>
                  <TableHead>Stato</TableHead>
                  <TableHead></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {bustepaga.map((busta, i) => (
                  <TableRow 
                    key={i}
                    className="hover:bg-secondary/30 transition-colors"
                  >
                    <TableCell className="font-medium">{busta.dipendente}</TableCell>
                    <TableCell>{busta.mese}</TableCell>
                    <TableCell className="text-right">{busta.lordo}</TableCell>
                    <TableCell className="text-right font-bold">{busta.netto}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        busta.stato === "Pagato" 
                          ? "bg-primary/20 text-primary" 
                          : "bg-secondary text-foreground"
                      }`}>
                        {busta.stato}
                      </span>
                    </TableCell>
                    <TableCell>
                      <Button size="sm" variant="ghost">
                        <Download className="h-4 w-4" />
                      </Button>
                    </TableCell>
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
