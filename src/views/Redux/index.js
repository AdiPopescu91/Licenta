import React, {useEffect} from 'react'
import { connect } from 'react-redux';

import {createName} from './actions'
import {TextField} from "@mui/material";

function Redux(props) {

useEffect(()=>{
   props.dispatchCreateName("Adi")

    },[]
)
    const handleNameChange = (event) =>{
    props.dispatchCreateName(event.target.value)
    }
    return (
        <div>
            Hello REDUX!!
            <TextField
                margin="normal"
                required
                fullWidth
                name="name"
                onChange={handleNameChange}

            />
            <button onClick={createName}>Reset</button>
        </div>
    )
    }


const mapStateToProps = state => {

    return {
        counter: state.counter
    }
}
const mapDispatchToProps = {
   dispatchCreateName: createName
    }
export default connect(mapStateToProps , mapDispatchToProps)(Redux);