import * as React from "react";
import { Outlet } from "react-router-dom";
import StoreHeader from "../components/header/StoreHeader";
import Footer from "../components/footer/Footer";
import logoSVG from "../assets/svg/logo-letras_2.svg";
import useDisplay from "../hooks/use-display";
import { useScrollToTopWindow } from "../hooks/use-scrollToTop";
import { ToastContainer } from "react-toastify";

const CheckoutLayout: React.FC = () => {
  const display = useDisplay();
  useScrollToTopWindow();

  return (
    <div className="ap-min-h-screen ap-flex ap-flex-col">
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        pauseOnHover
        draggable
        limit={3}
        toastClassName={(context) =>
          context?.type === "success"
            ? "custom-toast-success"
            : "custom-toast-default"
        }
      />

      <div
        className={`ap-flex ap-w-full ap-pt-3 ap-items-start ap-justify-start ${display.smAndDown ? "ap-px-4 ap-pb-3" : "ap-mb-4 ap-pl-[10vw]"}`}
      >
        <a href="/">
          <img src={logoSVG} alt="logo" className={`${display.smAndDown ? 'ap-h-6' : 'ap-h-9'}`} />
        </a>
      </div>
      {/* <h2
        className={`ap-text-white  ap-font-medium  ${display.smAndDown ? "ap-text-xl ap-px-4 ap-mb-2" : "ap-text-4xl ap-pl-[18vw] ap-mb-4 "}`}
      >
        Tu Inscripción
      </h2> */}
      <main className="ap-flex-1">
        <Outlet />
      </main>
    </div>
  );
};

export default CheckoutLayout;
