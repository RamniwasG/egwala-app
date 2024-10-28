import React, { useState } from 'react'
import Layout from '../Layout';
import { Box, Button } from '@mui/material';
import { Form, useNavigate } from 'react-router-dom';
import InputField from '../reuseable/TextField';
import egwalaLogo from './../../assets/images/landing_page_3.gif'
import InputSelect from '../reuseable/InputSelect';
import RestAPI from './../../Services/apis/index'
import { showErrorMessage, showSuccessMessage } from '../reuseable/Toaster';

const roleOptions = [
    { text: 'Seller', value: 'seller' },
    { text: 'Buyer', value: 'buyer' }
]
const SignUp = () => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [selectedRole, setSelectedRole] = useState('buyer');

    const navigate = useNavigate();

    const  handleSubmit = (e) => {
        e.preventDefault();
        const payload = {
            username: firstname + " " + lastname,
            email, phone, 
            password,
            isSeller: selectedRole === 'seller' ? true : false
        }
        console.log(payload)
        RestAPI.post('/users/signup', payload, {
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => {
            console.log(res.data)
            showSuccessMessage('You have successfully registered. Please Sign In now')
            navigate('/signin')
        }).catch(err => {
            console.log(err)
            showErrorMessage(err.message)
        })
    }

    return <Layout>
        <Box className="d-f fd-c" p={3}>
            <img src={egwalaLogo} width="30%" height="100px" style={{borderRadius: '50%'}} alt="egwala-logo" />
            <Box component="h2">SignUp</Box>
            <Form onSubmit={handleSubmit}>
                <Box className="d-f fd-r" gap={1}>
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
                </Box>
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
                    type="tel"
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
                <InputSelect
                    label="Role"
                    labelId='role-label'
                    id="role"
                    selectedValue={selectedRole}
                    options={roleOptions}
                    onChange={(e) => setSelectedRole(e.target.value)}
                />
                <Button type="submit" variant='contained' fullWidth sx={{backgroundColor: '#FF3333'}}>SignUp</Button>
            </Form>
            <Box component="p">
                Already have an account,<Button onClick={(e) => navigate("/signin")}>SignIn</Button> here
            </Box>
        </Box>
    </Layout>
}

export default SignUp;
