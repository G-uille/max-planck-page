import * as React from 'react';
import { Button, Fade } from '@mui/material';
import {
    ArrowForwardRounded,
    SchoolRounded,
    LaptopMacRounded,
    AssignmentTurnedInRounded,
    CheckCircleRounded,
    AutoStoriesRounded,
    GroupsRounded,
} from '@mui/icons-material';

import contactUs from '../../pages/store/data/contact';

const steps = [
    {
        number: '01',
        title: 'Organizás tu objetivo',
        text: 'Elegís el programa y la modalidad que mejor se adapta a tu rutina.',
    },
    {
        number: '02',
        title: 'Estudiás con una guía',
        text: 'Recibís clases, materiales y actividades organizadas por temas.',
    },
    {
        number: '03',
        title: 'Practicás de verdad',
        text: 'Resolución de ejercicios, correcciones y simulacros para medir avance.',
    },
    {
        number: '04',
        title: 'Avanzás con seguimiento',
        text: 'Acompañamiento académico para reforzar lo que todavía cuesta.',
    },
];

const TeachSection: React.FC = () => {
    return (
        <section
            id="teach"
            className="ap-relative ap-overflow-hidden ap-bg-[#F8F1DF] ap-px-5 ap-py-20 md:ap-py-28"
        >
            <div className="ap-absolute ap-inset-0 ap-pointer-events-none ap-bg-[radial-gradient(circle_at_20%_10%,rgba(255,198,45,0.32),transparent_28%),radial-gradient(circle_at_85%_30%,rgba(0,0,0,0.06),transparent_24%)]" />

            <div className="ap-relative ap-z-10 ap-mx-auto ap-max-w-7xl">
                <Fade in timeout={700}>
                    <div className="ap-mb-14 ap-grid ap-gap-8 md:ap-grid-cols-[0.9fr_1.1fr] md:ap-items-end">
                        <div>
                            <p className="ap-text-sm ap-font-black ap-uppercase ap-tracking-[0.2em] ap-text-[#8C6B00]">
                                Ruta de preparación
                            </p>

                            <h2 className="ap-mt-4 ap-font-stack ap-text-4xl ap-font-bold ap-leading-[1.02] ap-tracking-[-0.05em] ap-text-[#111111] md:ap-text-6xl">
                                Aprender mejor también es tener un método.
                            </h2>
                        </div>

                        <p className="ap-max-w-2xl ap-text-lg ap-leading-8 ap-text-black/62">
                            En Max Planck combinamos clases, práctica, materiales, aula virtual y seguimiento para que cada estudiante avance con mayor claridad.
                        </p>
                    </div>
                </Fade>

                <div className="ap-grid ap-gap-5 md:ap-grid-cols-4">
                    {steps.map((step) => (
                        <div
                            key={step.number}
                            className="ap-rounded-[28px] ap-border ap-border-black/10 ap-bg-white/80 ap-p-7 ap-shadow-[0_18px_60px_rgba(0,0,0,0.05)] ap-backdrop-blur-md"
                        >
                            <span className="ap-text-sm ap-font-black ap-text-primary">
                                {step.number}
                            </span>

                            <h3 className="ap-mt-5 ap-text-xl ap-font-bold ap-leading-tight ap-text-[#111111]">
                                {step.title}
                            </h3>

                            <p className="ap-mt-4 ap-text-sm ap-leading-7 ap-text-black/58">
                                {step.text}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="ap-mt-8 ap-grid ap-gap-6 md:ap-grid-cols-[1fr_1fr]">
                    <ProgramPanel
                        icon={<SchoolRounded />}
                        eyebrow="Programa"
                        title="Refuerzo Preuniversitario"
                        description="Preparación semanal con clases, ejercitarios, correcciones y simulacros para fortalecer el rendimiento académico."
                        items={[
                            'Clases guiadas',
                            'Ejercicios tipo admisión',
                            'Simulacros de avance',
                        ]}
                    />

                    <ProgramPanel
                        icon={<AssignmentTurnedInRounded />}
                        eyebrow="Programa"
                        title="Admisión Colegios Técnicos"
                        description="Entrenamiento orientado a estudiantes que buscan prepararse para exámenes de ingreso con práctica progresiva."
                        items={[
                            'Resolución paso a paso',
                            'Banco de ejercicios',
                            'Acompañamiento académico',
                        ]}
                    />
                </div>

                <div className="ap-mt-8 ap-overflow-hidden ap-rounded-[34px] ap-bg-[#111111] ap-p-8 ap-text-white md:ap-p-10">
                    <div className="ap-grid ap-gap-8 md:ap-grid-cols-[0.85fr_1.15fr] ap-items-center">
                        <div>
                            <p className="ap-text-sm ap-font-black ap-uppercase ap-tracking-[0.18em] ap-text-primary">
                                Aula virtual
                            </p>

                            <h3 className="ap-mt-4 ap-text-4xl ap-font-bold ap-leading-tight">
                                Un espacio digital para seguir practicando.
                            </h3>

                            <p className="ap-mt-5 ap-text-base ap-leading-8 ap-text-white/65">
                                Los estudiantes pueden acceder a materiales, guías, actividades y recursos complementarios desde una plataforma organizada.
                            </p>

                            <Button
                                variant="contained"
                                href='https://cursos.cursillomaxplanck.com/'
                                target='_blanck'
                                sx={{
                                    marginTop: '30px',
                                    backgroundColor: '#FFC62D',
                                    color: '#111111',
                                    boxShadow: 'none',
                                    borderRadius: '999px',
                                    padding: '13px 24px',
                                    textTransform: 'none',
                                    fontFamily: 'Poppins',
                                    fontWeight: 800,
                                    '&:hover': {
                                        backgroundColor: '#F4B800',
                                        boxShadow: 'none',
                                    },
                                }}
                            >
                                Conocer aula virtual
                                <ArrowForwardRounded sx={{ marginLeft: '8px' }} />
                            </Button>
                        </div>

                        <div className="ap-grid ap-gap-4 md:ap-grid-cols-3">
                            <FeatureMiniCard
                                icon={<LaptopMacRounded />}
                                title="Acceso online"
                                text="Desde celular o computadora."
                            />

                            <FeatureMiniCard
                                icon={<AutoStoriesRounded />}
                                title="Materiales"
                                text="Organizados por tema y unidad."
                            />

                            <FeatureMiniCard
                                icon={<GroupsRounded />}
                                title="Acompañamiento"
                                text="Apoyo durante el proceso."
                            />
                        </div>
                    </div>
                </div>

                <div className="ap-mt-10 ap-flex ap-flex-col ap-items-center ap-justify-between ap-gap-5 ap-rounded-[30px] ap-border ap-border-black/10 ap-bg-white ap-p-7 md:ap-flex-row">
                    <div>
                        <h3 className="ap-text-2xl ap-font-bold ap-text-[#111111]">
                            ¿Querés saber qué programa te conviene?
                        </h3>

                        <p className="ap-mt-2 ap-text-sm ap-text-black/55">
                            Te orientamos según tu objetivo, disponibilidad y modalidad preferida.
                        </p>
                    </div>

                    <Button
                        component="a"
                        href={contactUs?.walink}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="contained"
                        sx={{
                            backgroundColor: '#111111',
                            color: 'white',
                            boxShadow: 'none',
                            borderRadius: '999px',
                            padding: '14px 26px',
                            textTransform: 'none',
                            fontFamily: 'Poppins',
                            fontWeight: 700,
                            '&:hover': {
                                backgroundColor: '#2A2A2A',
                                boxShadow: 'none',
                            },
                        }}
                    >
                        Consultar inscripción
                        <ArrowForwardRounded sx={{ marginLeft: '8px' }} />
                    </Button>
                </div>
            </div>
        </section>
    );
};

type ProgramPanelProps = {
    icon: React.ReactNode;
    eyebrow: string;
    title: string;
    description: string;
    items: string[];
};

const ProgramPanel: React.FC<ProgramPanelProps> = ({
    icon,
    eyebrow,
    title,
    description,
    items,
}) => {
    return (
        <div className="ap-rounded-[32px] ap-border ap-border-black/10 ap-bg-white ap-p-8 ap-shadow-[0_18px_60px_rgba(0,0,0,0.06)]">
            <div className="ap-flex ap-items-start ap-gap-4">
                <span className="ap-flex ap-h-14 ap-w-14 ap-items-center ap-justify-center ap-rounded-2xl ap-bg-[#FFF1C7] ap-text-[#111111]">
                    {icon}
                </span>

                <div>
                    <p className="ap-text-xs ap-font-black ap-uppercase ap-tracking-[0.18em] ap-text-[#8C6B00]">
                        {eyebrow}
                    </p>

                    <h3 className="ap-mt-2 ap-text-2xl ap-font-bold ap-leading-tight ap-text-[#111111]">
                        {title}
                    </h3>
                </div>
            </div>

            <p className="ap-mt-6 ap-text-base ap-leading-8 ap-text-black/58">
                {description}
            </p>

            <div className="ap-mt-6 ap-flex ap-flex-col ap-gap-3">
                {items.map((item) => (
                    <div key={item} className="ap-flex ap-items-center ap-gap-3">
                        <CheckCircleRounded sx={{ color: '#FFC62D', fontSize: 22 }} />
                        <p className="ap-text-sm ap-font-medium ap-text-black/68">
                            {item}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

type FeatureMiniCardProps = {
    icon: React.ReactNode;
    title: string;
    text: string;
};

const FeatureMiniCard: React.FC<FeatureMiniCardProps> = ({ icon, title, text }) => {
    return (
        <div className="ap-rounded-3xl ap-border ap-border-white/10 ap-bg-white/[0.06] ap-p-6">
            <span className="ap-text-primary">
                {icon}
            </span>

            <h4 className="ap-mt-4 ap-text-lg ap-font-bold ap-text-white">
                {title}
            </h4>

            <p className="ap-mt-2 ap-text-sm ap-leading-6 ap-text-white/55">
                {text}
            </p>
        </div>
    );
};

export default TeachSection;