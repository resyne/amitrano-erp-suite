import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Mail, Phone } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const dipendenti = [
  { id: "D001", nome: "Andrea Santoro", ruolo: "Direttore Operativo", email: "a.santoro@amitrano.it", telefono: "+39 333 1234567", dipartimento: "Direzione" },
  { id: "D002", nome: "Chiara Lombardi", ruolo: "Responsabile Magazzino", email: "c.lombardi@amitrano.it", telefono: "+39 333 2345678", dipartimento: "Logistica" },
  { id: "D003", nome: "Davide Costa", ruolo: "Account Manager", email: "d.costa@amitrano.it", telefono: "+39 333 3456789", dipartimento: "Vendite" },
  { id: "D004", nome: "Silvia Marchetti", ruolo: "HR Manager", email: "s.marchetti@amitrano.it", telefono: "+39 333 4567890", dipartimento: "Risorse Umane" },
  { id: "D005", nome: "Paolo Gentile", ruolo: "IT Manager", email: "p.gentile@amitrano.it", telefono: "+39 333 5678901", dipartimento: "IT" },
  { id: "D006", nome: "Valentina Serra", ruolo: "Contabile", email: "v.serra@amitrano.it", telefono: "+39 333 6789012", dipartimento: "Amministrazione" },
];

export default function Dipendenti() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredDipendenti = dipendenti.filter(
    (d) =>
      d.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      d.ruolo.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Dipendenti"
        description="Gestione staff e risorse umane"
        onAddClick={() => {}}
        addButtonText="Nuovo Dipendente"
      />

      <Card className="gradient-card border-border/50">
        <CardContent className="pt-6">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Cerca dipendenti..."
              className="pl-10"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead>ID</TableHead>
                  <TableHead>Nome</TableHead>
                  <TableHead>Ruolo</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Telefono</TableHead>
                  <TableHead>Dipartimento</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredDipendenti.map((dipendente) => (
                  <TableRow 
                    key={dipendente.id}
                    className="hover:bg-secondary/30 transition-colors cursor-pointer"
                  >
                    <TableCell className="font-medium">{dipendente.id}</TableCell>
                    <TableCell className="font-medium">{dipendente.nome}</TableCell>
                    <TableCell>{dipendente.ruolo}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{dipendente.email}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{dipendente.telefono}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                        {dipendente.dipartimento}
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
