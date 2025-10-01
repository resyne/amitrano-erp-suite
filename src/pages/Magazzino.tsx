import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const prodotti = [
  { id: "P001", nome: "Laptop Dell XPS 15", categoria: "Elettronica", quantita: 45, prezzo: "€1,299.00" },
  { id: "P002", nome: "Mouse Logitech MX Master", categoria: "Accessori", quantita: 120, prezzo: "€99.00" },
  { id: "P003", nome: "Monitor Samsung 27\"", categoria: "Elettronica", quantita: 32, prezzo: "€349.00" },
  { id: "P004", nome: "Tastiera Meccanica", categoria: "Accessori", quantita: 78, prezzo: "€149.00" },
  { id: "P005", nome: "Webcam HD Pro", categoria: "Elettronica", quantita: 55, prezzo: "€89.00" },
  { id: "P006", nome: "Cuffie Wireless", categoria: "Audio", quantita: 90, prezzo: "€199.00" },
];

export default function Magazzino() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProdotti = prodotti.filter(
    (p) =>
      p.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Magazzino"
        description="Gestione inventario e prodotti"
        onAddClick={() => {}}
        addButtonText="Nuovo Prodotto"
      />

      <Card className="gradient-card border-border/50">
        <CardContent className="pt-6">
          <div className="relative mb-4">
            <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Cerca prodotti..."
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
                  <TableHead>Nome Prodotto</TableHead>
                  <TableHead>Categoria</TableHead>
                  <TableHead className="text-right">Quantità</TableHead>
                  <TableHead className="text-right">Prezzo</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filteredProdotti.map((prodotto) => (
                  <TableRow 
                    key={prodotto.id}
                    className="hover:bg-secondary/30 transition-colors cursor-pointer"
                  >
                    <TableCell className="font-medium">{prodotto.id}</TableCell>
                    <TableCell>{prodotto.nome}</TableCell>
                    <TableCell>{prodotto.categoria}</TableCell>
                    <TableCell className="text-right">
                      <span className={prodotto.quantita < 50 ? "text-destructive" : ""}>
                        {prodotto.quantita}
                      </span>
                    </TableCell>
                    <TableCell className="text-right font-medium">{prodotto.prezzo}</TableCell>
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
