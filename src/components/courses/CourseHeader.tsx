import * as React from "react";
import useDisplay from "../../hooks/use-display";
import { Button } from "@mui/material";
import {
  ArrowForward,
  CheckCircle,
  AccessTime,
  Devices,
  WorkspacePremium,
  MenuBook,
} from "@mui/icons-material";
import CoursesBreadcrumbs from "./CoursesBreadcrumbs";
import { useNavigate } from "react-router-dom";
import { numberFormatGuaranies } from "../../utils/numberFormat";

const CourseHeader = ({ course }) => {
  const display = useDisplay();
  const navigate = useNavigate();

  const highlights = course.highlights ?? [];
  const includeBullets = course.incluye ?? [];

  return (
    <section className="ap-bg-[#F3EEDC]">
      <div className="ap-bg-[#111111] ap-text-white">
        <div
          className={`ap-grid ap-gap-10 ap-pb-12 ${
            display.mdAndDown
              ? "ap-grid-cols-1 ap-px-5 ap-pt-8"
              : "ap-grid-cols-[1fr_390px] ap-px-[8vw] ap-pt-14"
          }`}
        >
          <div className="ap-max-w-[820px]">
            <div className="ap-mb-6">
              <CoursesBreadcrumbs
                isDarkMode={true}
                items={[
                  { label: "Inicio", to: "/" },
                  { label: "Cursos", to: "/cursos" },
                  { label: course.titulo, active: true },
                ]}
              />
            </div>

            <p className="ap-text-[#FFC730] ap-text-sm ap-font-bold ap-mb-3">
              {course.categoria}
            </p>

            <h1
              className={`ap-font-extrabold ap-leading-tight ${
                display.smAndDown ? "ap-text-3xl" : "ap-text-5xl"
              }`}
            >
              {course.titulo}
            </h1>

            <p className="ap-text-gray-200 ap-text-base md:ap-text-xl ap-leading-8 ap-mt-5 ap-max-w-3xl">
              {course.descripcion}
            </p>

            <div className="ap-flex ap-flex-wrap ap-gap-3 ap-mt-6">
              {highlights.map((item) => (
                <span
                  key={item}
                  className="ap-inline-flex ap-items-center ap-gap-2 ap-bg-[#1A1A1A] ap-border ap-border-[#333333] ap-rounded-full ap-px-4 ap-py-2 ap-text-sm ap-text-gray-100"
                >
                  <span className="ap-w-2 ap-h-2 ap-rounded-full ap-bg-[#FFC730]" />
                  {item}
                </span>
              ))}
            </div>

            <div className="ap-flex ap-flex-wrap ap-gap-5 ap-mt-7 ap-text-sm ap-text-gray-300">
              <span>Actualizado para 2026</span>
              <span>Español</span>
              <span>Modalidad: {course.modalidad}</span>
            </div>
          </div>

          {!display.mdAndDown && <CoursePurchaseCard course={course} />}
        </div>
      </div>

      {display.mdAndDown && (
        <div className="ap-px-5 ap--mt-6 ap-relative ap-z-10">
          <CoursePurchaseCard course={course} />
        </div>
      )}

      <div
        className={`ap-grid ap-gap-8 ap-py-10 ${
          display.mdAndDown
            ? "ap-grid-cols-1 ap-px-5"
            : "ap-grid-cols-[1fr_390px] ap-px-[8vw]"
        }`}
      >
        <div className="ap-flex ap-flex-col ap-gap-8">
          <WhatYouWillLearn items={course.aprenderas ?? []} />

          <RelatedTopics tags={course.tags ?? []} />

          <CourseIncludes items={includeBullets} />

          <CourseContent modules={course.modules ?? []} />

          <Requirements items={course.requisitos ?? []} />

          <CourseDescription text={course.descripcionLarga} />
        </div>

        {!display.mdAndDown && <div />}
      </div>
    </section>
  );
};

