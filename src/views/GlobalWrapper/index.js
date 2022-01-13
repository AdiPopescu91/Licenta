import React, {useState} from 'react'
import {onAuthStateChanged} from 'firebase/auth';

import { auth } from '../../config/firebaseConfig';

import { UserContext} from '../../context/UserContext'
import {CssBaseline} from "@mui/material";


function GlobalWrapper(props) {
    const { children } = props;
    const [authUser, setAuthUser ] = useState(undefined)

    onAuthStateChanged(auth, (currentUser) => {
        return setAuthUser(currentUser);
    })


    return (
        <UserContext.Provider value={authUser}>
            <CssBaseline />
            {children}
        </UserContext.Provider>
    )

}

export default GlobalWrapper;
