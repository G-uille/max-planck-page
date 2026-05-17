import * as React from 'react';
import useDisplay from '../../hooks/use-display';
import circulo from '../../assets/png/circulo.png';
import aboutUs from '../../pages/store/data/about_us';
import SectionFadeIn from '../common/SectionFadeIn';

const AboutUsSection: React.FC = () => {
    const display = useDisplay();

    return (
        <section
            className={`
                ap-relative ap-overflow-hidden ap-bg-[#111111]
                ${display.mdAndDown ? 'ap-px-4 ap-py-20' : 'ap-px-32 ap-py-28'}
            `}
        >
            <div
                className="ap-absolute ap-inset-0 ap-opacity-[0.10] ap-pointer-events-none"
                style={{
                    backgroundImage: `url(${circulo})`,
                    backgroundSize: display.mdAndDown ? '120%' : '55%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: display.mdAndDown ? '50% 10%' : '75% 45%',
                }}
            />

            <div className="ap-absolute ap-inset-0 ap-pointer-events-none ap-bg-[radial-gradient(circle_at_20%_20%,rgba(255,198,45,0.12),transparent_28%),linear-gradient(to_bottom,#111111,#0B0B0B)]" />

            <SectionFadeIn className="ap-relative ap-z-10">
                <div className={`ap-container ap-mx-auto ${display.mdAndDown ? '' : 'ap-px-[8vw]'}`}>
                    <div
                        className={`
                            ap-grid ap-items-center
                            ${display.mdAndDown ? 'ap-grid-cols-1 ap-gap-10' : 'ap-grid-cols-2 ap-gap-16'}
                        `}
                    >
                        <div>
                            <span className="ap-text-sm ap-font-semibold ap-uppercase ap-tracking-[0.22em] ap-text-primary">
                                Quiénes somos
                            </span>

                            <h2
                                className={`
                                    ap-mt-4 ap-font-stack ap-font-semibold ap-leading-tight ap-tracking-[-0.04em] ap-text-white
                                    ${display.mdAndDown ? 'ap-text-3xl' : 'ap-text-5xl'}
                                `}
                            >
                                Más que un cursillo:
                                <br />
                                <span className="ap-text-primary">
                                    un espacio para avanzar.
                                </span>
                            </h2>

                            <p
                                className={`
                                    ap-mt-7 ap-text-gray-300 ap-leading-8
                                    ${display.mdAndDown ? 'ap-text-sm' : 'ap-text-lg'}
                                `}
                            >
                                {aboutUs.text}
                            </p>

                            <div
                                className={`
                                    ap-mt-9 ap-grid ap-gap-3
                                    ${display.mdAndDown ? 'ap-grid-cols-1' : 'ap-grid-cols-3'}
                                `}
                            >
                                <div className="ap-rounded-2xl ap-border ap-border-white/10 ap-bg-white/[0.04] ap-p-5">
                                    <p className="ap-text-3xl ap-font-bold ap-text-primary">
                                        +5
                                    </p>
                                    <p className="ap-mt-2 ap-text-sm ap-text-white/60">
                                        años impulsando el conocimiento
                                    </p>
                                </div>

                                <div className="ap-rounded-2xl ap-border ap-border-white/10 ap-bg-white/[0.04] ap-p-5">
                                    <p className="ap-text-3xl ap-font-bold ap-text-primary">
                                        2
                                    </p>
                                    <p className="ap-mt-2 ap-text-sm ap-text-white/60">
                                        programas activos de formación
                                    </p>
                                </div>

                                <div className="ap-rounded-2xl ap-border ap-border-white/10 ap-bg-white/[0.04] ap-p-5">
                                    <p className="ap-text-3xl ap-font-bold ap-text-primary">
                                        24/7
                                    </p>
                                    <p className="ap-mt-2 ap-text-sm ap-text-white/60">
                                        acceso al aula virtual
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="ap-relative">
                            <div className="ap-absolute ap--inset-5 ap-rounded-[36px] ap-bg-primary/10 ap-blur-3xl" />

                            <div
                                className="
                                    ap-relative ap-overflow-hidden ap-rounded-[32px]
                                    ap-border ap-border-white/10 ap-bg-white/[0.04]
                                    ap-shadow-[0_40px_120px_rgba(0,0,0,0.45)]
                                "
                            >
                                <img
                                    src={aboutUs.fileUrl}
                                    alt="Sobre Cursillo Max Planck"
                                    className="ap-h-full ap-w-full ap-object-cover"
                                />

                                <div className="ap-absolute ap-inset-0 ap-bg-gradient-to-t ap-from-black/55 ap-via-black/10 ap-to-transparent" />

                                <div className="ap-absolute ap-bottom-5 ap-left-5 ap-right-5 ap-rounded-2xl ap-border ap-border-white/10 ap-bg-black/45 ap-p-5 ap-backdrop-blur-md">
                                    <p className="ap-text-sm ap-font-semibold ap-text-primary">
                                        Formación con acompañamiento
                                    </p>
                                    <p className="ap-mt-2 ap-text-sm ap-leading-6 ap-text-white/75">
                                        Clases, práctica, materiales y seguimiento para que cada estudiante avance con una ruta clara.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </SectionFadeIn>
        </section>
    );
};

export default AboutUsSection;