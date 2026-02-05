import { Course } from "@/models/Courses.model";
import courseImage from "../assets/jpg/becas.jpg";

export const courses: Course[] = [
  {
    slug: "refuerzo-pre-universitario",
    categoria: "Refuerzo académico",
    titulo: "Refuerzo Preuniversitario",
    descripcionCorta:
      "Aprende a automatizar procesos con inteligencia artificial.",
    descripcionLarga:
      "¿Querés prepararte para las Becas Gobierno del Paraguay?. ¡Esta es tu oportunidad! Videos explicativos de cada unidad; Ejercitarios y simulacros prácticos.; Acceso exclusivo al Aula Virtual para visualizar todos los materiales las veces que quieras.",
    nivel: "Bachiller",
    duracion: "12 semanas",
    dedicacion: "5 a 6 hs semanales",
    clasesEnVivo: "1 clase presencial y 2 virtuales",
    requisitos: ["No requiere conocimientos previos"],
    precio: 180000,
    precioOriginal: 200000,
    descuento: 10,
    fileURL: courseImage,
    modalidad: {
      enVivo: true,
      onDemand: true,
    },
    fechasHorarios: ["Sábados de 08:00 a 12:00 hs"],
    programa: [
      {
        title: "UNIDAD 1",
        description: "Descripción disponible dentro de poco.",
      },
      {
        title: "UNIDAD 2",
        description: "Descripción disponible dentro de poco.",
      },
      {
        title: "UNIDAD 3",
        description: "Descripción disponible dentro de poco.",
      },
    ],
    faqs: [
      {
        pregunta: "¿Necesito experiencia previa?",
        respuesta: "No, comenzamos desde cero.",
      },
    ],
  },
];
