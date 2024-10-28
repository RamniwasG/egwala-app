import React, { useEffect, useState } from 'react'
import Layout from '../Layout';
import API from '../../Services/apis';
import { Box } from '@mui/material';

const SignIn = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        API.get('/users/all')
        .then(res => {
            setUsers(res.data)
        }).catch(err => {
            console.log(err)
            alert(JSON.stringify(err))
        })
    }, [])

    return <Layout>
        <Box className="d-f fd-c">
            <Box component="h2">SignIn Page</Box>
            <b>Users: ({users.length})</b>
            {JSON.stringify(users)}
        </Box>
    </Layout>
}

export default SignIn;
