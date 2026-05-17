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
          <section className="ap-bg-[#F3EEDC] ap-min-h-screen ap-rounded-[28px] ap-border ap-border-[#DDD3B8] ap-overflow-hidden">
            <div className="ap-bg-[radial-gradient(circle_at_top_left,#FFF0AE_0%,#F6F0DD_34%,#EFE8D4_100%)] ap-px-5 md:ap-px-12 lg:ap-px-16 ap-pt-10 ap-pb-10">
              <CoursesBreadcrumbs
                isDarkMode={false}
                items={[
                  { label: "Inicio", to: "/" },
                  { label: "Cursos", active: true },
                ]}
              />

              <div className="ap-grid lg:ap-grid-cols-[1fr_360px] ap-gap-8 ap-items-end ap-mt-10">
                <div>
                  <span className="ap-inline-flex ap-items-center ap-rounded-full ap-bg-[#FFC730] ap-text-[#111111] ap-text-xs ap-font-extrabold ap-px-4 ap-py-2 ap-mb-5 ap-shadow-sm">
                    Programas Max Planck 2026
                  </span>

                  <h1 className="ap-text-[#090909] ap-font-extrabold ap-leading-tight ap-text-3xl md:ap-text-5xl ap-max-w-4xl">
                    Cursos disponibles para reforzar tu preparación académica
                  </h1>

                  <p className="ap-text-[#403B2E] ap-text-sm md:ap-text-base ap-leading-7 ap-mt-5 ap-max-w-2xl">
                    Elegí el programa que mejor se adapta a tu objetivo:
                    refuerzo preuniversitario, admisión a colegios técnicos y
                    acompañamiento académico con clases, práctica y materiales
                    digitales.
                  </p>
                </div>

                <div className="ap-bg-[#FFFDF7] ap-rounded-3xl ap-p-5 ap-border ap-border-[#E4D8B8] ap-shadow-[0_18px_45px_rgba(70,55,20,0.10)]">
                  <p className="ap-text-[#111111] ap-text-sm ap-font-bold">
                    ¿Tenés dudas sobre qué curso elegir?
                  </p>

                  <p className="ap-text-[#5D574A] ap-text-sm ap-mt-2 ap-leading-6">
                    Podemos orientarte según el grado, institución objetivo y
                    disponibilidad horaria.
                  </p>

                  <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noreferrer"
                    className="ap-mt-4 ap-inline-flex ap-w-full ap-justify-center ap-bg-[#FFC730] ap-text-[#111111] ap-font-extrabold ap-rounded-full ap-px-5 ap-py-3 ap-text-sm hover:ap-bg-[#FFD95C] ap-transition"
                  >
                    Consultar inscripción
                  </a>
                </div>
              </div>

              <div className="ap-mt-10 ap-bg-[#FFFDF7] ap-border ap-border-[#E2D8C0] ap-rounded-3xl ap-p-4 ap-grid md:ap-grid-cols-[1fr_auto] ap-gap-4 ap-shadow-[0_16px_45px_rgba(70,55,20,0.08)]">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder="Buscar curso, programa o modalidad"
                  className="ap-w-full ap-bg-white ap-border ap-border-[#DED4BB] ap-rounded-full ap-px-5 ap-py-3 ap-text-[#111111] ap-text-sm placeholder:ap-text-[#8D8573] focus:ap-outline-none focus:ap-border-[#FFC730]"
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
              <div className="ap-grid ap-grid-cols-1 md:ap-grid-cols-2 xl:ap-grid-cols-3 ap-gap-6">
                {filteredCourses.map((course: any) => (
                  <CourseCatalogCard key={course.slug} course={course} />
                ))}
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

  return (
    <article className="ap-group ap-bg-[#FFFDF7] ap-border ap-border-[#DDD3B8] hover:ap-border-[#FFC730] ap-rounded-3xl ap-p-6 ap-min-h-[430px] ap-flex ap-flex-col ap-transition ap-shadow-[0_20px_55px_rgba(70,55,20,0.10)]">
      <div className="ap-flex ap-items-center ap-justify-between ap-gap-3">
        <span className="ap-text-xs ap-font-extrabold ap-tracking-[0.18em] ap-uppercase ap-text-[#8A6A00] ap-bg-[#FFF1B8] ap-border ap-border-[#FFE27A] ap-rounded-full ap-px-3 ap-py-1">
          {item.category}
        </span>

        <span className="ap-text-xs ap-font-bold ap-text-[#7C745F]">2026</span>
      </div>

      <h2 className="ap-text-[#090909] ap-text-2xl ap-font-extrabold ap-leading-snug ap-mt-5">
        {item.title}
      </h2>

      <p className="ap-text-[#4E473A] ap-text-sm ap-leading-6 ap-mt-3 ap-line-clamp-3">
        {item.description}
      </p>

      <div className="ap-flex ap-flex-wrap ap-gap-2 ap-mt-5">
        {item.tags.slice(0, 3).map((tag: string) => (
          <span
            key={tag}
            className="ap-text-[11px] ap-font-semibold ap-text-[#3C362B] ap-bg-[#F4EEDC] ap-border ap-border-[#DED4BB] ap-rounded-full ap-px-3 ap-py-1"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="ap-mt-auto ap-pt-6">
        <div className="ap-flex ap-items-end ap-gap-2 ap-flex-wrap">
          <span className="ap-text-[#111111] ap-text-2xl ap-font-extrabold">
            {formatGs(item.price)}
          </span>

          {item.price > 0 && (
            <span className="ap-text-[#8A6A00] ap-text-base ap-font-extrabold ap-mb-1">
              / mes
            </span>
          )}

          {item.oldPrice > 0 && (
            <span className="ap-text-[#8D8573] ap-text-sm ap-line-through ap-mb-1">
              {formatGs(item.oldPrice)}
            </span>
          )}
        </div>

        <Link
          to={`/cursos/${item.slug}`}
          className="ap-mt-6 ap-flex ap-items-center ap-justify-center ap-gap-2 ap-bg-[#FFC730] hover:ap-bg-[#FFD95C] ap-text-[#111111] ap-font-extrabold ap-rounded-full ap-px-5 ap-py-3 ap-transition"
        >
          Ver fechas y programa
          <span className="ap-text-lg">→</span>
        </Link>
      </div>
    </article>
  );
};

export default CoursesPage;