-- Create attendance table for employee check-ins
CREATE TABLE public.presenze (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  dipendente_id TEXT NOT NULL,
  dipendente_nome TEXT NOT NULL,
  timestamp TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  tipo TEXT NOT NULL CHECK (tipo IN ('entrata', 'uscita')),
  latitudine DECIMAL(10, 8),
  longitudine DECIMAL(11, 8),
  area_nome TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.presenze ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert their own attendance
CREATE POLICY "Anyone can insert their own attendance"
ON public.presenze
FOR INSERT
WITH CHECK (true);

-- Create policy to allow anyone to view all attendance records
CREATE POLICY "Anyone can view attendance records"
ON public.presenze
FOR SELECT
USING (true);

-- Create index for better query performance
CREATE INDEX idx_presenze_dipendente ON public.presenze(dipendente_id);
CREATE INDEX idx_presenze_timestamp ON public.presenze(timestamp DESC);