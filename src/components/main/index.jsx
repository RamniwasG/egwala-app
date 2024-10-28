import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import RestAPI from '../../Services/apis';
import SideDrawer from './sidedrawer';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DashboardCubeIcon from './../../assets/images/dashboard_cube.png'
import './main.css';

const HomePage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        RestAPI.get('/users/all')
        .then(res => {
            setUsers(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return <Box className="d-f fd-c" p={2} sx={{boxSizing: 'border-box'}}>
        <Box className='d-f fd-r' justifyContent='space-between' width="100%">
            <SideDrawer />
            <AccountCircleIcon fontSize='large' />
        </Box>
        <Box component="h2">Dashboard</Box>
        <img src={DashboardCubeIcon} width="100%" height="340px" alt="dashboard data chart" />
        <Box component="span" className='title-text total-amounts'>Total amounts = 0</Box>
        <Box component="span" className='title-text total-customers'>Total customers = {users.length}</Box>
        <Box component="span" className='title-text total-quantites' textAlign="center">
            <Box mb={.5}>Total quantities = 0</Box>
            <Box mb={.5}>(milk + water)</Box>
            <Box color="lightgrey">1 cane = 20 ltr.</Box>
        </Box>
    </Box>
}

export default HomePage;
