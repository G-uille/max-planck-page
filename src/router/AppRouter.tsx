import { Navigate, Route, Routes } from 'react-router-dom';
import React from 'react';
import Store from "../pages/store/Store";
import StoreLayout from "../layouts/StoreLayout";

const AppRouter: React.FC = () => {
  return (
      <Routes>
          <Route path="/" element={<StoreLayout children={<Store />} />} />
          <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
  );
};

export default AppRouter;
