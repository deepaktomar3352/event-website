import { Grid, Paper ,Link} from "@mui/material"
import { TechnoparvCss } from "./TechnoparvCss"
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';


export default function EventCard() {

    var classes = TechnoparvCss()
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down('sm'));



    return (
        <div style={{ display: "flex", justifyContent: "center" }}>
            <Grid container spacing={2} style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", paddinghrefp: "2%", paddingLeft: "5%" }}>
                <div>
                    <Grid item xs={3}>
                        <a  style={{textDecoration:"none"}}href="WorkshopMainEvent"><Paper elevation={4} style={{ display: "flex", width:!matches?230:200, height:!matches?210:180, background: "#f5a442", borderRadius: "4%" }} ><span className={classes.eventCard}>Workshop</span><img src="https://www.pngall.com/wp-content/uploads/2018/04/Mind-Free-Download-PNG.png" width={!matches?130:95} height={!matches?132:100} style={{ marginhrefp:!matches?"42%":"47%" }}></img></Paper></a>
                    </Grid>
                </div>
                <div>
                    <Grid item xs={3}>
                        <a  style={{textDecoration:"none"}} href="WorkshopMainEvent"><Paper elevation={3} style={{ display: "flex", width:!matches?230:200, height:!matches?210:180, background: "#f368e0", borderRadius: "4%" }} ><span className={classes.eventCard}>Techventure</span></Paper></a>
                    </Grid>
                </div>
                <div>
                    <Grid item xs={3}>
                        <a  style={{textDecoration:"none"}} href="WorkshopMainEvent"><Paper elevation={3} style={{ display: "flex",width:!matches?230:200, height:!matches?210:180, background: "#ee5253", borderRadius: "4%" }} ><span className={classes.eventCard}>Sports</span></Paper></a>
                    </Grid>
                </div>
                <div>
                    <Grid item xs={3}>
                        <a   style={{textDecoration:"none"}}href="WorkshopMainEvent"> <Paper elevation={3} style={{ display: "flex", width:!matches?230:200, height:!matches?210:180,background: "#e056fd", borderRadius: "4%" }}><span className={classes.eventCard}>Star Night</span></Paper></a>
                    </Grid>
                </div>
                <div>
                    <Grid item xs={3}>
                        <a  style={{textDecoration:"none"}}href="WorkshopMainEvent"><Paper elevation={3} style={{ display: "flex", width:!matches?230:200, height:!matches?210:180, background: "#6ab04c", borderRadius: "4%" }} ><span className={classes.eventCard}>Culture</span></Paper></a>
                    </Grid>
                </div>
                <div>
                    <Grid item xs={3}>
                        <a  style={{textDecoration:"none"}}href="WorkshopMainEvent"><Paper elevation={3} style={{ display: "flex", width:!matches?230:200, height:!matches?210:180, background: "#9980FA", borderRadius: "4%" }} ><span className={classes.eventCard}>DJ Night</span></Paper></a>
                    </Grid>
                </div>
                <div>
                    <Grid item xs={3}>
                        <a style={{textDecoration:"none"}} href="WorkshopMainEvent"><Paper elevation={3} style={{ display: "flex", width:!matches?230:200, height:!matches?210:180, background: "#f5a442", borderRadius: "4%" }} ><span className={classes.eventCard}>Fun & Entertainment</span></Paper></a>
                    </Grid>
                </div>
                <div>
                    <Grid item xs={3}>
                        <a  style={{textDecoration:"none"}} href="WorkshopMainEvent"> <Paper elevation={3} style={{ display: "flex", width:!matches?230:200, height:!matches?210:180, background: "#e056fd", borderRadius: "4%" }} ><span className={classes.eventCard}>Workshop</span></Paper></a>
                    </Grid>
                </div>


            </Grid>
        </div>
    )

}