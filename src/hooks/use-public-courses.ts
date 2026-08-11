import * as React from "react";
import { global } from "../config/global";
import { courses as staticCourses } from "../data/coursesMock";
import type { Course } from "../models/Courses.model";

type PublicCoursesResponse = {
  configured: boolean;
  courses: Course[];
};

export default function usePublicCourses() {
  const [courses, setCourses] = React.useState<Course[]>(staticCourses);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const controller = new AbortController();

    fetch(`${global.url}/public-courses?company=MAX_PLANCK`, {
      signal: controller.signal,
    })
      .then(async (response) => {
        if (!response.ok) throw new Error("No se pudieron cargar los cursos");
        return response.json() as Promise<PublicCoursesResponse>;
      })
      .then((response) => {
        if (response.configured) setCourses(response.courses || []);
      })
      .catch((error) => {
        if (error?.name !== "AbortError") setCourses(staticCourses);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, []);

  return { courses, loading };
}
