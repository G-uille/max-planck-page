import { Course } from "@/models/Courses.model";
import courseImage from "../assets/jpg/becas.jpg";
import pdfURL from "../assets/pdf/preuniversitario-programa-2026.pdf";
import pdfURL2 from "../assets/pdf/coltec-programa-2026.pdf";
import stack from "../assets/jpg/flyer_curso.jpg";

export const courses: Course[] = [
  {
    slug: "refuerzo-pre-universitario",
    summaryLabel: "Plan de preparación",
    summaryTitle: "Castellano + Matemáticas para admisión y becas",
    summaryDescription:
      "Preparación de abril a noviembre con clases virtuales, práctica presencial, aula virtual, parciales y simulacros.",
    modality: "Presencial/Híbrido",
    moduleLabel: "unidades",
    totalClasses: 102,
    programa: [
      {
        title: "CASTELLANO — Comprensión lectora y vocabulario",
        classCount: 12,
        description:
          "Estrategias de lectura, vocabulario contextual, sinónimos/antónimos, recursos literarios y tipologías textuales. Práctica con ítems tipo admisión.",
      },
      {
        title: "CASTELLANO — Morfosintaxis y cohesión",
        classCount: 12,
        description:
          "Uso correcto de categorías gramaticales, conectores, construcción de oraciones y coherencia textual. Mini simulacros con retroalimentación.",
      },
      {
        title: "CASTELLANO — Ortografía y puntuación",
        classCount: 10,
        description:
          "Ortografía literal, acentual y puntual; signos de puntuación y corrección. Evaluación integradora y plan de preparación final.",
      },
      {
        title: "MATEMÁTICAS — Módulo 1: Aritmética y Álgebra",
        classCount: 18,
        description:
          "Ecuaciones, expresiones algebraicas, factorización, potencias y raíces, logaritmos, proporciones y progresiones. Parcial 1.",
      },
      {
        title: "MATEMÁTICAS — Módulo 2: Analítica y Cálculo",
        classCount: 18,
        description:
          "Plano cartesiano, recta, vectores, inecuaciones, funciones, límites, continuidad y derivadas con aplicaciones. Parcial 2.",
      },
      {
        title: "MATEMÁTICAS — Módulo 3: Geometría y Trigonometría",
        classCount: 18,
        description:
          "Triángulos y cuadriláteros, áreas, razones trigonométricas, identidades, ecuaciones trigonométricas y resolución de triángulos. Parcial 3.",
      },
      {
        title: "Integración — Simulacros y repaso final",
        classCount: 14,
        description:
          "Simulacros integradores en tiempo real, talleres intensivos, enfoque en puntos críticos y estrategias de examen.",
      },
    ],
    backendCourseId: 1,
    consultWhatsappPhone: "0993581578",
    consultWhatsappMessage:
      "Hola, me interesaría saber más sobre el curso de Refuerzo Admisión Colegios Técnicos.",
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

  // {
  //   slug: "refuerzo-colegios-tecnicos-2026",
  //   backendCourseId: 2,
  //   consultWhatsappPhone: "0993581578",
  //   consultWhatsappMessage:
  //   "Hola, me interesaría saber más sobre el curso de Refuerzo Preuniversitario.",
  //   inscriptionEnabled: false,
  //   inscriptionExpired: false,
  //   modalidadSubtitle:
  //     "Plan semanal (abril–noviembre): Castellano virtual + Matemática virtual y práctica presencial.",
  //   modalidadNota:
  //     "Obs: Si una fecha coincide con feriado u otra actividad, se reprograma manteniendo el orden del programa.",
  //   modalidadRows: [
  //     {
  //       title: "Castellano — Martes 18:00 a 20:00",
  //       tag: "Virtual",
  //       mode: "virtual",
  //       desc: "Comprensión lectora y tipologías textuales con ejercicios tipo admisión.",
  //     },
  //     {
  //       title: "Matemática — Jueves 18:00 a 20:00",
  //       tag: "Virtual",
  //       mode: "virtual",
  //       desc: "Métodos y procedimientos para llegar al sábado listo para practicar.",
  //     },
  //     {
  //       title: "Matemática — Sábados 08:00 a 12:00",
  //       tag: "Presencial",
  //       mode: "presencial",
  //       desc: "Práctica intensiva y resolución tipo examen (banco de ítems).",
  //     },
  //   ],
  //   fechasTip:
  //     "Tip: los sábados se prioriza práctica intensiva y resolución tipo examen.",
  //   categoria: "Admisión | Colegios Técnicos",
  //   titulo: "Refuerzo Admisión Colegios Técnicos (Castellano + Matemática)",

  //   descripcionCorta:
  //     "Programa semanal (abril–noviembre) para ingresar a Colegios Técnicos: 2 clases virtuales + práctica presencial de matemática, con parciales y simulacros integradores.",

  //   descripcionLarga:
  //     "Preparación integral para la admisión a Colegios Técnicos con plan organizado por semanas (abril a noviembre). Castellano se trabaja en modalidad virtual enfocada en comprensión lectora, tipologías textuales, vocabulario, cohesión y normas ortográficas. Matemática combina teoría virtual y práctica presencial intensiva los sábados, con evaluación por parciales y simulacros finales para llegar con seguridad al examen.",

  //   nivel: "Escolar Básica (8.º/9.º) / Postulantes a Colegios Técnicos",
  //   duracion: "34 semanas",
  //   fechaInicioFin: "14 de Abril al 28 de Noviembre",
  //   dedicacion: "7 a 8 hs semanales",
  //   clasesEnVivo: "2 clases virtuales + 1 clase presencial (semanales)",

  //   lugar: "Colegio María Auxiliadora de Luque",
  //   inicioEstimado: "Martes 14 de abril 2026",

  //   requisitos: [
  //     "Ser postulante a Colegios Técnicos (8.º/9.º o equivalente)",
  //     "Celular o PC con internet para clases virtuales",
  //     "Cuaderno, regla y calculadora (recomendado)",
  //   ],

  //   precio: 190000,
  //   precioOriginal: 209000,
  //   descuento: 10,

  //   fileURL: courseImage,

  //   modalidad: { enVivo: true, onDemand: true },

  //   programaPDFUrl: pdfURL2,

  //   highlights: [
  //     "34 semanas",
  //     "7–8 hs/semana",
  //     "Mar + Jue virtual",
  //     "Sáb presencial (Mate)",
  //     "3 parciales + simulacros",
  //     "Aula virtual incluida",
  //   ],

  //   incluye: [
  //     "Plan semanal (abril a noviembre) con secuencia clara",
  //     "Diagnóstico y práctica tipo examen",
  //     "Sábados de matemática: práctica intensiva",
  //     "Correcciones y retroalimentación",
  //     "Materiales y ejercitarios en Aula Virtual",
  //   ],

  //   evaluacion: [
  //     "Parcial 1 (Matemática): 30/05/2026",
  //     "Parcial 2 (Matemática): 22/08/2026",
  //     "Parcial 3 (Matemática): 17/10/2026",
  //     "Simulacro 1 (Castellano): 20/10/2026",
  //     "Simulacro 2 (Castellano): 03/11/2026",
  //     "Simulacro Matemática 1: 21/11/2026",
  //     "Simulacro Matemática 2 (Virtual): 26/11/2026",
  //     "Simulacro Final Presencial (Integrador): 28/11/2026",
  //   ],

  //   // Simple (para tu tab Fechas y horarios)
  //   fechasHorarios: [
  //     "Abril a Noviembre 2026 (inicio: 14/04/2026)",
  //     "Castellano (Virtual): Martes 18:00 a 20:00",
  //     "Matemática (Virtual): Jueves 18:00 a 20:00",
  //     "Matemática (Presencial): Sábados 08:00 a 12:00",
  //     "Obs: las fechas pueden ajustarse por feriados manteniendo la secuencia.",
  //   ],

  //   // Para tu tab Programa (resumen por bloques)
  //   programa: [
  //     {
  //       title: "CASTELLANO — Comprensión lectora (tipologías textuales)",
  //       description:
  //         "Textos informativos/expositivos, publicitarios, literarios (narrativo) y científico; jurídico-administrativo. Identificación de intención, rasgos y función. Ítems tipo admisión.",
  //     },
  //     {
  //       title: "CASTELLANO — Vocabulario y semántica en contexto",
  //       description:
  //         "Sinónimos y antónimos; inferencia por contexto; campo semántico; hiperónimos e hipónimos. Selección de significado según el texto.",
  //     },
  //     {
  //       title: "CASTELLANO — Cohesión y macroestructura",
  //       description:
  //         "Personajes, secuenciación de ideas, tema e ideas principales/secundarias, causa–efecto, actos de habla y técnicas de resumen. Conectores: adición, oposición, conclusión, restricción.",
  //     },
  //     {
  //       title: "CASTELLANO — Morfosintaxis y ortografía",
  //       description:
  //         "Clases de palabras (pronombres, preposiciones), concordancia, correlación verbal, voz activa/pasiva. Ortografía (consonantes difíciles), puntuación y signos auxiliares.",
  //     },
  //     {
  //       title: "MATEMÁTICA — Eje 1: Operaciones y álgebra",
  //       description:
  //         "Enteros/racionales, fracciones, decimales periódicos y fracción generatriz; potencias y raíces; regla de tres directa/inversa; ecuaciones lineales y sistemas 2x2; polinomios y factorización; racionales; ecuaciones de 2º grado; radicales y racionalización.",
  //     },
  //     {
  //       title: "MATEMÁTICA — Eje 2: Geometría y medidas",
  //       description:
  //         "Ángulos y sistema sexagesimal; triángulos; Pitágoras; cuadriláteros; circunferencia y polígonos inscriptos; geometría del espacio (cubo, prisma, pirámide, cilindro, cono y esfera); áreas y volúmenes.",
  //     },
  //     {
  //       title: "MATEMÁTICA — Eje 3: Datos y estadística",
  //       description:
  //         "Tablas de frecuencia, gráficos estadísticos, media/mediana/moda (datos no agrupados). Resolución de problemas tipo examen.",
  //     },
  //     {
  //       title: "Integración — Parciales y simulacros",
  //       description:
  //         "3 parciales de matemática durante el cursillo, 2 simulacros de castellano y simulacros finales (virtual/presencial) con retroalimentación y plan de repaso.",
  //     },
  //   ],

  //   faqs: [
  //     {
  //       pregunta: "¿Cómo se cursa el programa?",
  //       respuesta:
  //         "Castellano es virtual los martes (18:00–20:00). Matemática combina jueves virtual (18:00–20:00) y sábados presenciales (08:00–12:00) con práctica intensiva.",
  //     },
  //     {
  //       pregunta: "¿Qué se hace los sábados?",
  //       respuesta:
  //         "Se prioriza práctica intensiva: banco de ejercicios, resolución tipo examen, correcciones y preparación para parciales/simulacros.",
  //     },
  //     {
  //       pregunta: "¿Incluye evaluaciones?",
  //       respuesta:
  //         "Sí. Hay 3 parciales de Matemática y simulacros de Castellano y Matemática en noviembre, incluyendo un simulacro final presencial integrador.",
  //     },
  //     {
  //       pregunta: "¿Incluye materiales?",
  //       respuesta:
  //         "Sí. Acceso al Aula Virtual con guías, ejercitarios y recursos de repaso alineados al cronograma semanal.",
  //     },
  //     {
  //       pregunta: "¿Qué pasa si hay feriado?",
  //       respuesta:
  //         "Se reprograma manteniendo el orden y la secuencia de contenidos del programa.",
  //     },
  //   ],
  // },
  // {
  //   slug: "introduccion-a-la-programacion",
  //   backendCourseId: 3,
  //   consultWhatsappPhone: "0974135398",
  //   consultWhatsappMessage:
  //     "Hola, me interesaría saber más sobre el curso de Introducción a la Programación.",
  //   inscriptionEnabled: false,
  //   inscriptionDisabledLabel: "Inscripción próximamente",
  //   inscriptionDisabledMessage:
  //     "Las inscripciones para Introducción a la Programación todavía no están habilitadas. Las fechas, horarios e inicio serán comunicados próximamente.",

  //   categoria: "Programación",
  //   titulo: "Introducción a la Programación",
  //   descripcionCorta:
  //     "Curso inicial para aprender lógica de programación, pensamiento computacional, algoritmos, pseudocódigo y fundamentos de Python.",
  //   descripcionLarga:
  //     "Este curso está diseñado para estudiantes que desean iniciar en el mundo de la programación desde cero. Se trabaja la lógica computacional, la resolución de problemas, el uso de herramientas básicas, pseudocódigo y los primeros fundamentos de Python, combinando explicación teórica, práctica guiada y ejercicios progresivos.",

  //   nivel: "Inicial",
  //   duracion: "11 semanas",
  //   fechaInicioFin: "A definir",
  //   dedicacion: "3 a 4 hs semanales",
  //   clasesEnVivo: "1 clase semanal de 2 hs",
  //   lugar: "A definir",
  //   inicioEstimado: "A definir",

  //   modalidadSubtitle:
  //     "Modalidad presencial + virtual, con práctica guiada y acompañamiento.",
  //   modalidadNota:
  //     "Las fechas de inicio, horarios y modalidad específica serán confirmadas próximamente.",
  //   modalidadRows: [
  //     {
  //       title: "Clase semanal — horario a definir",
  //       tag: "A definir",
  //       mode: "virtual",
  //       desc: "Encuentro semanal para desarrollar contenidos, resolver ejercicios y avanzar con acompañamiento docente.",
  //     },
  //     {
  //       title: "Práctica complementaria",
  //       tag: "Virtual",
  //       mode: "virtual",
  //       desc: "Actividades, ejercicios y materiales de apoyo para reforzar lo trabajado en clase.",
  //     },
  //   ],

  //   fechasTip:
  //     "Las fechas y horarios serán publicados una vez habilitada la inscripción.",
  //   fechasHorarios: [
  //     "Fecha de inicio: A definir",
  //     "Fecha de finalización: A definir",
  //     "Horario de clases: A definir",
  //     "Inscripción online: no habilitada por el momento",
  //   ],

  //   requisitos: [
  //     "No se requieren conocimientos previos de programación.",
  //     "Contar con computadora o notebook para practicar.",
  //     "Tener conexión a internet para acceder a materiales digitales.",
  //     "Instalar las herramientas indicadas por el docente.",
  //   ],

  //   precio: 0,
  //   precioOriginal: 0,
  //   descuento: 0,

  //   fileURL: courseImage,

  //   modalidad: {
  //     enVivo: true,
  //     onDemand: true,
  //   },

  //   highlights: [
  //     "11 semanas",
  //     "Nivel inicial",
  //     "1 clase semanal",
  //     "3 a 4 hs/semana",
  //     "Python básico",
  //     "Lógica de programación",
  //   ],

  //   incluye: [
  //     "Introducción a la programación desde cero.",
  //     "Ejercicios progresivos para desarrollar lógica.",
  //     "Uso de pseudocódigo y herramientas iniciales.",
  //     "Primeros pasos con Python.",
  //     "Proyecto final integrador.",
  //   ],

  //   evaluacion: [
  //     "Resolución de ejercicios prácticos.",
  //     "Actividades por unidad.",
  //     "Correcciones y retroalimentación.",
  //     "Proyecto final aplicado.",
  //   ],

  //   programa: [
  //     {
  //       title:
  //         "Semana 1 — Bienvenida al curso e introducción a la programación",
  //       description:
  //         "Presentación del curso, forma de trabajo, herramientas, qué es programar, qué es un algoritmo y cómo se resuelven problemas paso a paso.",
  //     },
  //     {
  //       title: "Semana 2 — Herramientas fundamentales de la programación",
  //       description:
  //         "Introducción al pensamiento computacional, uso de pseudocódigo, instrucciones, variables, entrada y salida de datos.",
  //     },
  //     {
  //       title: "Semanas 3 y 4 — Condicionales de programación",
  //       description:
  //         "Estructuras condicionales, operadores lógicos, toma de decisiones, comparación de valores y resolución de problemas con condiciones.",
  //     },
  //     {
  //       title: "Semanas 5 y 6 — Funciones y organización del código",
  //       description:
  //         "Concepto de función, reutilización de instrucciones, parámetros, retorno de valores y organización básica de soluciones.",
  //     },
  //     {
  //       title: "Semanas 7, 8, 9 y 10 — Python básico",
  //       description:
  //         "Primeros pasos con Python: sintaxis básica, variables, tipos de datos, entrada y salida, condicionales, ciclos, acumuladores y ejercicios aplicados.",
  //     },
  //     {
  //       title: "Semana 11 — Proyecto final",
  //       description:
  //         "Desarrollo de un proyecto integrador sencillo aplicando lógica, condicionales, ciclos, funciones y fundamentos de Python.",
  //     },
  //   ],

  //   faqs: [
  //     {
  //       pregunta: "¿Necesito saber programar antes de iniciar?",
  //       respuesta:
  //         "No. El curso está pensado para estudiantes sin experiencia previa en programación.",
  //     },
  //     {
  //       pregunta: "¿Qué lenguaje se utiliza?",
  //       respuesta:
  //         "El curso introduce lógica de programación y fundamentos de Python.",
  //     },
  //     {
  //       pregunta: "¿La inscripción ya está habilitada?",
  //       respuesta:
  //         "No. Las inscripciones serán habilitadas cuando se confirmen las fechas y horarios.",
  //     },
  //     {
  //       pregunta: "¿Las fechas y horarios ya están definidos?",
  //       respuesta:
  //         "Todavía no. Por el momento las fechas de inicio, finalización y horarios quedan a definir.",
  //     },
  //   ],
  // },
  // {
  //   slug: "introduccion-al-desarrollo-web",
  //   backendCourseId: 4,
  //   consultWhatsappPhone: "0974135398",
  //   consultWhatsappMessage:
  //     "Hola, me interesaría saber más sobre el curso de Introducción al Desarrollo Web.",
  //   inscriptionEnabled: false,
  //   inscriptionDisabledLabel: "Inscripción próximamente",
  //   inscriptionDisabledMessage:
  //     "Las inscripciones para Introducción al Desarrollo Web todavía no están habilitadas. Las fechas, horarios e inicio serán comunicados próximamente.",

  //   categoria: "Desarrollo Web",
  //   titulo: "Introducción al Desarrollo Web",
  //   descripcionCorta:
  //     "Curso inicial para aprender los fundamentos del desarrollo web: HTML, CSS, diseño responsive, GitHub, despliegue y primeros pasos con JavaScript.",
  //   descripcionLarga:
  //     "Este curso introduce al estudiante en el desarrollo web desde cero, trabajando la estructura de una página con HTML, estilos con CSS, maquetación responsive, uso básico de GitHub, publicación de sitios y fundamentos de JavaScript para agregar interactividad.",

  //   nivel: "Inicial",
  //   duracion: "11 semanas",
  //   fechaInicioFin: "A definir",
  //   dedicacion: "3 a 4 hs semanales",
  //   clasesEnVivo: "2 clases semanales de 2 hs",
  //   lugar: "A definir",
  //   inicioEstimado: "A definir",

  //   modalidadSubtitle:
  //     "Modalidad presencial + virtual, con clases prácticas y desarrollo de proyectos.",
  //   modalidadNota:
  //     "Las fechas de inicio, horarios y modalidad específica serán confirmadas próximamente.",
  //   modalidadRows: [
  //     {
  //       title: "Clases semanales — horario a definir",
  //       tag: "A definir",
  //       mode: "virtual",
  //       desc: "Encuentros para desarrollar contenidos, practicar maquetación y avanzar con acompañamiento docente.",
  //     },
  //     {
  //       title: "Práctica complementaria",
  //       tag: "Virtual",
  //       mode: "virtual",
  //       desc: "Ejercicios, recursos y actividades para reforzar HTML, CSS y JavaScript.",
  //     },
  //   ],

  //   fechasTip:
  //     "Las fechas y horarios serán publicados una vez habilitada la inscripción.",
  //   fechasHorarios: [
  //     "Fecha de inicio: A definir",
  //     "Fecha de finalización: A definir",
  //     "Horario de clases: A definir",
  //     "Inscripción online: no habilitada por el momento",
  //   ],

  //   requisitos: [
  //     "No se requieren conocimientos previos de desarrollo web.",
  //     "Contar con computadora o notebook.",
  //     "Tener conexión a internet.",
  //     "Instalar Visual Studio Code y navegador actualizado.",
  //   ],

  //   precio: 0,
  //   precioOriginal: 0,
  //   descuento: 0,

  //   fileURL: courseImage,

  //   modalidad: {
  //     enVivo: true,
  //     onDemand: true,
  //   },

  //   highlights: [
  //     "11 semanas",
  //     "Nivel inicial",
  //     "2 clases semanales",
  //     "HTML + CSS",
  //     "Responsive Design",
  //     "JavaScript básico",
  //   ],

  //   incluye: [
  //     "Introducción al mundo web.",
  //     "Maquetación con HTML.",
  //     "Estilos con CSS.",
  //     "Diseño responsive.",
  //     "Fundamentos de JavaScript.",
  //     "Proyecto final publicado.",
  //   ],

  //   evaluacion: [
  //     "Ejercicios prácticos por unidad.",
  //     "Correcciones durante el proceso.",
  //     "Entrega de avances.",
  //     "Proyecto final integrador.",
  //   ],

  //   programa: [
  //     {
  //       title: "Semana 1 — Conociendo el mundo web y configuración del entorno",
  //       description:
  //         "Introducción a internet, páginas web, rol del navegador, estructura básica de un proyecto, instalación de herramientas y primeros pasos con Visual Studio Code.",
  //     },
  //     {
  //       title: "Semanas 2 y 3 — HTML",
  //       description:
  //         "Estructura de documentos HTML, etiquetas principales, textos, enlaces, imágenes, listas, formularios y organización semántica del contenido.",
  //     },
  //     {
  //       title: "Semanas 4 y 5 — CSS",
  //       description:
  //         "Selectores, colores, tipografías, márgenes, paddings, modelo de caja, estilos reutilizables y diseño visual básico de páginas web.",
  //     },
  //     {
  //       title: "Semanas 6 y 7 — Flexbox y Grid",
  //       description:
  //         "Maquetación moderna con Flexbox y CSS Grid, distribución de elementos, diseño responsive y adaptación a distintos tamaños de pantalla.",
  //     },
  //     {
  //       title: "Semanas 8, 9 y 10 — JavaScript básico",
  //       description:
  //         "Introducción a JavaScript, variables, tipos de datos, condicionales, funciones, eventos, manipulación básica del DOM e interactividad en páginas web.",
  //     },
  //     {
  //       title: "Semana 11 — Proyecto final",
  //       description:
  //         "Desarrollo, revisión y presentación de un sitio web integrador utilizando HTML, CSS, diseño responsive y JavaScript básico.",
  //     },
  //   ],

  //   faqs: [
  //     {
  //       pregunta: "¿Necesito experiencia previa en programación?",
  //       respuesta:
  //         "No. El curso inicia desde cero y acompaña paso a paso el proceso de creación de páginas web.",
  //     },
  //     {
  //       pregunta: "¿Qué tecnologías se aprenden?",
  //       respuesta:
  //         "Se trabajan HTML, CSS, diseño responsive, GitHub, despliegue y fundamentos de JavaScript.",
  //     },
  //     {
  //       pregunta: "¿La inscripción ya está habilitada?",
  //       respuesta:
  //         "No. Las inscripciones serán habilitadas cuando se confirmen las fechas y horarios.",
  //     },
  //     {
  //       pregunta: "¿Las fechas y horarios ya están definidos?",
  //       respuesta:
  //         "Todavía no. Por el momento las fechas de inicio, finalización y horarios quedan a definir.",
  //     },
  //   ],
  // },
  {
    slug: "programacion-desde-cero",
    backendCourseId: 3,

    titulo: "Programación desde Cero",
    title: "Programación desde Cero",

    categoria: "Programación",
    category: "Programación",

    descripcion:
      "Aprendé lógica, algoritmos, pseudocódigo, Python básico y tus primeros pasos en desarrollo web.",
    owner: "Stack Paraguay",
    descripcionLarga:
      "Este programa está pensado para personas que quieren empezar a programar desde cero. La ruta inicia con fundamentos de programación: lógica, algoritmos, pseudocódigo en PSeInt y Python básico. Luego continúa con una introducción al desarrollo web usando HTML, CSS, JavaScript, una primera mirada a React, conceptos básicos de backend y una pincelada de deploy.",

    duracion: "24 semanas",
    dedicacion: "Clases guiadas + práctica semanal",
    modalidad: "Presencial / híbrido según grupo",

    precio: 300000,
    precioOriginal: 0,
    matricula: 0,

    inscriptionEnabled: true,

    fileURL: stack,

    highlights: [
      "Desde cero",
      // "Módulo 1: 2 meses",
      // "Lógica + Python",
      "Desarrollo web inicial",
      "Proyecto introductorio",
    ],

    tags: ["PSeInt", "Python", "HTML", "CSS", "JavaScript", "React básico"],

    incluye: [
      "Clases paso a paso desde cero",
      "Ejercicios de lógica y algoritmos",
      "Práctica con PSeInt y Python",
      "Materiales digitales de apoyo",
      "Introducción al desarrollo web",
      "Acompañamiento durante el proceso",
    ],

    aprenderas: [
      "Comprender la lógica básica detrás de un programa.",
      "Resolver problemas usando algoritmos y pseudocódigo.",
      "Practicar estructuras fundamentales como variables, condicionales y ciclos.",
      "Crear ejercicios básicos en Python.",
      "Construir páginas simples con HTML, CSS y JavaScript.",
      "Conocer de forma introductoria React, backend y deploy.",
    ],

    requisitos: [
      "No se necesita experiencia previa.",
      "Contar con una computadora para practicar.",
      "Tener ganas de resolver ejercicios y avanzar paso a paso.",
    ],

    modules: [
      {
        title: "Fundamentos de Programación",
        duration: "2 meses",
        lectures: 8,
        description:
          "Base inicial para aprender a pensar como programador/a y resolver problemas de forma ordenada.",
        lessons: [
          "Bienvenida y presentación del camino de aprendizaje",
          "¿Qué es programar?",
          "Lógica de programación",
          "Algoritmos y resolución de problemas",
          "Pseudocódigo con PSeInt",
          "Variables, operadores y expresiones",
          "Condicionales y ciclos",
          "Introducción a Python básico",
        ],
      },
      {
        title: "Introducción al Desarrollo Web",
        duration: "Continuidad del programa",
        lectures: 16,
        description:
          "Primer acercamiento al desarrollo de páginas web y conceptos básicos del ecosistema web.",
        lessons: [
          "Cómo funciona la web",
          "HTML: estructura de una página",
          "HTML: Práctica guiada",
          "CSS: estilos y diseño visual",
          "CSS: Práctica guiada",
          "JavaScript para interacción",
          "JavaScript: Práctica guiada",
          "DOM y eventos básicos",
          "Introducción a React",
          "Eventos y hooks en React",
          "JavaScript II: Práctica guiada",
          "React: Práctica guiada",
          "Vista básica de backend",
          "Node: API, CRUD, status code",
          "Node: Práctica guiada",
          "Primer deploy de una página",
        ],
      },
    ],
  },
];
