import { Avatar, Grid, Paper } from '@mui/material';
import { TechnoparvCss } from './TechnoparvCss';
import MaterialTable from '@material-table/core';
import { width } from '@mui/system';
import { useNavigate } from 'react-router-dom';
import { ContainedButton } from '@iktakahiro/gradient-mui-button';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import * as React from 'react';
import Box from '@mui/material/Box';

export default function ScheduleSection() {
    const [value, setValue] = React.useState(0);
    var navigate = useNavigate()
    var classes = TechnoparvCss()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));


    return (

        <div>
            <Grid xs={12} style={{ display: "flex", flexDirection: !matches ? "row" : "column", flexWrap: !matches ? "wrap" : "nowrap", marginLeft: "5%", marginTop: "3%" }}>
                {!matches ? <> <Grid item xs={1}>
                    <ContainedButton className={classes.schedulePaper} color="default" style={{ width: !matches ? 180 : 340, height: 60, margin: 20, marginLeft: !matches ? "8vw" : "0vw", alignItems: "center", display: "flex", justifyItems: "center", justifyContent: "center", cursor: "pointer" }} >
                        <span className={classes.schedulePaper}>Days</span>
                    </ContainedButton>
                </Grid></> : <></>}

                <Grid item xs={1}>
                    <ContainedButton className={classes.schedulePaper} color="secondary" style={{ width: !matches ? 180 : 340, height: 60, margin: 20, marginLeft: !matches ? "10vw" : "1vw", alignItems: "center", display: "flex", justifyItems: "center", justifyContent: "center", cursor: "pointer" }} onClick={() => navigate("/Technoparv/TechnoparvDay01")}>
                        {!matches ? <><span className={classes.schedulePaper}> 01 &nbsp; &nbsp;</span></>
                            : <><span className={classes.schedulePaper}>Day 01 &nbsp;</span></>}

                    </ContainedButton>
                </Grid>
                <Grid item xs={1}>
                    <ContainedButton color="primary" style={{ width: !matches ? 180 : 340, height: 60, margin: 20, marginLeft: !matches ? "10vw" : "1vw", alignItems: "center", display: "flex", justifyItems: "center", justifyContent: "center", cursor: "pointer" }} onClick={() => navigate("/Technoparv/TechnoparvDay02")}>
                        {!matches ? <><span className={classes.schedulePaper}> 02 &nbsp; &nbsp;</span></>
                            : <><span className={classes.schedulePaper}>Day 02 &nbsp;</span></>}
                    </ContainedButton>
                </Grid>
                <Grid item xs={1}>
                    <ContainedButton style={{ width: !matches ? 180 : 340, height: 60, margin: 20, marginLeft: !matches ? "10vw" : "1vw", alignItems: "center", display: "flex", justifyItems: "center", justifyContent: "center", cursor: "pointer" }} onClick={() => navigate("/Technoparv/TechnoparvDay03")}>
                        {!matches ? <><span className={classes.schedulePaper}> 03 &nbsp; &nbsp;</span></>
                            : <><span className={classes.schedulePaper}>Day 03 &nbsp;</span></>}
                    </ContainedButton>
                </Grid>
                <Grid item xs={1}>
                    <ContainedButton color="primary" style={{ width: !matches ? 180 : 340, height: 60, margin: 20, marginLeft: !matches ? "10vw" : "1vw", background: "#f54290", alignItems: "center", display: "flex", justifyItems: "center", justifyContent: "center", cursor: "pointer" }} onClick={() => navigate("/Technoparv/TechnoparvDay04")}>
                        {!matches ? <><span className={classes.schedulePaper}> 04 &nbsp; &nbsp;</span></>
                            : <><span className={classes.schedulePaper}>Day 04 &nbsp;</span></>}
                    </ContainedButton>
                </Grid>
                <Grid item xs={1}>
                    <ContainedButton style={{ width: !matches ? 180 : 340, height: 60, margin: 20, marginLeft: !matches ? "10vw" : "1vw", alignItems: "center", display: "flex", justifyItems: "center", justifyContent: "center", cursor: "pointer" }} onClick={() => navigate("/Technoparv/TechnoparvDay04")}>
                        {!matches ? <><span className={classes.schedulePaper}> 05 &nbsp; &nbsp;</span></>
                            : <><span className={classes.schedulePaper}>Day 05 &nbsp;</span></>}
                    </ContainedButton>
                </Grid>
                <Grid item xs={1}>
                    <ContainedButton color="primary" style={{ width: !matches ? 180 : 340, height: 60, margin: 20, marginLeft: !matches ? "10vw" : "1vw", alignItems: "center", display: "flex", justifyItems: "center", justifyContent: "center", cursor: "pointer" }} onClick={() => navigate("/Technoparv/TechnoparvDay04")}>
                        {!matches ? <><span className={classes.schedulePaper}> 06 &nbsp; &nbsp;</span></>
                            : <><span className={classes.schedulePaper}>Day 06 &nbsp;</span></>}
                    </ContainedButton>
                </Grid>
                <Grid item xs={1}>
                    <ContainedButton color="secondary" style={{ width: !matches ? 180 : 340, height: 60, margin: 20, marginLeft: !matches ? "10vw" : "1vw", background: "#f54290", alignItems: "center", display: "flex", justifyItems: "center", justifyContent: "center", cursor: "pointer" }} onClick={() => navigate("/Technoparv/TechnoparvDay04")}>
                        {!matches ? <><span className={classes.schedulePaper}> 07</span></>
                            : <><span className={classes.schedulePaper}>Day 07 &nbsp;</span></>}
                    </ContainedButton>
                </Grid>

            </Grid>

        </div>
    )
}