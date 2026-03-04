import * as React from "react";
import { useNavigate } from "react-router-dom";
import useDisplay from "../../hooks/use-display";
import { numberFormatGuaranies } from "../../utils/numberFormat";
import { Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

const MiniChip = ({ children }) => (
  <span className="ap-text-[11px] ap-text-gray-200 ap-bg-[#151515] ap-border ap-border-[#2B2B2B] ap-rounded-full ap-px-2 ap-py-1">
    {children}
  </span>
);

const CourseCard = ({ course }) => {
  const display = useDisplay();
  const navigate = useNavigate();

  return (
    <div
      className="ap-border ap-border-[#3F3F3F] ap-rounded-2xl ap-bg-[#151515] ap-overflow-hidden ap-flex ap-flex-col"
      style={{
        boxShadow: `0 0 0 1px rgba(233, 253, 51, 0.12), 0 0 22px rgba(231, 245, 194, 0.1)`,
      }}
    >
      {/* IMAGEN - ahora sí ocupa todo */}
      {/* <div className="ap-relative ap-h-52 ap-w-full ap-overflow-hidden">
        <img
          src={course.fileURL}
          alt="Curso - Image"
          className="ap-w-full ap-h-full ap-object-cover"
        />

        {course.descuento && (
          <div className="ap-absolute ap-top-3 ap-right-3 ap-bg-yellow-300 ap-bg-opacity-40 ap-text-yellow-300 ap-text-xs ap-font-semibold ap-px-3 ap-py-1 ap-rounded-full">
            {course.descuento}% OFF
          </div>
        )}
      </div> */}

      {/* CONTENIDO */}
      <div className="ap-p-4 ap-flex ap-flex-col ap-gap-2 ap-flex-1">
        <span className="ap-text-xs ap-text-gray-300">{course.categoria}</span>

        <h2
          className={`ap-font-semibold ap-text-white ${
            display.smAndDown ? "ap-text-lg" : "ap-text-xl"
          }`}
        >
          {course.titulo}
        </h2>

        <p className="ap-text-sm ap-text-gray-400 ap-leading-6 ap-line-clamp-2">
          {course.descripcionCorta}
        </p>

        <div className="ap-flex ap-flex-wrap ap-gap-2 ap-mt-1">
          <MiniChip>{course.duracion}</MiniChip>
          <MiniChip>{course.clasesEnVivo}</MiniChip>
          <MiniChip>{course.nivel}</MiniChip>
        </div>

        <div className="ap-mt-2">
          <strong className="ap-text-xl ap-text-[#FFC62D]">
            {numberFormatGuaranies(course.precio)} / mes
          </strong>
          {course.precioOriginal && (
            <span className="ap-ml-2 ap-line-through ap-text-sm ap-text-gray-400">
              {numberFormatGuaranies(course.precioOriginal)}
            </span>
          )}
        </div>

        {/* Botón pegado abajo sin dejar huecos */}
        <div className="ap-mt-auto ap-pt-3">
          <Button
            fullWidth
            onClick={() => navigate(`/cursos/${course.slug}`)}
            variant="contained"
            sx={{
              backgroundColor: "#3F3F3F",
              boxShadow: "none",
              color: "white",
              border: "1px solid #6C6C6C",
              padding: "10px 12px",
              textTransform: "none",
              fontWeight: "normal",
              borderRadius: "12px",
              fontSize: "14px",
              fontFamily: "Poppins",
            }}
          >
            Ver fechas y programa
            <ArrowForward sx={{ marginLeft: 1, fontSize: "20px" }} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
