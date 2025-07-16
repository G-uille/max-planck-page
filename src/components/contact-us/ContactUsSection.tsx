import * as React from 'react'
import useDisplay from '../../hooks/use-display'
import circulo from '../../assets/png/circulo.png'
import { Button, IconButton } from '@mui/material'
import { ArrowForward, Email, Facebook, Instagram } from '@mui/icons-material'
import contactImage from '../../assets/jpg/contact.png'
import contactUs from '../../pages/store/data/contact'
import SectionFadeIn from '../../components/common/SectionFadeIn';

const ContactUsSection: React.FC = () => {
    const display = useDisplay()
    return (
        <SectionFadeIn className={`ap-bg-[#111111] ap-pb-0 ap-flex ap-flex-col ap-gap-2 ap-bg-[#111111] ${display.mdAndDown ? 'ap-px-0 ap-pt-0' : 'ap-px-32'}`}>
            <div className={`ap-bg-[#111111] ap-py-7 ${display.mdAndDown ? 'ap-px-4' : 'ap-px-[8vw] ap-pt-0'}`}>
                <div className={`ap-container ap-flex ap-flex-col ap-bg-[#111111]  ${display.mdAndDown ? 'ap-gap-0' : 'ap-gap-3'} `}>
                       
                        <div className={`ap-flex ap-items-center ${display.mdAndDown ? 'ap-flex-col' : 'ap-gap-6'}`}
                            style={{ 
                                backgroundImage: `url(${circulo})`,
                                backgroundSize: '50%',
                                backgroundRepeat: 'repeat',
                                backgroundPosition: '0% 50%',
                                }}
                        >
                            <div className={`ap-flex ap-items-start ap-justify-start ${display.mdAndDown ? '' : 'ap-w-full'}`}>
                                <img src={contactImage} alt='Sobre nosotros' className={`${display.mdAndDown ? 'ap-mt-4' : 'ap-w-full'}`} />
                            </div>
                            <div className={`ap-flex ap-w-full ap-flex-col ${display.mdAndDown ? 'ap-gap-2' : 'ap-gap-4 '}`}>
                                    <div>
                                        {/* <span className={`ap-text-white ${display.mdAndDown ? 'ap-text-sm' : 'ap-text-sm'}`}>Quiénes somos</span> */}
                                        <h1 className={`ap-font-semibold ap-text-primary ${display.mdAndDown ? 'ap-text-lg' : 'ap-text-xl'}`}>Dónde <span className='ap-text-white'>encontrarnos</span></h1>
                                    </div>
                                    <p className={`ap-text-white  ${display.mdAndDown ? 'ap-text-sm/6  ' : 'ap-w-full '}`}>
                                        <span className='ap-font-semibold'>Celular: </span>
                                        {contactUs.phoneNumber}
                                    </p>
                                    <p className={`ap-text-white ${display.mdAndDown ? 'ap-text-sm/6  ' : 'ap-w-full '}`}>
                                        <span className='ap-font-semibold'>Email: </span> 
                                        {contactUs.email}
                                    </p>
                                    <p className={`ap-text-white ${display.mdAndDown ? 'ap-text-sm/6  ' : 'ap-w-full '}`}>
                                        <span className='ap-font-semibold'>Dirección: </span> 
                                        {contactUs.direction}
                                    </p>   
                                   <div className={`ap-flex ap-w-full ${display.mdAndDown ? 'ap-gap-0' : 'ap-gap-0'}`}>
                                        <a href={contactUs.instagramLink} target="_blank" rel="noopener noreferrer">
                                            <IconButton>
                                                <Instagram sx={{ color: 'white' }} />
                                            </IconButton>
                                        </a>
                                        <a href={contactUs.facebookLink} target="_blank" rel="noopener noreferrer">
                                            <IconButton>
                                                <Facebook sx={{ color: 'white' }} />
                                            </IconButton>
                                        </a>
                                        <a href={`mailto:${contactUs.email}`} target="_blank" rel="noopener noreferrer">
                                            <IconButton>
                                                <Email sx={{ color: 'white' }} />
                                            </IconButton>
                                        </a>
                                    </div>
                                    <a 
                                    href={contactUs.mapLink}
                                        target="_blank"
                                        rel="noopener noreferrer" className={`ap-flex 
                                        ${display.mdAndDown ? 'ap-w-full ap-items-center ap-justify-center ap-mt-4' : 'ap-w-full ap-items-start ap-justify-start'}`}>
                                        <Button
                                            fullWidth={display.mdAndDown ? true : false}
                                            variant="contained"
                                            sx={{ 
                                                backgroundColor: "#171717", 
                                                boxShadow: 'none', 
                                                color: 'white', 
                                                border: "1px solid white", 
                                                padding: '8px 12px 8px 12px', 
                                                textTransform: 'none', 
                                                fontWeight: 'normal', 
                                                borderRadius: '30px',
                                                fontSize: '14px',
                                                fontFamily: 'Poppins',
                                                display:'flex',

                                            }}                                    
                                            >
                                            Ver dirección en Maps <ArrowForward sx={{ marginLeft: '5px' }} />
                                        </Button>
                                </a>                              
                            </div>
                        </div>
                </div>
            </div>
        </SectionFadeIn>
    )
}
export default ContactUsSection;