import * as React from "react";
import { useParams, Link } from "react-router-dom";
import { courses } from "../../../data/coursesMock";
import SectionFadeIn from "../../../components/common/SectionFadeIn";
import useDisplay from "../../../hooks/use-display";
import CoursesBreadcrumbs from "../../../components/courses/CoursesBreadcrumbs";
import {
  formatGs,
  getCourseBenefits,
  getCourseDates,
  getCourseFaqs,
  getCourseModules,
  getCourseView,
  getEnrollmentButtonLabel,
  getEnrollmentDisabledMessage,
  getCourseWhatsappUrl,
  isCourseEnrollmentEnabled,
} from "../../../utils/courseView";

import { getCourseDiscountInfo } from "../../../utils/courseView";
import contactUs from "../../../pages/store/data/contact";
import { useScrollToTopWindow } from "../../../hooks/use-scrollToTop";

const WHATSAPP_URL = contactUs.walink;

const getDiscountInfo = (course: any, item: any) => {
  const currentPrice = Number(item?.price || course?.precio || 0);

  const itemOldPrice = Number(item?.oldPrice || 0);
  const courseOldPrice = Number(course?.precioOriginal || 0);

  const oldPrice =
    itemOldPrice > currentPrice
      ? itemOldPrice
      : courseOldPrice > currentPrice
        ? courseOldPrice
        : 0;

  const discountPercent = Number(course?.descuento || 0);
  const hasDiscount = currentPrice > 0 && oldPrice > currentPrice;
  const discountAmount = hasDiscount ? oldPrice - currentPrice : 0;

  return {
    currentPrice,
    oldPrice,
    discountPercent,
    discountAmount,
    hasDiscount,
    label: course?.promoLabel || `${discountPercent}% OFF`,
    text: course?.promoText || "Semana de descuento",
    until: course?.promoUntil || "",
  };
};

