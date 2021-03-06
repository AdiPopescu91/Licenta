import React, {useContext} from "react"
import {Outlet, Navigate} from "react-router-dom"
import {UserContext} from "../../components/context/UserContext"
import Navbar from "../../components/Navbar";

function PrivateOutlet() {
    const userContext= useContext(UserContext);


    if(userContext === undefined) {
        return <div>Loading...</div>;

    }

    return (
        <>
            <Navbar/>
            <div style={{height:63}} />
            <main>
            {userContext ? <Outlet/> : <Navigate to="/login" />}
            </main>
        </>
    )
}



export default PrivateOutlet;
