import { Accordion, AccordionSummary, AccordionDetails, styled } from '@mui/material'
import { ArrowDropDown, CheckCircle, Padding } from '@mui/icons-material'
import * as React from 'react'
import useDisplay from '../../hooks/use-display'
const CustomAccordion = styled(Accordion)(({ theme }) => ({
    backgroundColor: 'transparent',
    boxShadow: 'none',
    padding: 0,
    marginTop: 0,
    transition: 'all 0.3s ease',
    '& .MuiAccordionSummary-root': {
        transition: 'all 0.3s ease',
        minHeight: '32px',
        marginBottom: '12px',
        '&.Mui-expanded': {
            minHeight: '48px',
            marginBottom: '0px',
        },
    },
    '& .MuiAccordionSummary-content': {
        margin: 0,
        transition: 'all 0.3s ease',
    },
    '& .MuiAccordionDetails-root': {
        margin: 0,
        padding: 0,
    },
}))

const HowClassWork: React.FC<{ isDark?: boolean }> = ({ isDark = false }) => {
    const display = useDisplay()
    return (
        // <CustomAccordion defaultExpanded={display.smAndDown ? false : true} className={`!ap-bg-transparent !ap-shadow-none ${display.smAndDown ? '!ap-mt-3' : ''}`}>
        <CustomAccordion defaultExpanded={true} className={`!ap-bg-transparent !ap-shadow-none ${display.smAndDown ? '!ap-mt-3' : ''}`}>
            <AccordionSummary
                expandIcon={<ArrowDropDown sx={{ color: 'black' }} />}
                aria-controls="panel1-content"
                id="panel1-header"
                sx={{  
                    '&.Mui-expanded': {
                    minHeight: '48px',
                    marginBottom: '0px',
                    },
                    ... isDark && {'& .MuiSvgIcon-root': {
                        color: 'white',
                        fill: 'white'
                    }}
                }}
                className={`!ap-py-0 !ap-w-full !ap-mt-0 ${isDark ? '!ap-text-white' : ''}`}
            >
                <div className="ap-flex bp-justify-start">
                    <span className="ap-w-full ap-mt-0 bp-mb-0 ap-font-semibold">
                        ¿Cómo funcionan las solicitudes de clase?
                    </span>
                </div>
            </AccordionSummary>
            <AccordionDetails className="ap-flex ap-flex-col ap-gap-3 !ap-p-0">
                <div className={`ap-flex ap-flex-col ap-gap-3`}>
                    <span className={`ap-flex ap-w-full ap-text-sm ap-items-center ap-gap-2 ${isDark ? '!ap-text-white' : ''} `}>
                        <CheckCircle sx={{ fontSize: '15px' }} />
                        <span className={``}>Tu solicitud estará <strong> activa por 3 horas</strong> hasta que el profesor la apruebe.</span>
                    </span>
                    <span className={`ap-flex ap-w-full ap-text-sm ap-items-center ap-gap-2 ${isDark ? '!ap-text-white' : ''} `}>
                        <CheckCircle sx={{ fontSize: '15px' }} />
                        <span>Si el profesor acepta, tendrá <strong> 1 hora para contactarte.</strong> </span>
                    </span>
                    <span className={`ap-flex ap-w-full ap-text-sm ap-items-center ap-gap-2 ${isDark ? '!ap-text-white' : ''} `}>
                        <CheckCircle sx={{ fontSize: '15px' }} />
                        Si no se comunica dentro de ese tiempo, la solicitud se cancelará automáticamente.
                    </span>
                </div>
            </AccordionDetails>
        </CustomAccordion>
    )
}
export default HowClassWork
