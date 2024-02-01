import { AppBar, Button, Grid, Paper } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import './Footer.css';

export default function Footer() {



    return (
        <div>
            
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4>About</h4>
            <p style={{textAlign:'justify'}}>Youngsters eagerly look forward for college life as it is full of fun and frolic. Live experiences of these fun activities and events are unforgettable their entire life. Life @ IPS gives them heartfelt,touching moments to share with friends and relatives. We organise various activities for our students throughout the year which not only improve their personality but also give freedom from monotonous routine of studies.</p>
          </div>
          <div className="col-md-4">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#">Home</a></li>
              <li><a href="#">Events</a></li>
              <li><a href="#">About Us</a></li>
              <li><a href="#">Contact Us</a></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h4>Contact Us</h4>
            <p >IPS College of Technology & Management,<br/> Shivpuri Link Road Gwalior, Madhya Pradesh, 474001</p>
            <p>Phone: 9285052400, 9285032400</p>
            <p>Email: info@ipsgwalior.org</p>
          </div>
          
        </div>
      </div>
    </footer>
        </div>



    )

}