export const CourseDetailPage = () => {
  const { slugCurso } = useParams();
  const course = courses.find((c: any) => c.slug === slugCurso);
  const display = useDisplay();

  useScrollToTopWindow();

  if (!course) {
    return (
      <div className="ap-bg-[#F3EEDC] ap-min-h-screen ap-flex ap-items-center ap-justify-center">
        <p className="ap-text-[#111111] ap-font-semibold">
          Curso no encontrado
        </p>
      </div>
    );
  }

  const item = getCourseView(course);
  const benefits = getCourseBenefits(course);
  const modules = React.useMemo(() => {
    const rawModules = Array.isArray((course as any).modules)
      ? (course as any).modules
      : Array.isArray((course as any).programa)
        ? (course as any).programa
        : getCourseModules(course);

    return rawModules.map((module: any, index: number) => {
      if (typeof module === "string") {
        return {
          title: module,
          duration: "",
          description: "",
          lessons: [],
          classCount: 0,
        };
      }

      return {
        ...module,
        title: module.title ?? module.titulo ?? `Módulo ${index + 1}`,
        duration: module.duration ?? module.duracion ?? "",
        description: module.description ?? module.descripcion ?? "",
        lessons:
          module.lessons ??
          module.topics ??
          module.clases ??
          module.temas ??
          [],
        classCount:
          module.classCount ??
          module.classes ??
          module.lectures ??
          module.clasesCantidad ??
          0,
      };
    });
  }, [course]);
  const dates = getCourseDates(course);
  const faqs = getCourseFaqs(course);

  return (
    <SectionFadeIn className="ap-bg-[#F3EEDC] ap-min-h-screen ap-flex ap-flex-col ap-pb-0">
      <section className="ap-bg-[#111111] ap-text-white">
        <div
          className={`ap-max-w-[1240px] ap-mx-auto ap-grid ap-gap-10 ${
            display.mdAndDown
              ? "ap-grid-cols-1 ap-px-5 ap-pt-8 ap-pb-10"
              : "ap-grid-cols-[minmax(0,1fr)_370px] ap-px-8 ap-pt-12 ap-pb-12"
          }`}
        >
          <div className="ap-min-w-0">
            <CoursesBreadcrumbs
              isDarkMode={true}
              items={[
                { label: "Inicio", to: "/" },
                { label: "Cursos", to: "/cursos" },
                { label: item.title, active: true },
              ]}
            />

            <div className="ap-mt-8">
              <p className="ap-text-[#FFC730] ap-text-sm ap-font-extrabold ap-mb-4">
                {item.category}
              </p>

              <h1 className="ap-text-white ap-font-extrabold ap-leading-tight ap-text-3xl md:ap-text-5xl ap-max-w-4xl">
                {item.title}
              </h1>

              <p className="ap-text-gray-200 ap-text-base md:ap-text-xl ap-leading-8 ap-mt-5 ap-max-w-3xl">
                {item.description}
              </p>

              <div className="ap-flex ap-flex-wrap ap-gap-3 ap-mt-6">
                {(course.highlights ?? [])
                  .slice(0, 5)
                  .map((highlight: string) => (
                    <span
                      key={highlight}
                      className="ap-inline-flex ap-items-center ap-gap-2 ap-bg-[#1A1A1A] ap-border ap-border-[#333333] ap-rounded-full ap-px-4 ap-py-2 ap-text-sm ap-font-semibold ap-text-gray-100"
                    >
                      <span className="ap-w-2 ap-h-2 ap-bg-[#FFC730] ap-rounded-full" />
                      {highlight}
                    </span>
                  ))}
              </div>

              {/* <div className="ap-flex ap-flex-wrap ap-gap-x-6 ap-gap-y-2 ap-mt-7 ap-text-sm ap-text-gray-300">
                <span>Actualizado para 2026</span>
                <span>Español</span>
                <span>{item.modality}</span>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      <section className="ap-bg-[#F3EEDC]">
        <div
          className={`ap-max-w-[1240px] ap-mx-auto ap-grid ap-gap-10 ${
            display.mdAndDown
              ? "ap-grid-cols-1 ap-px-5 ap-py-8"
              : "ap-grid-cols-[minmax(0,1fr)_370px] ap-px-8 ap-py-10"
          }`}
        >
          <main className="ap-flex ap-flex-col ap-gap-9 ap-min-w-0">
            {/* {display.mdAndDown && <EnrollmentAside course={course} />} */}

            <CourseSummaryStrip course={course} item={item} modules={modules} />

            <WhatYouWillLearn items={course.aprenderas ?? benefits} />

            <RelatedTopics tags={item.tags ?? course.tags ?? []} />

            <CourseIncludes items={course.incluye ?? []} />

            <CourseContent course={course} modules={modules} />

            <Requirements items={course.requisitos ?? []} />

            <CourseDescription
              text={course.descripcionLarga ?? item.description}
            />

            <CourseDates dates={dates} />

            <FaqSection faqs={faqs} />
          </main>

          {!display.mdAndDown && (
            <div className="ap-hidden lg:ap-block" style={{ marginTop: -380 }}>
              <EnrollmentAside course={course} />
            </div>
          )}
        </div>
      </section>

      {display.mdAndDown && <MobileEnrollmentBar course={course} />}
    </SectionFadeIn>
  );
};

const getModuleLessons = (module: any) => {
  const lessons =
    module.lessons ?? module.topics ?? module.clases ?? module.temas ?? [];

  return Array.isArray(lessons) ? lessons : [];
};

const getModuleClassCount = (module: any) => {
  const lessons = getModuleLessons(module);

  if (lessons.length > 0) {
    return lessons.length;
  }

  return Number(
    module.classCount ??
      module.classes ??
      module.lectures ??
      module.clasesCantidad ??
      0,
  );
};

const getTotalClassCount = (course: any, modules: any[]) => {
  const explicitTotal = Number(
    course.totalClasses ?? course.totalClases ?? course.clasesTotales ?? 0,
  );

  if (explicitTotal > 0) {
    return explicitTotal;
  }

  return modules.reduce((acc, module) => {
    return acc + getModuleClassCount(module);
  }, 0);
};

