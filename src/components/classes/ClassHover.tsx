import * as React from 'react';
import { Classes, ClassesMode } from "../../models/Classes.model";
import Button from "@mui/material/Button";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import VideocamIcon from "@mui/icons-material/Videocam";
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {Link, Share} from "@mui/icons-material";
import { setCurrentCar } from "../../slices/classes"

const ClassHover: React.FC<Partial<Classes> & { currentClass?: any }> = ({ name, teacher, rating, mode, price, address, shortDescription, currentClass } ) => {
    const [fixedPlace, setFixedPlace] = React.useState<boolean>(false);
    const [home, setHome] = React.useState<boolean>(false);
    const [online, setOnline] = React.useState<boolean>(false);
    const navigate = useNavigate();
    const currentUser = useSelector((state: any) => state.auth.currentUser);
    const dispatch = useDispatch()

    const handleRequireClass = () => {
        if(!currentUser){
            navigate('/auth', { replace: true })
            return
        }

        dispatch(setCurrentCar(currentClass))
        navigate('/solicitud-clase', { replace: true })
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

    return(
        <div className="ap-p-3 ap-flex ap-flex-col ap-w-80 ap-gap-1 ap-bg-white">
            <h1 className="ap-font-semibold ap-uppercase ap-text-sm">{ name }</h1>
            <span className="ap-font-extralight ap-underline ap-text-sm">{teacher.name}</span>
            <span className="ap-font-normal ap-mt-3 ap-text-sm">{shortDescription}</span>
            { currentUser && home && <span className="ap-mt-2 ap-text-sm"> <DirectionsWalkIcon sx={{ fontSize: '15px', marginRight: '5px' }} /> Clases a domicilio</span> }
            { currentUser && fixedPlace && <span className="ap-mt-2 ap-text-sm"> <LocationOnIcon sx={{ fontSize: '15px', marginRight: '5px' }} /> Lugares fijos de enseñanza </span> }
            { currentUser && online && <span className="ap-mt-2 ap-text-sm"> <VideocamIcon sx={{ fontSize: '15px', marginRight: '5px' }} /> Clases En Línea </span> }
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
                    marginTop: '10px',
                    fontFamily: 'Poppins'
                }}
            >
                { currentUser ? 'Contactar' : 'Conectarme para ver más' }
            </Button>
            { currentUser && <Button
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
                        marginTop: '5px',
                    }}
                >
                    {/* <Share sx={{ marginRight: '7px' }}/> Compartir */}
                    <Link sx={{ marginRight: '7px' }}/> Guardar enlace
                </Button>}
        </div>
    )
}

export default ClassHover;
