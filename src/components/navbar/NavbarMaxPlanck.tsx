import * as React from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Drawer,
  IconButton,
  Collapse,
  Grow,
  Box,
} from "@mui/material";
import {
  KeyboardArrowDownRounded,
  MenuRounded,
  CloseRounded,
  SchoolRounded,
  LaptopMacRounded,
  AssignmentTurnedInRounded,
  GroupsRounded,
  AutoStoriesRounded,
  WhatsApp,
  CalendarMonthRounded,
} from "@mui/icons-material";
import useDisplay from "../../hooks/use-display"

import logoSVG from "../../assets/svg/logo-letras_2.svg";
import contactUs from "../../pages/store/data/contact";
import { courses } from "../../data/coursesMock";

const AULA_URL = "https://cursos.cursillomaxplanck.com/";

type MegaItem = {
  title: string;
  description: string;
  icon: React.ReactNode;
  to?: string;
  href?: string;
  keywords?: string[];
};

const findCoursePath = (keywords: string[]) => {
  const match = courses.find((course: any) => {
    const text = `
      ${course.slug ?? ""}
      ${course.titulo ?? ""}
      ${course.title ?? ""}
      ${course.nombre ?? ""}
      ${course.categoria ?? ""}
      ${course.category ?? ""}
    `.toLowerCase();

    return keywords.every((keyword) => text.includes(keyword.toLowerCase()));
  });

  return match ? `/cursos/${match.slug}` : "/cursos";
};

const programasItems: MegaItem[] = [
  {
    title: "Refuerzo Preuniversitario",
    description: "Clases, práctica guiada, ejercicios y simulacros.",
    icon: <SchoolRounded />,
    keywords: ["refuerzo", "pre"],
  },
  {
    title: "Admisión Colegios Técnicos",
    description: "Preparación enfocada en resolución de ejercicios.",
    icon: <AssignmentTurnedInRounded />,
    keywords: ["colegios", "tecnicos"],
  },
  {
    title: "Ver todos los programas",
    description: "Explorá todos los cursos disponibles para el periodo 2026.",
    icon: <GroupsRounded />,
    to: "/cursos",
  },
  {
    title: "Inscripción online",
    description: "Elegí el curso y completá tu inscripción desde la web.",
    icon: <LaptopMacRounded />,
    to: "/cursos",
  },
];

const recursosItems: MegaItem[] = [
  {
    title: "Aula Virtual",
    description: "Materiales, guías, ejercitarios y recursos complementarios.",
    icon: <LaptopMacRounded />,
    href: AULA_URL,
  },
  {
    title: "Materiales de estudio",
    description: "Contenidos organizados por temas y unidades.",
    icon: <AutoStoriesRounded />,
    href: AULA_URL,
  },
  {
    title: "Práctica y simulacros",
    description: "Ejercicios para medir avance y reforzar contenidos.",
    icon: <AssignmentTurnedInRounded />,
    href: AULA_URL,
  },
  {
    title: "Calendario académico",
    description: "Fechas importantes, inicios y periodos de inscripción.",
    icon: <CalendarMonthRounded />,
    href: AULA_URL,
  },
];

