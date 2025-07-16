import { useMemo } from "react";
import { useMediaQuery } from "@mui/material";

const useDisplay = () => {
    const xs = useMediaQuery("(max-width: 599px)");
    const sm = useMediaQuery("(min-width: 600px) and (max-width: 959px)");
    const md = useMediaQuery("(min-width: 960px) and (max-width: 1279px)");
    const lg = useMediaQuery("(min-width: 1280px) and (max-width: 1919px)");
    const xl = useMediaQuery("(min-width: 1920px)");
    const mdAndUp = useMediaQuery("(min-width: 960px)");
    const lgAndUp = useMediaQuery("(min-width: 1280px)");
    const smAndDown = useMediaQuery("(max-width: 959px)");
    const mdAndDown = useMediaQuery("(max-width: 1279px)");

    return useMemo(() => ({
        xs,
        sm,
        md,
        lg,
        xl,
        mdAndUp,
        lgAndUp,
        smAndDown,
        mdAndDown
    }), [xs, sm, md, lg, xl, mdAndUp, lgAndUp, smAndDown, mdAndDown]);
};

export default useDisplay;
