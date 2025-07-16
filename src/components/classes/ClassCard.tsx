import * as React from 'react'
import { NavLink } from "react-router-dom";
import { Classes } from "../../models/Classes.model";
import { ArrowForward, ArrowForwardIos } from "@mui/icons-material";
import useDisplay from '../../hooks/use-display'
import ClassDialog from "../login/ClassDialog";

const ClassCard: React.FC<Partial<Classes & { showButton?: boolean, showMode?: boolean, width? : string, currentClass?: Classes }>> = ({ name, currentClass, fileUrl, width, shortDescription,  showButton }) => {
    const display = useDisplay();
    const [openLoginDialog, setOpenLoginDialog] = React.useState(false);
    const [enterContainer, setEnterContainer] = React.useState(false)
    const onNavigate = () => {
        setOpenLoginDialog(true)      
    }

    const onEnterContainer = () => {
        setEnterContainer(true)
    }
    const onLeaveContainer = () => {
        setEnterContainer(false)
    }

    return(
        <>
            <div className={`ap-relative class-menu-container ap-mb-8  ${width} `} onClick={onNavigate} onMouseEnter={onEnterContainer} onMouseLeave={onLeaveContainer} >
                <div className={`ap-bg-transparent ap-overflow-hidden ap-relative ap-rounded-lg ap-cursor-pointer ap-h-full ${display.mdAndDown ? '' : ''}`}>
                    <div className={`ap-w-full ap-overflow-hidden ap-flex ap-relative ap-items-center  ${(display.mdAndDown && !showButton) ? 'ap-max-h-24' : (display.mdAndDown && showButton) ? 'ap-max-h-48' : 'ap-max-h-32'}`}>
                        <div className={`ap-flex ap-w-full ap-items-center ap-overflow-hidden ${enterContainer && 'ap-scale-125 ap-transition ap-delay-100 ap-duration-300 ap-ease-in-out'} ${(display.mdAndDown && !showButton) ? 'ap-max-h-40' : (display.mdAndDown && showButton) ? 'ap-max-h-48' : ''} `}>
                            <img className={`ap-w-full`} src={fileUrl} alt="image"/>
                        </div>
                    </div>
                    <div className={` ap-flex ap-rounded-b-xl ap-flex-col ${display.mdAndDown ? 'ap-gap-1 ap-py-2' : 'ap-gap-1.5 ap-py-3'}`}>
                        <h1 className={`ap-font-semibold ap-text-white ap-uppercase ap-whitespace-nowrap ap-overflow-hidden ap-transition ap-delay-80 ap-delay-80 ap-duration-300 ap-text-ellipsis ${enterContainer && 'ap-underline'}  ${display.mdAndDown ? 'ap-text-sm' : 'ap-text-sm'}`}>
                            {name}
                        </h1>
                        <span className={`ap-font-extralight ap-text-white ap-whitespace-nowrap ap-overflow-hidden ap-text-ellipsis ${display.smAndDown ? 'ap-text-sm' : 'ap-text-sm'}`}>{shortDescription}</span>
                    </div>
                    { showButton && <div className="">
                        <div className=" ap-text-white ap-py-0">
                            <NavLink to={`/`}
                                    className="ap-flex ap-items-center  ap-gap-2">
                                <span className="ap-font-semibold ap-text-sm">Saber más</span>
                                { !enterContainer ? <ArrowForwardIos sx={{ fontSize: '20px' }} /> :<ArrowForward sx={{ fontSize: '20px' }} /> }
                            </NavLink>
                        </div>
                    </div>}
                </div>
            </div>
            <ClassDialog currentClass={currentClass} openDialog={openLoginDialog} toggleDialog={() => setOpenLoginDialog(false)} />
        </>
    )
}

export default ClassCard;
