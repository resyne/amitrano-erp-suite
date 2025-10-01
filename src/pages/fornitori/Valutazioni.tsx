import { PageHeader } from "@/components/PageHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const valutazioni = [
  { fornitore: "Tech Supplies Italia", qualita: 4.8, puntualita: 4.6, prezzo: 4.2, servizio: 4.9, media: 4.6 },
  { fornitore: "Office Pro", qualita: 4.5, puntualita: 4.8, prezzo: 4.7, servizio: 4.6, media: 4.7 },
  { fornitore: "Global Components", qualita: 4.9, puntualita: 4.4, prezzo: 3.9, servizio: 4.5, media: 4.4 },
  { fornitore: "Digital Warehouse", qualita: 4.3, puntualita: 4.7, prezzo: 4.8, servizio: 4.4, media: 4.6 },
];

const RatingStars = ({ rating }: { rating: number }) => (
  <div className="flex items-center gap-1">
    {[1, 2, 3, 4, 5].map((star) => (
      <Star
        key={star}
        className={`h-4 w-4 ${
          star <= rating ? "fill-primary text-primary" : "text-muted-foreground"
        }`}
      />
    ))}
    <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
  </div>
);

export default function Valutazioni() {
  return (
    <div className="space-y-6 animate-fade-in">
      <PageHeader
        title="Valutazioni Fornitori"
        description="Performance e affidabilità fornitori"
      />

      <Card className="gradient-card border-border/50">
        <CardContent className="pt-6">
          <div className="rounded-lg border border-border overflow-hidden">
            <Table>
              <TableHeader>
                <TableRow className="bg-secondary/50">
                  <TableHead>Fornitore</TableHead>
                  <TableHead>Qualità</TableHead>
                  <TableHead>Puntualità</TableHead>
                  <TableHead>Prezzo</TableHead>
                  <TableHead>Servizio</TableHead>
                  <TableHead>Media</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {valutazioni.map((val) => (
                  <TableRow 
                    key={val.fornitore}
                    className="hover:bg-secondary/30 transition-colors"
                  >
                    <TableCell className="font-medium">{val.fornitore}</TableCell>
                    <TableCell><RatingStars rating={val.qualita} /></TableCell>
                    <TableCell><RatingStars rating={val.puntualita} /></TableCell>
                    <TableCell><RatingStars rating={val.prezzo} /></TableCell>
                    <TableCell><RatingStars rating={val.servizio} /></TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <Star className="h-5 w-5 fill-primary text-primary" />
                        <span className="font-bold text-lg">{val.media.toFixed(1)}</span>
                      </div>
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
