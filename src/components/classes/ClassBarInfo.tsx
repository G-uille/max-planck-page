import * as React from "react"
import useDisplay from "../../hooks/use-display"
import { Classes, Fee } from "../../models/Classes.model"
import { Button } from "@mui/material"
import { numberFormatGuaranies } from "../../utils/numberFormat"
import { setCurrentCar } from "../../slices/classes"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

const ClassBarInfo: React.FC<{ classSelected: Classes }> = ({ classSelected }) => {
    const display = useDisplay()
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleRequireClass = () => {
        dispatch(setCurrentCar(classSelected))
        navigate('/solicitud-clase')
    }
    return(
        <div className="">
            <div className={`ap-flex ap-text-white  ap-overflow-hidden ap-items-center  
             ap-min-h-12 ap-gap-7 ap-fixed ap-w-full ap-py-2 ap-z-[10000] ap-shadow 
            ${display.mdAndDown ? 'ap-justify-between ap-bg-[#f9fafb]' : 'ap-justify-center ap-bg-dark ap-px-10 '} 
            ${display.mdAndDown ? ' ap-px-4 ap-py-2 ap-bottom-0' : ' ap-top-12'}
            `}>
                <div className={` ap-container ap-w-full ap-flex ap-bg-transparent ${display.mdAndDown ? 'ap-flex-col ap-items-center' : 'ap-px-[9vw] ap-gap-9'}`}>  
                    <div className="ap-flex ap-justify-between ap-items-center ap-w-full">
                        { !display.mdAndDown && <div className="ap-flex ap-flex-col">
                            <span className=" ap-text-sm ap-whitespace-nowrap ap-overflow-hidden ap-text-ellipsis">{classSelected && classSelected.name}</span>
                            <div className="ap-flex ap-items-center ap-gap-2 ">
                                <h1 className={`ap-font-bold  ap-text-lg ap-text-white ap-whitespace-nowrap ap-overflow-hidden ap-text-ellipsis ${display.mdAndDown ? '' : ''}`}>{classSelected && numberFormatGuaranies(classSelected.price)}</h1>
                                <div>
                                    {classSelected && classSelected.fee === Fee.HORA &&
                                        <h1 className=" ap-text-[12px] ap-flex ap-items-center ap-whitespace-nowrap ap-overflow-hidden ap-text-ellipsis ap-justify-center ap-text-gray-400 ap-rounded-3xl">/ hora</h1>}
                                    {classSelected && classSelected.fee === Fee.CLASE &&
                                        <h1 className=" ap-text-[12px] ap-items-center ap-whitespace-nowrap ap-overflow-hidden ap-text-ellipsis ap-justify-center ap-text-gray-400 ap-rounded-3xl">/ clase</h1>}
                                </div>
                            </div>
                        </div> }
                        { display.mdAndDown && <div className="ap-flex ap-flex-col ap-w-8/12">
                            <span className="ap-font-semibold ap-text-sm ap-w-11/12 ap-text-black ap-whitespace-nowrap ap-overflow-hidden ap-text-ellipsis">{classSelected && classSelected.name}</span>
                            <div className="ap-flex ap-items-center ap-gap-2 ">
                                <h1 className={`ap-font-bold ap-text-2xl ap-text-black ap-whitespace-nowrap ap-overflow-hidden ap-text-ellipsis ${display.mdAndDown ? '' : ''}`}>{classSelected && numberFormatGuaranies(classSelected.price)}</h1>
                                <div>
                                    {classSelected && classSelected.fee === Fee.HORA &&
                                        <h1 className=" ap-text-sm ap-flex ap-items-center ap-whitespace-nowrap ap-overflow-hidden ap-text-ellipsis ap-justify-center ap-text-gray-400 ap-rounded-3xl">/ hora</h1>}
                                    {classSelected && classSelected.fee === Fee.CLASE &&
                                        <h1 className=" ap-text-sm ap-items-center ap-whitespace-nowrap ap-overflow-hidden ap-text-ellipsis ap-justify-center ap-text-gray-400 ap-rounded-3xl">/ clase</h1>}
                                </div>
                            </div>
                        </div> }
                        <div className={`${display.mdAndDown ? 'ap-py-2' : 'ap-py-0'}`}>
                            <Button
                                variant="contained"
                                onClick={handleRequireClass}
                                sx={{ 
                                    backgroundColor: "#2E89FF",
                                    color: 'white',
                                    padding: '   ',
                                    textTransform: 'none',
                                    fontWeight: 'normal',
                                    fontSize: '14px',
                                    fontFamily: 'Poppins',
                                    boxShadow: 'none',
                                }}
                            >
                                Contactar
                            </Button>
                        </div>
                       
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ClassBarInfo;