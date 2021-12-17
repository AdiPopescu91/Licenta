import React,{useContext} from 'react'
import Canvas from '../Canvas'
import {Container} from "@material-ui/core";
import {UserContext} from'../../context/UserContext';
function Game(){
    const usePlayer=useContext(UserContext)
    console.log(usePlayer);
         const userEmail=usePlayer?.email;
         const {email}=usePlayer || {};
         console.log(userEmail,email);
    const draw=(ctx)=>{
            ctx.beginPath()
            ctx.fillStyle = '#FF0000'
            ctx.fillRect(0,0,100,60);}



    return (
        <Container>
            <Canvas draw={draw}/>
            {email}
        </Container>

    )

}
export default Game;