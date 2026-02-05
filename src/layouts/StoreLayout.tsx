import * as React from "react";
import { Outlet } from "react-router-dom";
import StoreHeader from "../components/header/StoreHeader";
import Footer from "../components/footer/Footer";

const StoreLayout: React.FC = () => {
  return (
    <div className="ap-min-h-screen ap-flex ap-flex-col">
      <StoreHeader />

      <main className="ap-flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default StoreLayout;
