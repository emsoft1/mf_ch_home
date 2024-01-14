
import * as React from 'react';
import {Text } from "../atoms/Text";
import { Buttons } from "../atoms/Button";
import Box from '@mui/material/Box';
export const Footer = ({  label , backcolor="lightblue"}) => {

  return (
    <Box>
    <Text label={label} backcolor={backcolor}>

    </Text>
    </Box>
  );
};
