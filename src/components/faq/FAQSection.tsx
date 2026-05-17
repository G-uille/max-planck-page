import * as React from 'react';
import ExpandMoreRoundedIcon from '@mui/icons-material/ExpandMoreRounded';
import useDisplay from '../../hooks/use-display';
import faqs from '../../pages/store/data/faqs';
import SectionFadeIn from '../common/SectionFadeIn';

const FAQSection: React.FC = () => {
    const display = useDisplay();
    const [openIndex, setOpenIndex] = React.useState<number | null>(0);

    return (
        <section
            className={`
                ap-relative ap-overflow-hidden ap-bg-[#FFE7A5]
                ${display.mdAndDown ? 'ap-px-4 ap-py-20' : 'ap-px-32 ap-py-28'}
            `}
        >
            <SectionFadeIn>
                <div className={`ap-container ap-mx-auto ${display.mdAndDown ? '' : 'ap-px-[8vw]'}`}>
                    <div
                        className={`
                            ap-grid ap-gap-12
                            ${display.mdAndDown ? 'ap-grid-cols-1' : 'ap-grid-cols-[0.75fr_1.25fr]'}
                        `}
                    >
                        <div>
                            <span className="ap-text-sm ap-font-semibold ap-uppercase ap-tracking-[0.22em] ap-text-[#7B5A00]">
                                Preguntas frecuentes
                            </span>

                            <h2
                                className={`
                                    ap-mt-4 ap-font-stack ap-font-semibold ap-leading-tight ap-tracking-[-0.04em] ap-text-[#111111]
                                    ${display.smAndDown ? 'ap-text-3xl' : 'ap-text-5xl'}
                                `}
                            >
                                Las respuestas a tus preguntas
                            </h2>

                            <p className="ap-mt-5 ap-text-base ap-leading-8 ap-text-black/60">
                                Información rápida sobre cursos, inscripción, modalidades y aula virtual.
                            </p>
                        </div>

                        <div className="ap-flex ap-flex-col ap-gap-4">
                            {faqs.map((faq, index) => {
                                const isOpen = openIndex === index;

                                return (
                                    <div
                                        key={faq.question}
                                        className="ap-overflow-hidden ap-rounded-2xl ap-border ap-border-black/10 ap-bg-white/55 ap-backdrop-blur-md"
                                    >
                                        <button
                                            type="button"
                                            onClick={() => setOpenIndex(isOpen ? null : index)}
                                            className="
                                                ap-flex ap-w-full ap-items-center ap-justify-between ap-gap-5
                                                ap-border-0 ap-bg-transparent ap-px-6 ap-py-5
                                                ap-text-left ap-cursor-pointer
                                            "
                                        >
                                            <span className="ap-text-base ap-font-semibold ap-text-[#111111]">
                                                {faq.question}
                                            </span>

                                            <span
                                                className={`
                                                    ap-flex ap-h-9 ap-w-9 ap-shrink-0 ap-items-center ap-justify-center
                                                    ap-rounded-full ap-transition
                                                    ${isOpen ? 'ap-bg-[#111111] ap-text-primary' : 'ap-bg-black/10 ap-text-black'}
                                                `}
                                            >
                                                <ExpandMoreRoundedIcon
                                                    sx={{
                                                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                                                        transition: 'transform 250ms ease',
                                                    }}
                                                />
                                            </span>
                                        </button>

                                        <div
                                            className="ap-grid ap-transition-all ap-duration-300"
                                            style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                                        >
                                            <div className="ap-overflow-hidden">
                                                <p className="ap-px-6 ap-pb-6 ap-text-sm ap-leading-7 ap-text-black/65">
                                                    {faq.answer}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </SectionFadeIn>
        </section>
    );
};

export default FAQSection;