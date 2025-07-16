import * as React from 'react';
import bgStore from "../../assets/png/bg-index.png";
import { Button } from "@mui/material";
import useDisplay from '../../hooks/use-display'
import "react-multi-carousel/lib/styles.css";
import logoSVG from '../../assets/svg/logo.svg'
import { ArrowForward } from '@mui/icons-material';
import AboutUsSection from '../../components/about-us/AboutUsSection';
import ModesSection from '../../components/modes/ModesSection';
import TeachSection from '../../components/teach/TeachSection';
import SentenceSection from '../../components/sentence/SentenceSection';
import NewFaceSection from '../../components/new-face/NewFaceSection';
import ContactUsSection from '../../components/contact-us/ContactUsSection';
import SectionFadeIn from '../../components/common/SectionFadeIn';
import { BorderBeam } from '../../components/magicui/border-beam';

const Store: React.FC = () => {
    const display = useDisplay()
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    };
    return(
        <div className={`ap-overflow-y-auto ap-bg-[#111111] ${display.smAndDown ? 'ap-pt-10' : 'ap-pt-12'}`}>
            <div className={`ap-bg-cover ap-bg-center ap-bg-no-repeat ap-flex ap-flex-col ap-justify-center ${display.mdAndDown ? 'ap-py-6 ap-gap-0' : 'ap-py-12 ap-gap-3'}`}
                style={{ backgroundImage: `url(${bgStore})` }}
            >
                <SectionFadeIn className={`ap-bg-cover ap-bg-center ap-bg-no-repeat ap-flex ap-flex-col ap-justify-center ${display.mdAndDown ? 'ap-py-0 ap-gap-0' : 'ap-py-0 ap-gap-3'}`}
                >
                    <img src={logoSVG} alt='Logo Max Planck' className={`${display.smAndDown ? 'ap-h-28' : 'ap-h-40'}`} />
                    <h1 className={`ap-text-white ap-font-bold ap-leading-tight  ${display.smAndDown ? 'ap-text-2xl ap-px-3 ap-text-center' : 'ap-text-4xl ap-text-center'}`} >
                        <span className="">Más de <span className='ap-text-primary'>5 años</span> impulsando </span>
                        <br /> <span className={`ap-font-[Rochester] ap-font-normal  ${display.smAndDown ? 'ap-text-4xl' : 'ap-text-6xl'}`}>el conocimiento</span>
                    </h1>
                    <div className={`ap-flex ap-gap-2 ap-items-center ap-justify-center  ${display.mdAndDown ? 'ap-flex-col ap-px-3 ap-mt-4' : 'ap-mt-6'}`}>
                        <div className={` ap-flex ap-items-center  ap-rounded-full ${display.mdAndDown ? 'ap-flex-col ap-w-full ap-justify-center ' : 'ap-w-4/12 ap-border ap-py-1 ap-px-1 ap-pl-4 ap-justify-between'}`}>
                            <span className={`ap-w-full ap-text-sm ap-text-white ${display.mdAndDown ? 'ap-hidden' : ''}`}>¡Todo en un solo espacio educativo!</span>
                            <div className={`ap-flex ap-relative ap-rounded-full ap-p-0.5 ap-overflow-hidden   ${display.mdAndDown ? 'ap-w-full ap-items-center ap-justify-center' : ' ap-pl-0 ap-items-end ap-justify-end'}`}>
                                <BorderBeam
                                    colorFrom="#FFC62D"
                                    colorTo="#FF572D"
                                    borderRadius="0.75rem"
                                    borderWidth={4}
                                />
                                <Button
                                    fullWidth={display.smAndDown ? true : false}
                                    onClick={() => scrollToSection('teach')}
                                    variant="contained"
                                    sx={{ 
                                        backgroundColor: "#FFC62D", 
                                        boxShadow: 'none', 
                                        color: 'black', 
                                        border: "1px solid #FDD877", 
                                        padding: '8px 10px 8px 10px', 
                                        textTransform: 'none', 
                                        fontWeight: 'normal', 
                                        borderRadius: '30px',
                                        fontSize: '14px',
                                        fontFamily: 'Poppins',
                                        display:'flex',
                                        width: display.mdAndDown ? '100%' : '300px'
                                    }}                                    
                                >
                                    Más Información <ArrowForward sx={{ marginLeft: '5px' }} />
                                </Button>
                            </div>
                        </div>
                    </div>
                </SectionFadeIn>
            </div>
            <div className={`ap-bg-[#111111] ap-pb-0 ${display.smAndDown ? '' : 'ap-py-12'}`} />

            <div id="teach">
                <TeachSection />
            </div>

            <div className={`ap-bg-[#111111] ap-pb-0 ${display.smAndDown ? 'ap-py-12' : 'ap-py-12'}`} />
            <div id="modes">
                <ModesSection />
            </div>

            <div className={`ap-bg-[#111111] ${display.smAndDown ? 'ap-pb-8' : 'ap-py-12 ap-pb-9'}`} />
            <div id="about">
                <AboutUsSection />
            </div>

            <div className={`ap-bg-[#111111] ${display.smAndDown ? 'ap-py-4 ' : 'ap-py-12'}`} />
            <SentenceSection />

            <div className={`ap-bg-[#111111] ${display.smAndDown ? 'ap-pb-0 ' : 'ap-py-4'}`}/>
            <NewFaceSection />

            <div className={`ap-bg-[#111111] ${display.smAndDown ? 'ap-py-0' : 'ap-py-12 ap-pb-12'}`} />
            <div id="contact">
                <ContactUsSection />
            </div>
            
            <div className="ap-bg-[#111111] ap-py-10" />
        </div>
    )
}
export default Store;
