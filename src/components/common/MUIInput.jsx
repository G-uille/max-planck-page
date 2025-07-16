import { FormControl, TextField, InputAdornment } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {isAlphabet, isNumeric, isRUC, mail, phoneNumber, required} from "../../utils/validator";

const CustomMUIInput = styled(TextField).withConfig({
    shouldForwardProp: (prop) => prop !== "filledColor"
})`
    & .MuiInputBase-input {
        color: black !important;
        font-size: 14px;
        height: 10px !important;
        border-radius: 4px;
        padding-top: 10px;
    }

    & .MuiFilledInput-root {
        background-color: ${({ filledColor }) => filledColor || '#ffffff'} !important;
        border-radius: 4px;
        padding: 7px;
        display: flex;
        align-items: center;
        font-family: 'Poppins', sans-serif;
    }

    & .MuiOutlinedInput-root {
        background-color:rgb(239, 239, 239) !important;
        border-radius: 4px;

        &:focus-within {
            border: solid 1px black !important;
        }
    }

    & .MuiInputBase-input.Mui-disabled {
        color: black !important;
    }

    & .MuiInputBase-root.Mui-disabled {
        background-color:rgb(239, 239, 239) !important;
    }

    & .MuiInputLabel-root.Mui-disabled {
        color: rgb(239, 239, 239) !important;
    }

    & .MuiFormHelperText-root.Mui-disabled {
        color: rgb(239, 239, 239) !important;
    }

    & .MuiInputAdornment-root {
        background-color: inherit;
        padding: 0px 3px 8px 5px;
        display: flex;
        font-size: 10px !important;
        align-items: center;
        border-radius: 4px 0 0 4px;
    }

    & .MuiInputAdornment-root.Mui-disabled {
        color: rgb(239, 239, 239) !important;
    }
`;

const MUIInput = ({
                      rules = [],
                      rangeNumber,
                      value,
                      onChange,
                      id,
                      label,
                      placeholder,
                      containerRef,
                      type,
                      icon,
                      className,
                      disabled = false,
                      filledColor = '#fff',
                      onChangeError,
                      ...rest
                  }) => {
    const [helperText, setHelperText] = useState("");
    const [error, setError] = useState(false);

    const validate = (inputValue) => {
        if (!value) return;

        let errorMessage = "";
        let hasError = false;

        rules.forEach((rule) => {
            if (rule === "required") {
                const response = required(inputValue ?? " ");
                if (response !== true) {
                    errorMessage = response;
                    hasError = true;
                }
            }

            if (rule === "email") {
                const response = mail(inputValue);
                if (response !== true) {
                    errorMessage = response;
                    hasError = true;
                }
            }

            if (rule === "isNumber") {
                const response = isNumeric(inputValue);
                if (response !== true) {
                    errorMessage = response;
                    hasError = true;
                }
            }

            if (rule === "phoneNumber") {
                const response = phoneNumber(inputValue);
                if (response !== true) {
                    errorMessage = response;
                    hasError = true;
                }
            }

            if (rule === "isRUC") {
                const response = isRUC(inputValue);
                if (response !== true) {
                    errorMessage = response;
                    hasError = true;
                }
            }

            if (rule === "isAlphabet") {
                const response = isAlphabet(inputValue);
                if (response !== true) {
                    errorMessage = response;
                    hasError = true;
                }
            }

            if( rule === "val-min" || rule === "val-eq" || rule === "val-max" ){
                if( inputValue < 0 ){
                    errorMessage = 'Debe ser mayor o igual a 0'
                    hasError = true
                    return
                }
                if(rule === "val-min" ) errorMessage = inputValue < rangeNumber ? errorMessage : `El valor debe ser mayor o igual a ${rangeNumber}`
                if(rule === "val-eq" )  errorMessage = inputValue == rangeNumber ? errorMessage  : `El valor debe ser igual a ${rangeNumber}`
                if(rule === "val-max" ) errorMessage = inputValue > rangeNumber ? `El valor debe ser menor o igual a ${rangeNumber}` : errorMessage

                if(errorMessage != ""){
                    hasError = true
                }
            }
        });

        setHelperText(errorMessage);
        if (onChangeError) onChangeError(!hasError);
        setError(hasError);
    };

    const handleChange = (e) => {
        const inputValue = e.target.value;
        onChange(e);
        validate(inputValue);
    };

    useEffect(() => {
        validate(value);
    }, [value]);

    return (
        <FormControl fullWidth>
            <CustomMUIInput
                readOnly={disabled}
                error={error}
                id={id}
                disabled={disabled}
                label={label}
                placeholder={placeholder}
                className={className}
                variant="filled"
                helperText={helperText}
                onChange={handleChange}
                value={value}
                ref={containerRef}
                type={type}
                filledColor={filledColor}
                {...rest}
                InputProps={{
                    startAdornment: icon ? (
                        <InputAdornment position="start">
                            {icon}
                        </InputAdornment>
                    ) : null,
                }}
            />
        </FormControl>
    );
};


export default MUIInput;
