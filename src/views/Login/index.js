import React, { useState} from 'react'
import { useNavigate } from "react-router-dom"
import {
    Box,
    TextField,
    Button,
    Avatar,
    Typography,
    Container,
    FormControlLabel,
    Grid,
    Checkbox,
    Divider
} from '@mui/material';
import {Link} from 'react-router-dom'
import {createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";
import {auth} from "../../config/firebaseConfig";


function Login() {
    const [user, setUser] = useState(null);
    const navigate=useNavigate();
    const [loginObj, setLoginObj] = useState({});
    const [userCreateObj, setUserCreateObj] = useState({});

    const handleLoginChange = type => event => {
        setLoginObj({
            ...loginObj,
            [type]: event.target.value
        })
    }
    const handleLoginClick = async () => {
        const { email, password } = loginObj;
        try {
             await signInWithEmailAndPassword(auth, email, password)
            navigate("../game", { replace: true });

        } catch (errors) {
            alert(errors.message);
        }
    }

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const handleLogout = () => {
        signOut(auth);
    }

    return (
        <Container maxWidth="lg">
            <Box sx={{ margin: 10 }}>

                <Typography>{}</Typography>
            </Box>

            <Box sx={{ margin: 10 }}>
                <Typography variant="h4">Login</Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={handleLoginChange('email')}
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
                    onChange={handleLoginChange('password')}
                />
                <Button onClick={handleLoginClick}>Login</Button>
            </Box>
            <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
        />
            <Grid container>
                <Grid item xs>
                    <Link to="/forgot-password" variant="body2">
                        Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link to="/create-account" variant="body2">
                        Don't have an account? Sign Up
                    </Link>
                </Grid>
            </Grid>
            <Divider />
            <Box sx={{ margin: 10 }}>
                Auth user: {user?.email}

                <Button onClick={handleLogout}>
                    Log out
                </Button>
            </Box>

        </Container>
    )
}
export default Login;
