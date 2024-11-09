import { Box } from '@mui/material'
import React from 'react'

const CustomDatePicker = (props) => {

    const onDateChange = (e) => {
        props.handleDateChange(new Date(e.target.value).toLocaleDateString().split('/').reverse().join('-'))
    }

    const dateStyle = {
        padding: '1rem',
        marginBottom: '.75rem',
        height: '20px',
        width: '-webkit-fill-available'
    }

    return <Box className="w-100">
        <input type="date" value={props.value} style={{...dateStyle}} onChange={onDateChange} />
    </Box>
}

export default CustomDatePicker;
