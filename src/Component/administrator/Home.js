import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { Button } from '@mui/material';
// import '../node_module/bootstrap/dist/css/bootstrap.min.css'
// import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useStyles } from './HomePageCss';
import { Grid } from '@material-ui/core';
import { style } from '@mui/system';
import {

  Zoom,
  Fab,
} from "@mui/material";
import { KeyboardArrowUp } from "@mui/icons-material";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { useRef } from 'react';
import { getData, postData, serverURL } from '../../Services/ServerServices';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Footer from './Footer';
import { ClassNames } from '@emotion/react';
import Technoparv from '../../TechnoparvComponent/Technoparv';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import HomePageDrawer from './HomePageDrawer';
import Push from '../pushnotification/Push';

// import firebase from '../../firebase';
// import 'firebase/messaging';

export default function Homepage() {
  // React.useEffect(()=>{
  //   const msgs = firebase.messaging();
  //   if ('Notification' in window && 'serviceWorker' in navigator) {
  //     Notification.requestPermission().then((permission) => {
  //       if (permission === 'granted') {
  //         msgs.getToken().then((currentToken) => {
  //           if (currentToken) {
  //             console.log('Token:', currentToken);
  //           } else {
  //             console.warn('No registration token available.');
  //           }
  //         }).catch((err) => {
  //           console.error('An error occurred while retrieving token.', err);
  //         });
  //       } else {
  //         console.warn('Permission denied.');
  //       }
  //     });
  //   }
  // })

  var admin = JSON.parse(localStorage.getItem('ADMIN'))
  console.log("ADMIN",admin)
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('sm'));


  var navigate = useNavigate()

  // const videoRef = useRef();
  const [sponsor, setSponsor] = useState([])
  const [title, setTitle] = useState([])

  // const handlePlay = () => {
  //   videoRef.current.play()

  // }

  // const fetchSponsorImg = async () => {
  //   var result = await getData('index/showsponsorimg')
  //   // alert(result)
  //   console.log(result.data)
  //   setSponsor(result.data)

  // }
  // const fetchTitle = async () => {
  //   var result = await getData('index/fetchtitle')
  //   // alert(result)
  //   console.log(result.data)
  //   setTitle(result.data)

  // }


  // useEffect(() => {
  //   fetchSponsorImg();
  //   fetchTitle();
  // }, [])
  const handleChk =()=>{
    if(admin)
    {
      navigate('/pay')
    }
    else
    {
      navigate('/regs')
    }
  }
  const handleLogOut =()=>{
    localStorage.clear()
    navigate('/adminlogin')
  }

  const fillImg = () => {
    return sponsor.map((item) => {
      return (<div> <Box ><img title="sponser logo" src={`${serverURL}/images/${item.companylogo}`} width="90rem" className="mx-5" ></img></Box></div>)
    })
  }

  const classes = useStyles()

  const [open,setOpen]=useState(false)

  const handleDrawer=()=>{
    setOpen(true)
  }

 


  return (
    <div>
      
      <div className={"classes.navcolor position-absolute z-4s"} style={{ width:!matches? "90%":"100%",height:!matches? "200px":"150px", }} >

        <Box sx={{ flexGrow: 1,border:'2px solid black' }}>
          <AppBar position="fixed" sx={{ background: "#ff5e57" }}>
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>

              </IconButton>
              <Typography variant="h6" color="inherit" component="div">
                Eventos
              </Typography>
              <Grid xs={6} style={{ display: "flex", justifyContent: "space-evenly", marginLeft: "40%" }}>


                {!matches ? <><a  style={{textDecoration:"none"}}href="/homepage"><span className={classes.headeritem}>Home</span></a>
                  <a style={{ textDecoration: "none" }} href="#aboutevent"><span className={classes.headeritem}>About Us</span></a>
                  <a style={{ textDecoration: "none" }} href="#events"><span className={classes.headeritem}>Events</span></a>
                  <a style={{ textDecoration: "none" }} href="#sponsor"><span className={classes.headeritem}>Sponsor</span></a>
                  <a style={{ textDecoration: "none" }} target={"_blank"} href="gallery"><span className={classes.headeritem}>Gallery</span></a>
                  <a style={{ textDecoration: "none" }} href=""><span className={classes.headeritem}>Register</span></a>
                  <a style={{ textDecoration: "none" }} href=""><span className={classes.headeritem} onClick={handleLogOut}>Logout</span></a>
                  <a style={{ textDecoration: "none" }} href=""><span className={classes.headeritem}>{admin.studentname}</span></a></> : <><MenuIcon onClick={handleDrawer} /></>}



              </Grid>
            </Toolbar>

          </AppBar>
        </Box>
        <div className="position- z-3 text-white  d-flex title justify-content-center">
          <h1 className="title col-12 p-5">
            {/* <b style={{color:'#dfe6e9',}}>Technoparv</b> */}

            <p>coming soon....</p>

          </h1>
        </div>
        <div style={{ display: "flex", justifyContent: "center", marginLeft: "9%", marginTop: !matches ? "7%" : "" }}>
         <Button variant="contained" size={!matches ? "large" : "small"} style={{ wordSpacing: "1%", fontWeight: "bold", background: "#ff5e57",zIndex:2 }} onClick={handleChk}>
            Join Now
          </Button>
        </div>
      </div>

      <div className="position-relative h-auto">
        <svg className="  maincsvg  z-3 position-absolute p-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path id="path" fill=" white" fill-opacity="1"
            d="M0,190L60,202.7C120,213,240,235,360,234.7C480,235,600,213,720,186.7C840,160,960,128,1080,122.7C1200,117,1320,139,1380,149.3L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z">
          </path>
        </svg>
      </div>


      <video autoPlay muted width="100%" loop>
        <source src="./eventvideo.mp4" type="video/webm" />
      </video>


      <div className="col-12  mt-5  d-flex justify-content-center  " id='aboutevent'>
        <h1 className="d-flex ribinbg justify-content-center abouth1color pt-3 " style={{ marginTop: "4%" }} >About Event</h1>
      </div>

      <div className="d-flex flex-row  mb-3 flex-wrap  mt-5">


        <div className="  aboutdiv col-lg-6 mx-4   d-flex justify-content-center align-item-lg-center  ">
          <Link href='./ips.mp4' target="_blank" > <Fab variant="circular" aria-label="add" style={{ background: "#FD8A8A", zIndex: 3, position: "absolute", marginLeft: !matches ? "32%" : "67%", marginTop: !matches ? "8%" : "27%", height: !matches ? "14%" : "8%", width: !matches ? "7%" : "18%" }}>
            <PlayArrowIcon />
          </Fab></Link>


          <Avatar sx={{ width: !matches ? 550 : 360, height: !matches ? 550 : 360 }} src="./aboutbgimg.png" class="img-fluid" />

          <Avatar sx={{ width: !matches ? 480 : 320, height: !matches ? 480 : 320, zIndex: 2, position: "absolute", marginTop: !matches ? 7 : 5 }} src="https://images.unsplash.com/photo-1475721027785-f74eccf877e2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" >
            {/* <video width="100%" height="100%" loop ref={videoRef} >
              <source src="" type="video/webm" />
            </video> */}
          </Avatar>
        </div>
        <div className="col-lg-5 p">
          <h2 className="abouth2">this is the summary of events</h2>
          <p className="aboutp">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, itaque quasi quidem adipisci
            suscipit ab
            ex doloremque tempora facere, vitae odit possimus magnam! Facilis dolorum iste enim suscipit cum!
            Delectus?
          </p>
        </div>
      </div>



      <div id="event">

        <div id="eventcolor">
          <div className="mt-5  d-flex justify-content-center  " id='events'>
            <h1 class="d-flex justify-content-center mt-4 abouth1color  pt-3  ribinbg"> &nbsp;&nbsp;&nbsp; Event's
              &nbsp;
              &nbsp;&nbsp;</h1>
          </div>
          <div className="d-flex flex-row mb-3 flex-wrap  d-flex justify-content-around mt-3">

          <Link to="/Technoparv" style={{textDecoration:'none'}}><div className="d-flex flex-column">
              <img title="event pic" src="https://www.freepnglogos.com/uploads/trophy-png/trophy-award-winner-png-33.png"
                width={!matches ? "180vw" : "140vw"} />
              <p class="d-flex justify-content-center  eventp">Technoparv</p>
            </div>
            </Link>
           <Link to="/vilay" style={{textDecoration:'none'}}> <div className="d-flex flex-column ">
              <img title="event pic"
                src="https://play-lh.googleusercontent.com/XMkNGPrz47-3f59qLv9Vu2anp1GAZb5ae3iPetsMPRlZ-IzjJT3ngVjiQZLGjAuEqA"
                width={!matches ? "180vw" : "140vw"} />
              <p className="d-flex justify-content-center eventp">vilay</p>
            </div></Link>
            <div className="d-flex flex-column ">
              <img title="event pic" src="https://freepngimg.com/save/126131-android-robot-png-download-free/1000x1000"
                width={!matches ? "180vw" : "155vw"} />
              <p className="d-flex justify-content-center eventp">Ibtida</p>
            </div>
            <div className="d-flex flex-column">
              <img title="event pic"
                src="https://www.freepnglogos.com/uploads/robot-png/robot-eset-nod-and-smart-security-lifetime-crack-syed-qasim-12.png"
                width={!matches ? "160vw" : "140vw"} />
              <p className="d-flex justify-content-center eventp">Adiue</p>
            </div>
          </div>
        </div>
      </div>

      <div id="sponsor" className="sponsor">
        <div className="sponsercolor">
          <div id='sponsor'>

            <h1 className="d-flex justify-content-center   mt-5" style={{ fontSize: !matches ? "3.5rem" : "2rem" }} > Event Sponsors</h1>

          </div>


          <div className="d-flex justify-content-evenly col-12 flex-wrap sponserlogo ">

            <div className="d-flex flex-row justify-content-around  flex-wrap  sponsorimg">
              {fillImg()}
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <HomePageDrawer open={open} setOpen={setOpen} />
    </div >

  );

}