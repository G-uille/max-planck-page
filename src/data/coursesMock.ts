import { Course } from "@/models/Courses.model";
import courseImage from "../assets/jpg/becas.jpg";
import pdfURL from "../assets/pdf/preuniversitario-programa-2026.pdf";
import pdfURL2 from "../assets/pdf/coltec-programa-2026.pdf";

export const courses: Course[] = [
  {
    slug: "refuerzo-pre-universitario",
    backendCourseId: 1,
    inscriptionEnabled: true,
    inscriptionExpired: true,
    categoria: "Refuerzo académico",
    titulo: "Refuerzo Preuniversitario 2026 (Castellano + Matemáticas)",
    descripcionCorta:
      "Preparación integral para exámenes de admisión y Becas Gobierno del Paraguay: clases en vivo, práctica presencial, simulacros y aula virtual.",
    descripcionLarga:
      "De abril a noviembre te preparamos con un plan completo de Castellano y Matemáticas. En Castellano trabajamos comprensión lectora, morfosintaxis y normas ortográficas con ejercicios tipo examen y evaluaciones integradoras. En Matemáticas avanzamos por 3 módulos (Álgebra, Analítica/Cálculo y Geometría/Trigonometría), con 3 parciales y simulacros integradores. Incluye diagnóstico inicial, banco de ítems, ejercitarios y acceso al Aula Virtual con materiales y guías de repaso.",
    nivel: "Bachiller",
    duracion: "34 semanas",
    fechaInicioFin: "13 de Abril al 28 de Noviembre",
    dedicacion: "6 a 8 hs semanales",
    modalidadSubtitle:
      "Estructura clara: teoría online + práctica presencial + aula virtual.",
    modalidadNota:
      "Obs: Las fechas podrán ajustarse por feriados, actividades institucionales o necesidades pedagógicas.",
    modalidadRows: [
      {
        title: "Castellano — Lunes 18:00 a 20:00",
        tag: "Virtual",
        mode: "virtual",
        desc: "Comprensión lectora, morfosintaxis y ortografía con práctica tipo admisión.",
      },
      {
        title: "Matemáticas — Miércoles 18:00 a 20:00",
        tag: "Virtual",
        mode: "virtual",
        desc: "Teoría y resolución guiada para llegar al sábado con base sólida.",
      },
      {
        title: "Matemáticas — Sábados 08:00 a 12:00",
        tag: "Presencial",
        mode: "presencial",
        desc: "Práctica intensiva: ejercitarios, correcciones y simulacros.",
      },
    ],
    fechasTip: "Tip: el sábado es el día fuerte de práctica y simulacros.",
    clasesEnVivo: "2 clases virtuales + 1 clase presencial (semanales)",
    requisitos: [
      "Estar cursando o haber finalizado el bachillerato",
      "Celular o PC con internet para clases virtuales",
      "Cuaderno, regla y calculadora científica (recomendado)",
    ],
    precio: 190000,
    precioOriginal: 209000,
    descuento: 10,
    fileURL: courseImage,
    modalidad: {
      enVivo: true,
      onDemand: true,
    },
    lugar: "Colegio María Auxiliadora de Luque",
    inicioEstimado: "Lunes 13 de abril 2026",
    programaPDFUrl: pdfURL,
    highlights: [
      "34 semanas",
      "6–8 hs/semana",
      "2 virtual + 1 presencial",
      "3 parciales + simulacros",
      "Aula virtual incluida",
    ],
    incluye: [
      "Diagnóstico inicial",
      "Banco de ítems tipo admisión",
      "Ejercitarios + guías de repaso",
      "Simulacros integradores",
      "Devolución y plan de estudio",
    ],
    evaluacion: [
      "Parciales por módulo (Matemáticas)",
      "Mini simulacros (Castellano)",
      "Simulacros integradores",
      "Retroalimentación continua",
    ],
    fechasHorarios: [
      "Abril a Noviembre 2026 (inicio: 13/04/2026)",
      "Clases en vivo: 2 virtuales + 1 presencial por semana",
      "Presencial: sábados por la mañana (Luque)",
    ],
    programa: [
      {
        title: "CASTELLANO — Comprensión lectora y vocabulario",
        description:
          "Estrategias de lectura, vocabulario contextual, sinónimos/antónimos, recursos literarios y tipologías textuales. Práctica con ítems tipo admisión.",
      },
      {
        title: "CASTELLANO — Morfosintaxis y cohesión",
        description:
          "Uso correcto de categorías gramaticales, conectores, construcción de oraciones y coherencia textual. Mini simulacros con retroalimentación.",
      },
      {
        title: "CASTELLANO — Ortografía y puntuación",
        description:
          "Ortografía literal, acentual y puntual; signos de puntuación y corrección. Evaluación integradora y plan de preparación final.",
      },
      {
        title: "MATEMÁTICAS — Módulo 1: Aritmética y Álgebra",
        description:
          "Ecuaciones, expresiones algebraicas, factorización, potencias y raíces, logaritmos, proporciones y progresiones. Parcial 1.",
      },
      {
        title: "MATEMÁTICAS — Módulo 2: Analítica y Cálculo",
        description:
          "Plano cartesiano, recta, vectores, inecuaciones, funciones, límites, continuidad y derivadas con aplicaciones. Parcial 2.",
      },
      {
        title: "MATEMÁTICAS — Módulo 3: Geometría y Trigonometría",
        description:
          "Triángulos y cuadriláteros, áreas, razones trigonométricas, identidades, ecuaciones trigonométricas y resolución de triángulos. Parcial 3.",
      },
      {
        title: "Integración — Simulacros y repaso final",
        description:
          "Simulacros integradores en tiempo real, talleres intensivos, enfoque en puntos críticos y estrategias de examen.",
      },
    ],
    faqs: [
      {
        pregunta: "¿Cómo se cursa el programa?",
        respuesta:
          "Se combina virtual + presencial: 2 encuentros virtuales por semana y una práctica presencial los sábados. El calendario completo se entrega al inicio.",
      },
      {
        pregunta: "¿Incluye materiales y ejercitarios?",
        respuesta:
          "Sí. Accedés al Aula Virtual con guías, ejercitarios, banco de ítems tipo examen y materiales de repaso.",
      },
      {
        pregunta: "¿Hay evaluaciones?",
        respuesta:
          "Sí. Se realiza diagnóstico inicial, parciales por módulos (Matemáticas) y evaluaciones integradoras + simulacros con retroalimentación.",
      },
      {
        pregunta: "¿Dónde son las clases presenciales?",
        respuesta:
          "En Luque (Colegio María Auxiliadora). La sede exacta se confirma al inscribirte junto con el calendario.",
      },
      {
        pregunta: "¿Necesito conocimientos previos?",
        respuesta:
          "No. Se inicia con diagnóstico y se trabaja desde la base, avanzando a nivel preuniversitario con práctica guiada.",
      },
    ],
  },

  {
    slug: "refuerzo-colegios-tecnicos-2026",
    backendCourseId: 2,
    inscriptionEnabled: false,
    inscriptionExpired: false,
    modalidadSubtitle:
      "Plan semanal (abril–noviembre): Castellano virtual + Matemática virtual y práctica presencial.",
    modalidadNota:
      "Obs: Si una fecha coincide con feriado u otra actividad, se reprograma manteniendo el orden del programa.",
    modalidadRows: [
      {
        title: "Castellano — Martes 18:00 a 20:00",
        tag: "Virtual",
        mode: "virtual",
        desc: "Comprensión lectora y tipologías textuales con ejercicios tipo admisión.",
      },
      {
        title: "Matemática — Jueves 18:00 a 20:00",
        tag: "Virtual",
        mode: "virtual",
        desc: "Métodos y procedimientos para llegar al sábado listo para practicar.",
      },
      {
        title: "Matemática — Sábados 08:00 a 12:00",
        tag: "Presencial",
        mode: "presencial",
        desc: "Práctica intensiva y resolución tipo examen (banco de ítems).",
      },
    ],
    fechasTip:
      "Tip: los sábados se prioriza práctica intensiva y resolución tipo examen.",
    categoria: "Admisión | Colegios Técnicos",
    titulo: "Refuerzo Admisión Colegios Técnicos (Castellano + Matemática)",

    descripcionCorta:
      "Programa semanal (abril–noviembre) para ingresar a Colegios Técnicos: 2 clases virtuales + práctica presencial de matemática, con parciales y simulacros integradores.",

    descripcionLarga:
      "Preparación integral para la admisión a Colegios Técnicos con plan organizado por semanas (abril a noviembre). Castellano se trabaja en modalidad virtual enfocada en comprensión lectora, tipologías textuales, vocabulario, cohesión y normas ortográficas. Matemática combina teoría virtual y práctica presencial intensiva los sábados, con evaluación por parciales y simulacros finales para llegar con seguridad al examen.",

    nivel: "Escolar Básica (8.º/9.º) / Postulantes a Colegios Técnicos",
    duracion: "34 semanas",
    fechaInicioFin: "14 de Abril al 28 de Noviembre",
    dedicacion: "7 a 8 hs semanales",
    clasesEnVivo: "2 clases virtuales + 1 clase presencial (semanales)",

    lugar: "Colegio María Auxiliadora de Luque",
    inicioEstimado: "Martes 14 de abril 2026",

    requisitos: [
      "Ser postulante a Colegios Técnicos (8.º/9.º o equivalente)",
      "Celular o PC con internet para clases virtuales",
      "Cuaderno, regla y calculadora (recomendado)",
    ],

    precio: 190000,
    precioOriginal: 209000,
    descuento: 10,

    fileURL: courseImage,

    modalidad: { enVivo: true, onDemand: true },

    programaPDFUrl: pdfURL2,

    highlights: [
      "34 semanas",
      "7–8 hs/semana",
      "Mar + Jue virtual",
      "Sáb presencial (Mate)",
      "3 parciales + simulacros",
      "Aula virtual incluida",
    ],

    incluye: [
      "Plan semanal (abril a noviembre) con secuencia clara",
      "Diagnóstico y práctica tipo examen",
      "Sábados de matemática: práctica intensiva",
      "Correcciones y retroalimentación",
      "Materiales y ejercitarios en Aula Virtual",
    ],

    evaluacion: [
      "Parcial 1 (Matemática): 30/05/2026",
      "Parcial 2 (Matemática): 22/08/2026",
      "Parcial 3 (Matemática): 17/10/2026",
      "Simulacro 1 (Castellano): 20/10/2026",
      "Simulacro 2 (Castellano): 03/11/2026",
      "Simulacro Matemática 1: 21/11/2026",
      "Simulacro Matemática 2 (Virtual): 26/11/2026",
      "Simulacro Final Presencial (Integrador): 28/11/2026",
    ],

    // Simple (para tu tab Fechas y horarios)
    fechasHorarios: [
      "Abril a Noviembre 2026 (inicio: 14/04/2026)",
      "Castellano (Virtual): Martes 18:00 a 20:00",
      "Matemática (Virtual): Jueves 18:00 a 20:00",
      "Matemática (Presencial): Sábados 08:00 a 12:00",
      "Obs: las fechas pueden ajustarse por feriados manteniendo la secuencia.",
    ],

    // Para tu tab Programa (resumen por bloques)
    programa: [
      {
        title: "CASTELLANO — Comprensión lectora (tipologías textuales)",
        description:
          "Textos informativos/expositivos, publicitarios, literarios (narrativo) y científico; jurídico-administrativo. Identificación de intención, rasgos y función. Ítems tipo admisión.",
      },
      {
        title: "CASTELLANO — Vocabulario y semántica en contexto",
        description:
          "Sinónimos y antónimos; inferencia por contexto; campo semántico; hiperónimos e hipónimos. Selección de significado según el texto.",
      },
      {
        title: "CASTELLANO — Cohesión y macroestructura",
        description:
          "Personajes, secuenciación de ideas, tema e ideas principales/secundarias, causa–efecto, actos de habla y técnicas de resumen. Conectores: adición, oposición, conclusión, restricción.",
      },
      {
        title: "CASTELLANO — Morfosintaxis y ortografía",
        description:
          "Clases de palabras (pronombres, preposiciones), concordancia, correlación verbal, voz activa/pasiva. Ortografía (consonantes difíciles), puntuación y signos auxiliares.",
      },
      {
        title: "MATEMÁTICA — Eje 1: Operaciones y álgebra",
        description:
          "Enteros/racionales, fracciones, decimales periódicos y fracción generatriz; potencias y raíces; regla de tres directa/inversa; ecuaciones lineales y sistemas 2x2; polinomios y factorización; racionales; ecuaciones de 2º grado; radicales y racionalización.",
      },
      {
        title: "MATEMÁTICA — Eje 2: Geometría y medidas",
        description:
          "Ángulos y sistema sexagesimal; triángulos; Pitágoras; cuadriláteros; circunferencia y polígonos inscriptos; geometría del espacio (cubo, prisma, pirámide, cilindro, cono y esfera); áreas y volúmenes.",
      },
      {
        title: "MATEMÁTICA — Eje 3: Datos y estadística",
        description:
          "Tablas de frecuencia, gráficos estadísticos, media/mediana/moda (datos no agrupados). Resolución de problemas tipo examen.",
      },
      {
        title: "Integración — Parciales y simulacros",
        description:
          "3 parciales de matemática durante el cursillo, 2 simulacros de castellano y simulacros finales (virtual/presencial) con retroalimentación y plan de repaso.",
      },
    ],

    faqs: [
      {
        pregunta: "¿Cómo se cursa el programa?",
        respuesta:
          "Castellano es virtual los martes (18:00–20:00). Matemática combina jueves virtual (18:00–20:00) y sábados presenciales (08:00–12:00) con práctica intensiva.",
      },
      {
        pregunta: "¿Qué se hace los sábados?",
        respuesta:
          "Se prioriza práctica intensiva: banco de ejercicios, resolución tipo examen, correcciones y preparación para parciales/simulacros.",
      },
      {
        pregunta: "¿Incluye evaluaciones?",
        respuesta:
          "Sí. Hay 3 parciales de Matemática y simulacros de Castellano y Matemática en noviembre, incluyendo un simulacro final presencial integrador.",
      },
      {
        pregunta: "¿Incluye materiales?",
        respuesta:
          "Sí. Acceso al Aula Virtual con guías, ejercitarios y recursos de repaso alineados al cronograma semanal.",
      },
      {
        pregunta: "¿Qué pasa si hay feriado?",
        respuesta:
          "Se reprograma manteniendo el orden y la secuencia de contenidos del programa.",
      },
    ],
  },
];
