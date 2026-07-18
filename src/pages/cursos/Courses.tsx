import * as React from "react";
import { Link } from "react-router-dom";
import useDisplay from "../../hooks/use-display";
import { courses } from "../../data/coursesMock";
import SectionFadeIn from "../../components/common/SectionFadeIn";
import { useScrollToTopWindow } from "../../hooks/use-scrollToTop";
import CoursesBreadcrumbs from "../../components/courses/CoursesBreadcrumbs";
import { formatGs, getCourseView } from "../../utils/courseView";
import contactUs from "../store/data/contact";

const WHATSAPP_URL = contactUs.walink;

const getDiscountInfo = (course: any, item: any) => {
  const currentPrice = Number(item?.price ?? course?.precio ?? 0);
  const oldPrice = Number(item?.oldPrice ?? course?.precioOriginal ?? 0);
  const discountPercent = Number(course?.descuento ?? 0);

  const hasDiscount = currentPrice > 0 && oldPrice > currentPrice;
  const discountAmount = hasDiscount ? oldPrice - currentPrice : 0;

  return {
    currentPrice,
    oldPrice,
    discountPercent,
    discountAmount,
    hasDiscount,
    label: course?.promoLabel ?? `${discountPercent}% OFF`,
    until: course?.promoUntil ?? "",
  };
};

const CoursesPage: React.FC = () => {
  const display = useDisplay();
  const [query, setQuery] = React.useState("");
  const [category, setCategory] = React.useState("Todos");

  useScrollToTopWindow();

  const categories = React.useMemo(() => {
    const list = courses.map((course: any) => getCourseView(course).category);
    return ["Todos", ...Array.from(new Set(list))];
  }, []);

  const filteredCourses = React.useMemo(() => {
    return courses.filter((course: any) => {
      const item = getCourseView(course);

      const matchesQuery =
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase());

      const matchesCategory =
        category === "Todos" || item.category === category;

      return matchesQuery && matchesCategory;
    });
  }, [query, category]);

  return (
    <SectionFadeIn
      className={`ap-bg-[#F3EEDC] ap-min-h-screen ap-flex ap-flex-col ap-pb-0 ${
        display.mdAndDown ? "ap-px-0 ap-pt-18" : "ap-gap-2 ap-pt-3"
      }`}
    >
      <div className={display.mdAndDown ? "ap-px-4" : "ap-px-[8vw] ap-pt-3"}>
        <div className="ap-container ap-flex ap-flex-col ap-gap-5">
          <section className="ap-bg-[#F3EEDC] ap-rounded-[28px] ap-border ap-border-[#DDD3B8] ap-overflow-hidden">
            <div className="ap-bg-[radial-gradient(circle_at_top_left,#FFF0AE_0%,#F6F0DD_34%,#EFE8D4_100%)] ap-px-5 md:ap-px-10 lg:ap-px-12 ap-pt-6 ap-pb-6">
              <CoursesBreadcrumbs
                isDarkMode={false}
                items={[
                  { label: "Inicio", to: "/" },
                  { label: "Cursos", active: true },
                ]}
              />

              <div className="ap-grid lg:ap-grid-cols-[minmax(0,1fr)_300px] ap-gap-6 ap-items-center ap-mt-5">
                <div>
                  <span className="ap-inline-flex ap-items-center ap-rounded-full ap-bg-[#FFC730] ap-text-[#111111] ap-text-[11px] ap-font-extrabold ap-px-4 ap-py-2 ap-mb-4 ap-shadow-sm">
                    Programas Max Planck 2026
                  </span>

                  <h1 className="ap-text-[#090909] ap-font-extrabold ap-leading-tight ap-text-3xl md:ap-text-4xl ap-max-w-3xl">
                    Cursos y programas para avanzar con acompañamiento
                  </h1>

                  <p className="ap-text-[#403B2E] ap-text-sm md:ap-text-base ap-leading-7 ap-mt-4 ap-max-w-2xl">
                    Encontrá programas académicos y cursos prácticos con clases
                    guiadas, materiales digitales, ejercicios y acompañamiento
                    durante todo el proceso.
                  </p>
                </div>

                <div className="ap-bg-[#FFFDF7] ap-rounded-2xl ap-p-4 ap-border ap-border-[#E4D8B8] ap-shadow-[0_12px_30px_rgba(70,55,20,0.08)]">
                  <p className="ap-text-[#111111] ap-text-sm ap-font-extrabold">
                    ¿No sabés cuál elegir?
                  </p>

                  <p className="ap-text-[#5D574A] ap-text-xs ap-mt-2 ap-leading-5">
                    Te orientamos según tu objetivo, nivel y disponibilidad.
                  </p>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="ap-mt-3 ap-inline-flex ap-w-full ap-justify-center ap-bg-[#FFC730] ap-text-[#111111] ap-font-extrabold ap-rounded-full ap-px-4 ap-py-2.5 ap-text-sm hover:ap-bg-[#FFD95C] ap-transition"
                  >
                    Consultar
                  </a>
                </div>
              </div>

              <div className="ap-mt-6 ap-bg-[#FFFDF7] ap-border ap-border-[#E2D8C0] ap-rounded-2xl ap-p-3 ap-grid md:ap-grid-cols-[1fr_auto] ap-gap-3 ap-shadow-[0_12px_30px_rgba(70,55,20,0.07)]">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar curso, programa o modalidad"
                  className="ap-w-full ap-bg-white ap-border ap-border-[#DED4BB] ap-rounded-full ap-px-5 ap-py-2.5 ap-text-[#111111] ap-text-sm placeholder:ap-text-[#8D8573] focus:ap-outline-none focus:ap-border-[#FFC730]"
                />

                <div className="ap-flex ap-gap-2 ap-overflow-x-auto">
                  {categories.map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setCategory(item)}
                      className={`ap-whitespace-nowrap ap-rounded-full ap-px-4 ap-py-2 ap-text-sm ap-font-bold ap-transition ${
                        category === item
                          ? "ap-bg-[#FFC730] ap-text-[#111111]"
                          : "ap-bg-[#F4EEDC] ap-text-[#342F24] ap-border ap-border-[#DED4BB] hover:ap-border-[#FFC730]"
                      }`}
                    >
                      {item}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="ap-px-5 md:ap-px-12 lg:ap-px-16 ap-py-12">
              <div className="ap-max-w-[1180px] ap-mx-auto">
                <div className="ap-grid ap-grid-cols-1 sm:ap-grid-cols-2 lg:ap-grid-cols-3 xl:ap-grid-cols-4 ap-gap-5 ap-items-stretch">
                  {filteredCourses.map((course: any) => (
                    <CourseCatalogCard key={course.slug} course={course} />
                  ))}
                </div>
              </div>
              {filteredCourses.length === 0 && (
                <div className="ap-text-center ap-text-[#6D6658] ap-py-20">
                  No encontramos cursos con ese criterio.
                </div>
              )}
            </div>
          </section>
        </div>

        <div className="ap-py-20" />
      </div>
    </SectionFadeIn>
  );
};

