import React from 'react'
import { useLoaderData } from "react-router-dom";
import Layout from '../Layout';
import bgImage from './../../assets/images/background.png'
import { Box, Button } from '@mui/material';

const LandingPage = () => {
    const { contacts } = useLoaderData();
    console.log(contacts);

    return <Layout>
        <img src={bgImage} width="100%" height="100%" alt="landing-page-image" />
        <Box className="landing-page-info">
            <Box component="h2" fontWeight='400'>Welcome to eGwala</Box>
            <Button color='primary' variant='outlined'>Lets start</Button>
        </Box>
    </Layout>
}

export default LandingPage;
