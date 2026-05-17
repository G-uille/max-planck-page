import * as React from 'react';
import useDisplay from '../../hooks/use-display';
import circulo from '../../assets/png/circulo.png';
import comillas from '../../assets/svg/comillas.svg';
import SectionFadeIn from '../common/SectionFadeIn';

const SentenceSection: React.FC = () => {
    const display = useDisplay();

    return (
        <section
            className={`
                ap-relative ap-overflow-hidden ap-bg-[#FFE7A5]
                ${display.mdAndDown ? 'ap-px-4 ap-py-20' : 'ap-px-32 ap-py-32'}
            `}
        >
            <div
                className="ap-absolute ap-inset-0 ap-opacity-[0.20] ap-pointer-events-none"
                style={{
                    backgroundImage: `url(${circulo})`,
                    backgroundSize: display.mdAndDown ? '140%' : '48%',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: '50% 50%',
                }}
            />

            <div className="ap-absolute ap-inset-0 ap-bg-[radial-gradient(circle_at_50%_50%,rgba(255,198,45,0.35),transparent_35%)] ap-pointer-events-none" />

            <SectionFadeIn className="ap-relative ap-z-10">
                <div className={`ap-container ap-mx-auto ${display.mdAndDown ? '' : 'ap-px-[8vw]'}`}>
                    <div
                        className="
                            ap-mx-auto ap-max-w-5xl ap-rounded-[36px]
                            ap-border ap-border-black/10 ap-bg-white/35
                            ap-p-8 ap-text-center ap-backdrop-blur-md
                            md:ap-p-14
                        "
                    >
                        <img
                            src={comillas}
                            alt="Comillas"
                            className="ap-mx-auto ap-h-10 ap-opacity-80"
                        />

                        <p
                            className={`
                                ap-mx-auto ap-mt-8 ap-max-w-3xl ap-font-medium ap-leading-8 ap-text-[#6F613D]
                                ${display.mdAndDown ? 'ap-text-base' : 'ap-text-xl'}
                            `}
                        >
                            En Max Planck creemos que la educación transforma la forma en que miramos el mundo.
                        </p>

                        <h2
                            className={`
                                ap-mx-auto ap-mt-7 ap-max-w-4xl ap-font-stack ap-font-semibold ap-leading-tight ap-tracking-[-0.04em] ap-text-[#111111]
                                ${display.mdAndDown ? 'ap-text-3xl' : 'ap-text-5xl'}
                            `}
                        >
                            “Cuando cambiás la forma en que mirás las cosas,
                            las cosas que mirás cambian.”
                        </h2>

                        <div className="ap-mx-auto ap-mt-8 ap-h-1 ap-w-24 ap-rounded-full ap-bg-primary" />

                        <p className="ap-mt-6 ap-text-sm ap-font-semibold ap-uppercase ap-tracking-[0.18em] ap-text-[#7B6B42]">
                            Cursillo Max Planck
                        </p>
                    </div>
                </div>
            </SectionFadeIn>
        </section>
    );
};

export default SentenceSection;