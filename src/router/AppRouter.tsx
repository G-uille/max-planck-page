import { Navigate, Route, Routes } from "react-router-dom";
import React from "react";
import Store from "../pages/store/Store";
import StoreLayout from "../layouts/StoreLayout";
import CoursesPage from "../pages/cursos/Courses";
import { CourseDetailPage } from "../pages/cursos/[slugCurso]/CourseDetail";
import CheckoutPage from "../pages/cursos/[slugCurso]/Checkout";
import CheckoutLayout from "../layouts/CheckoutLayout";

const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route element={<StoreLayout />}>
        {/* Home */}
        <Route path="/" element={<Store />} />

        {/* Cursos */}
        <Route path="/cursos" element={<CoursesPage />} />
        <Route path="/cursos/:slugCurso" element={<CourseDetailPage />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
      {/* Checkout */}
      <Route path="/checkout" element={<CheckoutLayout />}>
        <Route path=":slugCurso" element={<CheckoutPage />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
