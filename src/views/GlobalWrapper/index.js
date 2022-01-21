import React, {useState} from 'react'
import {onAuthStateChanged} from 'firebase/auth';
import Snackbar from '../../components/SnackBar/index';

import { auth } from '../../config/firebaseConfig';

import { UserContext} from '../../components/context/UserContext'
import {Container, CssBaseline, Grid} from "@mui/material";
import {Outlet} from "react-router-dom";


function GlobalWrapper(props) {
    const { children } = props;
    const [authUser, setAuthUser ] = useState(undefined)


    onAuthStateChanged(auth, (currentUser) => {
        return setAuthUser(currentUser);
    })


    return (

        <Container>
            <Snackbar/>
            <UserContext.Provider value={authUser}>
                {children}
            </UserContext.Provider>
            <Outlet/>
        </Container>

    )

}

export default GlobalWrapper;
