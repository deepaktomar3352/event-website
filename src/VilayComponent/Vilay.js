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
import { Routes, Route, Link } from "react-router-dom";
import ScheduleSection from './ScheduleSection';
// import TechnoparvDay01 from './TechnoparvDay01';
import TechnoparvDay02 from './TechnoparvDay02';
import TechnoparvDay03 from './TechnoparvDay03';
import TechnoparvDay04 from './TechnoparvDay04';
import EventCard from './EventCard';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';





export default function Vilay() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));



    var classes = TechnoparvCss()
    const [btnStatus, setBtnStatus] = useState(false)
    const [image, setImage] = useState([])
    // ******************USED FOR Slider*****************************************
    var settings = {
        dots: false,
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

    var images = ["1.jpg", "2.jpg", "3.jpg", "12.jpg", "11.jpg", "3.jpg", "12.jpg",]
    function playImg() {
        return image.map((item) => {

            return (<div ><img alt={"image"} src={`${serverURL}/uploaded/${item.slidepicl}`} style={{ width: "100%", height: !matches ? "90vh" : "50vh" }}></img></div>)
        })
    }

    function play() {
        return images.map((item) => {

            return (<div ><img alt={"image"} src={`${serverURL}/uploaded/${item}`} style={{ width: "100vw", height: !matches ? "94vh" : "25vh" }}></img></div>)
        })
    }

    function plays() {
        return images.map((item) => {

            return (<a data-fancybox="gallery" href={`${serverURL}/uploaded/${item}`} ><div ><img alt={"image"} src={`${serverURL}/uploaded/${item}`} style={{ width: "100%", height: !matches ? "30vh" : "25vh", margin: 10 }}></img></div></a>)
        })
    }
    // *******************************************************************************


    useEffect(function () {

        fetchCarouselImg();

    }, [])






    return (
        <div style={{ overflow: "hidden" }}>
            <Box sx={{ flexGrow: 1 }} id="technoparv">
                <AppBar position="fixed" sx={{ background: "#ff5e57", height: 50 }}>
                    <Toolbar variant="dense">
                        <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>

                        </IconButton>
                        <Typography variant="h6" color="inherit" component="div">
                            Vilay
                        </Typography>
                        {!matches ? <Grid item xs={12} style={{ display: "flex", justifyContent: "space-evenly", marginLeft: "48%", width: 600 }}>
                            <a style={{ textDecoration: "none" }} href="/homepage"><span className={classes.headeritem}>Home</span></a>
                            <a style={{ textDecoration: "none" }} href="#aboutevent"><span className={classes.headeritem}>About Us</span></a>
                            <a style={{ textDecoration: "none" }} href="#events"><span className={classes.headeritem}>Events</span></a>
                            <a style={{ textDecoration: "none" }} href="#schedule"><span className={classes.headeritem}>Schedule</span></a>
                            <a style={{ textDecoration: "none" }} href="#gallery"><span className={classes.headeritem}>Gallery</span></a>
                            <a style={{ textDecoration: "none" }} href="/"><span className={classes.headeritem}>Contact</span></a>
                        </Grid> : <></>}

                    </Toolbar>


                </AppBar>
            </Box>
            <div>
                <div style={{ width: "100%", position: "relative", }} >
                    {!matches ? <><ArrowBackIosNewIcon onClick={handlePrevImg} style={{ color: 'white', fontSize: 35, zIndex: 1, left: 20, top: "40vh", position: "absolute" }} /></> : <></>}

                    <Slider ref={slider} {...settings}>
                        {play()}
                    </Slider>
                    {!matches ? <><ArrowForwardIosIcon onClick={handleNextImg} style={{ color: 'white', fontSize: 35, zIndex: 2, right: 20, top: "40vh", position: "absolute" }} /></> : <></>}

                </div>
                {!matches ?
                    <Grid container direction="row" spacing={2} style={{  marginTop: '3%', height: !matches ? '100vh' : "auto", padding: 5, position: "relative", width: 'auto', }}>
                        {/* <div style={{position: "absolute",top: 0, left: 0,width: "100%",height: "100%",backgroundColor: "rgba(0,0,0,0)" }}></div> */}

                        {/* <Grid item xs={!matches ? 12 : <></>} style={{ padding: 10,position:'relative',display:'flex',justifyContent:'center',alignItems:'center',flexDirection:'column' }}>
                        <h1 style={{ fontFamily: 'Matter,Helvetica,Arial,sans-serif', fontWeight: 'bolder', color: '#fff', textAlign: 'center', fontSize: !matches ? '84px' : "40px",  }}>About Us</h1>
                        <p style={{ fontFamily: 'Matter,Helvetica,Arial,sans-serif', textAlign: 'justify', color: '#fff', marginTop: '5%', fontSize: '1.5rem', lineHeight: '1.6rem', letterSpacing: 0, fontWeight: 300, fontStyle: 'normal', maxWidth: '70rem',padding:10 }}>Full of vibrant colors and creativity, Vilay is a two-day annual fest. All colleges of IPS Group confluence on this occasion to celebrate the grand &Festive Odyssey. This annual fest is held in the month of Feb-March when nature calls for spring season. Amidst an aroma of spring, the college corridors come alive with students' activities.</p>
                        <p style={{ backgroundSize:'cover',fontFamily: 'Matter,Helvetica,Arial,sans-serif', textAlign: 'justify', color: '#fff',  fontSize: '1.5rem', lineHeight: '1.6rem', letterSpacing: 0, fontWeight: 300, fontStyle: 'normal',  maxWidth: '70rem',padding:10 }}>It provides a platform for various innovative competitions like singing, dancing, music, mimicry, acting, poetry, rangoli , poster making and the like. Based on socially relevant themes and carrying value-based messages the students imbibe values while enjoying the fest. Students are bestowed with prizes and certificates to recognize their efforts and celebrate their talents.</p>
                    </Grid> */}

                        <Grid item xs={!matches ? 5 : 12} style={{ height: !matches ? '500px' : "300px", overflow: 'hidden', padding: !matches ? 10 : 5, display: 'flex', alignItems: 'center' }}>
                            <img src="https://cdn.pixabay.com/photo/2020/01/15/17/38/fireworks-4768501_960_720.jpg" width={!matches ? 600 : 350} style={{ borderRadius: 10 }} />
                        </Grid>
                        <Grid item xs={!matches ? 7 : 12} style={{ height: '500px', whiteSpace: 'wrap', display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 }}>
                            <h1 style={{ fontFamily: 'Montserrat", sans-serif', fontWeight: 'bolder', color: 'black', textAlign: 'center', fontSize: !matches ? '64px' : "40px", margin: 10 }}>About Us</h1>
                            <p style={{ textAlign: !matches ? <></> : 'justify', fontFamily: 'Poppins', color: 'black', marginTop: '5%', }}>Full of vibrant colors and creativity, Vilay is a two-day annual fest. All colleges of IPS Group confluence on this occasion to celebrate the grand &Festive Odyssey. This annual fest is held in the month of Feb-March when nature calls for spring season. Amidst an aroma of spring, the college corridors come alive with students' activities.</p>
                            <p style={{ textAlign: !matches ? <></> : 'justify', fontFamily: 'Montserrat", sans-serif', color: 'black', }}>It provides a platform for various innovative competitions like singing, dancing, music, mimicry, acting, poetry, rangoli , poster making and the like. Based on socially relevant themes and carrying value-based messages the students imbibe values while enjoying the fest. Students are bestowed with prizes and certificates to recognize their efforts and celebrate their talents.</p>
                        </Grid>

                    </Grid> :
                    <>
                        <Grid item xs={!matches ? 5 : 12} style={{ height: !matches ? '500px' : "300px", overflow: 'hidden', padding: !matches ? 10 : 5, display: 'flex', alignItems: 'center' }}>
                            <img src="https://cdn.pixabay.com/photo/2020/01/15/17/38/fireworks-4768501_960_720.jpg" width={!matches ? 600 : 350} style={{ borderRadius: 10 }} />
                        </Grid>
                        <Grid item xs={!matches ? 7 : 12} style={{ height: '500px', whiteSpace: 'wrap', display: 'flex', alignItems: 'center', flexDirection: 'column', padding: 30 }}>
                            <h1 style={{ fontFamily: 'Montserrat", sans-serif', fontWeight: 'bolder', color: 'black', textAlign: 'center', fontSize: !matches ? '64px' : "40px", margin: 10 }}>About Us</h1>
                            <p style={{ textAlign: !matches ? <></> : 'justify', fontFamily: 'Poppins', color: 'black', marginTop: '5%', }}>Full of vibrant colors and creativity, Vilay is a two-day annual fest. All colleges of IPS Group confluence on this occasion to celebrate the grand &Festive Odyssey. This annual fest is held in the month of Feb-March when nature calls for spring season. Amidst an aroma of spring, the college corridors come alive with students' activities.</p>
                            <p style={{ textAlign: !matches ? <></> : 'justify', fontFamily: 'Montserrat", sans-serif', color: 'black', }}>It provides a platform for various innovative competitions like singing, dancing, music, mimicry, acting, poetry, rangoli , poster making and the like. Based on socially relevant themes and carrying value-based messages the students imbibe values while enjoying the fest. Students are bestowed with prizes and certificates to recognize their efforts and celebrate their talents.</p>
                        </Grid>
                    </>}



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
                    {plays()}
                </Slider>

            </div>

            {/* <div style={{ marginTop: "7%" }}><hr></hr> <Footer /></div> */}
        </div >
    )
}