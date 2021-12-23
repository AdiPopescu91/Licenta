import React, {useEffect} from 'react'
import { connect } from 'react-redux';
import {createEmail} from "./actions"

import {TextField} from "@mui/material";

function ReduxTest(props) {

    useEffect(()=>{
            props.dispatchCreateEmail("blabla@yahoo.com")

        },[]
    )
    const handleEmailChange = (event) =>{
        props.dispatchCreateEmail(event.target.value)
    }
    return (
        <div>
            Hello REDUX!!
            <TextField
                margin="normal"
                required
                fullWidth
                name="name"
                onChange={handleEmailChange}

            />
            <button onClick={createEmail}>Reset</button>
        </div>
    )
}


const mapStateToProps = state => {
console.log('ReduxTest',state)
    return {
        create: state.create
    }
}
const mapDispatchToProps = {
    dispatchCreateEmail: createEmail
}
export default connect(mapStateToProps , mapDispatchToProps)(ReduxTest);