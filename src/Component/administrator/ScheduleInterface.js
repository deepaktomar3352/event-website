import React, { useState } from "react";
import { Grid, TextField, Avatar, Button, IconButton, FormControl, InputLabel, Select, MenuItem, Tooltip } from "@mui/material";
import { Category, FormatListBulletedIcon } from "@mui/icons-material";
import { postData } from "../../Services/ServerServices";
import { getData } from "../../Services/ServerServices";
import Swal from "sweetalert2";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { useNavigate } from "react-router-dom";
import { scheduleCss } from "./ScheduleInterfaceCss";


export default function ScheduleInterface() {
   
    var classes=scheduleCss()

    const [EventName, setEventName] = useState('')
    const [Type, setType] = useState('')
    const [Venue, setVenue] = useState('')
    const [Dt, setDt] = useState('')
    const [StartTime, setStartTime] = useState('')
    const [EndTime, setEndTime] = useState('')
    const [Fee, setFee] = useState('')
    const [Coordinators, setCoordinators] = useState('')
    const [Logo, setLogo] = useState({ fileName: "./images/defaultschedule.jpeg", bytes: "" })
    const [error, setError] = useState('')


    // *********************USED FOR HANDLE IMG CHANGE****************************************************
    const handleChange = (event) => {

        setLogo({ fileName: URL.createObjectURL(event.target.files[0]), bytes: event.target.files[0] })

    };
    // ***********************************************************************************************************



    // ******************************USED FOR ERROR CHECK*******************************************
    const handleError = (inputs, value) => {

        setError(pre => ({ ...pre, [inputs]: value }))
    }

    const validation = () => {

        var isValid = true;

        if (!EventName) {
            handleError("EventName", "Invalid Event Name")
            isValid = false

        }
        if (!Type) {
            handleError("Type", "Invalid Type")
            isValid = false;
        }
        if (!Venue) {
            handleError("Venue", "Invalid Venue")
            isValid = false;
        }
        if (!StartTime) {
            handleError("StartTime", "Invalid StartTime")
            isValid = false;
        }
        if (!EndTime) {
            handleError("EndTime", "Invalid EndTime")
            isValid = false;
        }
        if (!Fee) {
            handleError("Fee", "Invalid Fee")
            isValid = false;
        }
        if (!Dt) {
            handleError("Dt", "Invalid Date")
            isValid = false;
        }
        if (!Coordinators) {
            handleError("Coordinators", "Coordinators")
            isValid = false;
        }
        
        return isValid

    }


    // ***************************USED FOR SUBMIT DATA*********************************************
    const handleSubmitClick = async () => {


        if (validation()) {

            var cd = new Date();
            var dd = cd.getFullYear() + "/" + (cd.getMonth() + 1) + "/" + cd.getDay() + "/" + cd.getHours() + ":" + cd.getMinutes()
            var formData = new FormData()

            formData.append('eventname', EventName)
            formData.append('type', Type)
            formData.append('date', Dt)
            formData.append('starttime',StartTime)
            formData.append('endtime',EndTime)
            formData.append('fee', Fee)
            formData.append('logo', Logo.bytes)
            formData.append('coordinators', Coordinators)
            formData.append('submitedat', dd)
            formData.append('updatedat', dd);
            formData.append('submitedby', "Admin")

            var result = await postData("index/schedulesubmit", formData)
            // handleResetClick();

            // *******For Alert***********
            // if (result.status) {
            //     Swal.fire({
            //         icon: 'success',
            //         title: result.message,
            //     })
            // }

            if (result.status) {

                Swal.fire({
                    icon: 'success',
                    title: result.message,
                })
            }
            else {

                Swal.fire({
                    icon: 'success',
                    title: result.message,
                })
            }
            // *****************************

        }

    }
    //   *****************************************************************************************


    // ***************************USE FOR RESET FORM*************************************************
    const handleResetClick = () => {

        setEventName("")
        setType("")
        setDt("")
        setVenue("")
        setStartTime("")
        setEndTime("")
        setFee("")
        setCoordinators("")

    }
    // *************************************************************************************************

    return (
        <div className={classes.mainContainer}>
            <div className={classes.box}>
                <Grid container spacing={2}>
                    <Grid item xs={12} >
                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
                            <div style={{ display: "flex", flexDirection: "row" }}>
                                {/* <div><Avatar alt="Remy Sharp" src="https://www.pngall.com/wp-content/uploads/8/Gold-Sponsor.png" sx={{ width: 50, height: 50 }} /></div> */}

                                <div className={classes.headingStyle}>Schedule Interface</div>

                            </div>

                            <div>
                                {/* <FormatListBulletedIcon onClick={() => navigate("/DisplayAllCompanies")} /> */}
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6}>
                        <TextField error={!error.EventName? false : true} helperText={error.EventName} onFocus={() => handleError("EventName", null)} fullWidth value={EventName} onChange={(event) => setEventName(event.target.value)} variant="outlined" label="Event Name" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField error={!error.Type ? false : true} helperText={error.Type} onFocus={() => handleError("Type", null)} fullWidth value={Type} onChange={(event) => setType(event.target.value)} variant="outlined" label="Type" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField error={!error.Venue? false : true} helperText={error.Venue} onFocus={() => handleError("Venue", null)} fullWidth value={Venue} onChange={(event) => setVenue(event.target.value)} variant="outlined" label="Venue" type="text" />
                    </Grid>

                    <Grid item xs={6}>
                        <TextField error={!error.Dt ? false : true} helperText={error.Dt} onFocus={() => handleError("Dt", null)} fullWidth value={Dt} onChange={(event) => setDt(event.target.value)} variant="outlined" label=" Date" type="Date" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField error={!error.StartTime ? false : true} helperText={error.StartTime} onFocus={() => handleError("StartTime", null)} fullWidth value={StartTime} onChange={(event) => setStartTime(event.target.value)} variant="outlined" label="Start-Time" type="time" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField error={!error.EndTime ? false : true} helperText={error.EndTime} onFocus={() => handleError("EndTime", null)} fullWidth value={EndTime} onChange={(event) => setEndTime(event.target.value)} variant="outlined" label="End-Time" type="time" />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField error={!error.Coordinators? false : true} helperText={error.Coordinators} onFocus={() => handleError("Coordinators", null)} fullWidth value={Coordinators} onChange={(event) => setCoordinators(event.target.value)} variant="outlined" label=" Coordinators" type="text" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField error={!error.Fee? false : true} helperText={error.Fee} onFocus={() => handleError("Fee", null)} fullWidth value={Fee} onChange={(event) => setFee(event.target.value)} variant="outlined" label=" Fee" type="text" />
                    </Grid>
                    <Grid item xs={6} >
                        <IconButton className={classes.flex} color="primary" aria-label="upload picture" component="label">
                            <input hidden accept="image/*" type="file" onChange={handleChange} />
                            <PhotoCamera />
                            <Avatar style={{width:"100%",height:52}}alt="Remy Sharp" variant="rounded" src={Logo.fileName} />
                        </IconButton>
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={handleSubmitClick} style={{ background: "black" }} fullWidth variant="contained">Submit</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={handleResetClick} style={{ background: "black" }} fullWidth variant="contained">Reset</Button>
                    </Grid>
                   
                </Grid>
            </div>
        </div>
    )
}