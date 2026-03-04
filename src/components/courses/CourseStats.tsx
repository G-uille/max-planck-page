import * as React from "react";
import useDisplay from "../../hooks/use-display";
import {
  AccessTime,
  CalendarMonth,
  School,
  LiveTv,
  Bolt,
  CheckCircleOutline,
} from "@mui/icons-material";

const StatCard = ({ icon, label, value }) => (
  <div className="ap-bg-[#151515] ap-border ap-border-[#2B2B2B] ap-rounded-xl ap-p-4 ap-flex ap-gap-3 ap-items-start">
    <div className="ap-text-[#FFC62D] ap-mt-0.5">{icon}</div>
    <div className="ap-flex ap-flex-col">
      <span className="ap-text-gray-400 ap-text-xs">{label}</span>
      <span className="ap-text-white ap-text-sm ap-font-semibold ap-leading-5">
        {value}
      </span>
    </div>
  </div>
);

const CourseStats = ({ course }) => {
  const display = useDisplay();

  return (
    <div className="ap-bg-[#111111] ap-border-t ap-border-b ap-border-[#3F3F3F] ap-py-8">
      <div
        className={`ap-grid ${
          display.smAndDown
            ? "ap-grid-cols-1 ap-gap-3 ap-px-4"
            : "ap-grid-cols-5 ap-gap-4 ap-px-16"
        }`}
      >
        <StatCard
          icon={<AccessTime sx={{ fontSize: 20 }} />}
          label="Duración"
          value={course.duracion}
        />
        <StatCard
          icon={<Bolt sx={{ fontSize: 20 }} />}
          label="Dedicación"
          value={course.dedicacion}
        />
        <StatCard
          icon={<CalendarMonth sx={{ fontSize: 20 }} />}
          label="Inicio / Fin"
          value={course.fechaInicioFin}
        />
        <StatCard
          icon={<LiveTv sx={{ fontSize: 20 }} />}
          label="Clases"
          value={course.clasesEnVivo}
        />
        <StatCard
          icon={<School sx={{ fontSize: 20 }} />}
          label="Nivel"
          value={course.nivel}
        />
      </div>

      {/* Requisitos - tarjeta full */}
      <div className={`${display.smAndDown ? "ap-px-4" : "ap-px-16"} ap-mt-4`}>
        <div className="ap-bg-[#151515] ap-border ap-border-[#2B2B2B] ap-rounded-xl ap-p-5">
          <div className="ap-flex ap-items-center ap-gap-2 ap-mb-3">
            <CheckCircleOutline sx={{ fontSize: 18, color: "#FFC62D" }} />
            <h4 className="ap-text-white ap-font-semibold">Requisitos</h4>
          </div>

          <ul className="ap-grid ap-gap-2 ap-text-sm ap-text-gray-200">
            {course.requisitos.map((r) => (
              <li key={r} className="ap-flex ap-gap-2 ap-items-start">
                <span className="ap-text-[#FFC62D] ap-leading-6">•</span>
                <span className="ap-leading-6">{r}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CourseStats;
