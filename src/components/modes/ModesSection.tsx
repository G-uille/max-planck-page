import * as React from 'react'
import useDisplay from '../../hooks/use-display'
import { Button } from '@mui/material'
import useModes from '../../pages/store/data/use-modes'
import useInView from '../../hooks/use-inView'
import contactUs from '../../pages/store/data/contact'
import SectionFadeIn from '../../components/common/SectionFadeIn';

const ModesSection: React.FC = () => {
    const display = useDisplay()
    const { modes } = useModes()
    const { ref, isVisible } = useInView()
    
    return (
    <SectionFadeIn className={`ap-py-12 ap-flex ap-flex-col ap-gap-2  ap-bg-[#111111] ${display.mdAndDown ? 'ap-px-0 ap-pt-0 ap-pb-0' : ' ap-px-32 ap-pt-4 ap-pb-8'}`}>            <div className={` ap-bg-[#111111] ${display.mdAndDown ? 'ap-px-4' : 'ap-px-[8vw]'}`}>
                <div className=" ap-container  ap-flex ap-flex-col  ap-bg-[#111111]">
                    <div className={`ap-flex ap-justify-between ap-items-center ${display.mdAndDown ? ' ap-gap-3 ap-flex-col !ap-justify-start !ap-items-start' : ''}`}>
                        <div className="ap-flex ap-flex-col ap-gap-1">
                            <h1 className={`ap-font-semibold ap-mb-3 ap-text-primary ${display.mdAndDown ? ' ap-text-lg' : 'ap-text-xl'}`}>
                                Modalidades <span className='ap-text-white'>de clases</span>
                            </h1>
                        </div>
                        { !display.smAndDown && <div className={` ${display.smAndDown ? 'ap-w-full' : ''}`}>
                            <a className={` ${display.smAndDown ? 'ap-w-full' : ''}`} 
                                href={contactUs?.walink} target="_blank" rel="noopener noreferrer">
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{ 
                                        backgroundColor: "#171717", 
                                        boxShadow: 'none', 
                                        color: 'white', 
                                        border: "1px solid white", 
                                        padding: '5px 25px 5px 25px', 
                                        textTransform: 'none', 
                                        fontWeight: 'normal', 
                                        borderRadius: '30px',
                                        fontSize: '14px',
                                        fontFamily: 'Poppins'
                                    }}                                   
                                    >
                                    Consultar
                                </Button>
                            </a>
                        </div>}
                    </div>
                    
                    <div className={`ap-flex ap-justify-between ap-w-full ${display.smAndDown ? 'ap-gap-4 ap-flex-col' : 'ap-mt-3 ap-gap-12'}`}>
                        {modes.map((x, index) => (
                            <div key={index} className={`${display.smAndDown ? '' : 'ap-w-full'}`}>
                                <div className={`ap-flex ap-flex-col ap-gap-2 `}>
                                    <img src={x.fileUrl} />
                                    <div className='ap-flex ap-items-center ap-gap-3'>
                                        <span className='ap-text-primary'>{x.icon}</span>
                                        <div>
                                            <h1 className={`ap-text-white ap-font-semibold ${display.smAndDown ? '' : 'ap-text-lg'}`}>{x.name}</h1>
                                            <span className={`ap-text-gray-400 ap-text-sm ${display.smAndDown ? '' : ''}`}>{x.helpText}</span>
                                        </div>
                                    </div>
                                    <span className={`ap-text-white ap-text-sm ${display.smAndDown ? 'ap-text-sm/6' : ''}`}>{x.description}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    { display.smAndDown && <div className={` ${display.smAndDown ? 'ap-w-full ap-mt-6' : ''}`}>
                             <a className={` ${display.smAndDown ? 'ap-w-full ap-mt-6' : ''}`}
                                href={contactUs?.walink} target="_blank" rel="noopener noreferrer">
                                <Button
                                    fullWidth
                                    variant="contained"
                                    sx={{ 
                                        backgroundColor: "#171717", 
                                        boxShadow: 'none', 
                                        color: 'white', 
                                        border: "1px solid white", 
                                        padding: '10px 35px 10px 35px', 
                                        textTransform: 'none', 
                                        fontWeight: 'normal', 
                                        fontSize: '14px',
                                        borderRadius: '30px',
                                        fontFamily: 'Poppins'
                                    }}
                                >
                                    Consultar
                                </Button>
                            </a>
                        </div>}
                </div>
            </div>
    </SectionFadeIn>
        )
}
export default ModesSection;