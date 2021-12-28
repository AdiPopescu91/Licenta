import React, { useEffect, useState } from 'react'
import Canvas from '../Canvas'
import { Container } from "@material-ui/core";

import brick20 from '../../assets/brick20.jpg'
import road20 from "../../assets/road20.jpg"
import KeyEvents from './KeyEvents'

const CANVAS_DIMENSION = {
    width: 800,
    height: 600,
}

function Game(){
    const [ playerXY,setPlayerXY ] = useState({
            x: 0,
            y: 0,
        }
    )



    let brick = new Image();
    brick.src = brick20
    let road = new Image();
    road.src = road20;


    const draw=(ctx)=> {
       ctx.beginPath()
       ctx.drawImage(road,0, 0, CANVAS_DIMENSION.width, CANVAS_DIMENSION.height)
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
            const drawPlayer = (x,y) => {
                ctx.beginPath();
                ctx.fillStyle = "#FF0000";
                ctx.fillRect(x,y, 20, 20);
            }
        drawPlayer(playerXY.x,playerXY.y);
    }
    const handleKeyPress = (keyCode) => {
        switch (keyCode) {
            case 40:
                setPlayerXY({
                    ...playerXY,
                    y: playerXY.y + 20,
                })
                break;
            case 38:
                debugger
                setPlayerXY({
                    ...playerXY,
                    y: playerXY.y - 20,
                })
                break;
            case 37:
                setPlayerXY({
                    ...playerXY,
                    x: playerXY.x - 20,
                })
                break;
            case 39:
                setPlayerXY({
                    ...playerXY,
                    x: playerXY.x + 20,
                })
                break;
            default:
                break;
        }
    }
    return (
        <Container>
            <KeyEvents setPressedKeys={handleKeyPress}/>
            <Canvas draw={draw} width={CANVAS_DIMENSION.width} height={CANVAS_DIMENSION.height}/>
        </Container>

    )

}
export default Game;
