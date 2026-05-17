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
import contactUs from "../../../pages/store/data/contact";
import { useScrollToTopWindow } from "../../../hooks/use-scrollToTop";

const WHATSAPP_URL = contactUs.walink;

export const CourseDetailPage = () => {
  const { slugCurso } = useParams();
  const course = courses.find((c: any) => c.slug === slugCurso);
  const display = useDisplay();

  useScrollToTopWindow();

  if (!course) {
    return (
      <div className="ap-bg-[#F3EEDC] ap-min-h-screen ap-flex ap-items-center ap-justify-center">
        <p className="ap-text-[#111111] ap-font-semibold">Curso no encontrado</p>
      </div>
    );
  }

  const item = getCourseView(course);
  const benefits = getCourseBenefits(course);
  const modules = getCourseModules(course);
  const dates = getCourseDates(course);
  const faqs = getCourseFaqs(course);

  return (
    <SectionFadeIn
  className={`ap-bg-[#F3EEDC] ap-min-h-screen ap-flex ap-flex-col ap-pb-0 ${
    display.mdAndDown ? "ap-px-0 ap-pt-18" : "ap-gap-2 ap-pt-3"
  }`}
>
      <div className={display.mdAndDown ? "ap-px-4" : "ap-px-[8vw] ap-pt-3"}>
        <section className="ap-bg-[#F3EEDC] ap-min-h-screen ap-rounded-[28px] ap-border ap-border-[#DDD3B8] ap-overflow-visible">
          <div className="ap-bg-[radial-gradient(circle_at_top_left,#FFF0AE_0%,#F6F0DD_34%,#EFE8D4_100%)] ap-px-5 md:ap-px-12 lg:ap-px-16 ap-pt-10 ap-pb-12">
            <CoursesBreadcrumbs
              isDarkMode={false}
              items={[
                { label: "Inicio", to: "/" },
                { label: "Cursos", to: "/cursos" },
                { label: item.title, active: true },
              ]}
            />

            <div className="ap-grid lg:ap-grid-cols-[minmax(0,1fr)_390px] ap-gap-8 ap-mt-10 ap-items-start">
              <main className="ap-flex ap-flex-col ap-gap-8 ap-min-w-0">
                <div>
                  <span className="ap-inline-flex ap-bg-[#FFC730] ap-text-[#111111] ap-text-xs ap-font-extrabold ap-rounded-full ap-px-4 ap-py-2">
                    {item.category}
                  </span>

                  <h1 className="ap-text-[#090909] ap-font-extrabold ap-text-4xl md:ap-text-6xl ap-leading-tight ap-mt-5 ap-max-w-4xl">
                    {item.title}
                  </h1>

                  <p className="ap-text-[#403B2E] ap-text-base md:ap-text-lg ap-leading-8 ap-mt-6 ap-max-w-3xl">
                    {item.description}
                  </p>
                </div>

                <div className="ap-grid sm:ap-grid-cols-3 ap-gap-4">
                  <InfoPill label="Duración" value={item.duration} />
                  <InfoPill label="Modalidad" value={item.modality} />
                  <InfoPill label="Dirigido a" value={item.audience} />
                </div>

                <SectionBlock
                  eyebrow="Para quién es"
                  title="Un programa pensado para avanzar con orden y acompañamiento"
                >
                  <div className="ap-grid md:ap-grid-cols-2 ap-gap-4">
                    {benefits.map((benefit, index) => (
                      <FeatureCard
                        key={benefit}
                        number={String(index + 1).padStart(2, "0")}
                        text={benefit}
                      />
                    ))}
                  </div>
                </SectionBlock>

                <SectionBlock eyebrow="Programa" title="Contenido del curso">
                  <div className="ap-bg-[#FFFDF7] ap-border ap-border-[#DDD3B8] ap-rounded-3xl ap-p-5 md:ap-p-6 ap-shadow-[0_18px_45px_rgba(70,55,20,0.08)]">
                    <div className="ap-flex ap-flex-col ap-gap-3">
                      {modules.map((module, index) => (
                        <div
                          key={`${module}-${index}`}
                          className="ap-flex ap-gap-4 ap-items-start ap-border-b ap-border-[#E7DEC8] last:ap-border-b-0 ap-pb-3 last:ap-pb-0"
                        >
                          <span className="ap-flex ap-items-center ap-justify-center ap-min-w-8 ap-h-8 ap-rounded-full ap-bg-[#FFC730] ap-text-[#111111] ap-text-xs ap-font-extrabold">
                            {index + 1}
                          </span>

                          <p className="ap-text-[#322D23] ap-text-sm md:ap-text-base ap-leading-7 ap-font-medium">
                            {module}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </SectionBlock>

                <SectionBlock eyebrow="Fechas" title="Próximas fechas">
                  <div className="ap-flex ap-flex-col ap-gap-4">
                    {dates.map((date: any, index: number) => (
                      <DateCard key={`${date.date}-${index}`} date={date} />
                    ))}
                  </div>
                </SectionBlock>

                <SectionBlock
                  eyebrow="Preguntas frecuentes"
                  title="Información importante"
                >
                  <div className="ap-flex ap-flex-col ap-gap-3">
                    {faqs.map((faq: any, index: number) => (
                      <FaqItem key={`${faq.question}-${index}`} faq={faq} />
                    ))}
                  </div>
                </SectionBlock>
              </main>

              {!display.mdAndDown && <EnrollmentAside course={course} />}
            </div>
          </div>

          {display.mdAndDown && <MobileEnrollmentBar course={course} />}
        </section>

        <div className="ap-py-20" />
      </div>
    </SectionFadeIn>
  );
};

const InfoPill = ({ label, value }: { label: string; value: string }) => (
  <div className="ap-bg-[#FFFDF7] ap-border ap-border-[#DDD3B8] ap-rounded-3xl ap-p-5 ap-shadow-[0_14px_35px_rgba(70,55,20,0.08)]">
    <p className="ap-text-[#8A6A00] ap-text-xs ap-font-extrabold ap-uppercase ap-tracking-[0.18em]">
      {label}
    </p>
    <p className="ap-text-[#111111] ap-text-sm ap-font-extrabold ap-mt-2 ap-leading-5">
      {value}
    </p>
  </div>
);

const SectionBlock = ({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) => (
  <section>
    <p className="ap-text-[#8A6A00] ap-text-xs ap-font-extrabold ap-uppercase ap-tracking-[0.24em]">
      {eyebrow}
    </p>

    <h2 className="ap-text-[#111111] ap-text-2xl md:ap-text-3xl ap-font-extrabold ap-leading-tight ap-mt-2 ap-mb-5">
      {title}
    </h2>

    {children}
  </section>
);

const FeatureCard = ({ number, text }: { number: string; text: string }) => (
  <div className="ap-bg-[#FFFDF7] ap-border ap-border-[#DDD3B8] ap-rounded-3xl ap-p-6 ap-shadow-[0_16px_40px_rgba(70,55,20,0.08)]">
    <span className="ap-text-[#FFC730] ap-text-sm ap-font-extrabold">
      {number}
    </span>

    <p className="ap-text-[#181818] ap-text-base ap-font-bold ap-leading-7 ap-mt-4">
      {text}
    </p>
  </div>
);

const DateCard = ({ date }: { date: any }) => (
  <div className="ap-bg-[#FFFDF7] ap-border ap-border-[#DDD3B8] ap-rounded-3xl ap-p-5 ap-flex ap-flex-col md:ap-flex-row md:ap-items-center md:ap-justify-between ap-gap-4 ap-shadow-[0_16px_40px_rgba(70,55,20,0.08)]">
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

    <Link
      to="#"
      className="ap-inline-flex ap-items-center ap-justify-center ap-bg-[#FFC730] hover:ap-bg-[#FFD95C] ap-text-[#111111] ap-font-extrabold ap-rounded-full ap-px-6 ap-py-3 ap-text-sm ap-transition"
    >
      Consultar cupo
    </Link>
  </div>
);

const FaqItem = ({ faq }: { faq: any }) => (
  <details className="ap-bg-[#FFFDF7] ap-border ap-border-[#DDD3B8] ap-rounded-2xl ap-p-5 ap-group">
    <summary className="ap-cursor-pointer ap-list-none ap-flex ap-items-center ap-justify-between ap-gap-4">
      <span className="ap-text-[#111111] ap-font-bold">{faq.question}</span>
      <span className="ap-text-[#8A6A00] ap-font-extrabold group-open:ap-rotate-180 ap-transition">
        ↓
      </span>
    </summary>

    <p className="ap-text-[#5D574A] ap-text-sm ap-leading-6 ap-mt-4">
      {faq.answer}
    </p>
  </details>
);

const EnrollmentAside = ({ course }: { course: any }) => {
  const item = getCourseView(course);

  return (
    <aside className="ap-sticky ap-top-[125px] ap-self-start ap-z-10 ap-max-h-[calc(100vh-145px)] ap-overflow-y-auto ap-bg-[#FFFDF7] ap-text-[#111111] ap-rounded-3xl ap-border ap-border-[#DDD3B8] ap-p-6 ap-shadow-[0_24px_70px_rgba(70,55,20,0.16)]">
      <div className="ap-flex ap-items-center ap-justify-between ap-gap-3">
        <span className="ap-bg-[#FFF1B8] ap-text-[#8A6A00] ap-border ap-border-[#FFE27A] ap-text-xs ap-font-extrabold ap-rounded-full ap-px-3 ap-py-1">
          Inscripción 2026
        </span>

        <span className="ap-text-xs ap-font-bold ap-text-[#7C745F]">
          Cupos limitados
        </span>
      </div>

      <h3 className="ap-text-3xl ap-font-extrabold ap-mt-5">
        {formatGs(item.price)}
        {item.price > 0 && (
          <span className="ap-text-sm ap-font-extrabold ap-text-[#8A6A00]">
            {" "}
            / mes
          </span>
        )}
      </h3>

      {item.oldPrice > 0 && (
        <p className="ap-text-sm ap-text-[#7C745F] ap-mt-1">
          Antes{" "}
          <span className="ap-line-through">{formatGs(item.oldPrice)}</span>
        </p>
      )}

      <div className="ap-mt-5 ap-bg-[#F4EEDC] ap-rounded-2xl ap-border ap-border-[#DED4BB] ap-p-4 ap-flex ap-flex-col ap-gap-3">
        <SummaryRow label="Programa" value={item.title} />
        <SummaryRow label="Duración" value={item.duration} />
        <SummaryRow label="Modalidad" value={item.modality} />
      </div>

     {isCourseEnrollmentEnabled(course) ? (
        <Link
          to={`/checkout/${item.slug}`}
          className="ap-mt-6 ap-flex ap-items-center ap-justify-center ap-bg-[#FFC730] hover:ap-bg-[#FFD95C] ap-text-[#111111] ap-font-extrabold ap-rounded-full ap-px-5 ap-py-4 ap-transition"
        >
          {getEnrollmentButtonLabel(course)}
        </Link>
      ) : (
        <button
          type="button"
          disabled
          className="ap-mt-6 ap-flex ap-items-center ap-justify-center ap-bg-[#DED4BB] ap-text-[#8D8573] ap-font-extrabold ap-rounded-full ap-px-5 ap-py-4 ap-cursor-not-allowed"
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
        href={getCourseWhatsappUrl(course)}
        target="_blank"
        rel="noreferrer"
        className="ap-mt-3 ap-flex ap-items-center ap-justify-center ap-bg-[#F4EEDC] hover:ap-bg-[#EFE4C8] ap-text-[#111111] ap-border ap-border-[#DED4BB] ap-font-extrabold ap-rounded-full ap-px-5 ap-py-3 ap-transition"
      >
        Consultar por WhatsApp
      </a>

      <p className="ap-text-xs ap-text-[#6D6658] ap-leading-5 ap-mt-5">
        La inscripción queda registrada y el equipo académico se comunica para
        confirmar detalles del curso, horarios y materiales.
      </p>
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

const MobileEnrollmentBar = ({ course }: { course: any }) => {
  const item = getCourseView(course);

  return (
    <div className="ap-fixed ap-bottom-0 ap-left-0 ap-right-0 ap-z-[100000] ap-bg-[#FFFDF7] ap-border-t ap-border-[#DDD3B8] ap-p-4 ap-shadow-[0_-12px_35px_rgba(70,55,20,0.12)]">
      <div className="ap-flex ap-items-center ap-justify-between ap-gap-3 ap-mb-3">
        <span className="ap-text-[#111111] ap-text-sm ap-font-bold ap-line-clamp-1">
          {item.title}
        </span>

        <span className="ap-text-[#8A6A00] ap-font-extrabold">
          {formatGs(item.price)}
        </span>
      </div>

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