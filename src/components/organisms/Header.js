
import * as React from 'react';
import {Text } from "../atoms/Text";
import { Buttons } from "../atoms/Button";
import Box from '@mui/material/Box';
export const Header = ({  label }) => {

  return (
    <Box>
    <Text label={label} >

    </Text>
    </Box>
  );
};
