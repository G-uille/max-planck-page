import * as React from "react";
import useDisplay from "../../hooks/use-display";
import { Button } from "@mui/material";
import { numberFormatGuaranies } from "../..//utils/numberFormat";
import { ArrowForward, CheckCircle } from "@mui/icons-material";
import CoursesBreadcrumbs from "./CoursesBreadcrumbs";
import { useNavigate } from "react-router-dom";

const Chip = ({ children }) => (
  <span className="ap-inline-flex ap-items-center ap-gap-2 ap-text-xs ap-text-gray-200 ap-bg-[#151515] ap-border ap-border-[#2B2B2B] ap-rounded-full ap-px-3 ap-py-1">
    <span className="ap-w-1.5 ap-h-1.5 ap-rounded-full ap-bg-[#FFC62D]" />
    {children}
  </span>
);

const CourseHeader = ({ course }) => {
  const display = useDisplay();
  const navigate = useNavigate();

  const highlights = course.highlights ?? [
    course.duracion,
    course.dedicacion,
    "2 virtual + 1 presencial",
    "Aula virtual incluida",
    "Parciales + simulacros",
  ];

  const includeBullets = course.incluye ?? [
    "Diagnóstico inicial",
    "Banco de ítems tipo admisión",
    "Ejercitarios + guías de repaso",
    "Simulacros integradores",
  ];

  return (
    <div
      className={`ap-bg-[#111111] ap-flex ${
        display.smAndDown
          ? "ap-px-2 ap-flex-col ap-pt-8"
          : "ap-px-16 ap-pt-20 ap-gap-16"
      } ap-pb-12 ap-justify-between`}
    >
      <div className={`${display.smAndDown && "ap-order-2"} ap-max-w-[700px]`}>
        <div className="ap-pb-4 ap-w-full ap-px-4 ap-pl-0 ap-mb-3">
          <CoursesBreadcrumbs
            isDarkMode={true}
            items={[
              { label: "Inicio", to: "/" },
              { label: "Cursos", to: "/cursos" },
              { label: course.titulo, active: true },
            ]}
          />
        </div>

        <span className="ap-text-gray-400 ap-text-sm">{course.categoria}</span>

        <h1
          className={`ap-font-semibold ap-text-white ${
            display.smAndDown ? "ap-text-2xl" : "ap-text-4xl"
          } ap-mt-2`}
        >
          {course.titulo}
        </h1>

        {/* Chips rápidos */}
        <div className="ap-flex ap-flex-wrap ap-gap-2 ap-mt-4">
          {highlights.map((h) => (
            <Chip key={h}>{h}</Chip>
          ))}
        </div>

        {/* Descripción más escaneable */}
        <p className="ap-text-gray-400 ap-font-medium ap-mt-4 ap-text-sm ap-leading-6">
          {course.descripcionLarga}
        </p>

        {/* Incluye */}
        <div className="ap-mt-5 ap-bg-[#151515] ap-border ap-border-[#2B2B2B] ap-rounded-xl ap-p-4">
          <p className="ap-text-white ap-font-semibold ap-mb-3">Incluye</p>
          <ul className="ap-grid ap-gap-2">
            {includeBullets.map((b) => (
              <li key={b} className="ap-flex ap-items-start ap-gap-2">
                <CheckCircle sx={{ fontSize: 18, color: "#FFC62D" }} />
                <span className="ap-text-sm ap-text-gray-200 ap-leading-6">
                  {b}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Precio + CTA */}
        <div
          className={`ap-flex ap-mt-6 ap-gap-2 ${
            display.smAndDown
              ? "ap-flex-col"
              : "ap-justify-between ap-items-center"
          }`}
        >
          <div className="ap-flex ap-items-center ap-gap-4">
            <strong className="ap-text-2xl ap-text-[#FFC62D]">
              {numberFormatGuaranies(course.precio)} / mes
            </strong>

            {course.precioOriginal && (
              <span className="ap-line-through ap-text-gray-500">
                {numberFormatGuaranies(course.precioOriginal)}
              </span>
            )}

            {course.descuento && (
              <span className="ap-bg-yellow-300 ap-bg-opacity-45 ap-text-yellow-300 ap-text-xs ap-px-3 ap-py-1 ap-rounded-full">
                {course.descuento}% OFF
              </span>
            )}
          </div>

          <span
            className={`ap-text-[13px] ap-text-[#FFC62D] ap-underline ${
              display.smAndDown ? "ap-w-full ap-my-2" : "ap-text-right"
            }`}
          >
            Pago en Efectivo {!display.smAndDown && <br />} y Transferencia
          </span>
        </div>

        <span className="ap-text-gray-400 ap-font-medium ap-text-sm">
          Matrícula: Gs. 50.000
        </span>

        <Button
          fullWidth={display.smAndDown ? true : false}
          disabled={!course.inscriptionEnabled}
          onClick={() => navigate(`/checkout/${course.slug}`)}
          variant="contained"
          sx={{
            backgroundColor: "#FFC62D",
            boxShadow: "none",
            color: "black",
            border: "1px solid #FDD877",
            padding: "10px 12px",
            textTransform: "none",
            fontWeight: "normal",
            borderRadius: "12px",
            fontSize: "14px",
            fontFamily: "Poppins",
            display: "flex",
            marginTop: "14px",
            opacity: course.inscriptionEnabled ? 1 : 0.55,
            "&.Mui-disabled": {
              backgroundColor: "rgba(255,198,45,0.12)",
              color: "rgba(255,255,255,0.55)",
              border: "1px solid rgba(255,198,45,0.22)",
            },
          }}
        >
          {course.inscriptionEnabled ? "Inscribirme" : "Inscripciones cerradas"}
          <ArrowForward sx={{ marginLeft: 1, fontSize: "20px" }} />
        </Button>
      </div>

      <img
        src={course.fileURL}
        alt="Curso - Image"
        className={`ap-rounded-2xl ${
          display.mdAndDown
            ? "ap-order-1"
            : "ap-w-4/12 ap-min-w-[420px] ap-h-[420px]"
        }`}
        style={{
          boxShadow: `0 0 0 1px rgba(233, 253, 51, 0.12), 0 0 22px rgba(231, 245, 194, 0.1)`,
          objectFit: "cover",
        }}
      />
    </div>
  );
};

export default CourseHeader;
