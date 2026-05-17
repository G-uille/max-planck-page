import * as React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import NavbarMaxPlanck from '../components/navbar/NavbarMaxPlanck';

const StoreLayout: React.FC = () => {
  return (
    <div className="ap-min-h-screen ap-flex ap-flex-col">
      <NavbarMaxPlanck />
      

      <main className="ap-flex-1">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default StoreLayout;
