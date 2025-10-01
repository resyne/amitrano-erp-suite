import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Mail, Phone, Building } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const clienti = [
  { id: "C001", nome: "Tech Solutions Srl", referente: "Giovanni Russo", email: "g.russo@techsol.it", telefono: "+39 02 1112233", settore: "Tecnologia", ordini: 24 },
  { id: "C002", nome: "Digital Corp", referente: "Francesca Gallo", email: "f.gallo@digitalcorp.com", telefono: "+39 06 4445566", settore: "Marketing", ordini: 18 },
  { id: "C003", nome: "Innovation Ltd", referente: "Roberto Colombo", email: "r.colombo@innovation.com", telefono: "+39 011 7778899", settore: "Consulenza", ordini: 31 },
  { id: "C004", nome: "Future Systems", referente: "Elena Ricci", email: "e.ricci@futuresys.it", telefono: "+39 02 9990011", settore: "Software", ordini: 15 },
  { id: "C005", nome: "Prime Business", referente: "Luca Moretti", email: "l.moretti@primebiz.it", telefono: "+39 06 2223344", settore: "Retail", ordini: 22 },
];

export default function Clienti() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredClienti = clienti.filter(
    (c) =>
      c.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      c.referente.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Clienti"
        description="CRM e gestione relazioni clienti"
        onAddClick={() => {}}
        addButtonText="Nuovo Cliente"
      />

      <Card className="gradient-card border-border/50">
        <CardContent className="pt-6">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Cerca clienti..."
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
                  <TableHead>Azienda</TableHead>
                  <TableHead>Referente</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Telefono</TableHead>
                  <TableHead>Settore</TableHead>
                  <TableHead className="text-right">Ordini</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredClienti.map((cliente) => (
                  <TableRow 
                    key={cliente.id}
                    className="hover:bg-secondary/30 transition-colors cursor-pointer"
                  >
                    <TableCell className="font-medium">{cliente.id}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Building className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">{cliente.nome}</span>
                      </div>
                    </TableCell>
                    <TableCell>{cliente.referente}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{cliente.email}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{cliente.telefono}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                        {cliente.settore}
                      </span>
                    </TableCell>
                    <TableCell className="text-right font-medium">{cliente.ordini}</TableCell>
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
