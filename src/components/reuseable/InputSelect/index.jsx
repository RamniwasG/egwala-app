import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function InputSelect({
    label, labelId,
    id, selectedValue, options, ...other
}) {
  return (
        <FormControl fullWidth sx={{mb: 1.5}}>
            <InputLabel id={labelId}>{label}</InputLabel>
            <Select
                labelId={labelId}
                id={id}
                value={selectedValue}
                label={label}
                {...other}
            >
                {options.map((option) => 
                    <MenuItem key={option.value} value={option.value}>{option.text}</MenuItem>
                )}
            </Select>
        </FormControl>
    );
}