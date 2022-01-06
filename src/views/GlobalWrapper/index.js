import React, {useState} from 'react'
import { useNavigate} from "react-router-dom"
import {onAuthStateChanged} from 'firebase/auth';

import { auth } from '../../config/firebaseConfig';

import { UserContext} from '../../context/UserContext'


function GlobalWrapper(props) {
    const { children } = props;
    const [authUser, setAuthUser ] = useState(undefined)
    const navigate=useNavigate();

    onAuthStateChanged(auth, (currentUser) => {
        return setAuthUser(currentUser);
    })


    return (
        <UserContext.Provider value={authUser}>
            {children}
        </UserContext.Provider>
    )

}

export default GlobalWrapper;
