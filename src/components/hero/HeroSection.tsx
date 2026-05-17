import * as React from 'react';
import { Button, Fade, Grow } from '@mui/material';
import {
    ArrowForwardRounded,
    WhatsApp,
    CheckCircleRounded,
} from '@mui/icons-material';

import bgStore from '../../assets/png/bg-index.png';
import logoSVG from '../../assets/svg/logo.svg';
import contactUs from '../../pages/store/data/contact';

const HeroSection: React.FC = () => {
    const scrollToCourses = () => {
        const section = document.getElementById('teach');
        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <section
            id="inicio"
            className="
                ap-relative ap-min-h-[calc(100vh-120px)] ap-overflow-hidden
                ap-bg-[#111111] ap-text-white
            "
        >
            <div
                className="ap-absolute ap-inset-0 ap-bg-cover ap-bg-center ap-bg-no-repeat ap-opacity-55"
                style={{ backgroundImage: `url(${bgStore})` }}
            />

            <div className="ap-absolute ap-inset-0 ap-bg-[linear-gradient(90deg,rgba(17,17,17,0.96)_0%,rgba(17,17,17,0.82)_48%,rgba(17,17,17,0.34)_100%),radial-gradient(circle_at_30%_35%,rgba(255,198,45,0.20),transparent_28%)]" />

            <div className="ap-absolute ap-left-0 ap-right-0 ap-bottom-0 ap-h-44 ap-bg-gradient-to-t ap-from-[#F8F1DF] ap-to-transparent" />

            <div className="ap-relative ap-z-10 ap-mx-auto ap-flex ap-min-h-[calc(100vh-120px)] ap-max-w-7xl ap-items-center ap-px-5 ap-py-20">
                <div className="ap-max-w-4xl">
                    <Fade in timeout={700}>
                        <div className="ap-inline-flex ap-items-center ap-gap-2 ap-rounded-full ap-border ap-border-white/20 ap-bg-white/10 ap-px-4 ap-py-2 ap-backdrop-blur-md">
                            <span className="ap-rounded-full ap-bg-primary ap-px-3 ap-py-1 ap-text-xs ap-font-black ap-text-black">
                                2026
                            </span>

                            <span className="ap-text-sm ap-font-semibold ap-text-white/90">
                                Preparación académica con acompañamiento
                            </span>

                            <ArrowForwardRounded sx={{ fontSize: 18 }} />
                        </div>
                    </Fade>

                    <Grow in timeout={900}>
                        <img
                            src={logoSVG}
                            alt="Cursillo Max Planck"
                            className="ap-mt-10 ap-h-24 ap-drop-shadow-[0_20px_50px_rgba(0,0,0,0.45)] md:ap-h-32"
                        />
                    </Grow>

                    <Fade in timeout={1000}>
                        <h1 className="ap-mt-9 ap-font-stack ap-text-white ap-text-[44px] ap-font-bold ap-leading-[0.98] ap-tracking-[-0.05em] md:ap-text-[82px]">
                            Prepará tu ingreso
                            <br />
                            <span className="ap-text-primary">con método, práctica</span>
                            <br />
                            y acompañamiento.
                        </h1>
                    </Fade>

                    <Fade in timeout={1200}>
                        <p className="ap-mt-8 ap-max-w-2xl ap-text-xl ap-font-medium ap-leading-8 ap-text-white/78 md:ap-text-2xl">
                            Programas presenciales y virtuales para avanzar con una ruta clara, materiales organizados y seguimiento académico.
                        </p>
                    </Fade>

                    <Fade in timeout={1400}>
                        <div className="ap-mt-10 ap-flex ap-flex-col ap-gap-4 sm:ap-flex-row">
                            <Button
                                onClick={scrollToCourses}
                                variant="contained"
                                sx={{
                                    backgroundColor: '#FFC62D',
                                    color: '#111111',
                                    boxShadow: 'none',
                                    borderRadius: '999px',
                                    padding: '16px 30px',
                                    textTransform: 'none',
                                    fontFamily: 'Poppins',
                                    fontWeight: 800,
                                    fontSize: '16px',
                                    '&:hover': {
                                        backgroundColor: '#F4B800',
                                        boxShadow: 'none',
                                    },
                                }}
                            >
                                Ver programas
                                <ArrowForwardRounded sx={{ marginLeft: '8px' }} />
                            </Button>

                            <Button
                                component="a"
                                href={contactUs?.walink}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="outlined"
                                sx={{
                                    color: 'white',
                                    borderColor: 'rgba(255,255,255,0.45)',
                                    borderRadius: '999px',
                                    padding: '16px 30px',
                                    textTransform: 'none',
                                    fontFamily: 'Poppins',
                                    fontWeight: 700,
                                    fontSize: '16px',
                                    backgroundColor: 'rgba(255,255,255,0.05)',
                                    '&:hover': {
                                        borderColor: '#FFC62D',
                                        backgroundColor: 'rgba(255,198,45,0.1)',
                                    },
                                }}
                            >
                                Hablar con asesor
                                <WhatsApp sx={{ marginLeft: '8px', fontSize: 20 }} />
                            </Button>
                        </div>
                    </Fade>

                    {/* <div className="ap-mt-12 ap-grid ap-max-w-3xl ap-gap-3 md:ap-grid-cols-3">
                        {[
                            'Clases guiadas',
                            'Práctica tipo examen',
                            'Aula virtual',
                        ].map((item) => (
                            <div
                                key={item}
                                className="ap-flex ap-items-center ap-gap-2 ap-rounded-2xl ap-border ap-border-white/10 ap-bg-white/[0.07] ap-px-4 ap-py-3 ap-backdrop-blur-md"
                            >
                                <CheckCircleRounded sx={{ color: '#FFC62D', fontSize: 20 }} />
                                <span className="ap-text-sm ap-font-medium ap-text-white/80">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div> */}
                </div>
            </div>
        </section>
    );
};

export default HeroSection;