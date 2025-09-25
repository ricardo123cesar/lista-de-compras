// Importa a função de criação do client Supabase via CDN
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

// Cria o client com a URL e a chave fornecidas
export const supabase = createClient(
  'https://jpxuvdnkpmipogjcuwgj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpweHV2ZG5rcG1pcG9namN1d2dqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg1NjExNjQsImV4cCI6MjA2NDEzNzE2NH0.hnFmQM0XdOnKB97KxXXq3pIqu857uxRXom7Ze-NpV84'
)''