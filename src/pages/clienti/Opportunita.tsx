import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Target } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const opportunita = [
  { id: "OPP-001", cliente: "Tech Solutions Srl", titolo: "Fornitura Hardware", valore: "€45,000", probabilita: "80%", fase: "Proposta", data: "10/01/2025" },
  { id: "OPP-002", cliente: "Digital Corp", titolo: "Contratto Annuale", valore: "€120,000", probabilita: "60%", fase: "Negoziazione", data: "08/01/2025" },
  { id: "OPP-003", cliente: "Innovation Ltd", titolo: "Progetto Cloud", valore: "€85,000", probabilita: "90%", fase: "Chiusura", data: "15/01/2025" },
  { id: "OPP-004", cliente: "Future Systems", titolo: "Software Licensing", valore: "€35,000", probabilita: "40%", fase: "Qualifica", data: "12/01/2025" },
];

export default function Opportunita() {
  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Opportunità di Vendita"
        description="Pipeline commerciale e opportunità"
        onAddClick={() => {}}
        addButtonText="Nuova Opportunità"
      />

      <div className="grid gap-4 md:grid-cols-4">
        {["Qualifica", "Proposta", "Negoziazione", "Chiusura"].map((fase) => {
          const opps = opportunita.filter(o => o.fase === fase);
          const totale = opps.reduce((sum, o) => sum + parseFloat(o.valore.replace(/[€,]/g, "")), 0);
          return (
            <Card key={fase} className="gradient-card border-border/50">
              <CardContent className="pt-6">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-4 w-4 text-primary" />
                  <p className="text-sm font-medium">{fase}</p>
                </div>
                <p className="text-2xl font-bold">{opps.length}</p>
                <p className="text-xs text-muted-foreground mt-1">
                  €{totale.toLocaleString()}
                </p>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="gradient-card border-border/50">
        <CardContent className="pt-6">
          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead>ID</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Titolo</TableHead>
                  <TableHead>Fase</TableHead>
                  <TableHead>Probabilità</TableHead>
                  <TableHead className="text-right">Valore</TableHead>
                  <TableHead>Data</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {opportunita.map((opp) => (
                  <TableRow 
                    key={opp.id}
                    className="hover:bg-secondary/30 transition-colors cursor-pointer"
                  >
                    <TableCell className="font-medium">{opp.id}</TableCell>
                    <TableCell>{opp.cliente}</TableCell>
                    <TableCell>{opp.titolo}</TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                        {opp.fase}
                      </span>
                    </TableCell>
                    <TableCell>{opp.probabilita}</TableCell>
                    <TableCell className="text-right font-bold text-primary">{opp.valore}</TableCell>
                    <TableCell>{opp.data}</TableCell>
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
