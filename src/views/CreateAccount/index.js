import React from 'react'
import {
    Container,
    Box,
    Typography
} from '@mui/material';

function CreateAccount() {
    return (
        <Container component="main" maxWidth="sm">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Typography variant="h2">CREATE YOUR ACCOUNT!</Typography>
            </Box>
        </Container>
    )
}



export default CreateAccount;