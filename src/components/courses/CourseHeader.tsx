import * as React from "react";
import useDisplay from "../../hooks/use-display";
import { Button } from "@mui/material";
import { numberFormatGuaranies } from "../..//utils/numberFormat";
import { ArrowForward } from "@mui/icons-material";
import CoursesBreadcrumbs from "./CoursesBreadcrumbs";
import { useNavigate } from "react-router-dom";

const CourseHeader = ({ course }) => {
  const display = useDisplay();
  const navigate = useNavigate();
  return (
    <div
      className={`ap-bg-[#111111] ap-flex  ${display.smAndDown ? "ap-px-2 ap-flex-col ap-pt-8" : "ap-px-16 ap-pt-20 ap-gap-48"}  ap-pb-12 ap-justify-between`}
    >
      <div className={`${display.smAndDown && "ap-order-2"}`}>
        <div className="ap-pb-4 ap-w-full ap-px-4 ap-pl-0 ap-mb-3 ">
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

        <p
          className={`ap-text-gray-400 ap-font-medium ap-mt-4 ${
            display.smAndDown ? "ap-text-sm" : "ap-text-sm"
          }`}
        >
          {course.descripcionLarga}
        </p>

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
              <span className="ap-bg-yellow-300  ap-bg-opacity-45 ap-text-yellow-300 ap-text-xs ap-px-3 ap-py-1 ap-rounded-full">
                {course.descuento}% OFF
              </span>
            )}
          </div>
          <span
            className={`ap-text-[13px] ap-text-[#FFC62D] ap-underline ${display.smAndDown ? "ap-w-full ap-my-2" : "ap-text-right"}`}
          >
            Pago en Efectivo {!display.smAndDown && <br />} y Transferencia
          </span>
        </div>
        <span className="ap-text-gray-400 ap-font-medium ap-text-sm">
          Matrítula totalmente gratis
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
          Inscribirme <ArrowForward sx={{ marginLeft: 1, fontSize: "20px" }} />
        </Button>
      </div>
      <img
        src={course.fileURL}
        alt="Curso - Image"
        className={` ap-rounded-xl ${display.mdAndDown ? "ap-order-1" : "ap-w-4/12"}`}
        style={{
          boxShadow: `0 0 0 1px rgba(233, 253, 51, 0.12), 0 0 22px rgba(231, 245, 194, 0.1)`,
        }}
      />
    </div>
  );
};

export default CourseHeader;