const CoursePurchaseCard = ({ course }) => {
  const navigate = useNavigate();

  return (
    <aside className="ap-bg-white ap-text-[#111111] ap-border ap-border-[#DDD3B8] ap-rounded-2xl ap-overflow-hidden ap-shadow-[0_18px_50px_rgba(0,0,0,0.18)] ap-h-fit lg:ap-sticky lg:ap-top-6">
      <div className="ap-relative ap-bg-[#111111] ap-h-[220px]">
        <img
          src={course.fileURL}
          alt={course.titulo}
          className="ap-w-full ap-h-full ap-object-cover ap-opacity-90"
        />

        <div className="ap-absolute ap-inset-0 ap-flex ap-items-center ap-justify-center">
          <div className="ap-w-16 ap-h-16 ap-rounded-full ap-bg-white ap-flex ap-items-center ap-justify-center ap-shadow-lg">
            <span className="ap-text-[#111111] ap-text-3xl ap-ml-1">▶</span>
          </div>
        </div>
      </div>

      <div className="ap-p-6">
        {course.precio > 0 ? (
          <div className="ap-flex ap-items-end ap-gap-3">
            <strong className="ap-text-3xl ap-font-extrabold">
              {numberFormatGuaranies(course.precio)}
            </strong>

            <span className="ap-text-[#8A6A00] ap-font-bold ap-mb-1">
              / mes
            </span>

            {course.precioOriginal > 0 && (
              <span className="ap-text-gray-400 ap-line-through ap-mb-1">
                {numberFormatGuaranies(course.precioOriginal)}
              </span>
            )}
          </div>
        ) : (
          <div>
            <p className="ap-text-sm ap-text-[#5D574A] ap-font-medium">
              Inversión
            </p>

            <strong className="ap-text-2xl ap-font-extrabold">
              Consultar costo
            </strong>
          </div>
        )}

        <p className="ap-text-sm ap-text-[#5D574A] ap-mt-2">
          Matrícula:{" "}
          <strong className="ap-text-[#111111]">
            {numberFormatGuaranies(course.matricula ?? 50000)}
          </strong>
        </p>

        <Button
          fullWidth
          disabled={!course.inscriptionEnabled}
          onClick={() => navigate(`/checkout/${course.slug}`)}
          variant="contained"
          sx={{
            backgroundColor: "#FFC730",
            boxShadow: "none",
            color: "#111111",
            border: "1px solid #FDD877",
            padding: "13px 14px",
            textTransform: "none",
            fontWeight: 800,
            borderRadius: "12px",
            fontSize: "15px",
            fontFamily: "Poppins",
            marginTop: "18px",
            "&:hover": {
              backgroundColor: "#FFD95C",
              boxShadow: "none",
            },
            "&.Mui-disabled": {
              backgroundColor: "rgba(255,198,45,0.18)",
              color: "rgba(0,0,0,0.45)",
              border: "1px solid rgba(255,198,45,0.35)",
            },
          }}
        >
          {course.inscriptionEnabled ? "Inscribirme" : "Inscripciones cerradas"}
          <ArrowForward sx={{ marginLeft: 1, fontSize: "20px" }} />
        </Button>

        <p className="ap-text-center ap-text-xs ap-text-[#6D6658] ap-mt-3">
          Pago en efectivo o transferencia
        </p>
      </div>

      <div className="ap-border-t ap-border-[#E7DEC8] ap-p-6">
        <p className="ap-font-extrabold ap-mb-4">Este programa incluye:</p>

        <div className="ap-flex ap-flex-col ap-gap-3">
          <SmallFeature icon={<AccessTime />} text={course.duracion} />
          <SmallFeature icon={<Devices />} text="Materiales digitales" />
          <SmallFeature icon={<WorkspacePremium />} text="Acompañamiento" />
          <SmallFeature icon={<MenuBook />} text="Ejercicios prácticos" />
        </div>
      </div>
    </aside>
  );
};

const SmallFeature = ({ icon, text }) => (
  <div className="ap-flex ap-items-center ap-gap-3 ap-text-sm ap-text-[#322D23]">
    <span className="ap-text-[#8A6A00] ap-flex">{icon}</span>
    <span>{text}</span>
  </div>
);

