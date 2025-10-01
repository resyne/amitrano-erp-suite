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

const fornitori = [
  { id: "F001", nome: "Tech Supplies Italia", contatto: "Mario Rossi", email: "mario@techsupplies.it", telefono: "+39 02 1234567", categoria: "Elettronica" },
  { id: "F002", nome: "Office Pro", contatto: "Laura Bianchi", email: "laura@officepro.it", telefono: "+39 06 7654321", categoria: "Forniture Ufficio" },
  { id: "F003", nome: "Global Components", contatto: "Giuseppe Verdi", email: "g.verdi@globalcomp.com", telefono: "+39 011 9876543", categoria: "Componenti" },
  { id: "F004", nome: "Digital Warehouse", contatto: "Anna Ferrari", email: "a.ferrari@digitalwh.it", telefono: "+39 02 5551234", categoria: "Elettronica" },
  { id: "F005", nome: "Prime Logistics", contatto: "Marco Esposito", email: "marco@primelogistics.it", telefono: "+39 081 3334455", categoria: "Logistica" },
];

export default function Fornitori() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFornitori = fornitori.filter(
    (f) =>
      f.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      f.contatto.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Fornitori"
        description="Gestione fornitori e partner commerciali"
        onAddClick={() => {}}
        addButtonText="Nuovo Fornitore"
      />

      <Card className="gradient-card border-border/50">
        <CardContent className="pt-6">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Cerca fornitori..."
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
                  <TableHead>Nome Fornitore</TableHead>
                  <TableHead>Contatto</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Telefono</TableHead>
                  <TableHead>Categoria</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredFornitori.map((fornitore) => (
                  <TableRow 
                    key={fornitore.id}
                    className="hover:bg-secondary/30 transition-colors cursor-pointer"
                  >
                    <TableCell className="font-medium">{fornitore.id}</TableCell>
                    <TableCell className="font-medium">{fornitore.nome}</TableCell>
                    <TableCell>{fornitore.contatto}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Mail className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{fornitore.email}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="text-sm">{fornitore.telefono}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                        {fornitore.categoria}
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
