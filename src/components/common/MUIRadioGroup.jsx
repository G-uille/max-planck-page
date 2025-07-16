import { Radio, RadioGroup } from "@mui/material";
import FormControlLabel from '@mui/material/FormControlLabel';
import React from "react";
import styled from "styled-components";

const CustomRadioGroup = styled(RadioGroup)`

    &  .MuiButtonBase-root{

        color: rgb(34 197 94);

    }

     &  .MuiRadio-root.Mui-checked{

        color: rgb(34 197 94);

    }

`
const MUIRadioGroup = ({ }) => {
    return (

        <CustomRadioGroup name="use-radio-group" defaultValue="first">
            <FormControlLabel value="first" label="Tiempo Completo" control={<Radio />} />
            <FormControlLabel value="second" label="Medio Tiempo" control={<Radio />} />
            <FormControlLabel value="third" label="Contrato Temporal" control={<Radio />} />
            <FormControlLabel value="fourth" label="Freelance" control={<Radio />} />
        </CustomRadioGroup>
    )
}

export default MUIRadioGroup;