import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Package } from "lucide-react";

const categorie = [
  { nome: "Elettronica", prodotti: 127, valore: "€145,320" },
  { nome: "Accessori", prodotti: 198, valore: "€23,410" },
  { nome: "Audio", prodotti: 90, valore: "€18,900" },
  { nome: "Ufficio", prodotti: 156, valore: "€12,850" },
  { nome: "Hardware", prodotti: 234, valore: "€89,120" },
  { nome: "Software", prodotti: 45, valore: "€67,340" },
];

export default function Categorie() {
  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Categorie Prodotti"
        description="Organizzazione prodotti per categoria"
        onAddClick={() => {}}
        addButtonText="Nuova Categoria"
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {categorie.map((categoria) => (
          <Card 
            key={categoria.nome} 
            className="gradient-card border-border/50 hover:shadow-glow transition-all cursor-pointer"
          >
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="h-5 w-5 text-primary" />
                {categoria.nome}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Prodotti:</span>
                <span className="font-medium">{categoria.prodotti}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted-foreground">Valore:</span>
                <span className="font-bold text-primary">{categoria.valore}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
