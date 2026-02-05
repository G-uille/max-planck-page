import * as React from "react";
import { Button } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import useDisplay from "../../hooks/use-display";
import { useNavigate } from "react-router-dom";

const CheckoutSuccess = () => {
  const display = useDisplay();
  const navigate = useNavigate();

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

        {/* MESSAGE */}
        <p className="ap-text-gray-400 ap-text-sm">
          Recibirás una notificación vía{" "}
          <span className="ap-text-white ap-font-medium">WhatsApp</span> con los
          detalles para realizar el pago.
        </p>

        <div className="ap-bg-[#FFC62D] ap-bg-opacity-20 ap-text-[#FFC62D] ap-text-sm ap-rounded-lg ap-p-4">
          Si no recibís el mensaje en unos minutos, podés contactarnos y te
          responderemos a la brevedad.
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
            onClick={() => window.open("https://wa.me/595XXXXXXXX", "_blank")}
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
            No me llegó el mensaje
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSuccess;
