import React, { useState } from 'react'
import Layout from '../Layout';
import { Box, Button } from '@mui/material';
import { Form } from 'react-router-dom';
import InputField from '../reuseable/TextField';
import egwalaLogo from './../../assets/images/landing_page_3.gif'

const SignUp = () => {

    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setcPassword] = useState('');

    const  handleSubmit = (e) => {
        console.log(e)
        e.preventDefault();
        console.log({username: firstname + " " + lastname, email, phone, password, cpassword})
    }

    return <Layout>
        <Box className="d-f fd-c" p={3}>
            <img src={egwalaLogo} width="30%" height="100px" style={{borderRadius: '50%'}} alt="egwala-logo" />
            <Box component="h2">SignUp</Box>
            <Form onSubmit={handleSubmit}>
                <InputField
                    label="First Name"
                    id="firstname"
                    name="firstname"
                    type="text"
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                />
                <InputField
                    label="Last Name"
                    id="lastname"
                    name="lastname"
                    type="text"
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                />
                <InputField
                    label="Email"
                    id="email"
                    name="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <InputField
                    label="Phone"
                    id="phone"
                    name="phone"
                    type="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                <InputField
                    label="Password"
                    id="password"
                    name="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <InputField
                    label="Confirm Password"
                    id="cpassword"
                    name="cpassword"
                    type="password"
                    value={cpassword}
                    onChange={(e) => setcPassword(e.target.value)}
                />
                <Button type="submit" variant='contained' fullWidth sx={{backgroundColor: '#FF3333'}}>SignUp</Button>
            </Form>
            <Box component="p">
                Already have account,<Button href="/signin">SignIn</Button> here
            </Box>
        </Box>
    </Layout>
}

export default SignUp;
