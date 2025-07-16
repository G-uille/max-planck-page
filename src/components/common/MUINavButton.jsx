import React from 'react';
import styled from 'styled-components';
import { Button } from '@mui/material';

const CustomNavButton = styled(Button)`
    &.MuiButton-root{
        width: 100% !important;
        text-transform: none !important;
        color: rgb(56 189 248);
        display: flex;
        justify-content: left;
        padding-left: 15px;
        margin-bottom: 15px;
    }
`

const MUINavButton = ({ children, href }) => {
  return <CustomNavButton href={href} target="_blank" > { children } </CustomNavButton>
}

export default MUINavButton;
