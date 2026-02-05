import { FormControl, TextField, InputAdornment } from "@mui/material";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import {
  isAlphabet,
  isNumeric,
  isDecimal,
  isRUC,
  mail,
  phoneNumber,
  required,
  minLength,
  maxLength,
} from "../../utils/validator";

const CustomMUIInput = styled(TextField).withConfig({
  shouldForwardProp: (prop) => prop !== "filledColor",
})`
  /* INPUT TEXT */
  & .MuiInputBase-input {
    color: #ffffff !important;
    font-size: 14px;
    line-height: 1.4;
    padding: 10px 12px !important;
    font-family: "Poppins", sans-serif;
  }

  /* FILLED VARIANT (principal que usás) */
  & .MuiFilledInput-root {
    background-color: ${({ filledColor }) =>
      filledColor || "#1F1F1F"} !important;
    border-radius: 8px;
    border: 1px solid #3f3f3f;
    transition: all 0.2s ease;

    &:hover {
      border-color: #6c6c6c;
    }

    &.Mui-focused {
      border-color: #ffc62d;
      box-shadow: 0 0 0 1px rgba(255, 198, 45, 0.25);
    }

    &:before,
    &:after {
      display: none;
    }
  }

  /* LABEL */
  & .MuiInputLabel-root {
    color: rgba(255, 255, 255, 0.6);
    font-size: 13px;
    transform: translate(12px, 0px) scale(1); /* 🔑 SUBE el label */
    transition: all 0.2s ease;
    font-family: "Poppins", sans-serif;
  }

  /* LABEL SHRINK (cuando hay valor o focus) */
  & .MuiInputLabel-root.MuiInputLabel-shrink {
    transform: translate(12px, -10px) scale(0.85); /* 🔥 más arriba */
    color: #ffc62d;
  }

  /* ERROR */
  & .MuiInputLabel-root.Mui-error {
    color: #ff6b6b;
  }

  /* DISABLED */
  & .MuiInputLabel-root.Mui-disabled {
    color: rgba(255, 255, 255, 0.35);
  }

  /* HELPER TEXT */
  & .MuiFormHelperText-root {
    margin-left: 0;
    font-size: 12px;
    color: rgba(255, 255, 255, 0.45);

    &.Mui-error {
      color: #ff6b6b;
    }
  }

  /* ERROR STATE */
  & .MuiFilledInput-root.Mui-error {
    border-color: #ff6b6b;
    box-shadow: 0 0 0 1px rgba(255, 107, 107, 0.25);
  }

  /* DISABLED */
  & .MuiInputBase-root.Mui-disabled {
    background-color: #2a2a2a !important;
    border-color: #2f2f2f;
  }

  & .MuiInputBase-input.Mui-disabled {
    color: rgba(255, 255, 255, 0.35) !important;
    -webkit-text-fill-color: rgba(255, 255, 255, 0.35) !important;
  }

  & .MuiInputLabel-root.Mui-disabled {
    color: rgba(255, 255, 255, 0.35);
  }

  & .MuiFormHelperText-root.Mui-disabled {
    color: rgba(255, 255, 255, 0.35);
  }

  /* ICON / ADORNMENT */
  & .MuiInputAdornment-root {
    color: rgba(255, 255, 255, 0.5);
    margin-right: 4px;

    &.Mui-disabled {
      color: rgba(255, 255, 255, 0.35);
    }
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
  filledColor = "#28313b",
  onChangeError,
  ...rest
}) => {
  const [helperText, setHelperText] = useState("");
  const [error, setError] = useState(false);

  const validate = (inputValue, e) => {
    const current = inputValue !== undefined ? inputValue : value;

    const hasRequiredRule = Array.isArray(rules) && rules.includes("required");

    const isString = typeof current === "string";
    const isEmpty =
      current === undefined ||
      current === null ||
      (isString && current.trim() === "");

    if (isEmpty) {
      if (hasRequiredRule) {
        if (e?.type === "blur") {
          const response = required(current ?? "");
          setHelperText(response === true ? "" : response);
          setError(response !== true);
          if (onChangeError) onChangeError(response === true, current);
        } else {
          setHelperText("");
          setError(false);
          if (onChangeError) onChangeError(true, current);
        }
      } else {
        setHelperText("");
        setError(false);
        if (onChangeError) onChangeError(true, current);
      }
      return;
    }

    let errorMessage = "";
    let hasError = false;

    for (let rule of rules) {
      if (rule === "required") continue;

      const asString = String(current);

      if (rule === "email") {
        const response = mail(asString);
        if (response !== true) {
          errorMessage = response;
          hasError = true;
          break;
        }
      }

      if (rule === "isNumber") {
        const response = isNumeric(asString);
        if (response !== true) {
          errorMessage = response;
          hasError = true;
          break;
        }
      }

      if (rule === "isDecimal") {
        const response = isDecimal(asString);
        if (response !== true) {
          errorMessage = response;
          hasError = true;
          break;
        }
      }

      if (rule === "phoneNumber") {
        const response = phoneNumber(asString);
        if (response !== true) {
          errorMessage = response;
          hasError = true;
          break;
        }
      }

      if (rule === "isRUC") {
        const response = isRUC(asString);
        if (response !== true) {
          errorMessage = response;
          hasError = true;
          break;
        }
      }

      if (rule === "isAlphabet") {
        const response = isAlphabet(asString);
        if (response !== true) {
          errorMessage = response;
          hasError = true;
          break;
        }
      }

      if (rule === "minLength") {
        const response = minLength(asString, 4);
        if (response !== true) {
          errorMessage = response;
          hasError = true;
          break;
        }
      }

      if (rule === "maxLength" && rest.maxLength) {
        const response = maxLength(asString, rest.maxLength);
        if (response !== true) {
          errorMessage = response;
          hasError = true;
          break;
        }
      }

      if (rule === "val-min" || rule === "val-eq" || rule === "val-max") {
        const num = Number(current);
        if (isNaN(num)) {
          errorMessage = "Debe ingresar solo números";
          hasError = true;
          break;
        }
        if (num < 0) {
          errorMessage = "Debe ser mayor o igual a 0";
          hasError = true;
          break;
        }
        if (rule === "val-min") {
          if (!(num >= rangeNumber)) {
            errorMessage = `El valor debe ser mayor o igual a ${rangeNumber}`;
            hasError = true;
            break;
          }
        }
        if (rule === "val-eq") {
          if (!(num === rangeNumber)) {
            errorMessage = `El valor debe ser igual a ${rangeNumber}`;
            hasError = true;
            break;
          }
        }
        if (rule === "val-max") {
          if (!(num <= rangeNumber)) {
            errorMessage = `El valor debe ser menor o igual a ${rangeNumber}`;
            hasError = true;
            break;
          }
        }
      }
    }

    setHelperText(errorMessage);
    if (onChangeError) onChangeError(!hasError);
    setError(hasError);
  };

  const handleChange = (e) => {
    const inputValue = e.target.value;
    onChange(e);
    validate(inputValue, e);
  };

  useEffect(() => {
    if (
      value !== undefined &&
      value !== null &&
      !(typeof value === "string" && value.trim() === "")
    ) {
      validate(undefined);
    } else {
      setHelperText("");
      setError(false);
    }
  }, [value]);
  return (
    <FormControl fullWidth>
      <CustomMUIInput
        readOnly={disabled}
        error={error}
        id={id}
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
            <InputAdornment position="start">{icon}</InputAdornment>
          ) : null,
        }}
      />
    </FormControl>
  );
};

export default MUIInput;
