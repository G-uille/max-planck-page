import * as React from 'react'
import useDisplay from '../../hooks/use-display'
import { Button } from '@mui/material'
import merch from '../../assets/png/merch_cursillo.png'
import { ArrowForward } from '@mui/icons-material'
import contactUs from '../../pages/store/data/contact'
import SectionFadeIn from '../../components/common/SectionFadeIn';
import { BorderBeam } from '../magicui/border-beam'

const NewFaceSection: React.FC = () => {
    const display = useDisplay()
    return (
        <SectionFadeIn className={`ap-bg-[#111111] ap-pb-0 ap-flex ap-flex-col ap-gap-2 ap-bg-[#111111] ${display.mdAndDown ? 'ap-px-0 ap-pt-0' : 'ap-px-32'}`}>
            <div className={`ap-bg-[#111111] ap-py-7 ${display.mdAndDown ? 'ap-px-4 ap-w-full' : 'ap-px-[8vw] ap-pt-0'}`}>
                <div className={`ap-container ap-flex ap-flex-col ap-bg-[#111111]  ${display.mdAndDown ? 'ap-gap-0 ap-w-full' : 'ap-gap-3'} `}>
                        <div className={`ap-flex ap-justify-center ap-items-center  ${display.mdAndDown ? 'ap-flex-col ap-w-full' : 'ap-gap-6'}`}>
                            <div className={`ap-flex ap-items-start ap-justify-start ${display.mdAndDown ? '' : ''}`}>
                                <img src={merch} alt='Sobre nosotros' className={`${display.mdAndDown ? 'ap-w-72' : 'ap-w-full'}`} />
                            </div>
                            <div className={`${display.mdAndDown ? 'ap-w-full' : ''}`}>
                                <h1 className={`ap-text-white ap-font-bold ap-leading-tight  ${display.smAndDown ? 'ap-text-2xl ap-px-3 ap-text-center' : 'ap-text-4xl ap-text-center'}`} >
                                    <span className="">La nueva <span className='ap-text-primary'>cara del</span> </span>
                                <br /> <span className={`ap-font-[Rochester] ap-font-normal  ${display.smAndDown ? 'ap-text-4xl' : 'ap-text-6xl'}`}>compromiso con tu futuro</span>
                                </h1>
                                <div className={`ap-flex ap-items-center ap-justify-between ap-rounded-full  ${display.mdAndDown ? 'ap-flex-col ap-mt-4' : 'ap-w-full ap-mt-4 ap-border  ap-py-1 ap-px-1 ap-pl-4'}`}>
                                <span className={`ap-w-full ap-text-sm ap-text-white ${display.mdAndDown ? 'ap-hidden' : ''}`}>Viví el cursillo, vestí la experiencia</span>
                                <div className={`ap-flex ap-relative ap-rounded-full ap-p-0.5 ap-overflow-hidden   ${display.mdAndDown ? 'ap-w-full ap-items-center ap-justify-center' : ' ap-pl-0 ap-items-end ap-justify-end'}`}>
                                                                <BorderBeam
                                                                    colorFrom="#FFC62D"
                                                                    colorTo="#FF572D"
                                                                    borderRadius="0.75rem"
                                                                    borderWidth={4}
                                                                /> 
                                    <a className={`ap-flex  ${display.mdAndDown ? 'ap-w-full ap-items-center ap-justify-center' : 'ap-w-full ap-items-end ap-justify-end'}`}
                                        href={contactUs?.walink} target="_blank" rel="noopener noreferrer">
                                        <Button
                                            fullWidth={display.mdAndDown ? true : false}
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
                                                width: display.mdAndDown ? '100%' : '200px'

                                            }}                                    
                                            >
                                            Contactar <ArrowForward sx={{ marginLeft: '5px' }} />
                                        </Button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        </div>
                </div>
            </div>
        </SectionFadeIn>
    )
}
export default NewFaceSection;