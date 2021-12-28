import React, { useRef } from 'react'

import { Container } from '@mui/material'


function Homepage() {

    const inputRef = useRef(null);
    const divRef = useRef(null);

    const handleChange = () => {
        console.log('eveniment', inputRef);
    }

    const onButtonClick = () => {
        inputRef.current.focus();
        console.log('input', inputRef.current.getBoundingClientRect());
        console.log('div' ,divRef.current.getBoundingClientRect());
        divRef.current.style.backgroundColor = 'blue';
    }

    return (
        <Container>
            <div>
                <div>
                    <div ref={divRef} style={{backgroundColor: 'red', width: 100, height: 100}}/>
                </div>
            </div>



            <input type="text" ref={inputRef} className="asdsadsa" onChange={handleChange}/>
            <button onClick={onButtonClick}>FOCUS</button>
        </Container>
    )


}



export default Homepage;
