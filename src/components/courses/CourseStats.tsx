import * as React from "react";
import useDisplay from "../../hooks/use-display";

const CourseStats = ({ course }) => {
  const display = useDisplay();

  return (
    <div
      className={`ap-bg-[#111111] ap-border-t ap-border-b ap-border-[#3F3F3F] ap-py-6 
      ${display.smAndDown ? "ap-grid-cols-1 ap-gap-4 ap-px-4" : "ap-grid-cols-5 ap-gap-6 ap-px-16"}
      ap-grid`}
    >
      {[
        ["Duración", course.duracion],
        ["Dedicación", course.dedicacion],
        ["Clases", course.clasesEnVivo],
        ["Nivel", course.nivel],
      ].map(([label, value]) => (
        <div key={label}>
          <span className="ap-text-gray-400 ap-text-sm">{label}</span>
          <div className="ap-text-white ap-text-sm ap-font-semibold">
            {value}
          </div>
        </div>
      ))}

      <div>
        <span className="ap-text-gray-400 ap-text-sm">Requisitos</span>
        <ul className="ap-list-disc ap-ml-4 ap-text-sm ap-text-white">
          {course.requisitos.map((r) => (
            <li key={r}>{r}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseStats;
