import * as React from "react";
import { Button, Fade, Grow } from "@mui/material";
import { ArrowForwardRounded, WhatsApp } from "@mui/icons-material";

import bgStore from "../../assets/png/bg-index.png";
import logoSVG from "../../assets/svg/logo.svg";
import contactUs from "../../pages/store/data/contact";

const HeroSection: React.FC = () => {
  const scrollToCourses = () => {
    const section = document.getElementById("teach");
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="inicio"
      className="
                ap-relative ap-min-h-[calc(100svh-120px)] ap-overflow-hidden
                ap-bg-[#111111] ap-text-white
            "
    >
      <div
        className="
                    ap-absolute ap-inset-0 ap-bg-cover ap-bg-center ap-bg-no-repeat ap-opacity-55
                    md:ap-bg-center
                "
        style={{ backgroundImage: `url(${bgStore})` }}
      />

      <div
        className="
                    ap-absolute ap-inset-0
                    ap-bg-[linear-gradient(180deg,rgba(17,17,17,0.92)_0%,rgba(17,17,17,0.78)_45%,rgba(17,17,17,0.62)_100%),radial-gradient(circle_at_35%_28%,rgba(255,198,45,0.16),transparent_30%)]
                    md:ap-bg-[linear-gradient(90deg,rgba(17,17,17,0.96)_0%,rgba(17,17,17,0.82)_48%,rgba(17,17,17,0.34)_100%),radial-gradient(circle_at_30%_35%,rgba(255,198,45,0.20),transparent_28%)]
                "
      />

      <div className="ap-absolute ap-left-0 ap-right-0 ap-bottom-0 ap-h-40 ap-bg-gradient-to-t ap-from-[#F8F1DF] ap-to-transparent md:ap-h-44" />

      <div
        className="
                    ap-relative ap-z-10 ap-mx-auto ap-flex
                    ap-min-h-[calc(100svh-120px)] ap-max-w-7xl
                    ap-items-center ap-px-5 ap-pt-16 ap-pb-28
                    sm:ap-px-8 md:ap-py-24
                "
      >
        <div className="ap-w-full ap-max-w-4xl ap-overflow-hidden">
          <Fade in timeout={700}>
            <div
              className="
                                ap-inline-flex ap-max-w-full ap-flex-wrap ap-items-center ap-gap-2
                                ap-rounded-[28px] ap-border ap-border-white/20
                                ap-bg-white/10 ap-px-4 ap-py-2 ap-backdrop-blur-md
                            "
            >
              <span className="ap-rounded-full ap-bg-primary ap-px-3 ap-py-1 ap-text-xs ap-font-black ap-text-black">
                2026
              </span>

              <span className="ap-text-xs ap-font-semibold ap-leading-5 ap-text-white/90 sm:ap-text-sm">
                Preparación académica con acompañamiento
              </span>

              <ArrowForwardRounded sx={{ fontSize: 18 }} />
            </div>
          </Fade>

          <Grow in timeout={900}>
            <img
              src={logoSVG}
              alt="Cursillo Max Planck"
              className="
                                ap-mt-8 ap-h-20
                                ap-drop-shadow-[0_20px_50px_rgba(0,0,0,0.45)]
                                sm:ap-h-24 md:ap-mt-10 md:ap-h-32
                            "
            />
          </Grow>

          <Fade in timeout={1000}>
            <h1
              className="
                                ap-mt-8 ap-max-w-[calc(100vw-40px)]
                                ap-font-stack ap-text-[38px] ap-font-bold
                                ap-leading-[0.98] ap-tracking-[-0.045em]
                                ap-text-white ap-break-words
                                sm:ap-text-[54px] md:ap-mt-9 md:ap-max-w-4xl md:ap-text-[82px]
                            "
            >
              <span className="ap-block">Prepará tu ingreso</span>
              <span className="ap-block ap-text-primary">
                con método, práctica
              </span>
              <span className="ap-block">y acompañamiento.</span>
            </h1>
          </Fade>

          <Fade in timeout={1200}>
            <p
              className="
                                ap-mt-6 ap-max-w-[calc(100vw-40px)]
                                ap-text-base ap-font-medium ap-leading-7 ap-text-white/78
                                sm:ap-text-lg md:ap-mt-8 md:ap-max-w-2xl md:ap-text-2xl md:ap-leading-8
                            "
            >
              Programas presenciales y virtuales para avanzar con una ruta
              clara, materiales organizados y seguimiento académico.
            </p>
          </Fade>

          <Fade in timeout={1400}>
            <div className="ap-mt-8 ap-flex ap-w-full ap-flex-col ap-gap-4 sm:ap-mt-10 sm:ap-w-auto sm:ap-flex-row">
              <Button
                onClick={scrollToCourses}
                variant="contained"
                sx={{
                  width: { xs: "100%", sm: "auto" },
                  backgroundColor: "#FFC62D",
                  color: "#111111",
                  boxShadow: "none",
                  borderRadius: "999px",
                  padding: { xs: "15px 24px", sm: "16px 30px" },
                  textTransform: "none",
                  fontFamily: "Poppins",
                  fontWeight: 800,
                  fontSize: { xs: "15px", sm: "16px" },
                  "&:hover": {
                    backgroundColor: "#F4B800",
                    boxShadow: "none",
                  },
                }}
              >
                Ver programas
                <ArrowForwardRounded sx={{ marginLeft: "8px" }} />
              </Button>

              <Button
                component="a"
                href={contactUs?.walink}
                target="_blank"
                rel="noopener noreferrer"
                variant="outlined"
                sx={{
                  width: { xs: "100%", sm: "auto" },
                  color: "white",
                  borderColor: "rgba(255,255,255,0.45)",
                  borderRadius: "999px",
                  padding: { xs: "15px 24px", sm: "16px 30px" },
                  textTransform: "none",
                  fontFamily: "Poppins",
                  fontWeight: 700,
                  fontSize: { xs: "15px", sm: "16px" },
                  backgroundColor: "rgba(255,255,255,0.05)",
                  "&:hover": {
                    borderColor: "#FFC62D",
                    backgroundColor: "rgba(255,198,45,0.1)",
                  },
                }}
              >
                Hablar con asesor
                <WhatsApp sx={{ marginLeft: "8px", fontSize: 20 }} />
              </Button>
            </div>
          </Fade>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
