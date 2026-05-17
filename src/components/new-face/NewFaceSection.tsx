import * as React from 'react';
import { Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import useDisplay from '../../hooks/use-display';
import merch from '../../assets/png/merch_cursillo.png';
import contactUs from '../../pages/store/data/contact';
import SectionFadeIn from '../common/SectionFadeIn';
import { BorderBeam } from '../magicui/border-beam';

const NewFaceSection: React.FC = () => {
    const display = useDisplay();

    return (
        <section
            className={`
                ap-relative ap-overflow-hidden ap-bg-[#111111]
                ${display.mdAndDown ? 'ap-px-4 ap-py-20' : 'ap-px-32 ap-py-28'}
            `}
        >
            <div className="ap-absolute ap-inset-0 ap-bg-[radial-gradient(circle_at_30%_50%,rgba(255,198,45,0.13),transparent_32%),radial-gradient(circle_at_80%_30%,rgba(255,87,45,0.08),transparent_30%)]" />

            <SectionFadeIn className="ap-relative ap-z-10">
                <div className={`ap-container ap-mx-auto ${display.mdAndDown ? '' : 'ap-px-[8vw]'}`}>
                    <div
                        className={`
                            ap-grid ap-items-center ap-gap-12 ap-overflow-hidden ap-rounded-[38px]
                            ap-border ap-border-white/10 ap-bg-white/[0.04] ap-p-7
                            md:ap-p-12
                            ${display.mdAndDown ? 'ap-grid-cols-1' : 'ap-grid-cols-[0.9fr_1.1fr]'}
                        `}
                    >
                        <div className="ap-relative ap-flex ap-items-center ap-justify-center">
                            <div className="ap-absolute ap-h-[300px] ap-w-[300px] ap-rounded-full ap-bg-primary/15 ap-blur-3xl" />
                            <img
                                src={merch}
                                alt="Merch Cursillo Max Planck"
                                className={`${display.mdAndDown ? 'ap-w-72' : 'ap-w-full'} ap-relative ap-z-10 ap-drop-shadow-[0_40px_90px_rgba(0,0,0,0.55)]`}
                            />
                        </div>

                        <div className={`${display.mdAndDown ? 'ap-text-center' : 'ap-text-left'}`}>
                            <span className="ap-text-sm ap-font-semibold ap-uppercase ap-tracking-[0.22em] ap-text-primary">
                                Nueva imagen
                            </span>

                            <h2
                                className={`
                                    ap-mt-4 ap-font-stack ap-font-semibold ap-leading-[1.02] ap-tracking-[-0.05em] ap-text-white
                                    ${display.smAndDown ? 'ap-text-4xl' : 'ap-text-6xl'}
                                `}
                            >
                                La nueva cara del compromiso con tu futuro
                            </h2>

                            <p className="ap-mt-6 ap-max-w-2xl ap-text-base ap-leading-8 ap-text-white">
                                Una identidad pensada para acompañar la experiencia Max Planck: preparación, comunidad, constancia y metas compartidas.
                            </p>

                            <div
                                className={`
                                    ap-mt-9 ap-flex ap-items-center ap-justify-between ap-rounded-full
                                    ap-border ap-border-white/10 ap-bg-black/35 ap-p-1 ap-pl-5
                                    ${display.mdAndDown ? 'ap-flex-col ap-gap-3 ap-rounded-[24px] ap-p-4 ap-pl-4' : ''}
                                `}
                            >
                                <span className={`ap-text-sm ap-text-white/70 ${display.mdAndDown ? 'ap-text-center' : ''}`}>
                                    Viví el cursillo, vestí la experiencia.
                                </span>

                                <div className={`ap-relative ap-overflow-hidden ap-rounded-full ap-p-0.5 ${display.mdAndDown ? 'ap-w-full' : ''}`}>
                                    <BorderBeam
                                        colorFrom="#FFC62D"
                                        colorTo="#FF572D"
                                        borderRadius="999px"
                                        borderWidth={3}
                                    />

                                    <a href={contactUs?.walink} target="_blank" rel="noopener noreferrer" className={`${display.mdAndDown ? 'ap-block ap-w-full' : ''}`}>
                                        <Button
                                            fullWidth={display.mdAndDown}
                                            variant="contained"
                                            sx={{
                                                backgroundColor: '#FFC62D',
                                                boxShadow: 'none',
                                                color: 'black',
                                                border: '1px solid #FDD877',
                                                padding: '10px 22px',
                                                textTransform: 'none',
                                                fontWeight: 600,
                                                borderRadius: '999px',
                                                fontSize: '14px',
                                                fontFamily: 'Poppins',
                                            }}
                                        >
                                            Contactar <ArrowForward sx={{ marginLeft: '8px' }} />
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionFadeIn>
        </section>
    );
};

export default NewFaceSection;