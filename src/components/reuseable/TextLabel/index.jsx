import { Box } from '@mui/material'
import React from 'react'

const TextLabel = ({ label }) => {
    return <Box component="label" mb={.5}>{label}</Box>
}

export default TextLabel;
