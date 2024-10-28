import { Box } from '@mui/material'
import React, { useEffect, useState } from 'react'
import RestAPI from '../../Services/apis'
import { showSuccessMessage } from '../reuseable/Toaster';

const HomePage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        RestAPI.get('/users/all')
        .then(res => {
            console.log(res.data)
            showSuccessMessage('success!')
            setUsers(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    return <Box>
        <b>Users List:</b> {JSON.stringify(users)}
    </Box>
}

export default HomePage;
