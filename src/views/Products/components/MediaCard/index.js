import React ,{useState} from 'react';
import { Link } from'react-router-dom';

import { makeStyles } from '@mui/styles';
import {
    Card,
    CardMedia,
    CardActions,
    CardContent,
    Button,
    Typography,
} from '@mui/material'


const useStyles = makeStyles({
    mediaCard: {
        maxWidth: 345,
        minWidth: 200,
        margin: 10,
    }
})

export default function MediaCard(props) {

    const classes = useStyles();
    const { post, to } = props;
    const { body, id, title } = post;
    return (
        <Card className={classes.mediaCard}>
            <CardMedia
                component="img"
                height="140"
                image={""}
                alt={""}
            />
            <CardContent>
                <Typography gutterBottom variant="body2" component="div">
                    {title}
                </Typography>
                <Typography gutterBottom variant="h3" component="div">
                    {Math.random(900).toFixed(2)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {body}
                </Typography>
            </CardContent>
            <CardActions>
                <Button
                    to={`/products/${id}`}
                    component={Link}
                    variant="outlined"
                    color="primary"
                >Learn More</Button>
            </CardActions>
        </Card>
    );
}