const WhatYouWillLearn = ({ items }) => (
  <section className="ap-bg-white ap-border ap-border-[#DDD3B8] ap-rounded-2xl ap-p-6">
    <h2 className="ap-text-2xl ap-font-extrabold ap-text-[#111111]">
      Lo que vas a aprender
    </h2>

    <div className="ap-grid md:ap-grid-cols-2 ap-gap-4 ap-mt-5">
      {items.map((item) => (
        <div key={item} className="ap-flex ap-items-start ap-gap-3">
          <CheckCircle sx={{ fontSize: 20, color: "#8A6A00" }} />
          <p className="ap-text-sm ap-leading-6 ap-text-[#322D23]">{item}</p>
        </div>
      ))}
    </div>
  </section>
);

const RelatedTopics = ({ tags }) => (
  <section>
    <h2 className="ap-text-2xl ap-font-extrabold ap-text-[#111111]">
      Temas que vas a trabajar
    </h2>

    <div className="ap-flex ap-flex-wrap ap-gap-3 ap-mt-4">
      {tags.map((tag) => (
        <span
          key={tag}
          className="ap-bg-[#FFFDF7] ap-border ap-border-[#DDD3B8] ap-rounded-full ap-px-5 ap-py-3 ap-text-sm ap-font-bold ap-text-[#111111]"
        >
          {tag}
        </span>
      ))}
    </div>
  </section>
);

const CourseIncludes = ({ items }) => (
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
          <CheckCircle sx={{ fontSize: 20, color: "#FFC730" }} />
          <span className="ap-text-sm ap-leading-6 ap-text-[#322D23]">
            {item}
          </span>
        </div>
      ))}
    </div>
  </section>
);

const CourseContent = ({ modules }) => {
  const [openIndex, setOpenIndex] = React.useState(0);

  const totalLessons = modules.reduce(
    (acc, module) => acc + (module.lessons?.length ?? module.lectures ?? 0),
    0,
  );

  return (
    <section>
      <div className="ap-flex ap-items-end ap-justify-between ap-gap-4 ap-mb-4">
        <div>
          <h2 className="ap-text-2xl ap-font-extrabold ap-text-[#111111]">
            Contenido del curso
          </h2>

          <p className="ap-text-sm ap-text-[#5D574A] ap-mt-2">
            {modules.length} módulos · {totalLessons} clases aproximadas
          </p>
        </div>
      </div>

      <div className="ap-border ap-border-[#D8D0BD] ap-rounded-2xl ap-overflow-hidden ap-bg-white">
        {modules.map((module, index) => {
          const isOpen = openIndex === index;

          return (
            <div
              key={module.title}
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

                    <p className="ap-text-xs ap-text-[#6D6658] ap-mt-1">
                      {module.description}
                    </p>
                  </div>
                </div>

                <span className="ap-text-sm ap-text-[#5D574A] ap-whitespace-nowrap">
                  {module.lessons?.length ?? module.lectures} clases ·{" "}
                  {module.duration}
                </span>
              </button>

              {isOpen && (
                <div className="ap-bg-white">
                  {module.lessons?.map((lesson) => (
                    <div
                      key={lesson}
                      className="ap-flex ap-items-center ap-justify-between ap-gap-4 ap-px-6 ap-py-4 ap-border-t ap-border-[#EFE7D5]"
                    >
                      <div className="ap-flex ap-items-center ap-gap-3">
                        <span className="ap-text-[#8A6A00]">▸</span>
                        <p className="ap-text-sm ap-text-[#322D23]">{lesson}</p>
                      </div>

                      <span className="ap-text-xs ap-text-[#8D8573]">
                        Clase
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

const Requirements = ({ items }) => (
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

const CourseDescription = ({ text }) => (
  <section>
    <h2 className="ap-text-2xl ap-font-extrabold ap-text-[#111111]">
      Descripción
    </h2>

    <p className="ap-text-[#4E473A] ap-text-sm md:ap-text-base ap-leading-8 ap-mt-4 ap-max-w-3xl">
      {text}
    </p>
  </section>
);

export default CourseHeader;
