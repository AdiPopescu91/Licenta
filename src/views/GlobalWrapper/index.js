import React from 'react'

import { Box, Container, Card } from '@mui/material';

import Navbar from '../../components/Navbar';

/**
 * GlobalWrapper
 */
function GlobalWrapper(props) {
    const { children } = props;
    console.log('children', children);
    console.log('props', props);

    return (
        <Container maxWidth="lg">
            <Box sx={{ flexGrow: 1 }}>
                <Navbar />
                <Card elevation={2} >
                    {children}
                </Card>
            </Box>
        </Container>
    )

}

GlobalWrapper.defaultProps = {
    classes: {},
};

export default GlobalWrapper;