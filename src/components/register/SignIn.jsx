import React, { useState } from 'react'
import Layout from '../Layout';
import { Box, Button } from '@mui/material';
import { Form, useNavigate } from 'react-router-dom';
import InputField from '../reuseable/TextField';
import egwalaLogo from './../../assets/images/landing_page_3.gif'
import RestAPI from '../../Services/apis';
import { showErrorMessage } from '../reuseable/Toaster';

const SignIn = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const  handleSubmit = (e) => {
        e.preventDefault();
        RestAPI.post('/users/signin', { email: username, password })
        .then(res => {
            console.log(res.data)
            navigate('/home')
        }).catch(err => {
            console.log(err)
            showErrorMessage(err.message)
        })
    }

    return <Layout>
        <Box className="d-f fd-c" p={3}>
            <img src={egwalaLogo} width="30%" height="100px" style={{borderRadius: '50%'}} alt="egwala-logo" />
            <Box component="h2">Login</Box>
            <Form onSubmit={handleSubmit}>
                <InputField
                    label="Username"
                    id="username"
                    name="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <InputField
                    label="Password"
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button type="submit" variant='contained' fullWidth sx={{backgroundColor: '#FF3333'}}>SignIn</Button>
            </Form>
            <Box component="p">
                Don't have account,<Button onClick={(e) => navigate("/signup")}>SignUp</Button> here
            </Box>
        </Box>
    </Layout>
}

export default SignIn;
