import React from 'react';
import { makeStyles } from '@mui/styles';
import { Link } from "react-router-dom";

import {
    Container,
    Toolbar,
    AppBar,
    Typography,
    Box,
    IconButton,
    Tooltip,
    Avatar,
} from '@mui/material'


const useStyles = makeStyles({})

function Navbar() {
    useStyles();
    const handleOpenUserMenu = () => {}

    return <AppBar variant="elevation" elevation={2}>
        <Container maxWidth="xl">
            <Toolbar disableGutters  >
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >
                    MazeGame
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>

                </Box>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                >
                    MazeGame
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                            <Avatar alt="Adi" src="/static/images/avatar/2.jpg" />
                        </IconButton>
                    </Tooltip>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
}
export default Navbar;