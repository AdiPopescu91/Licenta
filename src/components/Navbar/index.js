
import React,{useContext,useState} from 'react';
import { makeStyles } from '@mui/styles';
import {UserContext} from '../context/UserContext';
import {Link, NavLink} from 'react-router-dom';
import {signOut} from 'firebase/auth';
import { auth } from '../../config/firebaseConfig';
import T1 from "../../assets/T1.png"

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
import {Menu, MenuItem} from "@material-ui/core";


const useStyles = makeStyles({
    active: {
        backgroundColor: 'whitesmoke',
    },
    toolbar: {
        position:"fixed",
        flexDirection: "row",
        width: '100%',
        height: 56,
        display: "inline",
    },
    appBar: {
        height: 60,
    },
    list: {
        listStyle: "none",
        marginLeft: 'auto',
        display: "flex",
        gap: "30px"
    },
    drawersipe: {
        swipeAreaWidth: 1000
    },
    searchBar: {
        align: "center",
        display: 'flex',
        flex: 'auto',
        marginLeft: 0,
    }
})



const handleLogout = () => {
    signOut(auth);
}


function Navbar() {
    const userContext  = useContext(UserContext);
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [ open , setOpen] = useState(false);
    const isMenuOpen = Boolean(anchorEl);

    const handleMenuClose = () => {
        setAnchorEl(null);
    };
    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            id={menuId}
            keepMounted
            transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
            }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>

            <MenuItem onClick={handleMenuClose} onClick={handleLogout}>
                Sign Out
            </MenuItem>
        </Menu>
    );


    return (<>
    <AppBar variant="elevation" elevation={2}>
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
                    <IconButton component={Link} to="/">
                        <Typography align='center' variant='inline' component="div" sx={{ margin: 5 }}  >
                            <img src={T1} width="100" height="50" alt=""/>
                        </Typography>
                    </IconButton>
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                </Box>
                <Box sx={{ flexGrow: 0 }}>
                    <Tooltip title="Open settings">
                        <IconButton onClick={handleProfileMenuOpen} sx={{ p: 0 }}>
                            <Tooltip title={userContext?.email || ''}>
                                <Avatar/>
                            </Tooltip>
                        </IconButton>
                    </Tooltip>
                </Box>
            </Toolbar>
        </Container>
    </AppBar>
     {renderMenu}
    </>
    )
}
export default Navbar;