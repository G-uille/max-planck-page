const toText = (value: any, fallback = ""): string => {
  if (value === null || value === undefined) return fallback;

  if (typeof value === "string") return value;

  if (typeof value === "number") return String(value);

  if (typeof value === "boolean") return value ? fallback : "";

  if (Array.isArray(value)) {
    return value
      .map((item) => toText(item, ""))
      .filter(Boolean)
      .join(" + ");
  }

  if (typeof value === "object") {
    if (value.label) return toText(value.label, fallback);
    if (value.title) return toText(value.title, fallback);
    if (value.titulo) return toText(value.titulo, fallback);
    if (value.nombre) return toText(value.nombre, fallback);
    if (value.name) return toText(value.name, fallback);
    if (value.descripcion) return toText(value.descripcion, fallback);
    if (value.description) return toText(value.description, fallback);

    return fallback;
  }

  return fallback;
};

export const parsePrice = (value: any): number => {
  if (!value) return 0;

  if (typeof value === "number") return value;

  if (typeof value === "string") {
    const clean = value.replace(/\D/g, "");
    return Number(clean) || 0;
  }

  return 0;
};

const normalizeModality = (value: any): string => {
  if (!value) return "Clases en vivo + materiales digitales";

  if (typeof value === "string") return value;

  if (Array.isArray(value)) {
    return value
      .map((item) => normalizeModality(item))
      .filter(Boolean)
      .join(" + ");
  }

  if (typeof value === "object") {
    const parts: string[] = [];

    if (value.enVivo) {
      parts.push(
        typeof value.enVivo === "string" ? value.enVivo : "Clases en vivo",
      );
    }

    if (value.onDemand) {
      parts.push(
        typeof value.onDemand === "string"
          ? value.onDemand
          : "Materiales digitales",
      );
    }

    if (value.presencial) {
      parts.push(
        typeof value.presencial === "string"
          ? value.presencial
          : "Clases presenciales",
      );
    }

    if (value.virtual) {
      parts.push(
        typeof value.virtual === "string" ? value.virtual : "Clases virtuales",
      );
    }

    if (parts.length > 0) return parts.join(" + ");

    return toText(value, "Clases en vivo + materiales digitales");
  }

  return "Clases en vivo + materiales digitales";
};

const normalizeTags = (tags: any, fallbackTags: string[]) => {
  if (!Array.isArray(tags)) return fallbackTags;

  const cleanTags = tags
    .map((tag) => toText(tag, ""))
    .filter((tag) => tag.trim() !== "");

  return cleanTags.length > 0 ? cleanTags : fallbackTags;
};

export const formatGs = (value?: number) => {
  if (!value || value <= 0) return "Consultar";

  return value
    .toLocaleString("es-PY", {
      style: "currency",
      currency: "PYG",
      maximumFractionDigits: 0,
    })
    .replace("PYG", "Gs.");
};

export const getCourseView = (course: any) => {
  const rawDuration =
    course.duracion ?? course.duration ?? course.semanas ?? course.weeks;

  const duration = toText(rawDuration, "Programa completo");

  const finalDuration =
    course.semanas && !course.duracion && !course.duration
      ? `${course.semanas} semanas`
      : duration;

  const modality = normalizeModality(course.modalidad ?? course.modality);

  const audience = toText(
    course.publico ?? course.audience ?? course.nivel,
    "Estudiantes y postulantes",
  );

  const owner = toText(course.owner ?? "Max Planck");

  const category = toText(course.categoria ?? course.category, "Programa 2026");

  const title = toText(course.titulo ?? course.title ?? course.nombre, "Curso");

  const description = toText(
    course.descripcion ?? course.description ?? course.shortDescription,
    "Programa académico con clases, práctica guiada, materiales digitales y acompañamiento docente.",
  );

  const price = parsePrice(course.precio ?? course.price);
  const oldPrice = parsePrice(course.precioAnterior ?? course.oldPrice);

  const fallbackTags = [finalDuration, modality, audience];

  return {
    slug: course.slug,
    title,
    category,
    description,
    duration: finalDuration,
    modality,
    audience,
    owner,
    price,
    oldPrice,
    tags: normalizeTags(course.tags, fallbackTags),
  };
};

