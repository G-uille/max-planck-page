import React, { useState, useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import TextareaAutosize from '@mui/material/TextareaAutosize';
import { required } from "../../utils/validator";

const MUITextarea = ({ id, rules = [], value, onChangeText }) => {
    const [helperText, setHelperText] = useState("");
    const [error, setError] = useState(false);

    const validate = (textareaValue) => {
        let errorMessage = "";
        let hasError = false;

        rules.forEach((rule) => {
            if (rule === "required") {
                const response = required(textareaValue ?? " ");
                if (response !== true) {
                    errorMessage = response;
                    hasError = true;
                }
            }

        });

        setHelperText(errorMessage);
        setError(hasError);
    };

    const handleChange = (e) => {
        const newValue = e.target.value;
        onChangeText(e);
        validate(newValue);
    };

    useEffect(() => {
        validate(value);
    }, [value]);

    return (
        <FormControl fullWidth>
            <TextareaAutosize
                id={id}
                placeholder={"Escribe aquí..."}
                value={value}
                onChange={handleChange}
                style={{
                    width: '100%',
                    padding: '8px 12px',
                    backgroundColor: '#fff',
                    borderRadius: '4px',
                    fontWeight: '400',
                    fontSize: '0.875rem',
                    height: '80px',
                    border: error ? '1px solid red' : '1px solid #a4aab5',
                    color: 'black',
                    outline: 'none',
                }}
            />
            {helperText && (
                <small style={{ color: 'red', marginTop: '4px' }}>{helperText}</small>
            )}
        </FormControl>
    );
};

export default MUITextarea;


