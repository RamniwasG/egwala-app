import React from 'react'
import { Box } from '@mui/material'
import './layout.css';

const Layout = ({children}) => {
    return <Box className="page-layout d-f fd-r" sx={{minHeight: '100vh'}}>
        {children}
    </Box>
}

export default Layout;
