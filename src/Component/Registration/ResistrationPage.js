import { TextField, Grid } from "@mui/material";
import { ContainedButton } from '@iktakahiro/gradient-mui-button';
import { margin } from "@mui/system";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useState } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormLabel from '@mui/material/FormLabel';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Padding } from "@mui/icons-material";
import { Link, useNavigate } from "react-router-dom";
import { postData } from "../../Services/ServerServices";
import MailVerification from "./mailVerification";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import Swal from "sweetalert2";

export default function RegistrationPage() {
    const [studentName, setStudentName] = useState("");
    const [fatherName, setFatherName] = useState("");
    const [emailAddress, setEmailAddress] = useState("");
    const [mobileNumber, setMobileNumber] = useState("");
    const [college, setCollege] = useState("");
    const [enrollment, setEnrollment] = useState("");
    const [course, setCourse] = useState("");
    const [year, setYear] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [gender, setGender] = useState("");
    const [otp, setOtp] = useState("");
    const [open, setOpen] = useState(false);
    const [verifyEmail,setVerifyEmail]=useState("")

    // const handleClickOpen = () => {
        
    //   };
    
      const handleClose = () => {
        setOpen(false);
      };

    const handleStudentNameChange = (event) => {
        setStudentName(event.target.value);
    };

    const handleFatherNameChange = (event) => {
        setFatherName(event.target.value);
    };

    const handleEmailAddressChange = (event) => {
        setEmailAddress(event.target.value);
    };

    const handleMobileNumberChange = (event) => {
        setMobileNumber(event.target.value);
    };

    const handleCollegeChange = (event) => {
        setCollege(event.target.value);
    };

    const handleEnrollmentChange = (event) => {
        setEnrollment(event.target.value);
    };
    const handleCourseChange = (event) => {
        setCourse(event.target.value);
    };

    const handleYearChange = (event) => {
        setYear(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleConfirmPasswordChange = (event) => {
        setConfirmPassword(event.target.value);
    };

    const handleGenderChange = (event) => {
        setGender(event.target.value);
    };


    const handleSubmit = async(e) => {
        e.preventDefault();
        setOpen(true);
        const formData = new FormData();
        formData.append("studentName", studentName);
        formData.append("fatherName", fatherName);
        formData.append("emailAddress", emailAddress);
        formData.append("mobileNumber", mobileNumber);
        formData.append("college", college);
        formData.append("enrollment", enrollment);
        formData.append("course", course);
        formData.append("year", year);
        formData.append("password", password);
        formData.append("confirmPassword", confirmPassword);
        formData.append("gender", gender);
        formData.append("isverified", 'No');
      
        // make a POST request with the formData object here
        var result = await postData('Registration/registration',Object.fromEntries(formData))
        if(result.status)
        {
            Swal.fire({
                icon: 'success',
                text: result.message,
            })
            // alert("success")
            console.log("OTP",result.otp)
             // Wait for result.otp to be available before setting the OTP value
             const takeotp = result.otp;
             setOtp(takeotp);
             const takeEmail = result.email;
             setVerifyEmail(takeEmail)
             console.log("E-mail",takeEmail)

        }
        else
        {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
            // alert("Fail")
        }
      };
    //   console.log(otp)


    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));

    //student_college, student_enrollment, student_password

    const styles = {
        paperContainer: {
            backgroundImage: `url(${""})`
        }
    };
    
  
    function showRegistrationPage()
    {
    return (
        
        <div style={{ backgroundImage: `url(${"https://media.istockphoto.com/id/1371547852/photo/hello-and-welcome-written-white-lightbox-sitting-on-blue-background.jpg?b=1&s=170667a&w=0&k=20&c=pyL6_mX-HMcMLQqfERrR8CDKHrnZWJItPc1QA8SRQgU="})`, objectFit: 'cover', height: !matches ? "auto" : "100vh", marginTop: !matches ? "-3%" : "-10%" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-70">
                    <div className="col-lg-12 col-xl-11" style={{ display: "flex", justifyContent: "center" }}>
                        <div className="card text-black " style={{ borderRadius: "20px", width: "100%", height: "auto", margin: "2%", marginTop: !matches ? "5%" : "15%" }}>
                            <div className="card-body p-md-5 row justify-content-center" >
                                <div className="row justify-content-center">
                                    <Grid className="col-md-10 col-lg-6 col-xl-7 order-2 order-lg-1">
                                   
                                        <p className="text-center h1 fw-bold mb-4 mx-1 mx-md-4 mt-1" style={{ fontFamily: "serif" }}>Resistration</p>
                                       
                                        <form >
                                            <Grid container >

                                                <Grid item xs={6}>
                                                    <div className="d-flex flex-row align-items-center mb-3">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <TextField
                                                                fullWidth
                                                                id="student_Name"
                                                                label="Student Name"
                                                                variant="standard"
                                                                value={studentName}
                                                                onChange={handleStudentNameChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div className="d-flex flex-row align-items-center mb-3">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <TextField
                                                                fullWidth
                                                                id="father_name"
                                                                label="Father Name"
                                                                variant="standard"
                                                                value={fatherName}
                                                                onChange={handleFatherNameChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <div className="d-flex flex-row align-items-center mb-3">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <TextField
                                                                fullWidth
                                                                id="email_address"
                                                                label="Email"
                                                                type="mail"
                                                                variant="standard"
                                                                value={emailAddress}
                                                                onChange={handleEmailAddressChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div className="d-flex flex-row align-items-center mb-3">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <TextField
                                                                fullWidth
                                                                id="mobile_number"
                                                                label="Mobile Number"
                                                                variant="standard"
                                                                value={mobileNumber}
                                                                onChange={handleMobileNumberChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <div className="d-flex flex-row align-items-center mb-3">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <FormControl>
                                                                <FormLabel id="demo-row-radio-buttons-group-label">Gender</FormLabel>
                                                                <RadioGroup
                                                                    row
                                                                    aria-labelledby="demo-row-radio-buttons-group-label"
                                                                    name="row-radio-buttons-group"
                                                                    value={gender}
                                                                    onChange={handleGenderChange}
                                                                >
                                                                    <FormControlLabel value="female" control={<Radio />} label="Female" />
                                                                    <FormControlLabel value="male" control={<Radio />} label="Male" />
                                                                    <FormControlLabel value="other" control={<Radio />} label="Other" />
                                                                </RadioGroup>
                                                            </FormControl>
                                                        </div>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div className="d-flex flex-row align-items-center mb-3">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <TextField
                                                                fullWidth
                                                                id="college"
                                                                label="college"
                                                                type="text"
                                                                variant="standard"
                                                                value={college}
                                                                onChange={handleCollegeChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div className="d-flex flex-row align-items-center mb-3">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <TextField
                                                                fullWidth
                                                                id="enrollment"
                                                                label="Enrollment"
                                                                variant="standard"
                                                                value={enrollment}
                                                                onChange={handleEnrollmentChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </Grid>

                                                <Grid item xs={6}>
                                                    <div className="d-flex flex-row align-items-center mb-3">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                                                <InputLabel id="demo-simple-select-standard-label">Course</InputLabel>
                                                                <Select
                                                                    labelId="demo-simple-select-standard-label"
                                                                    id="demo-simple-select-standard"
                                                                    value={course}
                                                                    onChange={handleCourseChange}
                                                                    label="Course"
                                                                >
                                                                    <MenuItem value="">
                                                                        <em>None</em>
                                                                    </MenuItem>
                                                                    <MenuItem value={10}>Ten</MenuItem>
                                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                        </div>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div className="d-flex flex-row align-items-center mb-3">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                                                                <InputLabel id="demo-simple-select-standard-label">Year</InputLabel>
                                                                <Select
                                                                    labelId="demo-simple-select-standard-label"
                                                                    id="demo-simple-select-standard"
                                                                    value={year}
                                                                    onChange={handleYearChange}
                                                                    label="Year"
                                                                >
                                                                    <MenuItem value="">
                                                                        <em>None</em>
                                                                    </MenuItem>
                                                                    <MenuItem value={10}>Ten</MenuItem>
                                                                    <MenuItem value={20}>Twenty</MenuItem>
                                                                    <MenuItem value={30}>Thirty</MenuItem>
                                                                </Select>
                                                            </FormControl>
                                                        </div>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div className="d-flex flex-row align-items-center mb-3">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            <TextField
                                                                fullWidth
                                                                id="password"
                                                                label="Password"
                                                                type="password"
                                                                variant="standard"
                                                                value={password}
                                                                onChange={handlePasswordChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </Grid>
                                                <Grid item xs={6}>
                                                    <div className="d-flex flex-row align-items-center mb-3">
                                                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                        <div className="form-outline flex-fill mb-0">
                                                            {/* <TextField fullWidth id="password" label="Confirm Password" type="password" variant="standard" /> */}
                                                            <TextField
                                                                fullWidth
                                                                id="confirm password"
                                                                label="confirm Password"
                                                                type="password"
                                                                variant="standard"
                                                                value={confirmPassword}
                                                                onChange={handleConfirmPasswordChange}
                                                            />
                                                        </div>
                                                    </div>
                                                </Grid>



                                                <div style={{ display: "flex", flexDirection: "row" }} >
                                                    <div className=" d-flex justify-content-center  mb-lg-2 mt-4">
                                                        <ContainedButton color="primary" onClick={handleSubmit} >SignUp</ContainedButton>
                                                    </div>
                                                    <div className=" d-flex justify-content-center  mb-lg-2 mt-4">
                                                        <ContainedButton color="primary" >Reset</ContainedButton>
                                                    </div>
                                                </div>
                                                <Grid xs={12} >
                                                    <p style={{ textAlign: 'center', }}>
                                                        Already have an account?{" "}
                                                        <span>
                                                            <Link to="/login">Login</Link>
                                                        </span>
                                                    </p>
                                                </Grid>
                                            </Grid>

                                        </form>


                                    </Grid>

                                    <Grid className="col-md-10 col-lg-6 col-xl-5 d-flex align-items-center order-1 order-lg-2">

                                        {!matches ? <><img src="https://cdn3d.iconscout.com/3d/premium/thumb/man-pointing-finger-at-blank-information-board-4938491-4122870.png?f=webp"
                                            className="img-fluid" alt="Sample image" /></> : <><img src="https://geeks.do/wp-content/uploads/2018/04/man-looking-down.png"
                                                className="img-fluid" alt="Sample image" /></>}

                                    </Grid>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
          
        </div>



    )
    }
    function showDialog()
    {
       return (
           <div>
             {/* <Button variant="outlined" onClick={handleClickOpen}>
               Open form dialog
             </Button> */}
             <Dialog open={open} onClose={handleClose}>
               <DialogTitle>OTP Verification</DialogTitle>
               <DialogContent>
                 <DialogContentText>
                 <div style={{color:'red'}}> we sent a mail in your E-mail Please Check Your E-mail and verify account!...</div>
                 </DialogContentText>
                 {/* <TextField
                   autoFocus
                   margin="dense"
                   id="name"
                   label="Email Address"
                   type="email"
                   fullWidth
                   variant="standard"
                 /> */}
                  <div style={{marginTop:30,width:"auto"}}>< MailVerification valid={otp} mail={verifyEmail} setOtp={setOtp} /></div>
               </DialogContent>
               <DialogActions>
                 <Button onClick={handleClose}>Cancel</Button>
                 {/* <Button onClick={handleClose}>Subscribe</Button> */}
               </DialogActions>
             </Dialog>
           </div>
         );
    }

    return(
       <div>
       
       {showRegistrationPage()}
       {showDialog()}
       
       </div>
    )
}