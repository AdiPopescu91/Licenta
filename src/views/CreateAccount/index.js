import React , { useState } from 'react';
import { Link } from 'react-router-dom';
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
} from 'firebase/auth'
import { auth } from '../../config/firebaseConfig';
import {
    Box,
    Button,
    Container,
    Grid,
    TextField,
    Typography
} from '@mui/material';
import {openSnackbar} from "../../components/SnackBar/actions";
import {connect} from "react-redux";
import {useNavigate} from 'react-router-dom';



function CreateAccount(props) {
    const {dispatchOpenSnackbar}=props;
    const [user,setUser] = useState(null);
    const [userCreateObj, setUserCreateObj] = useState({});
    let navigate = useNavigate();

    onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
    });

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
            navigate("/login");
        } catch (errors) {

            dispatchOpenSnackbar('error' , errors.message)
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

const mapDispatchToProps= {
    dispatchOpenSnackbar:openSnackbar
}

export default connect(null, mapDispatchToProps)(CreateAccount)
