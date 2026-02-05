import * as React from "react";
import useDisplay from "../../hooks/use-display";
import { courses } from "../../data/coursesMock";
import CourseCard from "../../components/courses/CourseCard";
import SectionFadeIn from "../../components/common/SectionFadeIn";
import { useScrollToTopWindow } from "../..//hooks/use-scrollToTop";
import CoursesBreadcrumbs from "../../components/courses/CoursesBreadcrumbs";

const CoursesPage: React.FC = () => {
  const display = useDisplay();

  useScrollToTopWindow();

  return (
    <SectionFadeIn
      className={`ap-py-12 ap-pb-0 ap-flex ap-flex-col  ${display.mdAndDown ? "ap-px-0 ap-pt-18" : " ap-gap-2 ap-pt-3"}`}
    >
      <div
        className={`  ${display.mdAndDown ? "ap-px-4" : "ap-px-[8vw] ap-pt-3"}`}
      >
        <div
          className={` ap-container ap-flex ap-flex-col  ${display.mdAndDown ? "ap-gap-2" : "ap-gap-5"}`}
        >
          <div
            className={`ap-bg-[#111111] ap-min-h-screen ${display.smAndDown ? "ap-px-2 ap-py-6" : "ap-px-16 ap-py-12 ap-mt-12"}`}
          >
            <div className=" ap-pb-4 ap-px-4 ap-pl-0">
              <CoursesBreadcrumbs
                isDarkMode={true}
                items={[
                  { label: "Inicio", to: "/" },
                  { label: "Cursos", active: true },
                ]}
              />
            </div>
            <h1
              className={`ap-font-semibold ap-text-white ${display.smAndDown ? "ap-text-2xl" : "ap-text-4xl"} ap-mb-8`}
            >
              Cursos disponibles
            </h1>

            <div
              className={`ap-grid ap-gap-6 
              ${display.smAndDown ? "ap-grid-cols-1" : "ap-grid-cols-3"}
            `}
            >
              {courses.map((course) => (
                <CourseCard key={course.slug} course={course} />
              ))}
            </div>
          </div>
        </div>
        <div className="ap-py-24"></div>
      </div>
    </SectionFadeIn>
  );
};

export default CoursesPage;
