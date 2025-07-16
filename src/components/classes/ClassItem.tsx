import * as React from "react";
import { Classes } from "../../models/Classes.model";
import ClassHover from "./ClassHover";
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';
import useDisplay from '../../hooks/use-display'
import ClassCard from "./ClassCard";
import {CircularProgress} from "@mui/material";

const HtmlTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: 'white',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: 'inherit',
        fontFamily: 'inherit',
        fontWeight: 'inherit',
        border: '1px solid #dadde9',
    },
    [`& .${tooltipClasses.arrow}`]: {
        color: 'white',
    }
}));

const ClassItem: React.FC<Partial<Classes & { showButton?: boolean, showMode?: boolean, currentClass?: any, width?: string }>> = ({ name, teacher, rating, width, currentClass, address, fee, mode, price, fileUrl, shortDescription, slug, showButton = true, showMode = true }) => {
    const display = useDisplay()
    return (
        <>
        <ClassCard
            name={name}
            width={width}
            mode={mode}
            fileUrl={fileUrl}
            currentClass={currentClass}
            showButton={showButton}
            showMode={showMode}
            shortDescription={shortDescription}
        />
           
        </>
    );
};

export default ClassItem;
