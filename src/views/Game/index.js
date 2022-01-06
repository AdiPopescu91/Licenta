import React, {useEffect, useState} from 'react'
import Canvas from '../Canvas'
import { Container} from "@material-ui/core";

import brick20 from '../../assets/brick20.jpg'
import road20 from "../../assets/road20.jpg"
import KeyEvents from './KeyEvents'
import {Link} from 'react-router-dom'
import {Grid} from "@mui/material";


const INITIAL_STATE_GAME={
    x: 0,
    y: 0,
    score:0,
    win:false
}
const CANVAS_DIMENSION = {
    width: 800,
    height: 420,
}

const IMAGES  = {
    brick20 : {
        url: brick20,
        loaded: false
    },
    road20: {
        url: road20,
        loaded: false

    },
}

function Game(message){

    const [loadedImages, setLoadedImages] = useState(0);
    useEffect(() => {

        Object.keys(IMAGES).map((key) => {
            IMAGES[key].image = new Image();
            IMAGES[key].image.onload = () => {
                setLoadedImages(loadedImages + 1)
            };
            IMAGES[key].image.src = IMAGES[key].url
        })

    }, [])

    const [ playerXY,setPlayerXY ] = useState(
        INITIAL_STATE_GAME
    )
    let map = [
        [0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 2],
        [0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0],
        [0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 0, 1, 1, 0, 0],
        [0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 0, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0],
        [2, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 0],
        [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 1, 0, 0, 1, 0, 1, 1, 1, 0, 0, 1, 0, 1, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 1, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],
        [0, 1, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0],

    ]


    const checkStep = step => {
        const {x, y} = step;
        const isInCanvas= (x>=0 && x<=CANVAS_DIMENSION.width) && (y>=0 && y<= CANVAS_DIMENSION.height);
        const yCoordonate=y/20;
        const xCoordonate=x/20;

        if(isInCanvas && yCoordonate <=CANVAS_DIMENSION.height/20-1 &&xCoordonate <=CANVAS_DIMENSION.width/20-1 && (map[y/20][x/20] === 0 || map[y/20][x/20]===2)) {
            setPlayerXY({
                ...step,
                score:playerXY.score+1,
            })
        if(map[y/20][x/20]===2){
            setPlayerXY({
               win:false,

            })
            alert (playerXY.score);
            console.log("score:",playerXY.score);
        }
        }
        return null
    }


    const draw=(ctx)=> {
       ctx.beginPath()
       ctx.drawImage(IMAGES.road20.image,0, 0, CANVAS_DIMENSION.width, CANVAS_DIMENSION.height)

        for (let i = 0; i < map.length; i++)
            for (let j = 0; j < map[i].length; j++) {
                if (map[i][j] === 1) {
                    ctx.beginPath();
                    ctx.drawImage(IMAGES.brick20.image, j * 20, i * 20, 20, 20)
                }
                if(map[i][j] === 2)
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

        switch (keyCode ) {
            case 40:

                checkStep({...playerXY, y: playerXY.y + 20})

                break;
            case 38:

                checkStep({...playerXY, y: playerXY.y - 20})
                break;
            case 37:
                checkStep({...playerXY,   x: playerXY.x - 20})

                break;
            case 39:
                checkStep({...playerXY,   x: playerXY.x + 20})
                break;
            default :
                break;
        }
    }

    if(loadedImages < Object.keys(IMAGES).length -1) {
        return <div>Loading ...</div>
    }
    function refreshPage(){
       setPlayerXY(INITIAL_STATE_GAME);
    }
    return (
        <Container>
            <KeyEvents setPressedKeys={handleKeyPress}/>
            <Grid container>
                <Grid item xs>
                    <button type="button" onClick={ refreshPage }> <span>Restart Game</span> </button>
                </Grid>
            </Grid>
            <Canvas draw={draw} width={CANVAS_DIMENSION.width} height={CANVAS_DIMENSION.height}/>
            <div>
            <Link to="/start-game" variant="body2">
                MAIN MENU
            </Link>
                </div>
            <div>
                score: {playerXY.score}
            </div>
        </Container>

    )

}
export default Game;
