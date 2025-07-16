import {CircularProgress, FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { required } from '../../utils/validator';

const CustomMUISelect = styled(Select)`
  & .MuiSvgIcon-root {
    color: a4aab5;
    fill: a4aab5;
  }
`;

const MUISelect = ({ items, keys, label, value, title, onChangeSelect, rules = [], disabled = false, disabledChange = false, loading = false }) => {
  const firstElement = items.length > 0 ? items[0][`${keys}`] : '';
  const [item, setItem] = useState(firstElement);
  const [helperText, setHelperText] = useState('');
  const [error, setError] = useState(false);

  const validate = (inputValue) => {
    let errorMessage = '';
    let hasError = false;

    rules.forEach((rule) => {
      if (rule === 'required') {
        const response = required(inputValue ?? " ");
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
    if(disabledChange || disabled){
      if (onChangeSelect) onChangeSelect(e.target.value);
      return
    }

    const selectedValue = e.target.value;
    setItem(selectedValue);
    validate(selectedValue);
    if (onChangeSelect) onChangeSelect(selectedValue);
  };

  useEffect(() => {
    validate(item);
  }, [item]);

  useEffect(()=>{
    if(!value && value !== 0){
      return
    }

    setItem(value)
  }, [value])

  return (
    <FormControl className='ap-relative' fullWidth error={error}>
      { loading && <div className='ap-absolute !ap-text-black ap-z-[100] ap-left-3 ap-top-3'>
        <CircularProgress size={20} color="white" />
      </div> }
      <InputLabel id="demo-simple-select-label" className="!ap-font-[Poppins] !ap-text-black !ap-text-[14px]">{title}</InputLabel>
      <CustomMUISelect
        sx={{
          fontFamily: 'Poppins',
          fontSize: '14px',
          backgroundColor: disabled ? 'rgb(239, 239, 239)' : '#fff',
          color: 'black',
          height: '45px',
          '& .MuiOutlinedInput-notchedOutline': {
            border: '1px solid #a4aab5',
          },
          '& .MuiSvgIcon-root': {
            color: '#a4aab5 !important',
          },
      }}
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={item}
        disabled={disabled}
        onChange={handleChange}>
        { !loading && items.length > 0 &&
          items.map((item, index) => (
            <MenuItem key={index} value={item[`${keys}`]} className="!ap-font-[Poppins] !ap-text-[14px]">
              {item[`${label}`]}
            </MenuItem>
          ))}
      </CustomMUISelect>
      {helperText && <p style={{ color: 'red', fontSize: '0.8rem' }}>{helperText}</p>}
    </FormControl>
  );
};

export default MUISelect;
