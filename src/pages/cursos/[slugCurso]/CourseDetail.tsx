import * as React from "react";
import { useParams, Link } from "react-router-dom";
import { courses } from "../../../data/coursesMock";
import CourseHeader from "../../../components/courses/CourseHeader";
import CourseStats from "../../../components/courses/CourseStats";
import CourseMenu from "../../../components/courses/CourseMenu";
import SectionFadeIn from "../../../components/common/SectionFadeIn";
import useDisplay from "../../../hooks/use-display";
import CoursesBreadcrumbs from "../../../components/courses/CoursesBreadcrumbs";
import { useScrollToTopWindow } from "../../../hooks/use-scrollToTop";

export const CourseDetailPage = () => {
  const { slugCurso } = useParams();
  const course = courses.find((c) => c.slug === slugCurso);
  const display = useDisplay();
  useScrollToTopWindow();

  if (!course) return <p className="ap-text-white">Curso no encontrado</p>;

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
          <div className="ap-bg-[#111111] ap-min-h-screen">
            <CourseHeader course={course} />
            <CourseStats course={course} />
            <CourseMenu course={course} />

            {/* <div className="ap-flex ap-justify-center ap-pb-16">
              <Link
                to={`/checkout/${course.slug}`}
                className="ap-bg-[#FFC62D] ap-text-black ap-font-semibold ap-px-10 ap-py-3 ap-rounded-lg"
              >
                Comprar curso
              </Link>
            </div> */}
          </div>
        </div>
        <div className="ap-py-24"></div>
      </div>
    </SectionFadeIn>
  );
};
