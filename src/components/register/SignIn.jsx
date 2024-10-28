import React, { useEffect, useState } from 'react'
import Layout from '../Layout';
import API from '../../Services/apis';
import { Box } from '@mui/material';

const SignIn = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        API.get('/users/all')
        .then(res => {
            console.log(res.data)
            setUsers(res.data)
        })
    }, [])

    return <Layout>
        <Box className="d-f fd-c">
            <Box component="h2">SignIn Page</Box>
            <b>Users List: {users.length}</b>
            {JSON.stringify(users)}
        </Box>
    </Layout>
}

export default SignIn;