const CourseSummaryStrip = ({
  course,
  item,
  modules,
}: {
  course: any;
  item: any;
  modules: any[];
}) => {
  const totalLessons = getTotalClassCount(course, modules);
  const moduleLabel = course.moduleLabel ?? "módulos";

  return (
    <div className="ap-bg-[#FFFDF7] ap-border ap-border-[#DDD3B8] ap-rounded-2xl ap-overflow-hidden ap-shadow-[0_16px_45px_rgba(70,55,20,0.08)]">
      <div className="ap-grid md:ap-grid-cols-[150px_1fr_160px_160px]">
        <div className="ap-bg-[#FFC730] ap-flex ap-items-center ap-justify-center ap-p-5">
          <p className="ap-text-[#111111] ap-font-extrabold ap-text-center">
            {course.summaryLabel ?? "Ruta inicial"}
          </p>
        </div>

        <div className="ap-p-5 ap-border-b md:ap-border-b-0 md:ap-border-r ap-border-[#E7DEC8]">
          <p className="ap-text-[#111111] ap-font-bold">
            {course.summaryTitle ??
              "Fundamentos de programación + desarrollo web inicial"}
          </p>

          <p className="ap-text-[#5D574A] ap-text-sm ap-mt-1">
            {course.summaryDescription ??
              "Una ruta pensada para empezar desde cero y avanzar paso a paso."}
          </p>
        </div>

        <div className="ap-p-5 ap-border-b md:ap-border-b-0 md:ap-border-r ap-border-[#E7DEC8]">
          <p className="ap-text-2xl ap-font-extrabold ap-text-[#111111]">
            {modules.length}
          </p>
          <p className="ap-text-sm ap-text-[#5D574A]">{moduleLabel}</p>
        </div>

        <div className="ap-p-5">
          <p className="ap-text-2xl ap-font-extrabold ap-text-[#111111]">
            {totalLessons}
          </p>
          <p className="ap-text-sm ap-text-[#5D574A]">clases aprox.</p>
        </div>
      </div>
    </div>
  );
};

