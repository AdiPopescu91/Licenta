import React, { useState} from 'react'
import { useNavigate, Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";

import {
    Box,
    Input,
    TextField,
    Button,
    Typography,
    Container,
    FormControlLabel,
    Grid,
    Checkbox,
} from '@mui/material';
import { makeStyles } from '@mui/styles';

import bgImage from '../../assets/game_of_thrones_53632900.jpg'
import sprite_new from '../../assets/sprite_new.png'

import { auth } from "../../config/firebaseConfig";

const useStyles = makeStyles((theme) => ({
      loginBackground: {
          display: 'flex',
          flex: 'auto',
          background: `#000000 url(${bgImage}) no-repeat center center fixed`,
      },
      footerBox: {
          backgroundColor: 'red',
      },
      labelTextField: {
          color: '#fbe8bf'
      },
      rootTextField: {
          marginTop:16,
          padding: 16,
          '&.MuiOutlinedInput-root': {
              background: '#33444C',
              border: '2px solid #697DA6',
              color: 'white',
          }
      },
      loginButton: {
        '&.MuiButton-root': {
          marginTop: 20,
          width: 270,
          height: 70,
          lineHeight: 70,
          color: '#fdf8d8',
          background: `url(${sprite_new}) no-repeat -8px -384px`,
        }

      }
  }
));


function Login() {
    const navigate = useNavigate();
    const classes = useStyles();
    const [ loginObj, setLoginObj ] = useState({});

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


    return (
      <div className={classes.loginBackground}>
        <Container maxWidth="lg">
            <Box sx={{
              margin: 10,
              marginLeft: 'auto',
              maxWidth: 330,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center'
            }}>
                <Typography variant="h4">Login</Typography>
                <Typography className={classes.labelTextField}>
                    Sign to Maze
                </Typography>
              <TextField
                required
                id="outlined-required"
                label="Required"
                defaultValue="Hello World"
                className={classes.rootTextField}
              />
                <TextField
                  required
                  id="email"
                  name="email"
                  type="text"
                  fullWidth

                  autoComplete="current-password"
                  onChange={handleLoginChange('email')}
                  classes={{
                      root: classes.rootTextField
                  }}

                />
                    <Typography className={classes.labelTextField} variant="caption" >
                        Please enter a valid e-mail address
                    </Typography>

                <TextField
                    required
                    fullWidth
                    name="password"
                    type="password"
                    id="password"
                    classes={{
                        root: classes.rootTextField
                    }}
                    autoComplete="current-password"
                    onChange={handleLoginChange('password')}
                />
                <Typography className={classes.labelTextField}>
                    Please input your password
                </Typography>
                <Button onClick={handleLoginClick} classes={{root: classes.loginButton}}>Login</Button>
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
            <Box className={classes.footerBox}>

            </Box>
        </Container>
      </div>
    )
}
export default Login;
