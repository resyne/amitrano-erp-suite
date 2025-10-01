import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, CheckCircle, XCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const presenze = [
  { dipendente: "Andrea Santoro", data: "15/01/2025", ingresso: "08:45", uscita: "17:30", ore: "8.75", stato: "Presente" },
  { dipendente: "Chiara Lombardi", data: "15/01/2025", ingresso: "09:00", uscita: "18:00", ore: "9.00", stato: "Presente" },
  { dipendente: "Davide Costa", data: "15/01/2025", ingresso: "-", uscita: "-", ore: "0", stato: "Assente" },
  { dipendente: "Silvia Marchetti", data: "15/01/2025", ingresso: "08:30", uscita: "17:15", ore: "8.75", stato: "Presente" },
  { dipendente: "Paolo Gentile", data: "15/01/2025", ingresso: "09:15", uscita: "18:30", ore: "9.25", stato: "Presente" },
];

export default function Presenze() {
  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Presenze"
        description="Registro presenze e timbrature"
        onAddClick={() => {}}
        addButtonText="Nuova Presenza"
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="gradient-card border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/20">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Presenti Oggi</p>
                <p className="text-2xl font-bold">
                  {presenze.filter(p => p.stato === "Presente").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="gradient-card border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-destructive/20">
                <XCircle className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Assenti</p>
                <p className="text-2xl font-bold">
                  {presenze.filter(p => p.stato === "Assente").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="gradient-card border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-secondary">
                <Clock className="h-6 w-6 text-foreground" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Ore Totali Oggi</p>
                <p className="text-2xl font-bold">35.75</p>
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
                  <TableHead>Dipendente</TableHead>
                  <TableHead>Data</TableHead>
                  <TableHead>Ingresso</TableHead>
                  <TableHead>Uscita</TableHead>
                  <TableHead className="text-right">Ore</TableHead>
                  <TableHead>Stato</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {presenze.map((presenza, i) => (
                  <TableRow 
                    key={i}
                    className="hover:bg-secondary/30 transition-colors"
                  >
                    <TableCell className="font-medium">{presenza.dipendente}</TableCell>
                    <TableCell>{presenza.data}</TableCell>
                    <TableCell>{presenza.ingresso}</TableCell>
                    <TableCell>{presenza.uscita}</TableCell>
                    <TableCell className="text-right font-medium">{presenza.ore}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        presenza.stato === "Presente" 
                          ? "bg-primary/20 text-primary" 
                          : "bg-destructive/20 text-destructive"
                      }`}>
                        {presenza.stato}
                      </span>
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
