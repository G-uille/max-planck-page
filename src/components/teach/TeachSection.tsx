import * as React from "react";
import useDisplay from "../../hooks/use-display";
import SectionFadeIn from "../../components/common/SectionFadeIn";
import { Button } from "@mui/material";
import {
  ArrowForward,
  MenuBook,
  School,
  PlayCircleOutline,
  CheckCircleOutline,
  LocalLibrary,
} from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Pill = ({ children }) => (
  <span className="ap-inline-flex ap-items-center ap-rounded-full ap-border ap-border-[#2B2B2B] ap-bg-[#111111] ap-px-3 ap-py-1 ap-text-[12px] ap-text-gray-200">
    {children}
  </span>
);

const MiniFeature = ({ icon, title, desc }) => (
  <div className="ap-flex ap-gap-3 ap-items-start ap-rounded-xl ap-border ap-border-[#2B2B2B] ap-bg-[#111111] ap-p-4">
    <div className="ap-text-[#FFC62D] ap-mt-0.5">{icon}</div>
    <div>
      <p className="ap-text-white ap-text-sm ap-font-semibold">{title}</p>
      <p className="ap-text-gray-400 ap-text-sm ap-leading-6">{desc}</p>
    </div>
  </div>
);

const TeachSection: React.FC = () => {
  const display = useDisplay();
  const navigate = useNavigate();

  // Preview simple (podés hacerlo dinámico desde tu coursesMock si querés)
  const coursePreview = [
    "Refuerzo Preuniversitario 2026",
    "Admisión Colegios Técnicos 2026",
  ];

  return (
    <SectionFadeIn
      className={`ap-bg-[#111111] ap-py-16 ap-pb-0 ${
        display.mdAndDown ? "ap-px-4" : "ap-px-[15vw]"
      }`}
    >
      <div className="ap-container ap-flex ap-flex-col ap-gap-3">
        {/* Header */}
        <div className="ap-flex ap-flex-col ap-gap-2">
          <h2
            className={`ap-font-semibold ap-text-white ${
              display.mdAndDown ? "ap-text-xl" : "ap-text-2xl"
            }`}
          >
            Cursos <span className="ap-text-primary">disponibles</span>
          </h2>
          <p className="ap-text-gray-400 ap-text-sm ap-leading-6 ap-max-w-[820px]">
            Elegí tu programa y empezá hoy. Accedé también a nuestra Aula
            Virtual para estudiar con materiales, ejercitarios y recursos.
          </p>

          {/* Pills */}
          <div className="ap-flex ap-flex-wrap ap-gap-2 ap-mt-1">
            <Pill>Inscripción online</Pill>
            <Pill>Calendario semanal</Pill>
            <Pill>Simulacros y parciales</Pill>
            <Pill>Aula virtual incluida</Pill>
          </div>
        </div>

        {/* Layout cards */}
        <div
          className={`ap-grid ap-gap-5 ap-mt-6 ${
            display.mdAndDown ? "ap-grid-cols-1" : "ap-grid-cols-12"
          }`}
        >
          {/* CARD CURSOS (más grande) */}
          <div
            className={`ap-relative ap-overflow-hidden ap-rounded-2xl ap-border ap-border-[#2B2B2B] ap-bg-[#151515] ap-p-6 ap-transition ap-duration-200 hover:ap-translate-y-[-2px]
              ${display.mdAndDown ? "" : "ap-col-span-7"}`}
            style={{
              boxShadow:
                "0 0 0 1px rgba(233, 253, 51, 0.06), 0 0 26px rgba(231, 245, 194, 0.06)",
            }}
          >
            {/* fondo premium */}
            <div className="ap-absolute ap-inset-0 ap-pointer-events-none ap-bg-[radial-gradient(circle_at_15%_25%,rgba(255,198,45,0.18),transparent_55%)]" />
            <div className="ap-absolute ap-inset-0 ap-pointer-events-none ap-bg-[radial-gradient(circle_at_85%_85%,rgba(255,87,45,0.10),transparent_55%)]" />

            <div className="ap-relative ap-flex ap-flex-col ap-h-full">
              <div className="ap-flex ap-items-center ap-gap-3">
                <div className="ap-w-11 ap-h-11 ap-rounded-xl ap-bg-[#111111] ap-border ap-border-[#2B2B2B] ap-flex ap-items-center ap-justify-center">
                  <School sx={{ fontSize: 22, color: "#FFC62D" }} />
                </div>

                <div className="ap-flex-1">
                  <p className="ap-text-[12px] ap-text-gray-400">
                    Programas 2026
                  </p>
                  <h3 className="ap-text-white ap-font-semibold ap-text-lg">
                    Cursos e Inscripciones
                  </h3>
                </div>

                <div className="ap-hidden md:ap-flex">
                  <span className="ap-text-[12px] ap-text-gray-400 ap-border ap-border-[#2B2B2B] ap-bg-[#111111] ap-rounded-full ap-px-3 ap-py-1">
                    {coursePreview.length} cursos activos
                  </span>
                </div>
              </div>

              {/* Preview cursos */}
              <div className="ap-mt-5 ap-grid ap-gap-3">
                {coursePreview.map((t) => (
                  <div
                    key={t}
                    className="ap-flex ap-items-center ap-justify-between ap-gap-3 ap-rounded-xl ap-border ap-border-[#2B2B2B] ap-bg-[#111111] ap-px-4 ap-py-3"
                  >
                    <div className="ap-flex ap-items-center ap-gap-3">
                      <LocalLibrary sx={{ fontSize: 18, color: "#FFC62D" }} />
                      <div>
                        <p className="ap-text-white ap-text-sm ap-font-semibold">
                          {t}
                        </p>
                        <p className="ap-text-gray-400 ap-text-xs">
                          Plan semanal • Evaluaciones • Simulacros
                        </p>
                      </div>
                    </div>

                    <span className="ap-text-xs ap-text-gray-400">
                      Ver detalle →
                    </span>
                  </div>
                ))}
              </div>

              {/* bullets */}
              <div className="ap-mt-5 ap-grid ap-gap-2">
                {[
                  "Clases en vivo + práctica presencial (según el programa).",
                  "Banco de ejercicios tipo admisión y correcciones guiadas.",
                  "Acceso a materiales y guías en Aula Virtual.",
                ].map((t) => (
                  <div key={t} className="ap-flex ap-gap-2 ap-items-start">
                    <CheckCircleOutline
                      sx={{ fontSize: 18, color: "#FFC62D" }}
                    />
                    <p className="ap-text-sm ap-text-gray-200 ap-leading-6">
                      {t}
                    </p>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <div className="ap-mt-auto ap-pt-6">
                <Button
                  fullWidth
                  onClick={() => navigate("/cursos")}
                  variant="contained"
                  sx={{
                    backgroundColor: "#FFC62D",
                    boxShadow: "none",
                    color: "black",
                    border: "1px solid #FDD877",
                    padding: "12px 14px",
                    textTransform: "none",
                    fontWeight: "normal",
                    borderRadius: "14px",
                    fontSize: "14px",
                    fontFamily: "Poppins",
                  }}
                >
                  Ver cursos disponibles{" "}
                  <ArrowForward sx={{ marginLeft: "6px", fontSize: 20 }} />
                </Button>

                <p className="ap-text-xs ap-text-gray-400 ap-mt-3">
                  Inscripción 100% online desde la web.
                </p>
              </div>
            </div>
          </div>

          {/* CARD AULA VIRTUAL */}
          <div
            className={`ap-relative ap-overflow-hidden ap-rounded-2xl ap-border ap-border-[#2B2B2B] ap-bg-[#151515] ap-p-6 ap-transition ap-duration-200 hover:ap-translate-y-[-2px]
              ${display.mdAndDown ? "" : "ap-col-span-5"}`}
            style={{
              boxShadow:
                "0 0 0 1px rgba(233, 253, 51, 0.05), 0 0 24px rgba(231, 245, 194, 0.05)",
            }}
          >
            <div className="ap-absolute ap-inset-0 ap-pointer-events-none ap-bg-[radial-gradient(circle_at_20%_20%,rgba(255,198,45,0.12),transparent_55%)]" />

            <div className="ap-relative ap-flex ap-flex-col ap-h-full">
              <div className="ap-flex ap-items-center ap-gap-3">
                <div className="ap-w-11 ap-h-11 ap-rounded-xl ap-bg-[#111111] ap-border ap-border-[#2B2B2B] ap-flex ap-items-center ap-justify-center">
                  <MenuBook sx={{ fontSize: 22, color: "#FFC62D" }} />
                </div>
                <div>
                  <p className="ap-text-[12px] ap-text-gray-400">Plataforma</p>
                  <h3 className="ap-text-white ap-font-semibold ap-text-lg">
                    Aula Virtual
                  </h3>
                  <p className="ap-text-gray-400 ap-text-sm">
                    Contenidos • Ejercitarios • Recursos complementarios
                  </p>
                </div>
              </div>

              <div className="ap-mt-5 ap-grid ap-gap-3">
                <MiniFeature
                  icon={<PlayCircleOutline sx={{ fontSize: 20 }} />}
                  title="Materiales y guías"
                  desc="Recursos organizados por unidades para estudiar y repasar mejor."
                />
                <MiniFeature
                  icon={<MenuBook sx={{ fontSize: 20 }} />}
                  title="Ejercitarios tipo examen"
                  desc="Práctica por tema con correcciones y ejercicios integradores."
                />
                <MiniFeature
                  icon={<CheckCircleOutline sx={{ fontSize: 20 }} />}
                  title="Acceso 24/7"
                  desc="Desde celular o PC, cuando lo necesites."
                />
              </div>

              <div className="ap-mt-auto ap-pt-6">
                <Button
                  fullWidth
                  component="a"
                  href="https://cursos.cursillomaxplanck.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="contained"
                  sx={{
                    backgroundColor: "#3F3F3F",
                    boxShadow: "none",
                    color: "white",
                    border: "1px solid #6C6C6C",
                    padding: "12px 14px",
                    textTransform: "none",
                    fontWeight: "normal",
                    borderRadius: "14px",
                    fontSize: "14px",
                    fontFamily: "Poppins",
                  }}
                >
                  Ir al Aula Virtual{" "}
                  <ArrowForward sx={{ marginLeft: "6px", fontSize: 20 }} />
                </Button>

                <p className="ap-text-xs ap-text-gray-400 ap-mt-3">
                  Si ya estás inscripto, ingresá con tus credenciales.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionFadeIn>
  );
};

export default TeachSection;
