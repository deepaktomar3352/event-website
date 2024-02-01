import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Grid, Paper } from '@mui/material';
import { style, width } from '@mui/system';
import { margin } from '@mui/icons-material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CategoryIcon from '@mui/icons-material/Category';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import LogoutIcon from '@mui/icons-material/Logout';
import { Routes, Route, useNavigate } from 'react-router-dom';
// import Product from './Product';
import Sponsor from './Sponsor';
import DisplayAllSponsor from './DisplayAllSponsor';
import HomeTitle from './HomeTitle';

export default function Dashboard() {

    var navigate = useNavigate()
    const handleLogout=()=>{
        localStorage.clear()
        navigate('/adminlogin')
    }

    return (

        <div>
            <div>
            <Box sx={{ flexGrow:2,marginTop:"-3.2%"}}>
                <AppBar position="static" sx={{ background: "black" }}>
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" color="inherit" component="div">
                            Evanto
                        </Typography>
                    </Toolbar>
                </AppBar>
            </Box>
            </div>

            <Grid container>
                <Grid item xs={2}>
                    <div style={{ margin: 30 }}><Avatar alt="Remy Sharp" variant="rounded" src={"/assets/evento.png"} sx={{ width: "120%" }} /></div>
                    <Paper style={{ width: 180, height: 70, margin: 20, background: "EEEEEE" }} elevation={2}>
                        <div style={{ display: "flex", justifyContent: "space-evenly", alignItems: "center", paddingTop: 18, fontFamily: "poppins", fontWeight: "bold" }}>
                            <Avatar alt="Remy Sharp" variant="rounded" src={"https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-Vector-No-Background.png"} sx={{ height: 45 }} />
                            <span >Rohit tomar</span>
                        </div>
                    </Paper>
                    <div>
                        <List>
                            <ListItem disablePadding>
                                <ListItemButton
                                    onClick={() => navigate("/Dashboard/HomeTitle")}
                                >


                                    <ListItemIcon>

                                        <CategoryIcon />
                                    </ListItemIcon>
                                    <ListItemText primary={<span style={{ fontFamily: "poppins", fontWeight: 700, letterSpacing: 1 }}>Title</span>} />
                                </ListItemButton>
                            </ListItem>


                            <ListItem disablePadding>
                                <ListItemButton
                                    onClick={() => navigate("/Dashboard/DisplayAllSponsor")}
                                >
                                    <ListItemIcon>
                                        <AddShoppingCartIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Sponsor" />
                                </ListItemButton>
                            </ListItem>


                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <AddPhotoAlternateIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Add Pictures" />
                                </ListItemButton>
                            </ListItem>

                            <ListItem disablePadding>
                                <ListItemButton>
                                    <ListItemIcon>
                                        <LogoutIcon />
                                    </ListItemIcon>
                                    <ListItemText primary="Logout" onClick={handleLogout} />
                                </ListItemButton>
                            </ListItem>


                        </List>
                    </div>

                </Grid>
                <Grid item xs={10}>
                    <Routes>
                        {/* <Route element={< DisplayAllCategories />} path={"/DisplayAllCategories"}></Route> */}
                    </Routes>
                    <Routes>
                        <Route element={<DisplayAllSponsor />} path={"/DisplayAllSponsor"}></Route>
                        <Route element={<Sponsor />} path={"/sponsor"}></Route>
                        <Route element={<HomeTitle />} path={"/hometitle"}></Route>
                    </Routes>
                </Grid>
            </Grid>
        </div>
    );
}

