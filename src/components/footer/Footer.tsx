import * as React from "react";
import useDisplay from '../../hooks/use-display'
import logoSVG from '../../assets/svg/logo.svg'
import contactUs from "../../pages/store/data/contact";
import { IconButton } from "@mui/material";
import { Email, Facebook, Instagram } from "@mui/icons-material";

const Footer: React.FC = () => {
    const display = useDisplay()

    return(
        <footer className={`ap-bg-[#111111]   ap-flex ap-items-center  ap-flex-col ap-justify-center ${display.smAndDown ? 'ap-p-32 ap-px-12 ap-pb-12' : 'ap-p-32 ap-pb-12'}`}>
            <div className={`ap-container ap-w-full ap-border-market-primary ap-border-opacity-30 ap-rounded-xl ap-flex ap-items-center ap-justify-between ap-p-0 ${display.smAndDown ? 'ap-flex-col' : ''}`}>
                <div className={`ap-flex ap-w-full ap-items-center ap-justify-center ${display.smAndDown ? '' : '' }`}>
                    <img src={logoSVG} alt="logo" className="ap-h-24" />
                </div>
                <div className={`ap-flex ap-justify-center ap-items-center ap-w-full ${display.mdAndDown ? 'ap-gap-0' : 'ap-gap-0'}`}>
                    <a href={contactUs.instagramLink} target="_blank" rel="noopener noreferrer">
                        <IconButton>
                            <Instagram sx={{ color: 'white' }} />
                        </IconButton>
                    </a>
                    <a href={contactUs.facebookLink} target="_blank" rel="noopener noreferrer">
                        <IconButton>
                            <Facebook sx={{ color: 'white' }} />
                        </IconButton>
                    </a>
                    <a href={`mailto:${contactUs.email}`} target="_blank" rel="noopener noreferrer">
                        <IconButton>
                            <Email sx={{ color: 'white' }} />
                        </IconButton>
                    </a>
                </div>
            </div>
            <p className="ap-font-light ap-w-full ap-text-sm ap-text-white ap-mt-5 ap-container ap-text-center">
                © 2025 GoldenLab. Todos los derechos reservados.
            </p>
        </footer>
    )
};

export default  Footer;