export const getCourseBenefits = (course: any): string[] => {
  const source =
    course.beneficios ??
    course.benefits ??
    course.aprenderas ??
    course.objetivos ??
    [];

  if (Array.isArray(source) && source.length > 0) {
    return source.map((item) => toText(item, "")).filter(Boolean);
  }

  return [
    "Clases organizadas por temas.",
    "Materiales digitales para practicar.",
    "Ejercicios y acompañamiento académico.",
    "Orientación para avanzar con mayor seguridad.",
  ];
};

export const getCourseModules = (course: any): string[] => {
  const source =
    course.programa ??
    course.modules ??
    course.modulos ??
    course.contenidos ??
    [];

  if (Array.isArray(source) && source.length > 0) {
    return source.map((item) => toText(item, "")).filter(Boolean);
  }

  return [
    "Diagnóstico inicial y organización del plan de estudio.",
    "Desarrollo de contenidos fundamentales.",
    "Resolución de ejercicios guiados.",
    "Prácticas, correcciones y simulacros.",
  ];
};

export const getCourseDates = (course: any) => {
  const source = course.fechas ?? course.dates ?? course.proximasFechas ?? [];

  if (Array.isArray(source) && source.length > 0) {
    return source.map((item: any) => {
      if (typeof item === "string") {
        return {
          date: item,
          time: "Horario a confirmar",
          spots: "",
        };
      }

      return {
        date: toText(
          item.fecha ?? item.date ?? item.label,
          "Fecha a confirmar",
        ),
        time: toText(
          item.hora ?? item.time ?? item.horario,
          "Horario a confirmar",
        ),
        spots: toText(item.cupos ?? item.spots ?? item.lugares, ""),
      };
    });
  }

  return [
    {
      date: "Inicio próximo",
      time: "Horario a confirmar",
      spots: "Cupos limitados",
    },
  ];
};

export const getCourseFaqs = (course: any) => {
  const source = course.faqs ?? course.preguntasFrecuentes ?? [];

  if (Array.isArray(source) && source.length > 0) {
    return source.map((item: any) => ({
      question: toText(item.question ?? item.pregunta, "Pregunta"),
      answer: toText(item.answer ?? item.respuesta, "Información a confirmar."),
    }));
  }

  return [
    {
      question: "¿Cómo es la modalidad de cursado?",
      answer:
        "El programa combina clases, práctica, materiales digitales y acompañamiento académico.",
    },
    {
      question: "¿Cómo se confirma la inscripción?",
      answer:
        "Completando el formulario de inscripción. Luego el equipo académico se comunica para validar los datos.",
    },
    {
      question: "¿Recibo materiales de estudio?",
      answer:
        "Sí. El programa contempla materiales digitales y actividades de práctica.",
    },
  ];
};

export const isCourseEnrollmentEnabled = (course: any): boolean => {
  return course?.inscriptionEnabled === true;
};

export const getEnrollmentDisabledMessage = (course: any): string => {
  return (
    course?.inscriptionDisabledMessage ??
    "La inscripción para este curso todavía no está habilitada."
  );
};

export const getEnrollmentButtonLabel = (course: any): string => {
  if (isCourseEnrollmentEnabled(course)) return "Iniciar inscripción";

  return course?.inscriptionDisabledLabel ?? "Inscripción no habilitada";
};

export const normalizeWhatsappPhone = (phone: string) => {
  if (!phone) return "";

  let clean = phone.replace(/\D/g, "");

  if (clean.startsWith("0")) {
    clean = `595${clean.substring(1)}`;
  }

  if (!clean.startsWith("595")) {
    clean = `595${clean}`;
  }

  return clean;
};

export const getCourseWhatsappUrl = (course: any): string => {
  const item = getCourseView(course);

  const phone = normalizeWhatsappPhone(
    course?.consultWhatsappPhone ?? course?.whatsappPhone ?? "595976329473",
  );

  const message =
    course?.consultWhatsappMessage ??
    `Hola, me interesaría saber más sobre el curso de ${item.title}.`;

  return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
};
