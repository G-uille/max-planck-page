import * as React from 'react';
import { Button, IconButton } from '@mui/material';
import {
    ArrowForward,
    Email,
    Facebook,
    Instagram,
    PhoneIphoneOutlined,
    PlaceOutlined,
    MailOutlineOutlined,
} from '@mui/icons-material';
import useDisplay from '../../hooks/use-display';
import contactImage from '../../assets/jpg/contact.png';
import contactUs from '../../pages/store/data/contact';
import SectionFadeIn from '../common/SectionFadeIn';

const ContactUsSection: React.FC = () => {
    const display = useDisplay();

    return (
        <section
            className={`
                ap-relative ap-overflow-hidden ap-bg-[#111111]
                ${display.mdAndDown ? 'ap-px-4 ap-py-20' : 'ap-px-32 ap-py-28'}
            `}
        >
            <div className="ap-absolute ap-inset-0 ap-bg-[radial-gradient(circle_at_50%_15%,rgba(255,198,45,0.12),transparent_30%),linear-gradient(to_bottom,#111111,#000000)]" />

            <SectionFadeIn className="ap-relative ap-z-10">
                <div className={`ap-container ap-mx-auto ${display.mdAndDown ? '' : 'ap-px-[8vw]'}`}>
                    <div
                        className={`
                            ap-grid ap-overflow-hidden ap-rounded-[38px] ap-border ap-border-white/10 ap-bg-white/[0.04]
                            ${display.mdAndDown ? 'ap-grid-cols-1' : 'ap-grid-cols-[0.95fr_1.05fr]'}
                        `}
                    >
                        <div className="ap-relative ap-min-h-[320px]">
                            <img
                                src={contactImage}
                                alt="Contacto Cursillo Max Planck"
                                className="ap-h-full ap-w-full ap-object-cover"
                            />
                            <div className="ap-absolute ap-inset-0 ap-bg-gradient-to-t ap-from-black/75 ap-via-black/20 ap-to-transparent" />

                            <div className="ap-absolute ap-bottom-6 ap-left-6 ap-right-6">
                                <span className="ap-rounded-full ap-bg-primary ap-px-4 ap-py-2 ap-text-sm ap-font-semibold ap-text-black">
                                    Atención y consultas
                                </span>
                            </div>
                        </div>

                        <div className="ap-p-7 md:ap-p-12">
                            <span className="ap-text-sm ap-font-semibold ap-uppercase ap-tracking-[0.22em] ap-text-primary">
                                Contacto
                            </span>

                            <h2
                                className={`
                                    ap-mt-4 ap-font-stack ap-font-semibold ap-leading-tight ap-tracking-[-0.04em] ap-text-white
                                    ${display.smAndDown ? 'ap-text-3xl' : 'ap-text-5xl'}
                                `}
                            >
                                ¿Tenés alguna pregunta?
                            </h2>

                            <p className="ap-mt-5 ap-max-w-xl ap-text-base ap-leading-8 ap-text-white/60">
                                Escribinos para conocer programas disponibles, horarios, modalidad, inscripción y acceso al aula virtual.
                            </p>

                            <div className="ap-mt-8 ap-flex ap-flex-col ap-gap-4">
                                <div className="ap-rounded-2xl ap-border ap-border-white/10 ap-bg-black/30 ap-p-5">
                                    <div className="ap-flex ap-items-start ap-gap-4">
                                        <PhoneIphoneOutlined sx={{ color: '#FFC62D' }} />
                                        <div>
                                            <p className="ap-text-sm ap-text-white/45">Celular</p>
                                            <p className="ap-text-base ap-font-medium ap-text-white">
                                                {contactUs.phoneNumber}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="ap-rounded-2xl ap-border ap-border-white/10 ap-bg-black/30 ap-p-5">
                                    <div className="ap-flex ap-items-start ap-gap-4">
                                        <MailOutlineOutlined sx={{ color: '#FFC62D' }} />
                                        <div>
                                            <p className="ap-text-sm ap-text-white/45">Email</p>
                                            <p className="ap-text-base ap-font-medium ap-text-white">
                                                {contactUs.email}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="ap-rounded-2xl ap-border ap-border-white/10 ap-bg-black/30 ap-p-5">
                                    <div className="ap-flex ap-items-start ap-gap-4">
                                        <PlaceOutlined sx={{ color: '#FFC62D' }} />
                                        <div>
                                            <p className="ap-text-sm ap-text-white/45">Dirección</p>
                                            <p className="ap-text-base ap-font-medium ap-text-white">
                                                {contactUs.direction}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div
                                className={`
                                    ap-mt-8 ap-flex ap-gap-3
                                    ${display.smAndDown ? 'ap-flex-col' : 'ap-flex-row ap-items-center'}
                                `}
                            >
                                <a href={contactUs?.walink} target="_blank" rel="noopener noreferrer" className={display.smAndDown ? 'ap-w-full' : ''}>
                                    <Button
                                        fullWidth={display.smAndDown}
                                        variant="contained"
                                        sx={{
                                            backgroundColor: '#FFC62D',
                                            boxShadow: 'none',
                                            color: 'black',
                                            padding: '12px 24px',
                                            textTransform: 'none',
                                            fontWeight: 600,
                                            borderRadius: '999px',
                                            fontSize: '15px',
                                            fontFamily: 'Poppins',
                                        }}
                                    >
                                        Consultar por WhatsApp <ArrowForward sx={{ marginLeft: '8px' }} />
                                    </Button>
                                </a>

                                <a href={contactUs.mapLink} target="_blank" rel="noopener noreferrer" className={display.smAndDown ? 'ap-w-full' : ''}>
                                    <Button
                                        fullWidth={display.smAndDown}
                                        variant="outlined"
                                        sx={{
                                            color: 'white',
                                            borderColor: 'rgba(255,255,255,0.25)',
                                            padding: '12px 24px',
                                            textTransform: 'none',
                                            borderRadius: '999px',
                                            fontSize: '15px',
                                            fontFamily: 'Poppins',
                                        }}
                                    >
                                        Ver ubicación
                                    </Button>
                                </a>
                            </div>

                            <div className="ap-mt-7 ap-flex ap-items-center ap-gap-1">
                                <a href={contactUs.instagramLink} target="_blank" rel="noopener noreferrer">
                                    <IconButton>
                                        <Instagram sx={{ color: '#FFC62D' }} />
                                    </IconButton>
                                </a>

                                <a href={contactUs.facebookLink} target="_blank" rel="noopener noreferrer">
                                    <IconButton>
                                        <Facebook sx={{ color: '#FFC62D' }} />
                                    </IconButton>
                                </a>

                                <a href={`mailto:${contactUs.email}`} target="_blank" rel="noopener noreferrer">
                                    <IconButton>
                                        <Email sx={{ color: '#FFC62D' }} />
                                    </IconButton>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionFadeIn>
        </section>
    );
};

export default ContactUsSection;