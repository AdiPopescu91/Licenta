import React, {useState} from 'react'
import {onAuthStateChanged} from 'firebase/auth';

import { auth } from '../../config/firebaseConfig';

import { UserContext} from '../../context/UserContext'


function GlobalWrapper(props) {
    const { children } = props;
    const [authUser, setAuthUser ] = useState(null)
    onAuthStateChanged(auth, (currentUser) => {
        return setAuthUser(currentUser);
    })

    console.log('GlobalWrapper');

    return (
        <>
                <UserContext.Provider value={authUser}>
                    {children}
                </UserContext.Provider>
        </>
    )

}

export default GlobalWrapper;
