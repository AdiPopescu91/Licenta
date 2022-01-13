import React, {useEffect, useState} from 'react'
import Canvas from '../Canvas'
import { Container} from "@material-ui/core";
import { makeStyles } from '@mui/styles';

import brick20 from '../../assets/brick20.jpg'
import road20 from "../../assets/road20.jpg"
import tree from "../../assets/tree.png"
import p1v1 from"../../assets/p1v1.png"
import T2 from"../../assets/T2.png"
import BackgroundGame from"../../assets/BackgroundGame.png"
import KeyEvents from './KeyEvents'
import {Link} from 'react-router-dom'
import {Box, Button, Grid} from "@mui/material";
import { connect } from 'react-redux';
import {setLoadedImagesCount} from './actions';


const useStyles = makeStyles((theme) => ({
        gameBackground: {
            display: 'flex',
            flex: 'auto',
            background: `#000000 url(${BackgroundGame}) no-repeat center center fixed`,
        },
        mainMenuButton: {
            '&.MuiButton-root': {
                background: '#437af0',
                backgroundImage: 'linear-gradient(to bottom, #437af0, #313f7d)',
                bordeRadius: '10',
                textShadow: '1px 1px 1px #736173',
                color: '#f3f2f7',

                padding: '10 13 10 13',
                textDecoration: 'none',
            },
            "&:hover": {
                background: '#010b12',
                textDecoration: 'none',
            },
        },

        restartButton: {
            '&.MuiButton-root': {
                background: '#437af0',
                backgroundImage: 'linear-gradient(to bottom, #437af0, #313f7d)',
                  borderRadius: 10,
                  textShadow: '1 1 1 #736173',
                  color: '#f3f2f7',
                  padding: '10 13 10 13',
                  textDecoration: 'none',},
                "&:hover": {
                    background: '#010b12',
                    textDecoration: 'none',
            }
        },
    }
));



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
        // TODO add width height
        width: 20,
        height: 20,
    },
    road20: {
        url: road20,
    },
    tree : {
        url: tree,
    },
    character1: {
        url: p1v1,
        width: 20,
        height: 20,
    },
    throne1: {
        url: T2,
    },

}

function Game(props){
    const classes = useStyles();
    const { loadedImages, dispatchSetLoadedImagesCount } = props;

    console.log(props);

    useEffect(() => {

        Object.keys(IMAGES).map((key) => {
            IMAGES[key].image = new Image();
            IMAGES[key].image.onload = (event) => {
                dispatchSetLoadedImagesCount()
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
               win:true,

            })
            alert (playerXY.score);
            console.log("score:",playerXY.score);
        }
        }
        return null
    }


    const draw=(ctx)=> {
        ctx.beginPath()
       //  console.log(IMAGES.tree.image);

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
                    ctx.drawImage(IMAGES. throne1.image,j*20,i*20,20,20);
                }
            }
            const drawPlayer = (x,y) => {
                ctx.beginPath();
                ctx.drawImage(IMAGES. character1.image,x,y,20,20)
                ctx.drawImage(IMAGES.tree.image,0,0, 600, 400)
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

    if(loadedImages < Object.keys(IMAGES).length) {
        return <div>Loading ...</div>
    }
    function refreshPage(){
       setPlayerXY(INITIAL_STATE_GAME);
    }
    return (

        <Container className={classes.gameBackground}>
            <Box
            sx={{
                display: 'flex',
                flexDirection:'column',
                alignItems:'center'
            }}>
            <KeyEvents setPressedKeys={handleKeyPress}/>
            <Grid container>
                <Grid item xs>
                    <Button type="button" onClick={ refreshPage } classes={{root: classes.restartButton}}> Restart Game </Button>
                </Grid>
            </Grid>
            <Canvas draw={draw} width={CANVAS_DIMENSION.width} height={CANVAS_DIMENSION.height}/>
            <div>
                <Button to="/start-game"  component={Link} classes={{root: classes.restartButton}}>
                   Main Menu
                </Button>
                </div>

            </Box>
        </Container>

    )

}


const mapStateToProps = state => {
    return {
        ...state.loadedImagesCount
    }
}
const mapDispatchToProps = {
    dispatchSetLoadedImagesCount: setLoadedImagesCount
}
export default connect(mapStateToProps , mapDispatchToProps)(Game);
