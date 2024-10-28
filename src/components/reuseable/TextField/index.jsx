import * as React from 'react';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';

export default function InputField({ labelId, label, styles, ...other }) {
    return (
        <FormControl fullWidth sx={{mb:1.5}}>
            <TextField {...other} label={label} />
        </FormControl>
    );
}