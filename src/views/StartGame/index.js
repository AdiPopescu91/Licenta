import React from 'react'
import {Link} from 'react-router-dom'
import {Container, Grid} from "@mui/material";

function StartGame(){

    return(
        <Container>
            <Grid container>
                <Grid item xs>
                    <Link to="/game" variant="body2">
                       Start game
                    </Link>
                </Grid>
            </Grid>
        </Container>
    )
}
export default StartGame;