import { Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import RestAPI from '../../Services/apis';
import SideDrawer from './sidedrawer';
import DashboardCubeIcon from './../../assets/images/dashboard_cube.png'
import BuyerDashboardIcon from './../../assets/images/buyer_data_grid.png'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import './main.css';
import MyAppBar from './appbar';
import { getAuthUser } from '../../utils';

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

    const loggedInUser = getAuthUser();
    let user = null
    if(loggedInUser) {
        user = JSON.parse(loggedInUser);
    }
    const userType = user ? user.roles[0] : ''
    const buyerQuantityStyle = userType === 'buyer' ? {
        top: '47%', right: '31%', transform: 'rotate(0deg)'
    } :  {
        top: '39%', right: '10%', transform: 'rotate(-27deg)'
    }
    return <Box className="d-f fd-c" p={2} sx={{boxSizing: 'border-box'}}>
        <Box className='d-f fd-r' justifyContent='space-between' width="100%">
            <SideDrawer />
            <MyAppBar />
        </Box>
        <Box component="h2">Dashboard</Box>
        {userType === 'seller' && 
            <img src={DashboardCubeIcon} width="100%" height="340px" alt="seller dashboard data chart" />
        }
        {userType === 'buyer' &&
            <Box className="d-f fd-c" justifyContent="space-between" mt={2}>
                <img src={BuyerDashboardIcon} width="100%" height="160px" alt="buyer total amount" />
                <img src={BuyerDashboardIcon} width="100%" height="160px" alt="buyer total quantities" />
            </Box>
        }
        <Box component="span" className='title-text total-amounts'>Total amounts = 0</Box>
        {userType === 'seller' && <Box component="span" className='title-text total-customers'>Total customers = {users.length}</Box>}
        <Box component="span" className='title-text total-quantites' textAlign="center"
            sx={{...buyerQuantityStyle}}
        >
            <Box mb={.5}>Total quantities = 0</Box>
            <Box mb={.5} fontSize={11}>(milk + water)</Box>
            <Box color="lightgrey" fontSize={11}>1 cane = 20 ltr.</Box>
        </Box>
        <Button color='secondary' variant='contained'
            sx={{position: 'relative', marginTop: '2rem'}}>
            <AddCircleOutlineIcon /> &nbsp;Add new customer
        </Button>
    </Box>
}

export default HomePage;
