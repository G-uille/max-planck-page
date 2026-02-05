export interface Program {
  title: string;
  description: string;
}

export interface Course {
  slug: string;
  categoria: string;
  titulo: string;
  descripcionCorta: string;
  descripcionLarga: string;
  nivel: "Inicial" | "Bachiller" | "Avanzado";
  duracion: string;
  dedicacion: string;
  clasesEnVivo: string;
  requisitos: string[];
  programa: Program[];
  precio: number;
  precioOriginal?: number;
  descuento?: number;
  status?: boolean;
  fileURL?: string;
  modalidad: {
    enVivo: boolean;
    onDemand: boolean;
  };
  fechasHorarios: string[];
  faqs: { pregunta: string; respuesta: string }[];
}
