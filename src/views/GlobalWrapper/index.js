import React from 'react'

import { Box, Container } from '@mui/material';

import Navbar from '../../components/Navbar';
import Homepage from "../Homepage";
import Login from "../Login";

function GlobalWrapper(props) {
    const { children } = props;
    console.log('children', children);
    console.log('props', props);

    return (
        <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1 }}>
                <Navbar />
                {children}
                <Homepage />
                <Login />
            </Box>
        </Container>
    )

}

GlobalWrapper.defaultProps = {
    classes: {},
};

export default GlobalWrapper;