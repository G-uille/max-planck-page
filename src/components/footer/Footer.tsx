import * as React from "react";
import { useSelector } from "react-redux";
import useDisplay from "../../hooks/use-display";
import contactUs from "../../pages/store/data/contact";
import logoSVG from "../../assets/svg/logo.svg";

import {
  EmailOutlined,
  PhoneIphoneOutlined,
  ArrowForward,
  Instagram,
  Facebook,
  Email,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

const PRIMARY = "#FFC62D";
const SECONDARY = "#FDD877";

const normalizeTel = (value?: string) => {
  if (!value) return "";
  return value.replace(/[^\d+]/g, "");
};

type NavItem = { label: string; href: string };

const Footer: React.FC = () => {
  const display = useDisplay();
  const isDarkMode = false;

  const navItems: NavItem[] = [
    { label: "Inicio", href: "/" },
    // { label: "Cursos", href: "/cursos" },
    // si tenés otra sección, agregala acá
  ];

  const emails = [
    (contactUs as any).email,
    (contactUs as any).emailComercial,
    (contactUs as any).emailSoporte,
  ].filter(Boolean) as string[];

  const tel = normalizeTel((contactUs as any).phoneNumber);
  const whatsappLink =
    (contactUs as any).whatsappLink ||
    (tel ? `https://wa.me/${tel.replace("+", "")}` : "");

  return (
    <footer
      className={`ap-w-full ap-flex ap-flex-col ap-items-center ap-justify-center ${
        isDarkMode ? "ap-bg-[#111111]" : "ap-bg-[#111111]"
      }`}
      style={{
        background:
          "radial-gradient(1200px 500px at 20% -20%, rgba(45, 45, 44, 0.22), transparent 60%), radial-gradient(900px 400px at 80% 0%, rgba(44, 44, 44, 0.14), transparent 55%), #000000",
      }}
    >
      {/* TOP GRID */}
      <div
        className={`ap-container ap-w-full ${
          display.smAndDown
            ? "ap-px-6 ap-pt-14 ap-pb-10"
            : "ap-px-[8vw] ap-pt-16 ap-pb-12"
        }`}
      >
        <div
          className={`ap-grid ap-gap-10 ${
            display.mdAndDown ? "ap-grid-cols-1" : "ap-grid-cols-12"
          }`}
        >
          {/* CTA */}
          <div className={`${display.mdAndDown ? "" : "ap-col-span-6"}`}>
            <h3
              className={`ap-font-stack ap-font-semibold ap-leading-tight ${
                display.smAndDown ? "ap-text-3xl" : "ap-text-4xl"
              } ap-text-white`}
            >
              ¿Tenés alguna pregunta?
            </h3>
            <p className="ap-mt-3 ap-text-sm ap-text-gray-300 ap-max-w-md">
              Contanos tu duda y te ayudamos a responderlas de inmediato.
            </p>

            <div className="ap-mt-6 ap-flex ap-flex-wrap ap-gap-3">
              <a
                href={`tel:${tel}`}
                className="ap-inline-flex ap-items-center ap-gap-2 ap-rounded-xl ap-px-5 ap-py-3 ap-text-sm ap-font-semibold ap-text-black"
                style={{
                  background: PRIMARY,
                  boxShadow: "0 10px 26px rgba(51,161,253,0.25)",
                }}
              >
                Contactar <ArrowForward sx={{ fontSize: 18 }} />
              </a>

              {/* {!!whatsappLink && (
                                <a
                                    href={whatsappLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ap-inline-flex ap-items-center ap-gap-2 ap-rounded-xl ap-px-5 ap-py-3 ap-text-sm ap-font-semibold ap-text-white"
                                    style={{
                                        background: 'rgba(194,240,245,0.10)',
                                        boxShadow:
                                            '0 0 0 1px rgba(51,161,253,0.20)',
                                    }}
                                >
                                    WhatsApp
                                </a>
                            )} */}
            </div>
          </div>

          {/* NAV */}
          <div className={`${display.mdAndDown ? "" : "ap-col-span-3"}`}>
            <h4 className="ap-text-white ap-font-semibold ap-mb-4">
              Navegación
            </h4>
            <ul className="ap-flex ap-flex-col ap-gap-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="ap-text-sm ap-text-gray-300 hover:ap-text-white ap-transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* CONTACT */}
          <div className={`${display.mdAndDown ? "" : "ap-col-span-3"}`}>
            <h4 className="ap-text-white ap-font-semibold ap-mb-4">Contacto</h4>

            <div className="ap-flex ap-flex-col ap-gap-3">
              {emails.map((mail) => (
                <a
                  key={mail}
                  href={`mailto:${mail}`}
                  className="ap-inline-flex ap-items-center ap-gap-2 ap-text-sm ap-text-gray-300 hover:ap-text-white ap-transition"
                >
                  <EmailOutlined sx={{ fontSize: 18, color: SECONDARY }} />
                  {mail}
                </a>
              ))}

              {!!tel && (
                <a
                  href={`tel:${tel}`}
                  className="ap-inline-flex ap-items-center ap-gap-2 ap-text-sm ap-text-gray-300 hover:ap-text-white ap-transition"
                >
                  <PhoneIphoneOutlined
                    sx={{ fontSize: 18, color: SECONDARY }}
                  />
                  {(contactUs as any).phoneNumber}
                </a>
              )}
            </div>
            <div
              className={`ap-flex ap-justify-start ap-mt-3 ap-ml-[-8px] ap-items-center ap-w-full ${display.mdAndDown ? "ap-gap-0" : "ap-gap-0"}`}
            >
              <a
                href={contactUs.instagramLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <Instagram sx={{ color: SECONDARY }} />
                </IconButton>
              </a>
              <a
                href={contactUs.facebookLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <Facebook sx={{ color: SECONDARY }} />
                </IconButton>
              </a>
              <a
                href={`mailto:${contactUs.email}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <IconButton>
                  <Email sx={{ color: SECONDARY }} />
                </IconButton>
              </a>
            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div
          className="ap-mt-12 ap-w-full ap-h-px"
          style={{ background: "rgba(255,255,255,0.10)" }}
        />
      </div>

      {/* LOGO CENTER */}
      <div className="ap-w-full ap-flex ap-justify-center ap-items-center ap-py-10">
        <img src={logoSVG} alt="logo" className="ap-h-16 ap-opacity-95" />
      </div>

      {/* CREDITS */}
      <div
        className="ap-w-full ap-text-center ap-py-5"
        style={{ background: "rgba(255,255,255,0.04)" }}
      >
        <p className="ap-text-xs ap-text-gray-300">
          © 2026{" "}
          <a
            href="https://stackparaguay.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:ap-text-[#FFC62D] ap-transition !ap-text-[#FFC62D]"
            // style={{ color: PRIMARY }}
          >
            Stack Paraguay
          </a>
          . Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
