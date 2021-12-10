import React from 'react'
import Canvas from '../Canvas'

function Game(){
    const draw=(ctx)=>{
            ctx.beginPath()
            ctx.fillStyle = '#FF0000'
            ctx.fillRect(0,0,100,60);}

    return (
    <Canvas draw={draw}/>
    )

}
export default Game;