import { Paper, TextField } from "@mui/material";
import { ContainedButton } from '@iktakahiro/gradient-mui-button';
import React,{useState,useEffect} from "react";
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useNavigate } from 'react-router-dom';
import { postData } from "../../Services/ServerServices";
import { Password } from "@mui/icons-material";

export default function SignIn() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));
    const [emailaddress, setEmailAddress] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')
    const handleClick = async () => {
        var body = { emailaddress: emailaddress, password: password }
        var result = await postData('Registration/chkreg', body)
        if (result.data) {
            localStorage.setItem("ADMIN", JSON.stringify(result.data))
            navigate('/homepage')
        }
        else {
            // setError("Invalid email or Password")
            navigate('/regs')
        }

    };
    var navigate = useNavigate()


    return (
        <div style={{ background: "#eee", height: !matches ? "99.5vh" : "99.2vh", marginTop: !matches ? "-3%" : "-10%" }}>
            <div className="container h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-lg-12 col-xl-11" style={{ display: "flex", justifyContent: "center" }}>
                        <div className="card text-black" style={{ borderRadius: "8px", width: "90%" }}>
                            <div className="card-body p-md-5">
                                <div className="row justify-content-center">
                                    <div elevation={1} className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 " style={{height:!matches?'500px':<></>,boxShadow:!matches? '0px 0px 10px rgba(0,0,0,0.2)':<></>,borderRadius:10,padding:20}}>

                                        <p className="text-center h3 fw-bold mb-5 mx-1 mx-md-4 mt-4" style={{ fontFamily: "Poppins" }}>Admin login</p>

                                        <form className="mx-1 mx-md-4">

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <TextField fullWidth id="email" label="Email Address" variant="standard" onChange={(e)=>setEmailAddress(e.target.value)} onClick={()=>setError('')} />
                                                </div>
                                            </div>

                                            <div className="d-flex flex-row align-items-center mb-4">
                                                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                                                <div className="form-outline flex-fill mb-0">
                                                    <TextField fullWidth id="Password" label="password" type="password" variant="standard" onChange={(e)=>setPassword(e.target.value)} onClick={()=>setError('')} />
                                                </div>
                                            </div>

                                           



                                            <div className="d-flex justify-content-center mt-5  mb-3 mb-lg-4" >
                                                <ContainedButton fullWidth color="primary"  onClick={() => handleClick()} >Login</ContainedButton>
                                            </div>

                                            <div className="d-flex flex-row align-items-center justify-content-center">
                                                <div style={{color:'red',fontFamily:'Poppins',fontWeight:'bold'}}>
                                                   {error}
                                                </div>
                                            </div>

                                        </form>

                                    </div>
                                    {!matches? <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                      
                                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp"
                                            className="img-fluid" alt="Sample image" />
                                           
                                    </div> :<></>}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>



    )
}