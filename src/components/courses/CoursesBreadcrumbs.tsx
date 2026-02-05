import * as React from "react";
import { Breadcrumbs, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";
import { ChevronRight } from "@mui/icons-material";
import useDisplay from "../../hooks/use-display";

const PRIMARY = "#FFC62D";
const SECONDARY = "#FDD877";

type Crumb = { label: string; to?: string; active?: boolean };

type Props = {
  items: Crumb[];
  isDarkMode: boolean;
  className?: string;
};

const CoursesBreadcrumbs: React.FC<Props> = ({
  items,
  isDarkMode,
  className,
}) => {
  const display = useDisplay();

  return (
    <div
      className={`ap-inline-flex ap-items-center ap-justify-center ap-rounded-full ap-border  ${display.mdAndDown ? "ap-px-3 ap-py-1 ap-mt-4" : "ap-px-4 ap-py-2"} ${className ?? ""}`}
      style={{
        borderColor: isDarkMode ? "rgba(255,255,255,0.10)" : "rgba(0,0,0,0.10)",
        background: isDarkMode ? "rgba(255,255,255,0.03)" : "rgba(0,0,0,0.02)",
        boxShadow: `0 0 0 1px rgba(233, 253, 51, 0.12), 0 0 22px rgba(231, 245, 194, 0.1)`,
      }}
    >
      <Breadcrumbs
        aria-label="breadcrumb"
        separator={
          <ChevronRight
            sx={{
              fontSize: 16,
              color: isDarkMode ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.35)",
            }}
          />
        }
        className="!ap-font-[Poppins]"
      >
        {items.map((c, idx) => {
          const common = `!ap-font-[Poppins] ${display.mdAndDown ? "!ap-text-[12px]" : "!ap-text-sm"}`;

          if (c.to && !c.active) {
            return (
              <NavLink
                key={idx}
                to={c.to}
                className={`${common} ap-no-underline`}
                style={{
                  color: isDarkMode
                    ? "rgba(255,255,255,0.55)"
                    : "rgba(0,0,0,0.55)",
                }}
              >
                {c.label}
              </NavLink>
            );
          }

          return (
            <Typography
              key={idx}
              className={`${common}`}
              style={{
                fontWeight: 700,
                color: c.active ? PRIMARY : isDarkMode ? "#fff" : "#000",
              }}
            >
              {c.label}
            </Typography>
          );
        })}
      </Breadcrumbs>

      <span
        className="ap-ml-3 ap-h-2 ap-w-2 ap-rounded-full"
        style={{
          background: `linear-gradient(90deg, ${PRIMARY}, ${SECONDARY})`,
        }}
      />
    </div>
  );
};

export default CoursesBreadcrumbs;
