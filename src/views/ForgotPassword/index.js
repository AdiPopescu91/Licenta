
import React, {useState} from 'react'
import {Box, TextField, Button, Typography, Container, Grid, Paper} from '@mui/material';
import {connect} from "react-redux";
import {openSnackbar} from "../../components/SnackBar/actions";

function ForgotPassword(props) {
    const {dispatchOpenSnackbar}=props;
    const [email, setEmail] = useState("");

        const handleSubmitChange = event => {
            setEmail(

                event.target.value
            )
        }

        const handleChange = (type) => (event) => {
        }
        return(
            <Container>
                <Grid container component="main" style={{height: '100%'}}>

                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                        <Box
                            sx={{
                                margin: 10,
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                            }}>
                            <Typography variant="h3">Change your password</Typography>
                                <Box component="form" onSubmit={handleSubmitChange} noValidate sx={{ mt: 1 }}>
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
                                        name="new_password"
                                        label="NewPassword"
                                        type="password"
                                        id="password"
                                        autoComplete="newc-password"
                                        onChange={handleChange('password')}
                                    />
                                    <Button
                                        type="change_password"
                                        fullWidth
                                        variant="contained"
                                        sx={{ mt: 3, mb: 2 }}>
                                        Reset Password
                                    </Button>
                                </Box>
                            </Box>
                    </Grid>
                </Grid>
            </Container>
    );
    }
    const mapStateToProps = state => {
            return {
                ...state.products,
            };
        }

    const mapDispatchToProps= {
            dispatchOpenSnackbar:openSnackbar
        }

    export default connect(mapStateToProps, mapDispatchToProps)(ForgotPassword)