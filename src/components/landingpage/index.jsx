import React from 'react'
import { useLoaderData, useNavigate } from "react-router-dom";
import Layout from '../Layout';
import bgImage from './../../assets/images/background.png'
import { Box, Button } from '@mui/material';

const LandingPage = () => {
    const { contacts } = useLoaderData();
    console.log(contacts);
    const navigate = useNavigate();

    return <Layout>
        <img src={bgImage} width="100%" height="100%" alt="landing-page-image" />
        <Box className="landing-page-info">
            <Box component="h2" fontWeight='400'>Welcome to eGwala</Box>
            <Button sx={{
                backgroundImage:'linear-gradient(to top, #ff66b3, #1976d2)',
                color: '#fff',
            }}
            onClick={() => navigate('/login')}
            >Lets start</Button>
        </Box>
    </Layout>
}

export default LandingPage;
