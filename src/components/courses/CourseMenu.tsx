import * as React from "react";
import { useState } from "react";
import useDisplay from "../../hooks/use-display";
import {
  AccessTime,
  ArrowForward,
  ArrowForwardIos,
  Download,
  Help,
  Info,
  MenuBook,
} from "@mui/icons-material";
import { numberFormatGuaranies } from "../..//utils/numberFormat";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CourseMenu = ({ course }) => {
  const [active, setActive] = useState("modalidad");
  const display = useDisplay();
  const navigate = useNavigate();

  return (
    <div
      className={`ap-bg-[#111111] ap-flex ${
        display.smAndDown ? "ap-flex-col" : "ap-px-16 ap-gap-10"
      } ap-py-12`}
    >
      <aside
        className={` ${
          display.smAndDown
            ? "ap-flex  ap-flex-wrap ap-gap-4 ap-px-2 ap-mb-6"
            : "ap-w-6/12 ap-flex ap-flex-col ap-gap-3"
        }`}
      >
        <h3 className="ap-text-xl ap-text-white ap-font-semibold  ap-mb-3">
          Menú
        </h3>

        {[
          ["modalidad", "Modalidad", <Info sx={{ fontSize: 20 }} />],
          ["prog", "Programa", <MenuBook sx={{ fontSize: 20 }} />],
          ["fechas", "Fechas y horarios", <AccessTime sx={{ fontSize: 20 }} />],
          ["faq", "Preguntas frecuentes", <Help sx={{ fontSize: 20 }} />],
        ].map(([key, label, icon]) => (
          <button
            key={key}
            onClick={() => setActive(key)}
            className={`ap-py-2 ap-cursor-pointer hover:ap-bg-[#3F3F3F] hover:ap-bg-opacity-50 ap-flex ap-justify-between ap-items-center ap-px-1 ap-text-sm ap-rounded-lg ${
              active === key
                ? "ap-bg-[#3F3F3F] ap-text-white"
                : "ap-text-gray-400"
            }`}
          >
            <span className={`ap-text-left ap-flex ap-gap-2 ap-items-center`}>
              {icon} {label}
            </span>
            <ArrowForwardIos sx={{ fontSize: 15 }} />
          </button>
        ))}

        {!display.smAndDown && (
          <div>
            <div
              className={`ap-flex ap-mt-6 ap-gap-2 ${display.smAndDown ? "ap-flex-col" : "ap-justify-between  ap-items-center "} `}
            >
              <div className=" ap-flex ap-items-center  ap-gap-4">
                <strong className="ap-text-2xl ap-text-[#FFC62D]">
                  {numberFormatGuaranies(course.precio)}
                </strong>

                {course.precioOriginal && (
                  <span className="ap-line-through ap-text-gray-500">
                    {numberFormatGuaranies(course.precioOriginal)}
                  </span>
                )}

                {course.descuento && (
                  <span className="ap-bg-yellow-300  ap-bg-opacity-45 ap-text-yellow-300 ap-text-xs ap-px-2 ap-py-1 ap-rounded-full">
                    {course.descuento}% OFF
                  </span>
                )}
              </div>
            </div>
            <span
              className={`ap-text-[13px] ap-text-[#FFC62D] ap-underline ${display.smAndDown ? "ap-w-full ap-my-2" : "ap-text-right"}`}
            >
              Pago en Efectivo y Transferencia
            </span>
            <Button
              fullWidth={display.smAndDown ? true : false}
              onClick={() => navigate(`/checkout/${course.slug}`)}
              variant="contained"
              sx={{
                backgroundColor: "#FFC62D",
                boxShadow: "none",
                color: "black",
                border: "1px solid #FDD877",
                padding: "8px 10px 8px 10px",
                textTransform: "none",
                fontWeight: "normal",
                borderRadius: "10px",
                fontSize: "14px",
                fontFamily: "Poppins",
                display: "flex",
                marginTop: 3,

                width: display.mdAndDown ? "100%" : "100%",
              }}
            >
              Inscribirme{" "}
              <ArrowForward sx={{ marginLeft: 1, fontSize: "20px" }} />
            </Button>
          </div>
        )}
      </aside>

      <section
        className={`${display.smAndDown ? "ap-px-2" : "ap-w-9/12"} ap-text-white`}
      >
        {active === "modalidad" && (
          <>
            <h3 className="ap-text-xl ap-font-semibold  ap-mb-3">Modalidad</h3>
            {course.modalidad.enVivo && (
              <p className="ap-mb-3">
                Clases <b>presenciales</b> con posibilidad de hacerlo{" "}
                <b>virtual</b>.
              </p>
            )}
            {course.modalidad.onDemand && (
              <p className="">
                Materiales exclusivos en nuestra{" "}
                <a
                  href="https://cursos.cursillomaxplanck.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ap-cursor-pointer ap-text-[#FFC62D] ap-underline"
                >
                  aula virtual
                </a>
                .
              </p>
            )}
          </>
        )}

        {active === "fechas" && (
          <>
            <h3 className="ap-text-xl ap-font-semibold ap-mb-3">
              Fechas y horarios
            </h3>
            <ul className="ap-mb-3">
              {course.fechasHorarios.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            <span className="ap-mb-3">
              <b>Lugar:</b> Colegio María Auxiliadora de Luque
            </span>
            <br />
            <span className="ap-mb-3">
              <b>Inicio estimado:</b> Lunes 6 de abril
            </span>
          </>
        )}
        {active === "prog" && (
          <>
            <h3 className="ap-text-xl ap-font-semibold ap-mb-3">Programa</h3>
            <Button
              fullWidth={display.smAndDown ? true : false}
              variant="contained"
              sx={{
                backgroundColor: "#3F3F3F",
                boxShadow: "none",
                color: "white",
                border: "1px solid #3F3F3F",
                padding: "8px 10px 8px 10px",
                textTransform: "none",
                fontWeight: "normal",
                borderRadius: "10px",
                fontSize: "14px",
                fontFamily: "Poppins",
                display: "flex",
                marginTop: 3,
                marginBottom: 3,

                width: display.mdAndDown ? "100%" : "100px%",
              }}
            >
              <Download />
              Descargar Programa{" "}
              {/* <ArrowForward sx={{ marginLeft: 1, fontSize: "20px" }} /> */}
            </Button>
            <ul>
              {course.programa.map((item, index) => (
                <li
                  key={index}
                  className="ap-p-3 ap-mb-2 ap-text-sm ap-items-center ap-flex ap-gap-4 ap-border ap-border-gray-500 ap-rounded-md"
                >
                  <span className="ap-items-center ap-flex ap-gap-2 ap-font-semibold">
                    <MenuBook sx={{ fontSize: 20 }} /> {item.title}
                  </span>
                  <span>{item.description}</span>
                </li>
              ))}
            </ul>
            <span className="ap-mb-2">
              <b>Lugar:</b> Colegio María Auxiliadora de Luque
            </span>
            <br />
            <span>
              <b>Inicio estimado:</b> Lunes 6 de abril
            </span>
          </>
        )}

        {active === "faq" && (
          <>
            <h3 className="ap-text-xl ap-font-semibold ap-mb-3">
              Preguntas frecuentes
            </h3>
            {course.faqs.map((f) => (
              <details key={f.pregunta} className="ap-mb-3">
                <summary className="ap-font-medium ap-cursor-pointer">
                  {f.pregunta}
                </summary>
                <p className="ap-text-gray-400 ap-mt-1">{f.respuesta}</p>
              </details>
            ))}
          </>
        )}
      </section>
    </div>
  );
};

export default CourseMenu;
