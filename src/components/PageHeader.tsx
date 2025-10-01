import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

interface PageHeaderProps {
  title: string;
  description?: string;
  onAddClick?: () => void;
  addButtonText?: string;
}

export function PageHeader({ title, description, onAddClick, addButtonText = "Aggiungi" }: PageHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">{title}</h1>
        {description && (
          <p className="text-muted-foreground mt-1">{description}</p>
        )}
      </div>
      {onAddClick && (
        <Button onClick={onAddClick} className="gradient-primary shadow-glow">
          <Plus className="h-4 w-4 mr-2" />
          {addButtonText}
        </Button>
      )}
    </div>
  );
}
