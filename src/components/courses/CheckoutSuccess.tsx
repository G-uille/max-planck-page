import * as React from "react";
import { Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import useDisplay from "../../hooks/use-display";
import { useNavigate } from "react-router-dom";

type Props = {
  inscriptionId?: number | null;
};

const CheckoutSuccess = ({ inscriptionId }: Props) => {
  const display = useDisplay();
  const navigate = useNavigate();

  const INS = inscriptionId ? `INS-${inscriptionId}` : "INS-____";
  const phoneDirection = "595993581578"; // ✅ tu número real (sin +)
  const message = `Buenas, tengo la inscripción número ${INS} y quiero realizar el pago de la inscripción.`;
  const waLink = `https://wa.me/${phoneDirection}?text=${encodeURIComponent(
    message,
  )}`;

  return (
    <div
      className={`ap-bg-[#111111] ap-flex ap-items-center ap-justify-center ${
        display.smAndDown ? "ap-px-4 ap-py-16" : "ap-py-24"
      }`}
    >
      <div className="ap-bg-[#282828] ap-bg-opacity-55 ap-border ap-border-[#3F3F3F] ap-rounded-2xl ap-p-8 ap-max-w-md ap-w-full ap-text-center ap-flex ap-flex-col ap-gap-6">
        {/* ICON */}
        <div className="ap-flex ap-justify-center">
          <div className="ap-bg-[#FFC62D] ap-bg-opacity-20 ap-rounded-full ap-p-4">
            <CheckCircleIcon sx={{ fontSize: 48, color: "#FFC62D" }} />
          </div>
        </div>

        {/* TITLE */}
        <h1 className="ap-text-white ap-text-xl ap-font-semibold">
          ¡Inscripción registrada!
        </h1>

        {/* INS CODE */}
        <div className="ap-flex ap-justify-center">
          <div className="ap-inline-flex ap-items-center ap-gap-2 ap-border ap-border-[#FFC62D] ap-border-opacity-30 ap-bg-[#FFC62D] ap-bg-opacity-10 ap-text-[#FFC62D] ap-text-sm ap-rounded-full ap-px-4 ap-py-2">
            <span className="ap-text-gray-300">Nro:</span>
            <b className="ap-text-white">{INS}</b>
          </div>
        </div>

        {/* MESSAGE */}
        <p className="ap-text-gray-400 ap-text-sm ap-leading-6">
          Recibirás una notificación vía{" "}
          <span className="ap-text-white ap-font-medium">WhatsApp</span> con los
          detalles para realizar el pago.
        </p>

        <div className="ap-bg-[#FFC62D] ap-bg-opacity-20 ap-text-[#FFC62D] ap-text-sm ap-rounded-lg ap-p-4 ap-leading-6">
          Si en <b>40 segundos</b> no te llega el mensaje, contactate con
          Dirección al <b className="ap-text-white">(+595) 993 581 578</b>.
        </div>

        {/* ACTIONS */}
        <div className="ap-flex ap-flex-col ap-gap-3">
          <Button
            fullWidth
            variant="contained"
            onClick={() => navigate("/")}
            sx={{
              backgroundColor: "#FFC62D",
              color: "#000",
              border: "1px solid #FDD877",
              boxShadow: "none",
              textTransform: "none",
              fontFamily: "Poppins",
              fontSize: "14px",
              borderRadius: "10px",
              padding: "10px",
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
            onClick={() => window.open(waLink, "_blank")}
            sx={{
              borderColor: "#3F3F3F",
              color: "white",
              textTransform: "none",
              fontFamily: "Poppins",
              fontSize: "14px",
              borderRadius: "10px",
              padding: "10px",
              "&:hover": {
                borderColor: "#FFC62D",
                backgroundColor: "rgba(255,198,45,0.08)",
              },
            }}
          >
            Contactar Dirección por WhatsApp
          </Button>

          <span className="ap-text-xs ap-text-gray-500">
            El mensaje se abrirá con tu número de inscripción para agilizar la
            atención.
          </span>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
