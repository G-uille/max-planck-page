import * as React from "react";
import { useMemo, useState } from "react";
import useDisplay from "../../hooks/use-display";
import {
  AccessTime,
  ArrowForward,
  ArrowForwardIos,
  Download,
  Help,
  Info,
  MenuBook,
  LocationOn,
  CalendarMonth,
  LiveTv,
  CheckCircle,
} from "@mui/icons-material";
import { numberFormatGuaranies } from "../..//utils/numberFormat";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const defaultModalidadRows = [
  {
    title: "Clases en vivo",
    tag: "Info",
    desc: "Revisá fechas y horarios en la sección correspondiente.",
  },
];

const getRowIcon = (row) => {
  if (row.mode === "virtual") return <LiveTv sx={{ fontSize: 20 }} />;
  if (row.mode === "presencial") return <AccessTime sx={{ fontSize: 20 }} />;
  return <Info sx={{ fontSize: 20 }} />;
};

const stripPrefix = (title: string) => title.replace(/^.*—\s*/, "");

const Card = ({ children, className = "" }) => (
  <div
    className={`ap-bg-[#151515] ap-border ap-border-[#2B2B2B] ap-rounded-2xl ap-p-5 ${className}`}
  >
    {children}
  </div>
);

const SectionTitle = ({ title, subtitle }) => (
  <div className="ap-mb-4">
    <h3 className="ap-text-xl ap-font-semibold ap-text-white">{title}</h3>
    {subtitle && (
      <p className="ap-text-sm ap-text-gray-400 ap-mt-1">{subtitle}</p>
    )}
  </div>
);

const Row = ({ icon, title, tag, desc }) => (
  <div className="ap-flex ap-gap-3 ap-items-start ap-p-4 ap-rounded-xl ap-bg-[#111111] ap-border ap-border-[#2B2B2B]">
    <div className="ap-text-[#FFC62D] ap-mt-0.5">{icon}</div>
    <div className="ap-flex-1">
      <div className="ap-flex ap-items-center ap-gap-2">
        <p className="ap-text-white ap-font-semibold ap-text-sm">{title}</p>
        {tag && (
          <span className="ap-text-[11px] ap-text-[#FFC62D] ap-border ap-border-[#FFC62D] ap-border-opacity-30 ap-bg-[#FFC62D] ap-bg-opacity-10 ap-px-2 ap-py-0.5 ap-rounded-full">
            {tag}
          </span>
        )}
      </div>
      {desc && (
        <p className="ap-text-sm ap-text-gray-400 ap-mt-1 ap-leading-6">
          {desc}
        </p>
      )}
    </div>
  </div>
);

function toBullets(text: string) {
  return text
    .split(/[.;]\s+/)
    .map((s) => s.trim())
    .filter(Boolean)
    .map((s) => (s.endsWith(".") ? s.slice(0, -1) : s));
}