const NavbarMaxPlanck: React.FC = () => {
  const navigate = useNavigate();
  const display = useDisplay()

  const [megaMenu, setMegaMenu] = React.useState<
    "programas" | "recursos" | null
  >(null);

  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const closeTimer = React.useRef<number | null>(null);


  const [isNavbarHidden, setIsNavbarHidden] = React.useState(false);
  const lastScrollY = React.useRef(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Siempre mostrar el navbar arriba de todo
      if (currentScrollY < 80) {
        setIsNavbarHidden(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      // Si el menú está abierto, no ocultar
      if (drawerOpen || megaMenu) {
        setIsNavbarHidden(false);
        lastScrollY.current = currentScrollY;
        return;
      }

      const scrollDifference = currentScrollY - lastScrollY.current;

      // Scroll hacia abajo
      if (scrollDifference > 8) {
        setIsNavbarHidden(true);
        setMegaMenu(null);
      }

      // Scroll hacia arriba
      if (scrollDifference < -8) {
        setIsNavbarHidden(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
}, [drawerOpen, megaMenu]);

  const closeAll = () => {
    setDrawerOpen(false);
    setMegaMenu(null);
  };

  const goTo = (path: string) => {
    closeAll();
    navigate(path);
  };

  const goToExternal = (url: string) => {
    closeAll();
    window.location.href = url;
  };

  const goToHomeSection = (id: string) => {
    closeAll();

    if (window.location.pathname === "/") {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      return;
    }

    navigate("/");

    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 150);
  };

  const handleMegaItemClick = (item: MegaItem) => {
    if (item.href) {
      goToExternal(item.href);
      return;
    }

    if (item.to) {
      goTo(item.to);
      return;
    }

    if (item.keywords) {
      goTo(findCoursePath(item.keywords));
      return;
    }

    goTo("/cursos");
  };

  const openMega = (menu: "programas" | "recursos") => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
    setMegaMenu(menu);
  };

  const closeMega = () => {
    closeTimer.current = window.setTimeout(() => {
      setMegaMenu(null);
    }, 120);
  };

  const currentItems = megaMenu === "programas" ? programasItems : recursosItems;

  return (
    <header
      className="ap-sticky ap-top-0 ap-z-50 ap-w-full"
      style={{
        transform: isNavbarHidden ? "translateY(-100%)" : "translateY(0)",
        transition: "transform 280ms ease",
        willChange: "transform",
      }}
    >
      <button
        type="button"
        onClick={() => goTo("/cursos")}
        className="ap-w-full ap-border-0 ap-bg-[#111111] ap-text-white ap-cursor-pointer"
      >
        <div className="ap-mx-auto ap-flex ap-max-w-7xl ap-items-center ap-justify-center ap-gap-4 ap-px-5 ap-py-2 ap-text-center ap-text-sm ap-font-medium">
          <span className="ap-rounded-full ap-bg-primary ap-px-4 ap-py-1 ap-text-xs ap-font-bold ap-text-black">
            Programas 2026
          </span>

          <span className="ap-hidden md:ap-inline ap-text-white/80">
            Inscripción online, materiales digitales y acompañamiento académico
          </span>
        </div>
      </button>

      <nav className="ap-relative ap-border-b ap-border-black/10 ap-bg-[#F8F1DF]/95 ap-backdrop-blur-xl">
        <div className="ap-mx-auto ap-flex ap-h-[80px] ap-max-w-7xl ap-items-center ap-justify-between ap-px-5">
          <button
            type="button"
            onClick={() => goTo("/")}
            className="ap-border-0 ap-bg-transparent ap-p-0 ap-cursor-pointer"
          >
            <img src={logoSVG} alt="Cursillo Max Planck" className={`${display.smAndDown ? 'ap-h-6' : 'ap-h-9'}`} />
          </button>

          <div className="ap-hidden ap-items-center ap-gap-8 md:ap-flex">
            <button
              onMouseEnter={() => openMega("programas")}
              onMouseLeave={closeMega}
              onClick={() => goTo("/cursos")}
              className="mp-nav-link"
            >
              Programas <KeyboardArrowDownRounded sx={{ fontSize: 20 }} />
            </button>

            <button
              onClick={() => goToHomeSection("modes")}
              className="mp-nav-link"
            >
              Modalidades
            </button>

            <button
              onMouseEnter={() => openMega("recursos")}
              onMouseLeave={closeMega}
              onClick={() => goToExternal(AULA_URL)}
              className="mp-nav-link"
            >
              Recursos <KeyboardArrowDownRounded sx={{ fontSize: 20 }} />
            </button>

            <button
              onClick={() => goToHomeSection("about")}
              className="mp-nav-link"
            >
              Sobre nosotros
            </button>

            <button
              onClick={() => goToHomeSection("contact")}
              className="mp-nav-link"
            >
              Contacto
            </button>
          </div>

          <div className="ap-hidden ap-items-center ap-gap-3 md:ap-flex">
            <Button
              component="a"
              href={contactUs?.walink}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                backgroundColor: "#FFC62D",
                color: "#111111",
                boxShadow: "none",
                borderRadius: "999px",
                padding: "13px 28px",
                textTransform: "none",
                fontFamily: "Poppins",
                fontWeight: 700,
                fontSize: "15px",
                "&:hover": {
                  backgroundColor: "#F4B800",
                  boxShadow: "none",
                },
              }}
            >
              Consultar inscripción
            </Button>

           {display.smAndDown && <IconButton
              onClick={() => setDrawerOpen(true)}
              sx={{
                width: 52,
                height: 52,
                backgroundColor: "#111111",
                color: "white",
                "&:hover": { backgroundColor: "#2A2A2A" },
              }}
            >
              <MenuRounded />
            </IconButton>}
          </div>

         {display.smAndDown &&  <IconButton
            onClick={() => setDrawerOpen(true)}
            sx={{
              display: { md: "none" },
              backgroundColor: "#111111",
              color: "white",
              "&:hover": { backgroundColor: "#2A2A2A" },
            }}
          >
            <MenuRounded />
          </IconButton>}
        </div>

        <div
          className={`
            ap-absolute ap-left-0 ap-right-0 ap-top-full ap-z-50
            ap-hidden ap-justify-center md:ap-flex
            ${megaMenu ? "ap-pointer-events-auto" : "ap-pointer-events-none"}
          `}
        >
          <Grow
            in={Boolean(megaMenu)}
            timeout={220}
            mountOnEnter
            unmountOnExit
            style={{ transformOrigin: "top center" }}
          >
            <div
              onMouseEnter={() => {
                if (closeTimer.current) window.clearTimeout(closeTimer.current);
              }}
              onMouseLeave={closeMega}
              className="
                ap-mt-3 ap-w-[min(1120px,calc(100vw-48px))]
                ap-overflow-hidden ap-rounded-[30px] ap-border ap-border-black/10
                ap-bg-white ap-shadow-[0_35px_100px_rgba(0,0,0,0.18)]
              "
            >
              <div className="ap-grid ap-grid-cols-[0.85fr_1.25fr_0.9fr]">
                <div className="ap-bg-[#F8F1DF] ap-p-8">
                  <p className="ap-text-xs ap-font-bold ap-uppercase ap-tracking-[0.22em] ap-text-[#8C6B00]">
                    {megaMenu === "programas"
                      ? "Rutas de formación"
                      : "Campus digital"}
                  </p>

                  <h3 className="ap-mt-4 ap-text-3xl ap-font-bold ap-leading-tight ap-text-[#111111]">
                    {megaMenu === "programas"
                      ? "Prepará tu avance con una ruta clara"
                      : "Accedé a tus recursos académicos"}
                  </h3>

                  <p className="ap-mt-4 ap-text-sm ap-leading-7 ap-text-black/55">
                    {megaMenu === "programas"
                      ? "Conocé los programas disponibles y elegí el curso que mejor se adapta a tu objetivo."
                      : "Ingresá al aula virtual para revisar materiales, ejercitarios, guías y recursos de apoyo."}
                  </p>
                </div>

                <div className="ap-grid ap-grid-cols-2 ap-gap-4 ap-p-6">
                  {currentItems.map((item) => (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => handleMegaItemClick(item)}
                      className="
                        ap-group ap-rounded-2xl ap-border ap-border-black/10
                        ap-bg-white ap-p-5 ap-text-left ap-cursor-pointer
                        ap-transition hover:ap--translate-y-1 hover:ap-shadow-xl
                      "
                    >
                      <span className="ap-flex ap-h-11 ap-w-11 ap-items-center ap-justify-center ap-rounded-xl ap-bg-[#FFF1C7] ap-text-[#111111]">
                        {item.icon}
                      </span>

                      <h4 className="ap-mt-4 ap-text-base ap-font-bold ap-text-[#111111]">
                        {item.title}
                      </h4>

                      <p className="ap-mt-2 ap-text-sm ap-leading-6 ap-text-black/55">
                        {item.description}
                      </p>
                    </button>
                  ))}
                </div>

                <div className="ap-flex ap-flex-col ap-justify-between ap-bg-[#F8F1DF] ap-p-8">
                  <div>
                    <p className="ap-text-sm ap-font-semibold ap-text-primary">
                      Atención personalizada
                    </p>

                    <h3 className="ap-mt-3 ap-text-3xl ap-font-bold ap-leading-tight ap-text-black">
                      Hablá con nuestro equipo
                    </h3>

                    <p className="ap-mt-4 ap-text-sm ap-leading-7 ap-text-black/60">
                      Te orientamos sobre horarios, modalidad, costos e
                      inscripción.
                    </p>
                  </div>

                  <Button
                    component="a"
                    href={contactUs?.walink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="contained"
                    sx={{
                      marginTop: "32px",
                      backgroundColor: "#FFC62D",
                      color: "#111111",
                      boxShadow: "none",
                      borderRadius: "999px",
                      padding: "12px 18px",
                      textTransform: "none",
                      fontFamily: "Poppins",
                      fontWeight: 700,
                      "&:hover": {
                        backgroundColor: "#F4B800",
                        boxShadow: "none",
                      },
                    }}
                  >
                    Consultar por WhatsApp
                    <WhatsApp sx={{ marginLeft: "8px", fontSize: 18 }} />
                  </Button>
                </div>
              </div>
            </div>
          </Grow>
        </div>
      </nav>

      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
        PaperProps={{
          sx: {
            width: "88%",
            maxWidth: 390,
            backgroundColor: "#F8F1DF",
          },
        }}
      >
        <Box sx={{ padding: 3 }}>
          <div className="ap-flex ap-items-center ap-justify-between">
            <img src={logoSVG} alt="Cursillo Max Planck" className={`${display.smAndDown ? 'ap-h-6' : 'ap-h-9'}`} />

            <IconButton onClick={() => setDrawerOpen(false)}>
              <CloseRounded />
            </IconButton>
          </div>

          <div className="ap-mt-8 ap-flex ap-flex-col ap-gap-3">
            <MobileMenuGroup
              title="Programas"
              items={programasItems}
              onItemClick={handleMegaItemClick}
            />

            <button onClick={() => goToHomeSection("modes")} className="mp-mobile-link">
              Modalidades
            </button>

            <MobileMenuGroup
              title="Recursos"
              items={recursosItems}
              onItemClick={handleMegaItemClick}
            />

            <button onClick={() => goToHomeSection("about")} className="mp-mobile-link">
              Sobre nosotros
            </button>

            <button onClick={() => goToHomeSection("contact")} className="mp-mobile-link">
              Contacto
            </button>

            <Button
              component="a"
              href={contactUs?.walink}
              target="_blank"
              rel="noopener noreferrer"
              variant="contained"
              sx={{
                marginTop: "16px",
                backgroundColor: "#FFC62D",
                color: "#111111",
                boxShadow: "none",
                borderRadius: "999px",
                padding: "14px 24px",
                textTransform: "none",
                fontFamily: "Poppins",
                fontWeight: 700,
              }}
            >
              Consultar inscripción
            </Button>
          </div>
        </Box>
      </Drawer>

      <style>
        {`
          .mp-nav-link {
            display: inline-flex;
            align-items: center;
            gap: 4px;
            background: transparent;
            border: 0;
            color: #111111;
            font-family: Poppins, sans-serif;
            font-size: 15px;
            font-weight: 600;
            cursor: pointer;
            transition: color 180ms ease;
          }

          .mp-nav-link:hover {
            color: #8C6B00;
          }

          .mp-mobile-link {
            width: 100%;
            border: 0;
            background: white;
            border-radius: 18px;
            padding: 16px;
            text-align: left;
            color: #111111;
            font-family: Poppins, sans-serif;
            font-size: 15px;
            font-weight: 700;
            cursor: pointer;
          }
        `}
      </style>
    </header>
  );
};

