import * as React from "react";
import { Link, useNavigate } from "react-router-dom";
import useDisplay from "../../hooks/use-display";
import { numberFormatGuaranies } from "../../utils/numberFormat";
import { Button } from "@mui/material";
import { ArrowForward } from "@mui/icons-material";

const CourseCard = ({ course }) => {
  const display = useDisplay();
  const navigate = useNavigate();

  return (
    <div
      className="ap-border ap-border-[#3F3F3F] ap-rounded-t-xl  ap-flex ap-flex-col ap-justify-between ap-bg-[#282828] ap-bg-opacity-55 "
      style={{
        boxShadow: `0 0 0 1px rgba(233, 253, 51, 0.12), 0 0 22px rgba(231, 245, 194, 0.1)`,
      }}
    >
      <div className="ap-flex ap-flex-col ap-gap-2">
        <div className="ap-max-h-52 ap-overflow-hidden ap-rounded-t-xl">
          <img
            src={course.fileURL}
            alt="Curso - Image"
            className={`${display.mdAndDown ? "ap-order-1" : "ap-w-full"}`}
          />
        </div>
        <div className="ap-p-3 ap-pt-2 ap-pb-0 ap-flex ap-flex-col ap-gap-1">
          <span className="ap-text-xs ap-text-gray-300">
            {course.categoria}
          </span>

          <h2
            className={`ap-font-semibold ap-text-white ${display.smAndDown ? "ap-text-lg" : "ap-text-xl"}`}
          >
            {course.titulo}
          </h2>

          <p className="ap-text-sm ap-text-gray-400">Nivel: {course.nivel}</p>
          <p className="ap-text-sm ap-text-gray-400">
            Duración: {course.duracion}
          </p>
        </div>

        <div className=" ap-p-3 ap-pt-0">
          {/* {course.descuento && (
            <span className="ap-inline-block ap-bg-yellow-300 ap-text-yellow-300 ap-font-semibold ap-bg-opacity-45 ap-text-xs ap-px-2 ap-py-1 ap-rounded-full">
              {course.descuento}% OFF
            </span>
          )} */}

          <div className="ap-mt-2">
            <strong className="ap-text-xl ap-text-[#FFC62D]">
              {numberFormatGuaranies(course.precio)}
            </strong>
            {course.precioOriginal && (
              <span className="ap-ml-2 ap-line-through ap-text-sm ap-text-gray-400">
                {numberFormatGuaranies(course.precioOriginal)}
              </span>
            )}
          </div>

          <Button
            fullWidth={display.smAndDown ? true : false}
            onClick={() => navigate(`/cursos/${course.slug}`)}
            variant="contained"
            sx={{
              backgroundColor: "#3F3F3F",
              boxShadow: "none",
              color: "white",
              border: "1px solid #6C6C6C",
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
            Ver fechas y programa{" "}
            <ArrowForward sx={{ marginLeft: 1, fontSize: "20px" }} />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
