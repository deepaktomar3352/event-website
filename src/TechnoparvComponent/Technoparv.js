import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { React, createRef } from "react";
import Slider from "react-slick";
import { getData, postData, serverURL } from '../Services/ServerServices';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Avatar, Grid, Paper } from '@mui/material';
import { TechnoparvCss } from './TechnoparvCss';
// import Footer from '../Component/administrator/Footer';
import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import ScheduleSection from './ScheduleSection';
// import TechnoparvDay01 from './TechnoparvDay01';
import TechnoparvDay02 from './TechnoparvDay02';
import TechnoparvDay03 from './TechnoparvDay03';
import TechnoparvDay04 from './TechnoparvDay04';
import EventCard from './EventCard';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';





export default function Technoparv() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));



    var classes = TechnoparvCss()
    const [btnStatus, setBtnStatus] = useState(false)
    const [image, setImage] = useState([])
    // ******************USED FOR Slider*****************************************
    var settings = {
        dots: true,
        infinite: true,
        speed: 700,
        slidesToShow: 1,
        autoplay: true,
        autoplaySpeed: 2200,
        slidesToScroll: 1,
        focusOnSelect: true
    };
    // *******************************************************************************


    // *********************************************USED FOR GALLERY**************************************
    var gallery = {
        // dots: true,
        infinite: true,
        speed: 2000,
        slidesToShow: !matches ? 5 : 3,
        autoplay: true,
        autoplaySpeed: 200,
        slidesToScroll: 1,
        focusOnSelect: true
    };
    // **************************************************************************************************



    var slider = createRef()
    function handlePrevImg() {
        slider.current.slickPrev()
    }

    function handleNextImg() {
        slider.current.slickNext()
    }

    const fetchCarouselImg = async () => {
        var result = await getData('gallery/fetchTechnoparvCarouselImg')
        // alert(result)
        console.log(result.data)
        setImage(result.data)

    }


    //    ****************************USED FOR PLAY IMG ON SLIDER******************************

    var images = ["s3.jpg", "s5.jpg", "s6.jpg", "s7.jpg", "s8.jpg", "s1.png", "s4.png", "b1.jpg", "b2.jpg", "b3.jpg", "b4.jpg"]
    function playImg() {
        return image.map((item) => {

            return (<div ><img alt={"image"} src={`${serverURL}/uploaded/${item.slidepicl}`} style={{ width: "100%", height: !matches ? "90vh" : "50vh" }}></img></div>)
        })
    }

    function play() {
        return images.map((item) => {

            return (<a href='/'><div ><img alt={"image"} src={`${serverURL}/images/${item}`} style={{ width: "95%", height: !matches ? "40vh" : "25vh" }}></img></div></a>)
        })
    }
    // *******************************************************************************


    useEffect(function () {

        fetchCarouselImg();

    }, [])






    return (
        <div style={{ overflow: "hidden" }}>
            <Box sx={{ flexGrow: 1, }} id="technoparv">
                <AppBar position="fixed" sx={{ background: "#ff5e57" }}>
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>

                        </IconButton>
                        <Typography variant="h6" color="inherit" component="div">
                            Technoparv
                        </Typography>
                        {!matches ? <><Grid item xs={12} style={{ display: "flex", justifyContent: "space-evenly", marginLeft: "48%" }}>
                            <a style={{ textDecoration: "none" }} href="#aboutevent"><span className={classes.headeritem}>About Event</span></a>
                            <a style={{ textDecoration: "none" }} href="#events"><span className={classes.headeritem}>Events</span></a>
                            <a style={{ textDecoration: "none" }} href="#schedule"><span className={classes.headeritem}>Schedule</span></a>
                            <a style={{ textDecoration: "none" }} href="#gallery"><span className={classes.headeritem}>Gallery</span></a>
                            <a style={{ textDecoration: "none" }} href="/"><span className={classes.headeritem}>Contacts</span></a>
                        </Grid></> : <></>}

                    </Toolbar>


                </AppBar>
            </Box>
            <div>
                <div style={{ width: "100%", position: "relative" }} >
                    {!matches ? <><ArrowBackIosNewIcon onClick={handlePrevImg} style={{ color: 'white', fontSize: 35, zIndex: 1, marginTop: "18%", marginLeft: "6%", position: "absolute" }} /></> : <></>}

                    <Slider ref={slider} {...settings}>
                        {playImg()}
                    </Slider>
                    {!matches ? <><ArrowForwardIosIcon onClick={handleNextImg} style={{ color: 'white', fontSize: 35, zIndex: 2, marginLeft: "86%", marginTop: "-25%", position: "absolute" }} /></> : <></>}

                </div>
                <div id='aboutevent'></div>
                <div className={classes.ribinbg}>
                    <h1 className="d-flex ribinbg justify-content-center mt-4 abouth1color pt-3 " >About Event</h1>
                </div>

                <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", marginTop: "3%" }}>
                    <div className="  aboutdiv aboutimgbg col-lg-6 mx-5   d-flex justify-content-center align-item-lg-center  ">

                        <Avatar sx={{ width: !matches ? 550 : 360, height: !matches ? 550 : 360 }} src="./aboutbgimg.png" class="img-fluid" />

                        <Avatar sx={{ width: !matches ? 480 : 320, height: !matches ? 480 : 320, zIndex: 2, position: "absolute", marginTop: !matches ? 7 : 5 }} src="https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80" >
                        </Avatar>
                    </div>
                    <div className="col-lg-5 p">
                        <h2 className="abouth2">this is the summary of Technoparv</h2>
                        <p className="aboutp">TECHNOPARV as it is fondly called, the technical & cultural festival of IPS College Of Technology and Management, Gwalior. It was started in 2010 by a bunch of enthusiastic IPSians. This year, your favourite fest is going to be more innovative, more exciting, more creative and more enjoying as it attracts more than 5,000 students from colleges and schools all over the INDIA. Technoparv has now snowballed to become the largest festival of its kind in this Region.
                        </p>
                    </div>
                </div>




                {/* ************************************SCHEDULE SECTION****************************************************************** */}
                <div id='schedule'></div>
                <div className={classes.ribinbg} id='schedule'>
                    <h1 className="d-flex ribinbg justify-content-center mt-4 abouth1color pt-3 " >Schedule</h1>
                </div>
                <Grid container style={{ display: "flex", flexWrap: "wrap" }}>
                    <Grid item >
                        <Grid item xs={12} style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
                            <ScheduleSection />
                        </Grid>
                    </Grid>
                    <Grid item style={{ width: "100%" }}>
                        <Grid item xs={12}>
                            <div>
                                {/* <Routes>
                                    <Route element={<TechnoparvDay01 />} path={"/TechnoparvDay01"}></Route>
                                </Routes> */}
                                <Routes>
                                    <Route element={<TechnoparvDay02 />} path={"/TechnoparvDay02"}></Route>
                                </Routes>
                                <Routes>
                                    <Route element={<TechnoparvDay03 />} path={"/TechnoparvDay03"}></Route>
                                </Routes>
                                <Routes>
                                    <Route element={<TechnoparvDay04 />} path={"/TechnoparvDay04"}></Route>
                                </Routes>
                            </div>

                        </Grid>
                    </Grid>
                </Grid>
                <div>
                    <div id='events'> </div>
                    <div className={classes.ribinbg} >
                        <h1 className="d-flex justify-content-center mt-4 abouth1color  pt-3  ribinbg"> &nbsp;&nbsp;&nbsp; Event's
                            &nbsp;
                            &nbsp;&nbsp;</h1>
                    </div>

                    {/* *****************************************EVENT SECTION********************************************************************* */}
                    <div style={{ marginTop: "3%" }} ><EventCard /></div>
                    {/* **************************************************************************************************************************** */}
                </div>

            </div>

            {/* *************************************************************************************************************************** */}
            <div id='gallery'> </div>
            <div className={classes.ribinbg}>
                <h1 className="d-flex justify-content-center mt-4 abouth1color  pt-3  ribinbg">  &nbsp; Gallery
                    &nbsp;
                </h1>
            </div>
            <div style={{ width: "100%", height: "20%", marginTop: "4%", position: "relative" }} >

                <Slider {...gallery}>
                    {play()}
                </Slider>

            </div>

            {/* <div style={{ marginTop: "7%" }}><hr></hr> <Footer /></div> */}
        </div >
    )
}