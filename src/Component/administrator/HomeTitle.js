import { Grid, TextField, Button } from "@mui/material"
import { HomeTitleStyles } from "./HomeTitleCss"
import { useState } from "react";
import { postData } from "../../Services/ServerServices";
import Swal from "sweetalert2";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function HomeTitle() {
    var classes = HomeTitleStyles();

    const [Title, setTitle] = useState('')
    const [DD, setDD] = useState('')
    const [Page, setPage] = useState('');

    const handleSubmitData = async () => {
        const currentDate = new Date();
        const dateString = `${currentDate.getFullYear()}/${currentDate.getMonth() + 1}/${currentDate.getDate()} ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;
    
        const formData = new FormData();
        formData.append('title', Title || '');
        formData.append('dt', DD || '');
        formData.append('submitedat', dateString);
        formData.append('updatedat', dateString);
        formData.append('submitedby', 'Admin');
        formData.append('updatedby', 'Admin');
        formData.append('page', Page || '');
    
        
    
        let endpoint = '';
    
        if (Page === 'vilay') {
            endpoint = 'index/vilaytitlesubmit';
        } else if (Page === 'technoparv') {
            endpoint = 'index/technoparvtitlesubmit';
        } else if (Page === 'home') {
            endpoint = 'events/hometitlesubmit';
        }
    
        if (endpoint) {
            try {
                console.log('Form Data:', Object.fromEntries(formData));
                const result = await postData(endpoint, Object.fromEntries(formData));
                console.log('Submission Result:', result);
                alert(result)
            } catch (error) {
                console.error('Submission Error:', error);
            }
        } else {
            console.error('Invalid Page Value:', Page);
        }
    
    
        // console.log(result.page)
        // handleResetData()
        // if (result.status) {

        //     Swal.fire({
        //         icon: 'success',
        //         title: result.message,
        //     })
        // }
        // else {

        //     Swal.fire({
        //         icon: 'success',
        //         title: result.message,
        //     })
        // }


    }

    const handleResetData = () => {

        setTitle("")
        setDD("")

    }


    const handleChange = (event) => {
        setPage(event.target.value);
    };


    return (
        <div className={classes.mainContainer}>
            <div className={classes.box}>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <div className={classes.headingStyle}>Title Interface</div>
                    </Grid>
                    <Grid xs={12}>
                        <div>  < FormControl fullWidth required sx={{ m: 1, minWidth: 120 }}>
                            <InputLabel id="demo-simple-select-required-label">Page</InputLabel>
                            <Select
                                labelId="demo-simple-select-required-label"
                                id="demo-simple-select-required"
                                value={Page}
                                label="Page*"
                                onChange={handleChange}
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value={"home"}>home</MenuItem>
                                <MenuItem value={"vilay"}>vilay</MenuItem>
                                <MenuItem value={"technoparv"}>technoparv</MenuItem>
                            </Select>
                            {/* <FormHelperText>Required</FormHelperText> */}
                        </FormControl></div>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={Title} fullWidth onChange={(event) => setTitle(event.target.value)} variant="outlined" label="Title" type={Text}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField value={DD} fullWidth onChange={(event) => setDD(event.target.value)} variant="outlined" type="date"/>
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={handleSubmitData} style={{ background: "black" }} fullWidth variant="contained">Submit</Button>
                    </Grid>
                    <Grid item xs={6}>
                        <Button onClick={handleResetData} style={{ background: "black" }} fullWidth variant="contained">Reset</Button>
                    </Grid>
                </Grid>
            </div>
        </div>
    )

}