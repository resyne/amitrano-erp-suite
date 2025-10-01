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

const contratti = [
  { id: "CTR-2025-001", cliente: "Tech Solutions Srl", tipo: "Manutenzione", inizio: "01/01/2025", scadenza: "31/12/2025", valore: "€24,000", stato: "Attivo" },
  { id: "CTR-2025-002", cliente: "Digital Corp", tipo: "Licenza Software", inizio: "15/01/2025", scadenza: "14/01/2026", valore: "€36,000", stato: "Attivo" },
  { id: "CTR-2024-015", cliente: "Innovation Ltd", tipo: "Consulenza", inizio: "01/06/2024", scadenza: "31/05/2025", valore: "€48,000", stato: "In Scadenza" },
  { id: "CTR-2025-003", cliente: "Future Systems", tipo: "SLA Premium", inizio: "10/01/2025", scadenza: "09/01/2026", valore: "€18,000", stato: "Attivo" },
];

export default function Contratti() {
  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Contratti"
        description="Gestione contratti e rinnovi"
        onAddClick={() => {}}
        addButtonText="Nuovo Contratto"
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="gradient-card border-border/50">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Contratti Attivi</p>
            <p className="text-2xl font-bold">
              {contratti.filter(c => c.stato === "Attivo").length}
            </p>
          </CardContent>
        </Card>
        <Card className="gradient-card border-border/50">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">In Scadenza (30gg)</p>
            <p className="text-2xl font-bold text-destructive">
              {contratti.filter(c => c.stato === "In Scadenza").length}
            </p>
          </CardContent>
        </Card>
        <Card className="gradient-card border-border/50">
          <CardContent className="pt-6">
            <p className="text-sm text-muted-foreground">Valore Totale</p>
            <p className="text-2xl font-bold text-primary">€126,000</p>
          </CardContent>
        </Card>
      </div>

      <Card className="gradient-card border-border/50">
        <CardContent className="pt-6">
          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead>ID Contratto</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead>Inizio</TableHead>
                  <TableHead>Scadenza</TableHead>
                  <TableHead>Stato</TableHead>
                  <TableHead className="text-right">Valore Annuo</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {contratti.map((contratto) => (
                  <TableRow 
                    key={contratto.id}
                    className="hover:bg-secondary/30 transition-colors cursor-pointer"
                  >
                    <TableCell className="font-medium">{contratto.id}</TableCell>
                    <TableCell>{contratto.cliente}</TableCell>
                    <TableCell>{contratto.tipo}</TableCell>
                    <TableCell>{contratto.inizio}</TableCell>
                    <TableCell>{contratto.scadenza}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        contratto.stato === "Attivo" 
                          ? "bg-primary/20 text-primary" 
                          : "bg-destructive/20 text-destructive"
                      }`}>
                        {contratto.stato}
                      </span>
                    </TableCell>
                    <TableCell className="text-right font-bold text-primary">{contratto.valore}</TableCell>
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
