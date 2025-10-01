import { useState } from "react";
import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search, Package } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const prodotti = [
  { id: "P001", nome: "Laptop Dell XPS 15", categoria: "Elettronica", quantita: 45, minimo: 20, prezzo: "€1,299.00", ubicazione: "A1-01" },
  { id: "P002", nome: "Mouse Logitech MX Master", categoria: "Accessori", quantita: 120, minimo: 50, prezzo: "€99.00", ubicazione: "B2-15" },
  { id: "P003", nome: "Monitor Samsung 27\"", categoria: "Elettronica", quantita: 32, minimo: 30, prezzo: "€349.00", ubicazione: "A1-05" },
  { id: "P004", nome: "Tastiera Meccanica", categoria: "Accessori", quantita: 78, minimo: 40, prezzo: "€149.00", ubicazione: "B2-18" },
  { id: "P005", nome: "Webcam HD Pro", categoria: "Elettronica", quantita: 55, minimo: 25, prezzo: "€89.00", ubicazione: "A2-03" },
  { id: "P006", nome: "Cuffie Wireless", categoria: "Audio", quantita: 15, minimo: 30, prezzo: "€199.00", ubicazione: "C1-12" },
];

export default function Inventario() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProdotti = prodotti.filter(
    (p) =>
      p.nome.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.id.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Inventario"
        description="Gestione completa dell'inventario prodotti"
        onAddClick={() => {}}
        addButtonText="Nuovo Prodotto"
      />

      <div className="grid gap-4 md:grid-cols-3">
        <Card className="gradient-card border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/20">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Prodotti Totali</p>
                <p className="text-2xl font-bold">{prodotti.length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="gradient-card border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-destructive/20">
                <Package className="h-6 w-6 text-destructive" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Sotto Soglia</p>
                <p className="text-2xl font-bold">{prodotti.filter(p => p.quantita < p.minimo).length}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card className="gradient-card border-border/50">
          <CardContent className="pt-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-lg bg-primary/20">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Valore Inventario</p>
                <p className="text-2xl font-bold">€182,450</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

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
                  <TableHead>Ubicazione</TableHead>
                  <TableHead className="text-right">Quantità</TableHead>
                  <TableHead className="text-right">Min.</TableHead>
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
                    <TableCell>
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary">
                        {prodotto.categoria}
                      </span>
                    </TableCell>
                    <TableCell className="text-muted-foreground">{prodotto.ubicazione}</TableCell>
                    <TableCell className="text-right">
                      <span className={prodotto.quantita < prodotto.minimo ? "text-destructive font-bold" : ""}>
                        {prodotto.quantita}
                      </span>
                    </TableCell>
                    <TableCell className="text-right text-muted-foreground">{prodotto.minimo}</TableCell>
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
