import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Clock, MapPin, LogIn, LogOut } from "lucide-react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const dipendenti = [
  { id: "D001", nome: "Andrea Santoro" },
  { id: "D002", nome: "Chiara Lombardi" },
  { id: "D003", nome: "Davide Costa" },
  { id: "D004", nome: "Silvia Marchetti" },
  { id: "D005", nome: "Paolo Gentile" },
  { id: "D006", nome: "Valentina Serra" },
];

export default function TimbraturePresenze() {
  const [loading, setLoading] = useState(false);
  const [selectedDipendente, setSelectedDipendente] = useState<string>("");
  const { toast } = useToast();

  const getAreaName = (lat: number, lng: number): string => {
    // Funzione per determinare l'area in base alle coordinate
    // Puoi personalizzare queste zone in base alle tue esigenze
    const zones = [
      { name: "Sede Centrale", lat: 40.8518, lng: 14.2681, radius: 0.01 },
      { name: "Magazzino Nord", lat: 40.8618, lng: 14.2781, radius: 0.01 },
      { name: "Filiale Sud", lat: 40.8418, lng: 14.2581, radius: 0.01 },
    ];

    for (const zone of zones) {
      const distance = Math.sqrt(
        Math.pow(lat - zone.lat, 2) + Math.pow(lng - zone.lng, 2)
      );
      if (distance <= zone.radius) {
        return zone.name;
      }
    }

    return "Altra posizione";
  };

  const timbraPresenza = async (tipo: "entrata" | "uscita") => {
    if (!selectedDipendente) {
      toast({
        title: "Errore",
        description: "Seleziona un dipendente prima di timbrare",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    try {
      // Ottieni la posizione corrente
      const position = await new Promise<GeolocationPosition>((resolve, reject) => {
        if (!navigator.geolocation) {
          reject(new Error("Geolocalizzazione non supportata"));
        }
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 10000,
          maximumAge: 0,
        });
      });

      const { latitude, longitude } = position.coords;
      const areaNome = getAreaName(latitude, longitude);
      const dipendente = dipendenti.find(d => d.id === selectedDipendente);

      // Registra la timbratura nel database
      const { error } = await supabase.from("presenze").insert({
        dipendente_id: selectedDipendente,
        dipendente_nome: dipendente?.nome || "",
        tipo,
        latitudine: latitude,
        longitudine: longitude,
        area_nome: areaNome,
      });

      if (error) throw error;

      toast({
        title: "Timbratura registrata",
        description: `${tipo === "entrata" ? "Entrata" : "Uscita"} registrata presso ${areaNome}`,
      });
    } catch (error: any) {
      console.error("Errore durante la timbratura:", error);
      toast({
        title: "Errore",
        description: error.message || "Impossibile registrare la timbratura",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="gradient-card border-border/50">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="h-5 w-5 text-primary" />
          Timbratura Presenze
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <label className="text-sm font-medium">Seleziona Dipendente</label>
          <Select value={selectedDipendente} onValueChange={setSelectedDipendente}>
            <SelectTrigger>
              <SelectValue placeholder="Seleziona un dipendente..." />
            </SelectTrigger>
            <SelectContent>
              {dipendenti.map((dip) => (
                <SelectItem key={dip.id} value={dip.id}>
                  {dip.nome}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <MapPin className="h-4 w-4" />
          <span>La tua posizione verrà rilevata automaticamente</span>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Button
            onClick={() => timbraPresenza("entrata")}
            disabled={loading || !selectedDipendente}
            className="flex items-center gap-2"
          >
            <LogIn className="h-4 w-4" />
            Timbra Entrata
          </Button>
          <Button
            onClick={() => timbraPresenza("uscita")}
            disabled={loading || !selectedDipendente}
            variant="secondary"
            className="flex items-center gap-2"
          >
            <LogOut className="h-4 w-4" />
            Timbra Uscita
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