const EnrollmentAside = ({ course }: { course: any }) => {
  const item = getCourseView(course);
  const whatsappUrl = getCourseWhatsappUrl(course) || WHATSAPP_URL;
  const discount = getDiscountInfo(course, item);

  return (
    <aside className="ap-bg-[#FFFDF7] ap-text-[#111111] ap-border ap-border-[#DDD3B8] ap-rounded-2xl ap-overflow-hidden ap-shadow-[0_24px_70px_rgba(0,0,0,0.18)] ap-h-fit lg:ap-sticky lg:ap-top-[105px]">
      <div className="ap-relative ap-h-[165px] ap-bg-[#111111]">
        {course.fileURL ? (
          <img
            src={course.fileURL}
            alt={item.title}
            className="ap-w-full ap-h-full ap-object-cover"
          />
        ) : (
          <div className="ap-w-full ap-h-full ap-bg-[radial-gradient(circle_at_top_left,#FFC730_0%,#1B1B1B_42%,#111111_100%)]" />
        )}
        {discount.hasDiscount && (
          <div className="ap-absolute ap-top-3 ap-right-3 ap-rounded-full ap-bg-[#FFC730] ap-px-4 ap-py-2 ap-text-xs ap-font-extrabold ap-text-[#111111] ap-shadow-lg">
            {discount.label}
          </div>
        )}
      </div>

      <div className="ap-p-5">
        <div className="ap-flex ap-items-center ap-justify-between ap-gap-3">
          <span className="ap-bg-[#FFF1B8] ap-text-[#8A6A00] ap-border ap-border-[#FFE27A] ap-text-xs ap-font-extrabold ap-rounded-full ap-px-3 ap-py-1">
            Inscripción 2026
          </span>

          <span className="ap-text-xs ap-font-bold ap-text-[#7C745F]">
            Cupos limitados
          </span>
        </div>

        <div className="ap-mt-4">
          {item.price > 0 ? (
            <div className="ap-flex ap-flex-col ap-gap-2">
              {discount.hasDiscount && (
                <div className="ap-inline-flex ap-w-fit ap-items-center ap-gap-2 ap-rounded-full ap-bg-[#FFF1B8] ap-border ap-border-[#FFE27A] ap-px-3 ap-py-1">
                  <span className="ap-text-xs ap-font-extrabold ap-text-[#8A6A00]">
                    {discount.text}
                  </span>
                  <span className="ap-text-xs ap-font-extrabold ap-text-[#111111]">
                    {discount.label}
                  </span>
                </div>
              )}

              {discount.hasDiscount && (
                <div className="ap-flex ap-items-center ap-gap-2">
                  <span className="ap-text-sm ap-font-semibold ap-text-[#8D8573]">
                    Antes
                  </span>
                  <span className="ap-text-lg ap-font-extrabold ap-text-[#8D8573] ap-line-through">
                    {formatGs(discount.oldPrice)}
                  </span>
                </div>
              )}

              <div className="ap-flex ap-items-end ap-gap-2 ap-flex-wrap">
                <strong className="ap-text-3xl ap-font-extrabold">
                  {formatGs(item.price)}
                </strong>

                <span className="ap-text-[#8A6A00] ap-font-bold ap-mb-1">
                  / mes
                </span>
              </div>

              {discount.hasDiscount && (
                <div className="ap-rounded-xl ap-bg-[#E7F8D8] ap-border ap-border-[#B8E986] ap-px-3 ap-py-2">
                  <p className="ap-text-xs ap-font-bold ap-text-[#245A16]">
                    Ahorrás {formatGs(discount.discountAmount)} por mes.
                  </p>
                  {discount.until && (
                    <p className="ap-text-[11px] ap-text-[#3C6D2A] ap-mt-0.5">
                      {discount.until}
                    </p>
                  )}
                </div>
              )}
            </div>
          ) : (
            <>
              <p className="ap-text-sm ap-text-[#5D574A] ap-font-medium">
                Inversión
              </p>

              <strong className="ap-text-3xl ap-font-extrabold">
                Consultar
              </strong>
            </>
          )}
        </div>

        <p className="ap-text-sm ap-text-[#5D574A] ap-mt-2">
          Matrícula:{" "}
          <strong className="ap-text-[#111111]">
            {Number(course.matricula ?? 0) === 0
              ? "Sin matrícula"
              : formatGs(course.matricula)}
          </strong>
        </p>

        {isCourseEnrollmentEnabled(course) ? (
          <Link
            to={`/checkout/${item.slug}`}
            className="ap-mt-5 ap-flex ap-items-center ap-justify-center ap-bg-[#FFC730] hover:ap-bg-[#FFD95C] ap-text-[#111111] ap-font-extrabold ap-rounded-xl ap-px-5 ap-py-3.5 ap-transition"
          >
            {getEnrollmentButtonLabel(course)}
          </Link>
        ) : (
          <button
            type="button"
            disabled
            className="ap-mt-5 ap-flex ap-w-full ap-items-center ap-justify-center ap-bg-[#DED4BB] ap-text-[#8D8573] ap-font-extrabold ap-rounded-xl ap-px-5 ap-py-3.5 ap-cursor-not-allowed"
          >
            {getEnrollmentButtonLabel(course)}
          </button>
        )}

        {!isCourseEnrollmentEnabled(course) && (
          <p className="ap-text-xs ap-text-[#8A6A00] ap-font-semibold ap-leading-5 ap-mt-3">
            {getEnrollmentDisabledMessage(course)}
          </p>
        )}

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="ap-mt-3 ap-flex ap-items-center ap-justify-center ap-bg-[#F4EEDC] hover:ap-bg-[#EFE4C8] ap-text-[#111111] ap-border ap-border-[#DED4BB] ap-font-extrabold ap-rounded-xl ap-px-5 ap-py-3 ap-transition"
        >
          Consultar por WhatsApp
        </a>

        <div className="ap-mt-5 ap-bg-[#F4EEDC] ap-rounded-2xl ap-border ap-border-[#DED4BB] ap-p-4 ap-flex ap-flex-col ap-gap-3">
          <SummaryRow label="Programa" value={item.title} />
          <SummaryRow label="Duración" value={item.duration} />
          <SummaryRow label="Modalidad" value={item.modality} />
        </div>
      </div>
    </aside>
  );
};

