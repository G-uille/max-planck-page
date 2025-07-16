import * as React from 'react';
import { Dialog, DialogActions, DialogContent, DialogTitle } from "@mui/material";
import useDisplay from '../../hooks/use-display'
import IconButton from "@mui/material/IconButton";
import { ArrowBackIosNew, ArrowForward, Close, RadioButtonChecked } from "@mui/icons-material";
import Button from "@mui/material/Button";
import { toast } from "react-toastify";
import SectionFadeIn from '../../components/common/SectionFadeIn';
import { Classes, ClassesMode } from '../../models/Classes.model';
import { BorderBeam } from '../magicui/border-beam';

const ClassDialog: React.FC<{ openDialog: boolean, toggleDialog: () => void, currentClass?: Classes }> = ({ openDialog, toggleDialog, currentClass }) => {
    // const { login, loading } = useAuth()
    const display = useDisplay();
    const handleSubmit = async (e: any): Promise<void> => {
        e.preventDefault();

        try {
           
            toggleDialog()
        } catch (error) {
            toast.error(error.toString())
        }
    };

    const onCloseDialog = () => {
        toggleDialog()
    }
    return(
        <Dialog
            open={openDialog}
            maxWidth={display.smAndDown ? '' : 'md' }
            onClose={onCloseDialog}
            aria-labelledby="alert-dialog-title"
            className="!ap-z-[10000]"
            fullScreen={display.smAndDown && true}
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle
                id="alert-dialog-title"
                className={`ap-bg-[#1B1B1B] !ap-font-[Poppins] ap-flex ap-w-full ap-justify-between !ap-font-semibold ap-text-black ${display.smAndDown ? '!ap-text-2xl ap-min-w-[200px] !ap-pt-5 ' : '!ap-text-3xl !ap-pb-3 ap-min-w-[500px] !ap-p-7'}`}
            >
                <div className="ap-flex ap-flex-col ap-justify-start ap-items-start ap-gap-3">
                    {/* <img src={isoLogo} className='ap-h-12' alt="logo" /> */}
                    <div className="ap-flex ap-flex-col ap-text-white ap-gap-0">
                       <div className={`ap-flex ap-items-center ap-gap-3  ${display.smAndDown ? 'ap-w-11/12' : ''}`}>
                            <IconButton sx={{p: '0px'}} aria-label="menu" onClick={onCloseDialog}>
                                <ArrowBackIosNew sx={{ color:  'white', fontSize: '20px' }} />
                            </IconButton>
                            <div  className={`ap-flex ap-flex-col   ${display.smAndDown ? 'ap-w-11/12' : ''}`}>
                                <span className={`ap-font-semibold ap-whitespace-nowrap ap-overflow-hidden ap-text-ellipsis  ${display.smAndDown ? ' ap-text-lg' : ' ap-text-2xl'}`}>{currentClass?.name}</span>
                                <div>
                                    <div className=" ap-flex ap-gap-1 ap-items-center ap-justify-start ">
                                        <span className='ap-text-green-400'><RadioButtonChecked sx={{ fontSize: '15px' }} /></span>
                                        <span className="ap-text-sm ap-font-light ap-text-white ap-flex ap-gap-1  ap-items-center ap-whitespace-nowrap ap-overflow-hidden ap-text-ellipsis">
                                            { currentClass && currentClass.mode.length === 1 && 'Modalidad'}
                                        {currentClass && currentClass.mode.length > 0 && (
                                            <span className="ap-text-sm ap-font-light ap-text-white ap-flex ap-gap-1 ap-items-center ap-whitespace-nowrap ap-overflow-hidden ap-text-ellipsis">
                                               { currentClass && currentClass.mode.length > 1 && 'Modalidad'}{" "}
                                                {currentClass.mode
                                                    .map(mode => mode === ClassesMode.PRESENCIAL ? 'Presencial' : 'Virtual')
                                                    .join(' & ')
                                                }
                                            </span>
                                        )}
                                        </span>
                                    </div>
                                </div>
                            </div>
                       </div>
                        
                    </div>
                </div>
                <div>
                    <IconButton onClick={onCloseDialog} aria-label="delete" sx={{ color: '#FFC730', padding: '0px' }}>
                        <Close sx={{fontSize: '23px'}}/>
                    </IconButton>
                </div>
            </DialogTitle>
            <DialogContent className={`ap-bg-[#1B1B1B] ap-flex ap-flex-col ap-gap-5  ${display.smAndDown ? '!ap-p-3 !ap-pt-0' : '!ap-p-7 !ap-pt-0'} `}>
                <SectionFadeIn className={` ap-gap-4 ap-flex  ap-w-full ${display.smAndDown ? 'ap-flex-col' : ' '}`} onSubmit={handleSubmit}>
                    <div className={`ap-flex ap-justify-center ap-overflow-hidden ${display.lgAndUp ? 'ap-items-start' : 'ap-items-center'} ${display.mdAndDown ? 'ap-max-h-80 ap-overflow-hidden' : 'ap-h-[calc(100vh-400px)] ap-w-full'}`}>
                            <img src={currentClass?.popupFile} alt='Sobre nosotros' className={`${display.mdAndDown ? 'ap-mt-4' : 'ap-w-full'}`} />
                    </div>
                    <div className='ap-flex ap-flex-col ap-w-full ap-gap-5'>
                        <span className="ap-text-md ap-font-semibold ap-text-white ap-flex ap-gap-1 ap-items-center">{currentClass?.question}</span>
                        <span className="ap-text-sm/6  ap-text-white ap-flex ap-gap-1 ap-items-center">{currentClass?.description}</span>
                    </div>
                </SectionFadeIn>
                {/* <span className={`ap-font-normal ap-text-center ap-text-white ap-mt-2  ${display.mdAndUp ? 'ap-text-sm ' : 'ap-text-sm '}`}>¿Aún no tienes una cuenta? <a href="/auth/register" className="ap-text-primary  hover:ap-underline hover:ap-cursor-pointer">Registrarme</a></span> */}
            </DialogContent>
            <DialogActions className={`ap-bg-[#1B1B1B] !ap-w-full ap-flex ap-flex-col ap-gap-5 !ap-pb-5 ${display.smAndDown ? '' : '!ap-px-7'} `}>
                <div className={`ap-flex ap-gap-2 ap-items-center ap-w-full ap-justify-center  ${display.smAndDown ? 'ap-flex-col ap-px-3 ap-mt-4' : 'ap-mt-6'}`}>
                        <div className={` ap-flex ap-items-center  ap-rounded-full ${display.smAndDown ? 'ap-flex-col ap-w-full ap-justify-center ' : 'ap-w-full ap-border ap-py-1 ap-px-1 ap-pl-4 ap-justify-between'}`}>
                            <span className={`ap-w-full ap-text-sm ap-text-white ${display.smAndDown ? 'ap-hidden' : ''}`}>¡Consultá sin compromiso!</span>
                               <div className={`ap-flex ap-relative ap-rounded-full ap-p-0.5 ap-overflow-hidden   ${display.mdAndDown ? 'ap-w-full ap-items-center ap-justify-center' : ' ap-pl-0 ap-items-end ap-justify-end'}`}>
                                    <BorderBeam
                                        colorFrom="#FFC62D"
                                        colorTo="#FF572D"
                                        borderRadius="0.75rem"
                                        borderWidth={4}
                                    />
                                    <a className={`ap-flex  ${display.smAndDown ? 'ap-w-full ap-items-center ap-justify-center' : 'ap-w-full ap-items-end ap-justify-end'}`} href={currentClass?.contactLink} target="_blank" rel="noopener noreferrer">
                                        <Button
                                            fullWidth={display.smAndDown ? true : false}
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
                                            Consultar <ArrowForward sx={{ marginLeft: '5px' }} />
                                        </Button>
                                     </a>
                                </div>
                        </div>
                    </div>
            </DialogActions>
        </Dialog>
    )
}
export default ClassDialog;
