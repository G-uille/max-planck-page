import * as React from 'react';
import { Button } from '@mui/material';
import { ArrowForward } from '@mui/icons-material';
import useDisplay from '../../hooks/use-display';
import useModes from '../../pages/store/data/use-modes';
import contactUs from '../../pages/store/data/contact';
import SectionFadeIn from '../common/SectionFadeIn';

const ModesSection: React.FC = () => {
    const display = useDisplay();
    const { modes } = useModes();

    return (
        <section
            className={`
                ap-relative ap-overflow-hidden ap-bg-[#111111]
                ${display.mdAndDown ? 'ap-px-4 ap-py-20' : 'ap-px-32 ap-py-28'}
            `}
        >
            <div className="ap-absolute ap-inset-0 ap-bg-[linear-gradient(to_bottom,#111111,#0B0B0B),radial-gradient(circle_at_50%_10%,rgba(255,198,45,0.09),transparent_30%)]" />

            <SectionFadeIn className="ap-relative ap-z-10">
                <div className={`ap-container ap-mx-auto ${display.mdAndDown ? '' : 'ap-px-[8vw]'}`}>
                    <div
                        className={`
                            ap-mb-12 ap-flex ap-items-end ap-justify-between ap-gap-5
                            ${display.mdAndDown ? 'ap-flex-col ap-items-start' : ''}
                        `}
                    >
                        <div>
                            <span className="ap-text-sm ap-font-semibold ap-uppercase ap-tracking-[0.22em] ap-text-primary">
                                Flexibilidad
                            </span>

                            <h2
                                className={`
                                    ap-mt-4 ap-font-stack ap-font-semibold ap-leading-tight ap-tracking-[-0.04em] ap-text-white
                                    ${display.smAndDown ? 'ap-text-3xl' : 'ap-text-5xl'}
                                `}
                            >
                                Modalidades <span className="ap-text-primary">de clases</span>
                            </h2>

                            <p className="ap-mt-4 ap-max-w-2xl ap-text-base ap-leading-8 ap-text-white/60">
                                Elegí la forma de aprender que mejor se adapte a tu rutina.
                            </p>
                        </div>

                        <a href={contactUs?.walink} target="_blank" rel="noopener noreferrer" className={`${display.smAndDown ? 'ap-w-full' : ''}`}>
                            <Button
                                fullWidth={display.smAndDown}
                                variant="outlined"
                                sx={{
                                    backgroundColor: 'transparent',
                                    boxShadow: 'none',
                                    color: 'white',
                                    border: '1px solid rgba(255,255,255,0.35)',
                                    padding: '10px 28px',
                                    textTransform: 'none',
                                    borderRadius: '999px',
                                    fontSize: '15px',
                                    fontFamily: 'Poppins',
                                    '&:hover': {
                                        borderColor: '#FFC62D',
                                        backgroundColor: 'rgba(255,198,45,0.08)',
                                    },
                                }}
                            >
                                Consultar
                            </Button>
                        </a>
                    </div>

                    <div
                        className={`
                            ap-grid ap-gap-8
                            ${display.mdAndDown ? 'ap-grid-cols-1' : 'ap-grid-cols-2'}
                        `}
                    >
                        {modes.map((mode, index) => (
                            <article
                                key={index}
                                className="
                                    ap-group ap-overflow-hidden ap-rounded-[32px] ap-border ap-border-white/10
                                    ap-bg-white/[0.04] ap-shadow-[0_35px_100px_rgba(0,0,0,0.30)]
                                "
                            >
                                <div className="ap-relative ap-h-[260px] ap-overflow-hidden md:ap-h-[320px]">
                                    <img
                                        src={mode.fileUrl}
                                        alt={mode.name}
                                        className="ap-h-full ap-w-full ap-object-cover ap-transition ap-duration-700 group-hover:ap-scale-[1.04]"
                                    />
                                    <div className="ap-absolute ap-inset-0 ap-bg-gradient-to-t ap-from-black/75 ap-via-black/15 ap-to-transparent" />

                                    <div className="ap-absolute ap-left-5 ap-top-5 ap-rounded-full ap-border ap-border-white/10 ap-bg-black/45 ap-px-4 ap-py-2 ap-text-sm ap-font-medium ap-text-white ap-backdrop-blur-md">
                                        {mode.helpText}
                                    </div>
                                </div>

                                <div className="ap-p-7">
                                    <div className="ap-flex ap-items-center ap-gap-4">
                                        <span className="ap-text-primary">{mode.icon}</span>
                                        <div>
                                            <h3 className="ap-text-2xl ap-font-semibold ap-text-white">
                                                {mode.name}
                                            </h3>
                                            <p className="ap-text-sm ap-text-white/45">
                                                {mode.helpText}
                                            </p>
                                        </div>
                                    </div>

                                    <p className="ap-mt-5 ap-text-base ap-leading-8 ap-text-white">
                                        {mode.description}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </SectionFadeIn>
        </section>
    );
};

export default ModesSection;