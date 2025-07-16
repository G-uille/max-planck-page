import * as React from "react";
import { Classes, ClassesMode, Fee } from "../../models/Classes.model";
import { numberFormatGuaranies } from "../../utils/numberFormat";
import IconButton from "@mui/material/IconButton";
import {TurnedIn, Share, Check, LocationOn, Videocam, RemoveRedEye, ChatBubble, Link, CheckCircle} from "@mui/icons-material";
import Button from "@mui/material/Button";
import DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VideocamIcon from "@mui/icons-material/Videocam";
import { useEffect } from "react";
import Divider from "@mui/material/Divider";
import useDisplay from '../../hooks/use-display'
import Rating from "../common/Rating";
import { useNavigate } from "react-router-dom";
import { setCurrentCar } from "../../slices/classes"
import { useDispatch } from "react-redux";

const ClassInfoCard: React.FC<Partial<Classes> & { currentClass: any }> = ({ currentClass, name, mode, price, fee, fileUrl, address, shortDescription }) => {
    const display = useDisplay();
    const [fixedPlace, setFixedPlace] = React.useState<boolean>(false);
    const [home, setHome] = React.useState<boolean>(false);
    const [online, setOnline] = React.useState<boolean>(false);
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleRequireClass = () => {
        dispatch(setCurrentCar(currentClass))
        navigate('/solicitud-clase')
    }

    useEffect(() => {
        const verifiedModes = () => {
            const isOnline = mode.filter((item) =>  item === ClassesMode.VIRTUAL)
            if(isOnline.length > 0 ) setOnline(true);

            if(address){
                const inHome = address.filter((item) => item.minimum_price)
                const isPlace = address.filter((item) => !item.minimum_price)
                if(inHome.length > 0) setHome(true)
                if(isPlace.length > 0) setFixedPlace(true)
            }
        }

        verifiedModes()
    }, [mode, address])

    return (
        // <div className={` ap-overflow-hidden ap-rounded-lg ap-flex ap-flex-col ap-shadow-xl  ap-bg-white  ${display.mdAndDown ? ' ' : 'ap-absolute ap-top-16 ap-w-96 ap-right-72'} `}>
        <div className={`ap-overflow-hidden ap-rounded-lg ap-flex ap-flex-col ${display.mdAndDown ? 'ap-mt-7 ap-shadow-none !ap-bg-transparent ap-max-w-xl ' : 'ap-mt-10 ap-w-[650px] ap-shadow-lg  ap-min-w-[400px] ap-bg-white'} `} style={!display.mdAndDown ? { right: 'clamp(60px, 12vw, 80vw)' } : {}}>
            <div className={`ap-max-h-60 ap-overflow-hidden ap-relative ${display.mdAndDown ? 'ap-max-h-54' : 'ap-max-h-60 '}`}>
                {/* <IconButton className="!ap-absolute !ap-top-2 ap-right-3" size="large" sx={{p: '10px', color: 'white'}}
                             aria-label="menu">
                    <TurnedIn/>
                </IconButton> */}
                <img className="ap-w-full" src={fileUrl} alt="image" />
            </div>
            <div className={` ap-flex ap-flex-col ap-gap-2 ${display.mdAndDown ? 'ap-px-0 ap-gap-3' : 'ap-px-6'} `}>
                { display.mdAndDown &&
                    <div>
                        <div
                            className={`ap-absolute ap-top-64 ap-flex ap-justify-between ${display.smAndDown ? 'ap-text-sm ap-ml-1' : 'ap-gap-2 ap-ml-1'}`}>
                            <div className="ap-flex ap-mt-3 ap-w-full ap-gap-2">
                                {mode && mode.map((item, index) => (
                                    <React.Fragment key={index}>
                                        {item === ClassesMode.PRESENCIAL &&
                                            <span
                                                className={`ap-bg-white ap-border-2  ap-border-black ap-py-1 ap-px-5 ap-pl-3 ap-rounded-3xl ap-flex ap-items-center ap-justify-center ap-gap-2 ${display.mdAndDown ? 'ap-text-sm' : ''}`}>
                                        <LocationOn/> Presencial
                                    </span>}
                                        {item === ClassesMode.VIRTUAL &&
                                            <span
                                                className={`ap-bg-primary ap-border-2 ap-border-black ap-py-1 ap-px-5 ap-pl-3 ap-rounded-3xl ap-flex ap-items-center ap-justify-center ap-gap-2 ${display.mdAndDown ? 'ap-text-sm' : ''}`}>
                                        <Videocam/> En línea
                                    </span>
                                        }
                                    </React.Fragment>))}
                            </div>
                        </div>
                        <h1 className={`ap-text-left ap-uppercase ap-mt-4 ap-text-black ap-font-bold ap-leading-tight ap-text-xl`}>
                            {name}
                        </h1>
                        <p className={`ap-text-black ap-w-full ap-mt-2`}>{shortDescription}</p>
                        <div className=" ap-items-start ap-flex-col ap-justify-start ap-bottom-3 ap-flex ap-w-full ap-gap-5 ap-mt-3">
                            <Rating/>
                            { !display.mdAndDown && <div className="ap-flex ap-gap-6">
                                <div className="ap-flex ap-items-center ap-gap-3 ap-text-black">
                                    <TurnedIn sx={{fontSize: '15px'}}/>
                                    <span className="ap-text-[12px]"> 0 guardadas</span>
                                </div>
                                <div className="ap-flex ap-items-center ap-gap-3 ap-text-black">
                                    <RemoveRedEye sx={{fontSize: '15px'}}/>
                                    <span className="ap-text-[12px]"> 0 guardadas</span>
                                </div>
                                <div className="ap-flex ap-items-center ap-gap-3 ap-text-black">
                                    <ChatBubble sx={{fontSize: '15px'}}/>
                                    <span className="ap-text-[12px]"> 0 guardadas</span>
                                </div>
                            </div>}
                        </div>
                    </div> }
                <div className={`ap-flex ap-w-full ap-justify-start ap-items-center  ap-gap-2 ${display.mdAndDown ? 'ap-mb-0' : 'ap-mt-4'}`}>
                    { !display.mdAndDown && 
                    <div className={`ap-flex ap-w-full ap-justify-between ap-items-center  ap-gap-2 ${display.mdAndDown ? 'ap-mb-0' : ''}`}>
                        <h1 className={`ap-font-semibold`}>Costo:</h1>
                        <h1 className={`ap-font-bold ap-text-2xl ${display.mdAndDown ? 'ap-text-black' : ''}`}>{numberFormatGuaranies(price)}</h1>
                    </div>}
                    {/*<h1 className="ap-font-semibold">Costo</h1>*/}
                    { display.mdAndDown && <h1 className={`ap-font-bold ap-text-2xl ${display.mdAndDown ? 'ap-text-black' : ''}`}>{numberFormatGuaranies(price)}</h1>}
                    { display.mdAndDown && <div>
                        {fee === Fee.HORA &&
                            <h1 className=" ap-text-sm ap-flex ap-items-center ap-justify-center ap-text-gray-400 ap-rounded-3xl">/ hora</h1>}
                        {fee === Fee.CLASE &&
                            <h1 className=" ap-text-sm ap-items-center ap-justify-center ap-text-gray-400 ap-rounded-3xl">/ clase</h1>}
                    </div> }

                </div>
                { !display.mdAndDown && <div className="ap-flex ap-w-full ap-justify-between ap-items-center ap-mb-1">
                    <h1 className={`ap-font-semibold`}>Tarifa aplicada:</h1>
                    {fee === Fee.HORA &&
                        <h1 className="ap-bg-whitegray-100 ap-text-sm ap-text-black ap-border ap-border-gray-300 ap-px-7 ap-py-1 ap-rounded-3xl">Por
                            hora</h1>}
                    {fee === Fee.CLASE &&
                        <h1 className="ap-bg-white ap-text-sm ap-text-black ap-border ap-border-gray-300 ap-px-7 ap-py-1 ap-rounded-3xl">Por
                            clase</h1>}
                </div>}
                <Button
                    variant="contained"
                    onClick={handleRequireClass}
                    sx={{ 
                        backgroundColor: "#2E89FF",
                        color: 'white',
                        padding: '10px 35px 10px 35px',
                        textTransform: 'none',
                        fontWeight: 'normal',
                        fontSize: '14px',
                        fontFamily: 'Poppins',
                        boxShadow: 'none',
                    }}
                >
                    Contactar
                </Button>
                <Button
                    variant="contained"
                    sx={{ 
                        backgroundColor: "#cfe4fd",
                        color: '#2f84d7',
                        boxShadow: 'none',
                        padding: '10px 35px 10px 35px',
                        textTransform: 'none',
                        fontWeight: 'normal',
                        fontSize: '14px',
                        fontFamily: 'Poppins',
                        marginBottom : '12px'
                    }}
                >
                    {/* <Share sx={{ marginRight: '7px' }}/> Compartir */}
                    <Link sx={{ marginRight: '7px' }}/> Guardar enlace
                </Button>
               { !display.mdAndDown && <Divider className={`!ap-mt-0 ap-font-light ap-text-[12px]`}
                         sx={{
                    color: display.mdAndDown ? '#f3f4f6' : '#6b7280',
                    borderColor: display.mdAndDown ? '#f3f4f6' : '#6b7280',
                    fontSize: '12px',
                    fontWeight: 300,
                    
                }} >Más Información</Divider>}
                { display.mdAndDown && 
                    <h1 className={`ap-font-bold ${display.mdAndDown ? 'ap-text-xl ap-mb-1' : 'ap-text-xl'}`}>Acerca de la clase</h1>
                }
                <div className={`ap-flex ap-flex-col ap-overflow-y-auto ${display.mdAndDown ? 'ap-gap-0' : 'ap-gap-0'}`}>
                    { fixedPlace &&
                        <div className={` ap-flex ap-flex-col ap-gap-2 ap-w-full ${display.mdAndDown ? 'ap-text-black  ap-mb-3' : 'ap-mt-2 ap-mb-5'} `}>
                            <h1 className={`ap-font-semibold ${display.mdAndDown ? 'ap-text-black' : ''} `}><LocationOnIcon sx={{ fontSize: '20px', marginRight: '5px' }} /> Lugares fijos de enseñanza </h1>
                            { address.map((item, index) =>
                                <React.Fragment key={index}>
                                    { !item.minimum_price && <a className="ap-flex ap-items-center ap-gap-2 ap-mt-2 ap-w-full ap-cursor-pointer">
                                        <Check sx={{ fontSize: '20px' }} />
                                        <span className="ap-flex ap-flex-col ap-gap-1 ap-text-sm ap-font-light">
                                            <span>{item.city.name}</span>
                                            <span className="ap-underline ap-text-primary ">{item.address}</span>
                                        </span>
                                    </a>}
                                </React.Fragment>
                            )}
                         </div>
                    }
                    { home &&
                        <div className={`ap-flex ap-flex-col ap-gap-2 ap-w-full ${display.mdAndDown ? 'ap-text-black ap-mb-3' : 'ap-mt-2 ap-mb-5'} `}>
                            <h1 className={`ap-font-semibold ${display.mdAndDown ? 'ap-text-black' : ''} `}> <DirectionsWalkIcon sx={{ fontSize: '20px', marginRight: '5px' }}/> Clases a domicilio</h1>
                            <div className="ap-flex ap-items-center ap-gap-2 ap-mt-2 ap-w-full ap-cursor-pointer ap-text-sm ap-font-light">
                                <Check sx={{ fontSize: '20px' }}/>
                                <span className="ap-underline ap-text-primary">Disponible en tu ubicación.</span>
                            </div>
                            <div className="ap-flex ap-items-center ap-gap-2 ap-mt-2 ap-w-full ap-cursor-pointer ap-text-sm ap-font-light">
                                <Check sx={{ fontSize: '20px' }}/>
                                <span>Contactar al profesor para coordinar el costo total con la tarifa por ubicación.</span>
                            </div>
                        </div>
                        }
                    { online &&
                        <div className={` ap-flex ap-flex-col ap-gap-2 ap-w-full ${display.mdAndDown ? 'ap-text-black ap-mb-3' : 'ap-mt-2 ap-mb-5'}`}>
                            <h1 className={`ap-font-semibold ${display.mdAndDown ? 'ap-text-black' : ''}`}> <VideocamIcon sx={{ fontSize: '20px', marginRight: '5px'}} /> Clases En Línea </h1>
                            <div className="ap-flex ap-items-center ap-gap-2 ap-mt-2 ap-w-full ap-cursor-pointer ap-text-sm ap-font-light">
                                <Check sx={{ fontSize: '20px' }}/>
                                <span className="ap-flex ap-flex-col ap-gap-1">Aulas virtuales en Google Meet, Zoom, etc.</span>
                            </div>
                        </div>
                    }
                     { display.mdAndDown && 
                    <h1 className={`ap-font-semibold ap-my-2 ${display.mdAndDown ? 'ap-text-black' : ''} `}>Categorías</h1>

                }
                </div>
            </div>

        </div>
    )
}
export default ClassInfoCard;