type MobileMenuGroupProps = {
  title: string;
  items: MegaItem[];
  onItemClick: (item: MegaItem) => void;
};

const MobileMenuGroup: React.FC<MobileMenuGroupProps> = ({
  title,
  items,
  onItemClick,
}) => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="ap-rounded-[20px] ap-bg-white ap-overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="ap-flex ap-w-full ap-items-center ap-justify-between ap-border-0 ap-bg-transparent ap-p-4 ap-text-left ap-font-bold ap-text-[#111111]"
      >
        {title}
        <KeyboardArrowDownRounded
          sx={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 200ms ease",
          }}
        />
      </button>

      <Collapse in={open}>
        <div className="ap-flex ap-flex-col ap-gap-2 ap-px-4 ap-pb-4">
          {items.map((item) => (
            <button
              key={item.title}
              onClick={() => onItemClick(item)}
              className="ap-rounded-2xl ap-border ap-border-black/10 ap-bg-[#F8F1DF] ap-p-4 ap-text-left"
            >
              <p className="ap-text-sm ap-font-bold ap-text-[#111111]">
                {item.title}
              </p>

              <p className="ap-mt-1 ap-text-xs ap-leading-5 ap-text-black/55">
                {item.description}
              </p>
            </button>
          ))}
        </div>
      </Collapse>
    </div>
  );
};

export default NavbarMaxPlanck;