const CourseCatalogCard = ({ course }: { course: any }) => {
  const item = getCourseView(course);

  const duration =
    item.duration ??
    course.duracion ??
    course.duration ??
    course.summaryDuration ??
    "";

  const modality =
    item.modality ?? course.modalidad ?? course.modality ?? "Clases guiadas";

  const mainBadge = course.badge ?? course.etiqueta ?? item.category;
  const discount = getDiscountInfo(course, item);

  return (
    <article className="ap-group ap-bg-[#FFFDF7] ap-border ap-border-[#DDD3B8] hover:ap-border-[#FFC730] ap-rounded-2xl ap-overflow-hidden ap-flex ap-flex-col ap-transition ap-shadow-[0_14px_35px_rgba(70,55,20,0.08)]">
      <Link to={`/cursos/${item.slug}`} className="ap-block">
        <div className="ap-relative ap-h-[155px] ap-bg-[#111111] ap-overflow-hidden">
          {course.fileURL ? (
            <img
              src={course.fileURL}
              alt={item.title}
              className="ap-w-full ap-h-full ap-object-cover ap-transition group-hover:ap-scale-[1.03]"
            />
          ) : (
            <div className="ap-w-full ap-h-full ap-bg-[radial-gradient(circle_at_top_left,#FFC730_0%,#F3EEDC_38%,#111111_100%)]" />
          )}

          <div className="ap-absolute ap-top-3 ap-left-3 ap-flex ap-flex-wrap ap-gap-2">
            <span className="ap-bg-[#FFC730] ap-text-[#111111] ap-text-[10px] ap-font-extrabold ap-tracking-[0.12em] ap-uppercase ap-rounded-full ap-px-3 ap-py-1">
              {mainBadge}
            </span>
          </div>

          {discount.hasDiscount && (
            <div className="ap-absolute ap-top-3 ap-right-3 ap-rounded-full ap-bg-[#111111] ap-border ap-border-[#FFC730] ap-px-3 ap-py-1 ap-text-[10px] ap-font-extrabold ap-text-[#FFC730] ap-shadow-lg">
              {discount.label}
            </div>
          )}

          <div className="ap-absolute ap-bottom-3 ap-right-3 ap-bg-white/95 ap-text-[#111111] ap-text-xs ap-font-extrabold ap-rounded-full ap-px-3 ap-py-1">
            2026
          </div>
        </div>
      </Link>

      <div className="ap-p-5 ap-flex ap-flex-col ap-flex-1">
        <Link to={`/cursos/${item.slug}`}>
          <h2 className="ap-text-[#090909] ap-text-lg ap-font-extrabold ap-leading-snug ap-line-clamp-2 group-hover:ap-text-[#8A6A00] ap-transition">
            {item.title}
          </h2>
        </Link>

        <p className="ap-text-[#6D6658] ap-text-xs ap-font-medium ap-mt-2 ap-line-clamp-1">
          {item.owner ?? "Max Planck"}
        </p>

        <p className="ap-text-[#4E473A] ap-text-sm ap-leading-6 ap-mt-3 ap-line-clamp-2">
          {item.description}
        </p>

        <div className="ap-flex ap-flex-wrap ap-gap-2 ap-mt-4">
          {/* {duration && (
            <span className="ap-text-[11px] ap-font-bold ap-text-[#3C362B] ap-bg-[#F4EEDC] ap-border ap-border-[#DED4BB] ap-rounded-full ap-px-3 ap-py-1">
              {duration}
            </span>
          )} */}

          {modality && (
            <span className="ap-text-[11px] ap-font-bold ap-text-[#3C362B] ap-bg-[#F4EEDC] ap-border ap-border-[#DED4BB] ap-rounded-full ap-px-3 ap-py-1">
              {modality}
            </span>
          )}
        </div>

        <div className="ap-mt-auto ap-pt-5">
          {item.price > 0 ? (
            <div className="ap-flex ap-flex-col ap-gap-1">
              {discount.hasDiscount && (
                <div className="ap-flex ap-items-center ap-gap-2">
                  <span className="ap-text-[#8D8573] ap-text-xs ap-font-bold">
                    Antes
                  </span>
                  <span className="ap-text-[#8D8573] ap-text-sm ap-font-extrabold ap-line-through">
                    {formatGs(discount.oldPrice)}
                  </span>
                </div>
              )}

              <div className="ap-flex ap-items-end ap-gap-2 ap-flex-wrap">
                <span className="ap-text-[#111111] ap-text-xl ap-font-extrabold">
                  {formatGs(item.price)}
                </span>

                <span className="ap-text-[#8A6A00] ap-text-sm ap-font-extrabold ap-mb-0.5">
                  / mes
                </span>

                {discount.hasDiscount && (
                  <span className="ap-rounded-full ap-bg-[#FFC730] ap-px-2 ap-py-0.5 ap-text-[10px] ap-font-extrabold ap-text-[#111111]">
                    {discount.label}
                  </span>
                )}
              </div>

              {discount.hasDiscount && (
                <p className="ap-text-[11px] ap-font-semibold ap-text-[#245A16]">
                  Ahorrás {formatGs(discount.discountAmount)} por mes
                </p>
              )}
            </div>
          ) : (
            <span className="ap-text-[#111111] ap-text-lg ap-font-extrabold">
              Consultar inversión
            </span>
          )}

          <Link
            to={`/cursos/${item.slug}`}
            className="ap-mt-4 ap-flex ap-items-center ap-justify-center ap-gap-2 ap-bg-[#FFC730] hover:ap-bg-[#FFD95C] ap-text-[#111111] ap-font-extrabold ap-rounded-xl ap-px-5 ap-py-3 ap-text-sm ap-transition"
          >
            Ver programa
            <span>→</span>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default CoursesPage;
