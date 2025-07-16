import DialogTitle from "@mui/material/DialogTitle";
import { Button, Dialog, DialogContent, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import * as React from "react";
import useDisplay from "../../hooks/use-display";
import { CheckCircle, Download } from "@mui/icons-material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setCurrentCar } from "../../slices/classes"

const SuccessRequest: React.FC<{ openDialog: boolean, toggleDialog: (v?: boolean) => void }> = ({ openDialog, toggleDialog }) => {
    const display = useDisplay();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [cdc, setCdc] = React.useState<string | null>(null);
    const [pdfLoading, setPdfLoading] = React.useState(false)

    const submitRequest = () => {
        dispatch(setCurrentCar(null))

        navigate(`/mi-cuenta/solicitud/7/1`, { replace: true })
    }

    return(
        <Dialog
            open={openDialog}
            onClose={submitRequest}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle
                id="alert-dialog-title"
                className={`ap-bg-dark !ap-pb-0 !ap-font-[Poppins] ap-flex ap-w-full ap-justify-end !ap-font-semibold ap-text-white ${display.smAndDown ? '!ap-text-sm ap-min-w-[200px]' : 'ap-min-w-[200px]'}`}
            >
                {/* <div className="bp-flex bp-flex-col bp-justify-left bp-w-full bp-p-6 bp-pt-0 bp-pb-0">
                    <img src={logoBillPy} className={`bp-mb-5 bp-mt-4 ${display.smAndDown ? 'bp-w-12' : 'bp-w-20 '}`} alt="BillPy Logo" />
                </div> */}
                <IconButton onClick={submitRequest} aria-label="delete" sx={{ color: '#2e89ff', padding: '0px' }}>
                    <CloseIcon sx={{fontSize: '23px'}}/>
                </IconButton>
            </DialogTitle>
            <DialogContent className={`ap-bg-dark ap-flex ap-flex-col ap-gap-5  ${display.smAndDown ? 'ap-w-[280px]' : 'ap-w-[420px]'} `}>
                <div className="ap-flex ap-flex-col ap-gap-4">
                    <div className={`  ap-rounded-xl  ${display.smAndDown ? '' : ''} `}>
                        <div className="ap-w-fit ap-h-fit ap-mx-auto">
                            <div className="ap-rounded-full ap-border-8 ap-border-blue-200 ap-bg-blue-200">
                            <CheckCircle className="ap-text-blue-500" sx={{ fontSize: display.smAndDown ? '65px' :'75px' }} />
                            </div>
                        </div>
                    </div>
                    <h3 className={`ap-text-white ap-text-center ap-font-bold  ${display.smAndDown ? 'ap-text-lg  ap-my-2 ap-mb-0' : 'ap-text-xl  ap-my-2 ap-mt-2 ap-mb-0  ap-mx-16'} `}>
                    Solicitud enviada!
                    </h3>
                    {/*<div className={`bp-w-full bp-border-b-[1px] bp-border-[#1f1f1f] ${display.smAndDown ? 'bp-mb-0' : 'bp-mb-0'} `} />*/}
                    {/* <p className={` ap-text-gray-400 ap-font-normal  ap-text-center  ${display.smAndDown ? 'ap-text-sm ap-w-full' : 'ap-w-11/12 ap-mx-auto'}`}>
                        Tu comprobante fue generado y guardado exitosamente.
                    </p> */}
                </div>
                <div className={` ap-w-full ap-justify-center ap-pb-4 ${display.smAndDown ? 'ap-flex ap-flex-col ap-gap-2' : 'ap-flex ap-flex-col ap-gap-3'}`}>
                    <div className={` ${display.smAndDown ? 'ap-order-2' : 'ap-order-2 bp-min-w-60'}`}>
                        <Button
                            type="submit"
                            onClick={() =>  navigate(`/inicio`, { replace: true }) }
                            className="!ap-w-full ap-uppercase !ap-font-[Poppins] !ap-border-none  !ap-bg-opacity-30 !ap-bg-blue-300  hover:!ap-bg-blue-500 hover:!ap-bg-opacity-40 !ap-py-3"
                        >
                            <span className={`ap-flex ap-items-center ap-gap-2 ap-text-blue-400 ${display.smAndDown ? '!ap-text-[14px]' : ''}`}>
                           Seguir Explorando
                            </span>
                        </Button>
                    </div>
                    <div className={` ${display.smAndDown ? 'ap-order-1' : 'ap-order-1 ap-min-w-60'}`}>
                        <Button
                            type="submit"
                            onClick={submitRequest}
                            className="!ap-w-full ap-uppercase !ap-font-[Poppins] !ap-bg-blue-600 hover:!ap-bg-blue-700 !ap-text-white !ap-py-3"
                        >
                            <span className={`${display.smAndDown ? '!ap-text-[14px]' : ''}`} >
                                 {/* <Download />  */}
                                  Ver mi Solicitud
                            </span>
                        </Button>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
export default SuccessRequest;
