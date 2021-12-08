import React from 'react'
import {
    Container,
    Box,
    Typography
} from '@mui/material';


/**
 * Homepage
 */
function NotFound() {
    return (
        <Container component="main" maxWidth="sm">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Typography variant="h2">404. Not Found!</Typography>
            </Box>
        </Container>
    )
}



export default NotFound;