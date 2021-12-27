import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signOut,
    signInWithEmailAndPassword,
    sendPasswordResetEmail
} from 'firebase/auth'
import { auth } from '../../Config/FirebaseConfig';
import {
    Box,
    Button,
    Container, Divider,
    Grid,
    TextField,
    Typography
} from '@mui/material';



function CreateAccount() {
    const [user, setUser] = useState(null);
    const [loginObj, setLoginObj] = useState({});
    const [userCreateObj, setUserCreateObj] = useState({});

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

    const handleLogout = () => {
        signOut(auth);
    }

    const handleCreateChange = type => event => {
        setUserCreateObj({
            ...userCreateObj,
            [type]: event.target.value
        })

    }
    const handleCreateClick = async () => {

        const { email, password } = userCreateObj;
        try {
            const createdUser =  await createUserWithEmailAndPassword(auth, email, password)
            console.log(createdUser);
        } catch (errors) {

            console.log(errors.message);

        }
    }

    return(
        <Container maxWidth="lg">
            <Box sx={{ margin: 10 }}>
                <Typography variant="h4">Create Account</Typography>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                    onChange={handleCreateChange('email')}
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
                    onChange={handleCreateChange('password')}
                />
                <Button onClick={handleCreateClick}>Create account</Button>
                <Typography>{}</Typography>
            </Box> <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}>
            <Grid container>

                <Grid item xs>
                    <Link to="/login">
                        Already have account!
                    </Link>
                </Grid>
            </Grid>
        </Box>

        </Container>
    )
}

export default CreateAccount;