const SummaryRow = ({ label, value }: { label: string; value: string }) => (
  <div className="ap-flex ap-justify-between ap-gap-4 ap-text-sm">
    <span className="ap-text-[#6D6658]">{label}</span>
    <span className="ap-font-extrabold ap-text-right ap-text-[#111111]">
      {value}
    </span>
  </div>
);

const WhatYouWillLearn = ({ items }: { items: string[] }) => (
  <section className="ap-bg-[#FFFDF7] ap-border ap-border-[#DDD3B8] ap-rounded-2xl ap-p-6">
    <h2 className="ap-text-2xl ap-font-extrabold ap-text-[#111111]">
      Lo que vas a aprender
    </h2>

    <div className="ap-grid md:ap-grid-cols-2 ap-gap-x-8 ap-gap-y-4 ap-mt-5">
      {items.map((item) => (
        <div key={item} className="ap-flex ap-items-start ap-gap-3">
          <span className="ap-text-[#8A6A00] ap-font-extrabold">✓</span>
          <p className="ap-text-sm ap-leading-6 ap-text-[#322D23]">{item}</p>
        </div>
      ))}
    </div>
  </section>
);

const RelatedTopics = ({ tags }: { tags: string[] }) => (
  <section>
    <h2 className="ap-text-2xl ap-font-extrabold ap-text-[#111111]">
      Temas que vas a trabajar
    </h2>

    <div className="ap-flex ap-flex-wrap ap-gap-3 ap-mt-4">
      {tags.map((tag) => (
        <span
          key={tag}
          className="ap-bg-[#FFFDF7] ap-border ap-border-[#DDD3B8] ap-rounded-xl ap-px-5 ap-py-3 ap-text-sm ap-font-extrabold ap-text-[#111111]"
        >
          {tag}
        </span>
      ))}
    </div>
  </section>
);

