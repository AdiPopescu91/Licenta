import React, { useState} from 'react'
import {Box, TextField, Button, Avatar, Typography, Container, FormControlLabel, Grid, Link, Checkbox}  from '@mui/material';

const person = [
    {
        id: 1,
        name: 'Test',
        email: 'test@test.com'
    },
    {
        id: 2,
        name: 'Test2',
        email: 'test2@test.com2'
    }
]
function Login() {
    const [values, setValues] = useState({});
    const [persons, setPersons] = useState(person)
    const [error, setError] = useState({})

    console.log('persons', persons)

    const handleSubmit = () => {
        localStorage.setItem('myCat', 'Tom');
        sessionStorage.setItem('person', 'Jerry')
        alert(localStorage.getItem('myCat'))

    }
    const handleChange = (type) => (event) => {
        const data = {
            ...values,
            [type]: event.target.value

        }
        return setValues(data)
    }

    return (
        <Container component="main" maxWidth="xs">
            <Box
                sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}>
                <Avatar
                    sx={{ m: 1, bgcolor: 'secondary.main',  width: 56, height: 56 }}
                    alt="Remy Sharp"
                    src="/static/images/avatar/2.jpg"
                />
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        onChange={handleChange('email')}
                    />
                    <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        onChange={handleChange('password')}
                    />
                    <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
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
                            <Link href="http://localhost:3000/ForgotPassword" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link href="http://localhost:3000/CreateAccount" variant="body2">
                                Don't have an account? Sign Up
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}
export default Login;