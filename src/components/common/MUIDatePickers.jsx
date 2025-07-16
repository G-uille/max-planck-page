import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import dayjs from "dayjs";

const CustomDatePicker = styled(DatePicker)`
     width: 430px;

    & .MuiIconButton-edgeEnd{
        color: white;
    }

    & .MuiInputBase-input{
        color:white;
    }

    & .MuiInputBase-root{
        white: 100% !important; 
    }

`

const MUIDatePickers = ({ readOnly }) => {

    const [fechaSolicitud, setFechaSolicitud] = useState(null);

    useEffect(() => {
       
        setFechaSolicitud(dayjs()); 
    }, []);


    return (

        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <CustomDatePicker sx={{ backgroundColor: "rgb(17 24 39)" }}
                format="DD-MM-YYYY"
                value={fechaSolicitud}
                onChange={(newValue) => setFechaSolicitud(newValue)} 
                readOnly={readOnly}
            />
        </LocalizationProvider>
    )
}

export default MUIDatePickers;