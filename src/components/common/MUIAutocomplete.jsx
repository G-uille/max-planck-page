import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import * as React from "react";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import { CircularProgress } from "@mui/material";

const CustomMuiAutocomplete = styled(({ filledColor, ...props }) => (
    <Autocomplete {...props} />
))`
    & .MuiInputBase-input {
        font-family: 'Poppins', sans-serif;
        color: white !important;
        display: flex;
        height: 10px !important;
        align-items: center !important;
        font-size: 14px !important;
    }

    & .MuiOutlinedInput-root {
        background-color: ${({ filledColor }) => filledColor || '#28313b'} !important;
        border-radius: 4px;

        &:hover .MuiOutlinedInput-notchedOutline {
            border-color: white !important;
        }

        &.Mui-focused .MuiOutlinedInput-notchedOutline {
            border-color: white !important;
        }
    }

    & .MuiInputLabel-root {
        font-family: 'Poppins', sans-serif;
        font-size: 14px !important;
        color: #7d8288 !important;
    }

    & .MuiInputLabel-root.Mui-focused {
        color: white !important;
    }

    & .MuiAutocomplete-popupIndicator {
        color: white !important;
    }

    & .MuiAutocomplete-clearIndicator {
        color: white !important;
    }

    & .MuiAutocomplete-popper {
        font-family: 'Poppins', sans-serif !important;
    }

    & .MuiAutocomplete-listbox {
        background-color: #28313b !important;
        border-radius: 4px;
    }

    & .MuiAutocomplete-option {
        font-family: 'Poppins', sans-serif !important;
        color: white !important;
        font-size: 14px;
        padding: 8px 16px;

        &:hover {
            background-color: rgba(255, 255, 255, 0.1) !important;
        }

        &.Mui-focused {
            background-color: rgba(255, 255, 255, 0.2) !important;
        }
    }
`;

const MUIAutocomplete = ({ label, items, labelKey, labelKeyAlt, value, onChangeSelect, filledColor, selected, loading = false }) => {
    const [newValue, setNewValue] = React.useState(null);
    const [inputValue, setInputValue] = React.useState('');

    React.useEffect(() => {
        if (selected) {
            setInputValue(selected[labelKey] || '');
            setNewValue(selected);
        } else {
            setInputValue('');
            setNewValue(null);
        }
    }, [selected]);

    const onChangeNewValue = (value) => {
        if (value) {
            setNewValue(value);
            setInputValue(value[labelKey]);
            onChangeSelect(value[labelKey]);
        } else {
            setNewValue(null);
            setInputValue('');
            onChangeSelect('');
        }
    };

    return (
        <CustomMuiAutocomplete
            disablePortal={false}
            className="!bp-w-full"
            filledColor={filledColor}
            getOptionLabel={(option) => option[labelKey] || ''}
            options={items}
            value={newValue}
            inputValue={inputValue}
            onInputChange={(event, newInput) => setInputValue(newInput)}
            onChange={(event, newValue) => onChangeNewValue(newValue)}
            clearOnEscape
            sx={{ width: 300 }}
            renderInput={(params) => (
                 <TextField
                    {...params}
                    label={label}
                    InputProps={{
                        ...params.InputProps,
                        startAdornment: (
                            <SearchIcon style={{ color: "#7d8288", marginRight: "8px" }} />
                        ),
                    }}
                    sx={{
                        "& .MuiInputBase-input": {
                            paddingLeft: "18px",
                        },
                        "& .MuiInputLabel-root": {
                            marginLeft: "2px",
                            marginTop: "5px",
                        }
                    }}
                />               
            )}
            renderOption={(props, option) => {
                const { key, ...rest } = props;

                if(items.length === 0 && loading){
                    return <div  className="bp-p-10 bp-py-6 bp-flex bp-justify-center bp-items-center bp-flex-col bp-gap-3">
                        <CircularProgress size={20} color="white" />
                        </div>
                }

                return (
                    <li className="!bp-z-[10000]" key={key} {...rest}>
                        <div className="bp-flex bp-flex-col bp-font-[Poppins]">
                            <span className="bp-font-semibold">{option[labelKey]}</span>
                            <span className="bp-text-sm bp-font-light block">{option[labelKeyAlt]}</span>
                        </div>
                    </li> 
                );
            }}
        />
    );
};

export default MUIAutocomplete;