const CourseIncludes = ({ items }: { items: string[] }) => (
  <section>
    <h2 className="ap-text-2xl ap-font-extrabold ap-text-[#111111]">
      Este curso incluye
    </h2>

    <div className="ap-grid md:ap-grid-cols-2 ap-gap-4 ap-mt-5">
      {items.map((item) => (
        <div
          key={item}
          className="ap-flex ap-items-start ap-gap-3 ap-bg-[#FFFDF7] ap-border ap-border-[#DDD3B8] ap-rounded-2xl ap-p-4"
        >
          <span className="ap-text-[#8A6A00] ap-font-extrabold">✓</span>
          <span className="ap-text-sm ap-leading-6 ap-text-[#322D23]">
            {item}
          </span>
        </div>
      ))}
    </div>
  </section>
);
const CourseContent = ({
  course,
  modules,
}: {
  course: any;
  modules: any[];
}) => {
  const [openIndex, setOpenIndex] = React.useState(0);

  const totalLessons = getTotalClassCount(course, modules);
  const moduleLabel = course.moduleLabel ?? "módulos";

  return (
    <section>
      <div className="ap-flex ap-items-end ap-justify-between ap-gap-4 ap-mb-4">
        <div>
          <h2 className="ap-text-2xl ap-font-extrabold ap-text-[#111111]">
            Contenido del curso
          </h2>

          <p className="ap-text-sm ap-text-[#5D574A] ap-mt-2">
            {modules.length} {moduleLabel} · {totalLessons} clases aproximadas
          </p>
        </div>
      </div>

      <div className="ap-border ap-border-[#D8D0BD] ap-rounded-2xl ap-overflow-hidden ap-bg-white">
        {modules.map((module, index) => {
          const lessons = getModuleLessons(module);
          const classCount = getModuleClassCount(module);
          const isOpen = openIndex === index;

          return (
            <div
              key={`${module.title}-${index}`}
              className="ap-border-b ap-border-[#E7DEC8] last:ap-border-b-0"
            >
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="ap-w-full ap-flex ap-items-center ap-justify-between ap-gap-4 ap-p-5 ap-bg-[#F8F4E8] hover:ap-bg-[#FFF1B8] ap-transition ap-text-left"
              >
                <div className="ap-flex ap-items-center ap-gap-3">
                  <span className="ap-text-lg ap-font-extrabold">
                    {isOpen ? "⌃" : "⌄"}
                  </span>

                  <div>
                    <p className="ap-font-extrabold ap-text-[#111111]">
                      {module.title}
                    </p>

                    {module.description && (
                      <p className="ap-text-xs ap-text-[#6D6658] ap-mt-1 ap-leading-5">
                        {module.description}
                      </p>
                    )}
                  </div>
                </div>

                <span className="ap-text-sm ap-text-[#5D574A] ap-whitespace-nowrap">
                  {classCount > 0 ? `${classCount} clases` : "Unidad"}
                  {module.duration ? ` · ${module.duration}` : ""}
                </span>
              </button>

              {isOpen && (
                <div className="ap-bg-white">
                  {lessons.length > 0 ? (
                    lessons.map((lesson: string) => (
                      <div
                        key={lesson}
                        className="ap-flex ap-items-center ap-justify-between ap-gap-4 ap-px-6 ap-py-4 ap-border-t ap-border-[#EFE7D5]"
                      >
                        <div className="ap-flex ap-items-center ap-gap-3">
                          <span className="ap-text-[#8A6A00]">▸</span>
                          <p className="ap-text-sm ap-text-[#322D23]">
                            {lesson}
                          </p>
                        </div>

                        <span className="ap-text-xs ap-text-[#8D8573]">
                          Clase
                        </span>
                      </div>
                    ))
                  ) : (
                    <div className="ap-px-6 ap-py-5 ap-border-t ap-border-[#EFE7D5]">
                      <p className="ap-text-sm ap-text-[#322D23] ap-leading-7">
                        {module.description ??
                          "Contenido desarrollado durante esta unidad."}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

const Requirements = ({ items }: { items: string[] }) => {
  if (!items.length) return null;

  return (
    <section>
      <h2 className="ap-text-2xl ap-font-extrabold ap-text-[#111111]">
        Requisitos
      </h2>

      <ul className="ap-mt-4 ap-flex ap-flex-col ap-gap-2">
        {items.map((item) => (
          <li
            key={item}
            className="ap-flex ap-items-start ap-gap-3 ap-text-[#322D23]"
          >
            <span className="ap-text-[#8A6A00] ap-font-extrabold">•</span>
            <span className="ap-text-sm ap-leading-6">{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

const CourseDescription = ({ text }: { text: string }) => (
  <section>
    <h2 className="ap-text-2xl ap-font-extrabold ap-text-[#111111]">
      Descripción
    </h2>

    <p className="ap-text-[#4E473A] ap-text-sm md:ap-text-base ap-leading-8 ap-mt-4 ap-max-w-3xl">
      {text}
    </p>
  </section>
);

const CourseDates = ({ dates }: { dates: any[] }) => {
  if (!dates.length) return null;

  return (
    <section>
      <h2 className="ap-text-2xl ap-font-extrabold ap-text-[#111111]">
        Próximas fechas
      </h2>

      <div className="ap-flex ap-flex-col ap-gap-4 ap-mt-5">
        {dates.map((date: any, index: number) => (
          <div
            key={`${date.date}-${index}`}
            className="ap-bg-[#FFFDF7] ap-border ap-border-[#DDD3B8] ap-rounded-2xl ap-p-5 ap-flex ap-flex-col md:ap-flex-row md:ap-items-center md:ap-justify-between ap-gap-4"
          >
            <div>
              <p className="ap-text-[#111111] ap-font-extrabold ap-text-lg">
                {date.date}
              </p>

              <p className="ap-text-[#5D574A] ap-font-medium ap-text-sm ap-mt-1">
                {date.time}
              </p>

              {date.spots && (
                <p className="ap-text-[#8A6A00] ap-font-bold ap-text-xs ap-mt-2">
                  {date.spots}
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const FaqSection = ({ faqs }: { faqs: any[] }) => {
  if (!faqs.length) return null;

  return (
    <section>
      <h2 className="ap-text-2xl ap-font-extrabold ap-text-[#111111]">
        Información importante
      </h2>

      <div className="ap-flex ap-flex-col ap-gap-3 ap-mt-5">
        {faqs.map((faq: any, index: number) => (
          <details
            key={`${faq.question}-${index}`}
            className="ap-bg-[#FFFDF7] ap-border ap-border-[#DDD3B8] ap-rounded-2xl ap-p-5 ap-group"
          >
            <summary className="ap-cursor-pointer ap-list-none ap-flex ap-items-center ap-justify-between ap-gap-4">
              <span className="ap-text-[#111111] ap-font-bold">
                {faq.question}
              </span>

              <span className="ap-text-[#8A6A00] ap-font-extrabold group-open:ap-rotate-180 ap-transition">
                ↓
              </span>
            </summary>

            <p className="ap-text-[#5D574A] ap-text-sm ap-leading-6 ap-mt-4">
              {faq.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
};

const MobileEnrollmentBar = ({ course }: { course: any }) => {
  const item = getCourseView(course);
  const discount = getCourseDiscountInfo(course, item);

  return (
    <div className="ap-fixed ap-bottom-0 ap-left-0 ap-right-0 ap-z-[100000] ap-bg-[#FFFDF7] ap-border-t ap-border-[#DDD3B8] ap-p-4 ap-shadow-[0_-12px_35px_rgba(70,55,20,0.12)]">
      <div className="ap-flex ap-items-start ap-justify-between ap-gap-3 ap-mb-3">
        <div className="ap-min-w-0 ap-flex-1">
          <span className="ap-block ap-text-[#111111] ap-text-sm ap-font-bold ap-line-clamp-1">
            {item.title}
          </span>

          {discount.hasDiscount && (
            <div className="ap-mt-1 ap-flex ap-flex-wrap ap-items-center ap-gap-2">
              <span className="ap-rounded-full ap-bg-[#FFC730] ap-px-2 ap-py-0.5 ap-text-[10px] ap-font-extrabold ap-text-[#111111]">
                {discount.label}
              </span>

              <span className="ap-text-xs ap-font-bold ap-text-[#8D8573] ap-line-through">
                {formatGs(discount.oldPrice)}
              </span>
            </div>
          )}

          {discount.hasDiscount && (
            <span className="ap-mt-1 ap-block ap-text-[11px] ap-font-bold ap-text-[#245A16]">
              Ahorrás {formatGs(discount.discountAmount)} por mes
            </span>
          )}
        </div>

        <div className="ap-shrink-0 ap-text-right">
          <span className="ap-block ap-text-[#8A6A00] ap-text-lg ap-font-extrabold">
            {item.price > 0 ? formatGs(item.price) : "Consultar"}
          </span>

          {item.price > 0 && (
            <span className="ap-block ap-text-[11px] ap-font-bold ap-text-[#8D8573]">
              / mes
            </span>
          )}
        </div>
      </div>

      {discount.hasDiscount && discount.until && (
        <div className="ap-mb-3 ap-rounded-xl ap-border ap-border-[#B8E986] ap-bg-[#E7F8D8] ap-px-3 ap-py-2">
          <p className="ap-text-[11px] ap-font-bold ap-text-[#245A16]">
            {discount.text} · {discount.until}
          </p>
        </div>
      )}

      {isCourseEnrollmentEnabled(course) ? (
        <Link
          to={`/checkout/${item.slug}`}
          className="ap-flex ap-w-full ap-items-center ap-justify-center ap-bg-[#FFC730] ap-text-[#111111] ap-font-extrabold ap-rounded-full ap-px-5 ap-py-3"
        >
          {getEnrollmentButtonLabel(course)}
        </Link>
      ) : (
        <button
          type="button"
          disabled
          className="ap-flex ap-w-full ap-items-center ap-justify-center ap-bg-[#DED4BB] ap-text-[#8D8573] ap-font-extrabold ap-rounded-full ap-px-5 ap-py-3 ap-cursor-not-allowed"
        >
          {getEnrollmentButtonLabel(course)}
        </button>
      )}
    </div>
  );
};
