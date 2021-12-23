import React, {useContext, useEffect, useState} from 'react'
import Canvas from '../Canvas'
import {Container} from "@material-ui/core";
import {UserContext} from'../../context/UserContext';
import brick20 from '../../assets/brick20.jpg'
import road20 from "../../assets/road20.jpg"
import KeyEvents from './KeyEvents'
function Game(){

    const[playerXY,setPlayerXY] =useState({
            x: 0,
            y: 0,
        }
    )

    const usePlayer=useContext(UserContext)

                 let brick=new Image();
                 brick.src=brick20
            let road=new Image();
            road.src=road20

    const draw=(ctx)=> {
        ctx.beginPath()
       ctx.drawImage(road,0, 0, 100, 60)
        let m = [[0, 1, 0, 0, 2],
            [0, 1, 1, 0, 0],
            [0, 0, 0, 0, 0],]
        for (let i = 0; i < m.length; i++)
            for (let j = 0; j < m[i].length; j++) {
                if (m[i][j] === 1) {
                    ctx.beginPath();
                    ctx.drawImage(brick,j * 20, i * 20, 20, 20)
                }
                if(m[i][j] === 2)
                {
                    ctx.beginPath();
                    ctx.fillStyle = "#24e011";
                    ctx.fillRect(j * 20, i * 20, 20, 20);
                }
            }
        drawPlayer(playerXY.x,playerXY.y);
        function drawPlayer(x,y) {
            ctx.beginPath();
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(x,y, 20, 20);
            console.log(x,y);
        }
    }
function handleCoordonateChange(params){
            setPlayerXY({
                ...playerXY,
                ...params,
            })
    }

console.log(playerXY)
    return (
        <Container>
            <KeyEvents onPositionChange={handleCoordonateChange} position={playerXY}/>
            <Canvas draw={draw}/>

        </Container>

    )

}
export default Game;