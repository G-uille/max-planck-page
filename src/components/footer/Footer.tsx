import * as React from 'react';
import { IconButton, Button } from '@mui/material';
import {
    Instagram,
    Facebook,
    Email,
    WhatsApp,
    ArrowForwardRounded,
    PlaceRounded,
} from '@mui/icons-material';

import logoSVG from '../../assets/svg/logo.svg';
import contactUs from '../../pages/store/data/contact';

const Footer: React.FC = () => {
    const scrollTo = (id: string) => {
        const section = document.getElementById(id);
        if (section) section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    return (
        <footer className="ap-relative ap-overflow-hidden ap-bg-[#111111] ap-text-white">
            <div className="ap-absolute ap-inset-0 ap-pointer-events-none ap-bg-[radial-gradient(circle_at_50%_0%,rgba(255,198,45,0.18),transparent_32%)]" />

            <div className="ap-relative ap-z-10 ap-mx-auto ap-max-w-7xl ap-px-5 ap-py-20">
                <div className="ap-rounded-[36px] ap-border ap-border-white/10 ap-bg-white/[0.04] ap-p-8 md:ap-p-12">
                    <div className="ap-grid ap-gap-10 md:ap-grid-cols-[1.15fr_0.85fr] md:ap-items-center">
                        <div>
                            <p className="ap-text-sm ap-font-black ap-uppercase ap-tracking-[0.22em] ap-text-primary">
                                Cursillo Max Planck
                            </p>

                            <h2 className="ap-mt-5 ap-max-w-3xl ap-text-white ap-font-stack ap-text-4xl ap-font-bold ap-leading-tight ap-tracking-[-0.04em] md:ap-text-6xl">
                                Aprender también es entrenar.
                            </h2>

                            <p className="ap-mt-6 ap-max-w-2xl ap-text-base ap-leading-8 ap-text-white/60">
                                Preparación, práctica y acompañamiento para estudiantes que buscan avanzar con claridad, constancia y mejores herramientas.
                            </p>
                        </div>

                        <div className="ap-flex ap-flex-col ap-gap-4 md:ap-items-end">
                            <Button
                                component="a"
                                href={contactUs?.walink}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="contained"
                                sx={{
                                    backgroundColor: '#FFC62D',
                                    color: '#111111',
                                    boxShadow: 'none',
                                    borderRadius: '999px',
                                    padding: '14px 28px',
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
                                Consultar inscripción
                                <ArrowForwardRounded sx={{ marginLeft: '8px' }} />
                            </Button>

                            <p className="ap-text-sm ap-text-white/45">
                                Atención personalizada por WhatsApp.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="ap-mt-16 ap-grid ap-gap-12 md:ap-grid-cols-[1.1fr_0.8fr_0.8fr_0.8fr]">
                    <div>
                        <img
                            src={logoSVG}
                            alt="Cursillo Max Planck"
                            className="ap-h-16"
                        />

                        <p className="ap-mt-6 ap-max-w-sm ap-text-base ap-leading-8 ap-text-white/55">
                            Un espacio educativo con trayectoria, acompañamiento y recursos para fortalecer el proceso de aprendizaje.
                        </p>

                        <div className="ap-mt-6 ap-inline-flex ap-items-center ap-gap-2 ap-rounded-full ap-border ap-border-white/10 ap-bg-white/[0.06] ap-px-4 ap-py-3 ap-text-sm ap-font-medium">
                            <PlaceRounded sx={{ fontSize: 18, color: '#FFC62D' }} />
                            Luque, Paraguay
                        </div>
                    </div>

                    <FooterColumn
                        title="Programas"
                        links={[
                            { label: 'Refuerzo Preuniversitario', id: 'teach' },
                            { label: 'Colegios Técnicos', id: 'teach' },
                            { label: 'Modalidades', id: 'modes' },
                            { label: 'Aula Virtual', id: 'teach' },
                        ]}
                        onClick={scrollTo}
                    />

                    <FooterColumn
                        title="Institución"
                        links={[
                            { label: 'Sobre nosotros', id: 'about' },
                            { label: 'Preguntas frecuentes', id: 'faq' },
                            { label: 'Contacto', id: 'contact' },
                        ]}
                        onClick={scrollTo}
                    />

                    <div>
                        <h3 className="ap-text-sm ap-font-black ap-uppercase ap-tracking-[0.18em] ap-text-white">
                            Contacto
                        </h3>

                        <p className="ap-mt-5 ap-text-sm ap-leading-6 ap-text-white/55">
                            {contactUs?.email}
                        </p>

                        <div className="ap-mt-5 ap-flex ap-items-center ap-gap-2">
                            {contactUs?.instagramLink && (
                                <a href={contactUs.instagramLink} target="_blank" rel="noopener noreferrer">
                                    <IconButton className="mp-footer-icon">
                                        <Instagram />
                                    </IconButton>
                                </a>
                            )}

                            {contactUs?.facebookLink && (
                                <a href={contactUs.facebookLink} target="_blank" rel="noopener noreferrer">
                                    <IconButton className="mp-footer-icon">
                                        <Facebook />
                                    </IconButton>
                                </a>
                            )}

                            {contactUs?.email && (
                                <a href={`mailto:${contactUs.email}`} target="_blank" rel="noopener noreferrer">
                                    <IconButton className="mp-footer-icon">
                                        <Email />
                                    </IconButton>
                                </a>
                            )}

                            {contactUs?.walink && (
                                <a href={contactUs.walink} target="_blank" rel="noopener noreferrer">
                                    <IconButton className="mp-footer-icon">
                                        <WhatsApp />
                                    </IconButton>
                                </a>
                            )}
                        </div>
                    </div>
                </div>

                <div className="ap-mt-16 ap-flex ap-flex-col ap-gap-4 ap-border-t ap-border-white/10 ap-pt-8 md:ap-flex-row md:ap-items-center md:ap-justify-between">
                    <p className="ap-text-sm ap-text-white/42">
                        © 2026 Cursillo Max Planck. Todos los derechos reservados.
                    </p>

                    <p className="ap-text-sm ap-text-white/42">
                        Desarrollado por{' '}
                        <a
                            href="https://stackparaguay.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="ap-font-bold ap-text-primary ap-no-underline"
                        >
                            Stack Paraguay
                        </a>
                    </p>
                </div>
            </div>

            <style>
                {`
                    .mp-footer-icon {
                        width: 46px !important;
                        height: 46px !important;
                        background: rgba(255,255,255,0.06) !important;
                        color: #FFC62D !important;
                        border: 1px solid rgba(255,255,255,0.10) !important;
                        transition: transform 180ms ease, background 180ms ease !important;
                    }

                    .mp-footer-icon:hover {
                        background: #FFC62D !important;
                        color: #111111 !important;
                        transform: translateY(-3px);
                    }

                    .mp-footer-link {
                        border: 0;
                        background: transparent;
                        padding: 0;
                        font-family: Poppins, sans-serif;
                        font-size: 15px;
                        color: rgba(255,255,255,0.58);
                        cursor: pointer;
                        text-align: left;
                        transition: color 180ms ease, transform 180ms ease;
                    }

                    .mp-footer-link:hover {
                        color: #FFC62D;
                        transform: translateX(3px);
                    }
                `}
            </style>
        </footer>
    );
};

type FooterColumnProps = {
    title: string;
    links: {
        label: string;
        id: string;
    }[];
    onClick: (id: string) => void;
};

const FooterColumn: React.FC<FooterColumnProps> = ({ title, links, onClick }) => {
    return (
        <div>
            <h3 className="ap-text-sm ap-font-black ap-uppercase ap-tracking-[0.18em] ap-text-white">
                {title}
            </h3>

            <div className="ap-mt-5 ap-flex ap-flex-col ap-gap-3">
                {links.map((link) => (
                    <button
                        key={link.label}
                        type="button"
                        onClick={() => onClick(link.id)}
                        className="mp-footer-link"
                    >
                        {link.label}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Footer;