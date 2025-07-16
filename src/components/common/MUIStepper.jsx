import { Step, StepButton, Stepper } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";

const CustomMUIStepper = styled(Stepper)`

    & .MuiStepIcon-root.Mui-active{
          
     color: rgb(34 197 94); 

    }

`

const MUIStepper = ({ steps, onChangePage }) => {
    const [completed, setCompleted] = useState({});
    const [activeStep, setActiveStep] = useState(0);
    const handleStep = (step) => () => {
        setActiveStep(step);
        onChangePage(step)
    };

    return (
        <CustomMUIStepper nonLinear activeStep={activeStep}>
            {steps.map((label, index) => (
                <Step key={index} completed={completed[index]}>
                    <StepButton color="inherit" onClick={handleStep(index)}>
                        {label}
                    </StepButton>
                </Step>
            ))}
        </CustomMUIStepper>
    )
}

export default MUIStepper; 