import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Clock, CheckCircle } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const corsi = [
  { corso: "Sicurezza sul Lavoro", dipendente: "Andrea Santoro", inizio: "10/01/2025", fine: "12/01/2025", ore: 16, stato: "Completato" },
  { corso: "Leadership & Management", dipendente: "Chiara Lombardi", inizio: "15/01/2025", fine: "19/01/2025", ore: 24, stato: "In Corso" },
  { corso: "Excel Avanzato", dipendente: "Silvia Marchetti", inizio: "20/01/2025", fine: "22/01/2025", ore: 12, stato: "Programmato" },
  { corso: "Cybersecurity Base", dipendente: "Paolo Gentile", inizio: "08/01/2025", fine: "10/01/2025", ore: 16, stato: "Completato" },
];

export default function Formazione() {
  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Formazione"
        description="Corsi e sviluppo professionale"
        onAddClick={() => {}}
        addButtonText="Nuovo Corso"
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="gradient-card border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/20">
                <GraduationCap className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Corsi Attivi</p>
                <p className="text-2xl font-bold">
                  {corsi.filter(c => c.stato === "In Corso").length}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="gradient-card border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/20">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Completati</p>
                <p className="text-2xl font-bold">
                  {corsi.filter(c => c.stato === "Completato").length}
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
                <p className="text-sm text-muted-foreground">Ore Totali</p>
                <p className="text-2xl font-bold">68</p>
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
                  <TableHead>Corso</TableHead>
                  <TableHead>Dipendente</TableHead>
                  <TableHead>Inizio</TableHead>
                  <TableHead>Fine</TableHead>
                  <TableHead className="text-right">Ore</TableHead>
                  <TableHead>Stato</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {corsi.map((corso, i) => (
                  <TableRow 
                    key={i}
                    className="hover:bg-secondary/30 transition-colors cursor-pointer"
                  >
                    <TableCell className="font-medium">{corso.corso}</TableCell>
                    <TableCell>{corso.dipendente}</TableCell>
                    <TableCell>{corso.inizio}</TableCell>
                    <TableCell>{corso.fine}</TableCell>
                    <TableCell className="text-right">{corso.ore}h</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        corso.stato === "Completato" 
                          ? "bg-primary/20 text-primary" 
                          : corso.stato === "In Corso"
                          ? "bg-secondary text-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}>
                        {corso.stato}
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
