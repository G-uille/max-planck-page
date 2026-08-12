import * as React from "react";
import { global } from "../config/global";
import { courses as staticCourses } from "../data/coursesMock";
import type { Course } from "../models/Courses.model";

type PublicCoursesResponse = {
  configured: boolean;
  courses: Course[];
};

const PUBLIC_COMPANIES = ["MAX_PLANCK", "STACK_PARAGUAY"];

export default function usePublicCourses() {
  const [courses, setCourses] = React.useState<Course[]>(staticCourses);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const controller = new AbortController();

    Promise.all(
      PUBLIC_COMPANIES.map(async (company) => {
        const response = await fetch(
          `${global.url}/public-courses?company=${company}`,
          { signal: controller.signal },
        );
        if (!response.ok) throw new Error("No se pudieron cargar los cursos");
        return response.json() as Promise<PublicCoursesResponse>;
      }),
    )
      .then((responses) => {
        if (responses.some((response) => response.configured)) {
          setCourses(responses.flatMap((response) => response.courses || []));
        }
      })
      .catch((error) => {
        if (error?.name !== "AbortError") setCourses(staticCourses);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { courses, loading };
}
