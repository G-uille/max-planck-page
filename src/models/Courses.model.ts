export interface Program {
  title: string;
  description: string;
}

export type ModalityRow = {
  title: string; // "Castellano — Martes 18:00 a 20:00"
  tag: "Virtual" | "Presencial" | string;
  desc?: string;
  mode?: "virtual" | "presencial"; // para elegir icono automáticamente
};

export interface Course {
  slug: string;
  inscriptionEnabled: boolean;
  inscriptionExpired: boolean;
  categoria: string;
  titulo: string;
  descripcionCorta: string;
  backendCourseId?: number;
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
  fechaInicioFin?: string;
  fileURL?: string;
  modalidad: {
    enVivo: boolean;
    onDemand: boolean;
  };
  fechasHorarios: string[];
  faqs: { pregunta: string; respuesta: string }[];
  lugar?: string;
  inicioEstimado?: string;
  programaPDFUrl?: string;
  highlights?: string[];
  incluye?: string[];
  evaluacion?: string[];
  modalidadSubtitle?: string;
  modalidadNota?: string;
  modalidadRows?: ModalityRow[];
  fechasTip?: string;
}