const CourseMenu = ({ course }) => {
  const [active, setActive] = useState("modalidad");
  const display = useDisplay();
  const navigate = useNavigate();

  const lugar = course.lugar ?? "Sede a confirmar";
  const inicio =
    course.inicioEstimado ?? course.fechaInicioFin ?? "Ver calendario";

  const mateLabel = course.programa.some((p) =>
    p.title.toUpperCase().startsWith("MATEMÁTICA"),
  )
    ? "MATEMÁTICA"
    : "MATEMÁTICAS";

  const modalidadRows = course.modalidadRows ?? defaultModalidadRows;
  const modalidadSubtitle =
    course.modalidadSubtitle ??
    "Estructura del cursillo y acceso a materiales.";
  const modalidadNota =
    course.modalidadNota ??
    "Obs: Las fechas pueden ajustarse manteniendo la secuencia del programa.";

  const fechasTip =
    course.fechasTip ??
    "Tip: revisá el calendario y organizá tu semana con anticipación.";

  const castellano = useMemo(
    () =>
      course.programa.filter((p) =>
        p.title.toUpperCase().startsWith("CASTELLANO"),
      ),
    [course.programa],
  );
  const matematicas = useMemo(
    () =>
      course.programa.filter((p) => p.title.toUpperCase().startsWith("MATEM")),
    [course.programa],
  );
  const integracion = useMemo(
    () =>
      course.programa.filter((p) =>
        p.title.toUpperCase().includes("INTEGRACIÓN"),
      ),
    [course.programa],
  );

  const incluye = course.incluye ?? [
    "Diagnóstico inicial",
    "Ejercitarios y banco de ítems",
    "Simulacros integradores",
    "Acceso al Aula Virtual",
  ];

  const evaluacion = course.evaluacion ?? [
    "3 parciales (Matemáticas)",
    "Mini simulacros (Castellano)",
    "Simulacros integradores",
    "Retroalimentación continua",
  ];

  const tabs = [
    ["modalidad", "Modalidad", <Info sx={{ fontSize: 18 }} />],
    ["prog", "Programa", <MenuBook sx={{ fontSize: 18 }} />],
    ["fechas", "Fechas", <AccessTime sx={{ fontSize: 18 }} />],
    ["faq", "FAQ", <Help sx={{ fontSize: 18 }} />],
  ];

  return (
    <div
      className={`ap-bg-[#111111] ap-flex ${
        display.smAndDown ? "ap-flex-col" : "ap-px-16 ap-gap-10"
      } ap-py-12`}
    >
      {display.smAndDown ? (
        <>
          <h3 className="ap-text-xl ap-text-white ap-font-semibold ap-mb-3 ap-px-2">
            Menú
          </h3>

          {/* CHIPS HORIZONTALES */}
          <div className="ap-flex ap-gap-2 ap-overflow-x-auto ap-px-2 ap-pb-2 ap-whitespace-nowrap ap-snap-x ap-snap-mandatory ap-[&::-webkit-scrollbar]:hidden">
            {tabs.map(([key, label, icon]) => (
              <button
                key={key as string}
                onClick={() => setActive(key as string)}
                className={`ap-flex-none ap-snap-start ap-inline-flex ap-items-center ap-gap-2 ap-px-4 ap-py-2 ap-rounded-full ap-border ap-text-sm
            ${
              active === key
                ? "ap-bg-[#FFC62D] ap-text-black ap-border-[#FFC62D]"
                : "ap-bg-[#151515] ap-text-gray-200 ap-border-[#2B2B2B]"
            }`}
              >
                <span
                  className={
                    active === key ? "ap-text-black" : "ap-text-[#FFC62D]"
                  }
                >
                  {icon}
                </span>
                {label}
              </button>
            ))}
          </div>
        </>
      ) : (
        <aside
          className={`${
            display.smAndDown
              ? "ap-flex ap-flex-wrap ap-gap-4 ap-px-2 ap-mb-6"
              : "ap-w-6/12 ap-flex ap-flex-col ap-gap-3 ap-sticky ap-top-6 ap-self-start"
          }`}
        >
          <h3 className="ap-text-xl ap-text-white ap-font-semibold ap-mb-2">
            Menú
          </h3>

          {[
            ["modalidad", "Modalidad", <Info sx={{ fontSize: 20 }} />],
            ["prog", "Programa", <MenuBook sx={{ fontSize: 20 }} />],
            [
              "fechas",
              "Fechas y horarios",
              <AccessTime sx={{ fontSize: 20 }} />,
            ],
            ["faq", "Preguntas frecuentes", <Help sx={{ fontSize: 20 }} />],
          ].map(([key, label, icon]) => (
            <button
              key={key as string}
              onClick={() => setActive(key as string)}
              className={`ap-py-2.5 ap-cursor-pointer ap-flex ap-justify-between ap-items-center ap-px-3 ap-text-sm ap-rounded-xl ap-border 
              ${
                active === key
                  ? "ap-bg-[#1A1A1A] ap-border-[#3F3F3F] ap-text-white"
                  : "ap-border-transparent ap-text-gray-400 hover:ap-bg-[#1A1A1A] hover:ap-text-white"
              }`}
            >
              <span className="ap-text-left ap-flex ap-gap-2 ap-items-center">
                {icon} {label}
              </span>
              <ArrowForwardIos sx={{ fontSize: 15 }} />
            </button>
          ))}

          {/* TARJETA PRECIO + CTA */}
          {!display.smAndDown && (
            <Card className="ap-mt-4">
              <div className="ap-flex ap-items-center ap-gap-3 ap-flex-wrap">
                <strong className="ap-text-2xl ap-text-[#FFC62D]">
                  {numberFormatGuaranies(course.precio)}
                </strong>

                {course.precioOriginal && (
                  <span className="ap-line-through ap-text-gray-500">
                    {numberFormatGuaranies(course.precioOriginal)}
                  </span>
                )}

                {course.descuento && (
                  <span className="ap-bg-yellow-300 ap-bg-opacity-45 ap-text-yellow-300 ap-text-xs ap-px-2 ap-py-1 ap-rounded-full">
                    {course.descuento}% OFF
                  </span>
                )}
              </div>

              <div className="ap-flex ap-justify-between ap-items-center ap-mt-2">
                <span className="ap-text-[13px] ap-text-[#FFC62D] ap-underline">
                  Pago en Efectivo y Transferencia
                </span>
                <span className="ap-text-xs ap-text-gray-400">por mes</span>
              </div>

              <Button
                fullWidth
                disabled={!course.inscriptionEnabled}
                onClick={() => navigate(`/checkout/${course.slug}`)}
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

                  "&.Mui-disabled": {
                    backgroundColor: "rgba(255,198,45,0.12)",
                    color: "rgba(255,255,255,0.55)",
                    border: "1px solid rgba(255,198,45,0.22)",
                  },
                }}
              >
                {course.inscriptionEnabled
                  ? "Inscribirme"
                  : "Inscripciones cerradas"}
                <ArrowForward sx={{ marginLeft: 1, fontSize: "20px" }} />
              </Button>
            </Card>
          )}
        </aside>
      )}

      {/* CONTENT */}
      <section
        className={`${display.smAndDown ? "ap-px-2" : "ap-w-9/12"} ap-text-white`}
      >
        {/* MODALIDAD */}
        {active === "modalidad" && (
          <>
            <SectionTitle title="Modalidad" subtitle={modalidadSubtitle} />

            <div className="ap-grid ap-gap-4">
              <Card>
                <div className="ap-grid ap-gap-3">
                  {modalidadRows.map((r) => (
                    <Row
                      key={r.title}
                      icon={getRowIcon(r)}
                      title={r.title}
                      tag={r.tag}
                      desc={r.desc}
                    />
                  ))}

                  <p className="ap-text-sm ap-text-gray-400 ap-mt-2">
                    {modalidadNota}
                  </p>
                </div>
              </Card>

              <div
                className={`ap-grid ${
                  display.smAndDown ? "ap-grid-cols-1" : "ap-grid-cols-2"
                } ap-gap-4`}
              >
                <Card>
                  <div className="ap-flex ap-items-center ap-gap-2 ap-mb-3">
                    <CheckCircle sx={{ fontSize: 18, color: "#FFC62D" }} />
                    <h4 className="ap-font-semibold">Incluye</h4>
                  </div>
                  <ul className="ap-grid ap-gap-2">
                    {incluye.map((b) => (
                      <li
                        key={b}
                        className="ap-text-sm ap-text-gray-200 ap-leading-6 ap-flex ap-gap-2"
                      >
                        <span className="ap-text-[#FFC62D]">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="ap-text-sm ap-mt-4">
                    Materiales exclusivos en nuestra{" "}
                    <a
                      href="https://cursos.cursillomaxplanck.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ap-text-[#FFC62D] ap-underline"
                    >
                      aula virtual
                    </a>
                    .
                  </p>
                </Card>

                {/* <Card>
                  <div className="ap-flex ap-items-center ap-gap-2 ap-mb-3">
                    <CheckCircle sx={{ fontSize: 18, color: "#FFC62D" }} />
                    <h4 className="ap-font-semibold">Evaluación</h4>
                  </div>
                  <ul className="ap-grid ap-gap-2">
                    {evaluacion.map((b) => (
                      <li
                        key={b}
                        className="ap-text-sm ap-text-gray-200 ap-leading-6 ap-flex ap-gap-2"
                      >
                        <span className="ap-text-[#FFC62D]">•</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </Card> */}
              </div>
            </div>
          </>
        )}

        {/* FECHAS */}
        {active === "fechas" && (
          <>
            <SectionTitle
              title="Fechas y horarios"
              subtitle="Todo lo importante, sin ruido."
            />

            <div
              className={`ap-grid ${display.smAndDown ? "ap-grid-cols-1" : "ap-grid-cols-2"} ap-gap-4`}
            >
              <Card>
                <div className="ap-flex ap-items-center ap-gap-2 ap-mb-3">
                  <CalendarMonth sx={{ fontSize: 18, color: "#FFC62D" }} />
                  <h4 className="ap-font-semibold">Calendario</h4>
                </div>

                <ul className="ap-grid ap-gap-2 ap-text-sm ap-text-gray-200">
                  {course.fechasHorarios.map((f) => (
                    <li key={f} className="ap-flex ap-gap-2 ap-leading-6">
                      <span className="ap-text-[#FFC62D]">•</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <div className="ap-mt-4 ap-text-sm ap-text-gray-400">
                  <b className="ap-text-white">Inicio estimado:</b> {inicio}
                </div>
              </Card>

              <Card>
                <div className="ap-flex ap-items-center ap-gap-2 ap-mb-3">
                  <LocationOn sx={{ fontSize: 18, color: "#FFC62D" }} />
                  <h4 className="ap-font-semibold">Lugar</h4>
                </div>

                <p className="ap-text-sm ap-text-gray-200 ap-leading-6">
                  {lugar}
                </p>

                <div className="ap-mt-4 ap-bg-[#111111] ap-border ap-border-[#2B2B2B] ap-rounded-xl ap-p-4">
                  <p className="ap-text-sm ap-text-gray-200">
                    <b className="ap-text-white">Tip:</b> {fechasTip}
                  </p>
                </div>
              </Card>
            </div>
          </>
        )}

        {/* PROGRAMA */}
        {active === "prog" && (
          <>
            <SectionTitle
              title="Programa"
              subtitle="Bloques por materia (lo que realmente vas a estudiar)."
            />

            <div className="ap-flex ap-items-center ap-gap-3 ap-mb-4">
              <Button
                fullWidth={display.smAndDown}
                onClick={() =>
                  course.programaPDFUrl &&
                  window.open(course.programaPDFUrl, "_blank")
                }
                disabled={!course.programaPDFUrl}
                variant="contained"
                sx={{
                  backgroundColor: "#3F3F3F",
                  boxShadow: "none",
                  color: "white",
                  border: "1px solid #3F3F3F",
                  padding: "10px 12px",
                  textTransform: "none",
                  fontWeight: "normal",
                  borderRadius: "12px",
                  fontSize: "14px",
                  fontFamily: "Poppins",
                  display: "flex",
                }}
              >
                <Download />
                Descargar Programa
              </Button>

              {!course.programaPDFUrl && (
                <span className="ap-text-sm ap-text-gray-400">
                  (Subí el PDF y seteá <b>programaPDFUrl</b>)
                </span>
              )}
            </div>

            <div className="ap-grid ap-gap-4">
              <Card>
                <h4 className="ap-font-semibold ap-mb-3 ap-text-white">
                  CASTELLANO
                </h4>
                <div className="ap-grid ap-gap-3">
                  {castellano.map((item, i) => (
                    <div
                      key={i}
                      className="ap-bg-[#111111] ap-border ap-border-[#2B2B2B] ap-rounded-xl ap-p-4"
                    >
                      <div className="ap-flex ap-items-center ap-gap-2 ap-mb-2">
                        <MenuBook sx={{ fontSize: 18, color: "#FFC62D" }} />
                        <p className="ap-font-semibold ap-text-sm">
                          {stripPrefix(item.title)}
                        </p>
                      </div>
                      <ul className="ap-list-disc ap-ml-5 ap-text-sm ap-text-gray-300 ap-leading-6">
                        {toBullets(item.description).map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>

              <Card>
                <h4 className="ap-font-semibold ap-mb-3 ap-text-white">
                  {mateLabel}
                </h4>
                <div className="ap-grid ap-gap-3">
                  {matematicas.map((item, i) => (
                    <div
                      key={i}
                      className="ap-bg-[#111111] ap-border ap-border-[#2B2B2B] ap-rounded-xl ap-p-4"
                    >
                      <div className="ap-flex ap-items-center ap-gap-2 ap-mb-2">
                        <MenuBook sx={{ fontSize: 18, color: "#FFC62D" }} />
                        <p className="ap-font-semibold ap-text-sm">
                          {item.title.replace("MATEMÁTICAS — ", "")}
                        </p>
                      </div>
                      <ul className="ap-list-disc ap-ml-5 ap-text-sm ap-text-gray-300 ap-leading-6">
                        {toBullets(item.description).map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </Card>

              {integracion.length > 0 && (
                <Card>
                  <h4 className="ap-font-semibold ap-mb-3 ap-text-white">
                    INTEGRACIÓN
                  </h4>
                  {integracion.map((item, i) => (
                    <div
                      key={i}
                      className="ap-bg-[#111111] ap-border ap-border-[#2B2B2B] ap-rounded-xl ap-p-4"
                    >
                      <div className="ap-flex ap-items-center ap-gap-2 ap-mb-2">
                        <MenuBook sx={{ fontSize: 18, color: "#FFC62D" }} />
                        <p className="ap-font-semibold ap-text-sm">
                          {item.title}
                        </p>
                      </div>
                      <ul className="ap-list-disc ap-ml-5 ap-text-sm ap-text-gray-300 ap-leading-6">
                        {toBullets(item.description).map((b) => (
                          <li key={b}>{b}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </Card>
              )}

              <div className="ap-text-sm ap-text-gray-400">
                <b className="ap-text-white">Lugar:</b> {lugar} <br />
                <b className="ap-text-white">Inicio estimado:</b> {inicio}
              </div>
            </div>
          </>
        )}

        {/* FAQ */}
        {active === "faq" && (
          <>
            <SectionTitle title="Preguntas frecuentes" />

            <div className="ap-grid ap-gap-3">
              {course.faqs.map((f) => (
                <details
                  key={f.pregunta}
                  className="ap-group ap-bg-[#151515] ap-border ap-border-[#2B2B2B] ap-rounded-2xl ap-p-4"
                >
                  <summary className="ap-list-none ap-flex ap-justify-between ap-items-center ap-cursor-pointer">
                    <span className="ap-font-medium ap-text-white">
                      {f.pregunta}
                    </span>
                    <span className="ap-text-gray-400">
                      <ArrowForwardIos sx={{ fontSize: 16 }} />
                    </span>
                  </summary>
                  <p className="ap-text-gray-400 ap-mt-3 ap-text-sm ap-leading-6">
                    {f.respuesta}
                  </p>
                </details>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default CourseMenu;
