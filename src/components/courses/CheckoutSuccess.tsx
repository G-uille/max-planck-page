import * as React from "react";
import { Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import HomeIcon from "@mui/icons-material/Home";
import useDisplay from "../../hooks/use-display";
import { useNavigate } from "react-router-dom";

type Props = {
  inscriptionId?: number | null;
  courseSlug?: string;
  courseTitle?: string;
  courseWhatsappPhone?: string;
};

const normalizePhone = (raw?: string) => {
  if (!raw) return "";

  const clean = raw.replace(/\D/g, "");

  if (clean.startsWith("595")) return clean;

  if (clean.startsWith("0")) {
    return `595${clean.slice(1)}`;
  }

  return clean;
};

const CheckoutSuccess = ({
  inscriptionId,
  courseSlug,
  courseTitle,
  courseWhatsappPhone,
}: Props) => {
  const display = useDisplay();
  const navigate = useNavigate();

  const INS = inscriptionId ? `INS-${inscriptionId}` : "INS-____";

  const isProgrammingCourse = courseSlug === "programacion-desde-cero";

  const defaultDirectionPhone = "595993581578";
  const stackParaguayPhone =
    normalizePhone(courseWhatsappPhone) || "595974135398";

  const phoneDirection = isProgrammingCourse
    ? stackParaguayPhone
    : defaultDirectionPhone;

  const contactName = isProgrammingCourse ? "Stack Paraguay" : "Dirección";

  const message = isProgrammingCourse
    ? `Hola, tengo la inscripción ${INS} al curso de ${courseTitle || "Programación desde Cero"} y quiero coordinar los siguientes pasos.`
    : `Hola, tengo la inscripción ${INS} y quiero coordinar los siguientes pasos.`;

  const waLink = `https://wa.me/${phoneDirection}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <div
      className={`ap-bg-[#F3EEDC] ap-min-h-screen ap-flex ap-items-center ap-justify-center ${
        display.smAndDown ? "ap-px-4 ap-py-12" : "ap-px-6 ap-py-20"
      }`}
    >
      <div className="ap-bg-[#FFFDF7] ap-border ap-border-[#DDD3B8] ap-rounded-3xl ap-max-w-[520px] ap-w-full ap-overflow-hidden ap-shadow-[0_24px_70px_rgba(70,55,20,0.14)]">
        <div className="ap-bg-[#111111] ap-px-8 ap-py-7 ap-text-center">
          <div className="ap-flex ap-justify-center">
            <div className="ap-bg-[#FFC730] ap-bg-opacity-20 ap-rounded-full ap-p-4 ap-border ap-border-[#FFC730]/30">
              <CheckCircleIcon sx={{ fontSize: 54, color: "#FFC730" }} />
            </div>
          </div>

          <h1 className="ap-text-white ap-text-2xl ap-font-extrabold ap-mt-5">
            ¡Inscripción registrada!
          </h1>

          <p className="ap-text-gray-300 ap-text-sm ap-leading-6 ap-mt-2">
            Tu solicitud fue recibida correctamente.
          </p>
        </div>

        <div className="ap-p-7 ap-flex ap-flex-col ap-gap-5 ap-text-center">
          <div className="ap-flex ap-justify-center">
            <div className="ap-inline-flex ap-items-center ap-gap-2 ap-border ap-border-[#FFC730] ap-bg-[#FFF1B8] ap-text-[#8A6A00] ap-text-sm ap-rounded-full ap-px-5 ap-py-2">
              <span>Nro:</span>
              <b className="ap-text-[#111111]">{INS}</b>
            </div>
          </div>

          {courseTitle && (
            <div className="ap-bg-[#F4EEDC] ap-border ap-border-[#DED4BB] ap-rounded-2xl ap-p-4">
              <p className="ap-text-xs ap-text-[#8A6A00] ap-font-extrabold ap-uppercase ap-tracking-[0.16em]">
                Curso
              </p>

              <p className="ap-text-[#111111] ap-text-base ap-font-extrabold ap-mt-1">
                {courseTitle}
              </p>
            </div>
          )}

          <p className="ap-text-[#3C362B] ap-text-sm ap-leading-7">
            Nos pondremos en contacto contigo por{" "}
            <b className="ap-text-[#111111]">WhatsApp</b> para coordinar los
            siguientes pasos de la inscripción y el pago.
          </p>

          <div className="ap-bg-[#FFF8D6] ap-border ap-border-[#FFE27A] ap-rounded-2xl ap-p-4">
            <p className="ap-text-[#8A6A00] ap-text-sm ap-font-extrabold">
              ¿Querés escribirnos ahora?
            </p>

            <p className="ap-text-[#3C362B] ap-text-xs ap-leading-5 ap-mt-1">
              Podés contactar directamente a {contactName} por WhatsApp con tu
              número de inscripción.
            </p>
          </div>

          <div className="ap-flex ap-flex-col ap-gap-3 ap-mt-1">
            <Button
              fullWidth
              variant="contained"
              startIcon={<HomeIcon />}
              onClick={() => navigate("/")}
              sx={{
                backgroundColor: "#FFC730",
                color: "#111111",
                border: "1px solid #F3BE00",
                boxShadow: "none",
                textTransform: "none",
                fontFamily: "Poppins",
                fontSize: "14px",
                borderRadius: "999px",
                padding: "12px",
                fontWeight: 800,
                "&:hover": {
                  backgroundColor: "#FFD24A",
                  boxShadow: "none",
                },
              }}
            >
              Volver al inicio
            </Button>

            <Button
              fullWidth
              variant="outlined"
              startIcon={<WhatsAppIcon />}
              onClick={() => window.open(waLink, "_blank")}
              sx={{
                borderColor: "#DED4BB",
                color: "#111111",
                backgroundColor: "#FFFDF7",
                textTransform: "none",
                fontFamily: "Poppins",
                fontSize: "14px",
                borderRadius: "999px",
                padding: "12px",
                fontWeight: 800,
                "&:hover": {
                  borderColor: "#FFC730",
                  backgroundColor: "#FFF1B8",
                },
              }}
            >
              Contactar a {contactName} por WhatsApp
            </Button>

            <span className="ap-text-xs ap-text-[#6D6658] ap-leading-5">
              El mensaje se abrirá con tu número de inscripción para agilizar la
              atención.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
