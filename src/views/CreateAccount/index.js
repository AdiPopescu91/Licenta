import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Typography
} from '@mui/material';

function CreateAccount() {
    const [user, setUserData] = useState({});
    const handleSubmit = other=> {
        localStorage.setItem('user',JSON.stringify({
            email:other.target.email.value
        }));
        other.preventDefault();


        console.log('AUTH', user)

    }
    const handleChange = type => event => {
        setUserData({
            ...user,
            [type]: event.target.value,
        })
    }
    return(
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Typography component="h1" variant="h5">
                    Create Account
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="user_name"
                        label="User name"
                        name="user_name"
                        autoComplete="user_name"
                        autoFocus
                        onChange={handleChange('user_name')}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="fist_name"
                        label="First name"
                        name="first_name"
                        autoComplete="first_name"
                        autoFocus
                        onChange={handleChange('first_name')}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="new-password"
                        onChange={handleChange('password')}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="confirm_password"
                        label="Confirm Password"
                        type="password"
                        id="confirm_password"
                        autoComplete="new-password"
                        onChange={handleChange('confirm_password')}
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link to="/login">
                                Already have account!
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default CreateAccount;