import Homepage from "./Component/administrator/Home";
import Sponsor from "./Component/administrator/Sponsor";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DisplayAllSponsor from "./Component/administrator/DisplayAllSponsor";
import HomeTitle from "./Component/administrator/HomeTitle";
import Dashboard from "./Component/administrator/Dashboard";
import Technoparv from "./TechnoparvComponent/Technoparv";
import WorkshopMainEvent from "./TechnoparvComponent/WorkShopMainEvent";
import Gallery from "./Component/administrator/gallery/Gallery";
import SliderUpdate from "./Component/administrator/SliderUpdate";
import Gallery2018 from "./Component/administrator/gallery/galleryList/Gallery2018";
// import Day from "./TechnoparvComponent/Days";
import WorkShopCard from "./TechnoparvComponent/WorkshopCns";
import ScheduleInterface from "./Component/administrator/ScheduleInterface";
import InsertSliderImage from "./Component/administrator/InsertSliderImage";
import VideoGallery from "./Component/administrator/gallery/Video-Gallery";
import Vilay from "./VilayComponent/Vilay";
import RegistrationPage from "./Component/Registration/ResistrationPage";
import SignIn from "./Component/Registration/adminSignInPage";
import VilayDanceEvent from "./VilayComponent/Vilay-Sub-Component/VilayDanceEvent";
import VilayCreativityEvent from "./VilayComponent/Vilay-Sub-Component/VilayCreativityEvent";
import VilayMusicEvent from "./VilayComponent/Vilay-Sub-Component/VilayMusicEvent";
import VilayLiteraryEvent from "./VilayComponent/Vilay-Sub-Component/VilayLiteraryEvent";
import VilaySportsEvent from "./VilayComponent/Vilay-Sub-Component/VilaySpotsEvent";
import TechnoparvDay01 from "./TechnoparvComponent/TechnoparvDay01";
import RazorPay from "./payment/RazorPay";
import SendMessage from "./sendMessage/sendMessage";
import WhatsAppShare from "./sendMessage/whatsapp";
import WhatsappMain from "./sendMessage/whatsappMain";
import HomePageDrawer from "./Component/administrator/HomePageDrawer";
import Notify from "./notifications/Notify";
import EventCard from "./Component/administrator/EventCard";
import MessageSend from "./Component/administrator/MessageSend";
import CoordinatorLogin from "./Component/coordinator/CoordinatorLogin";
import PaymentReceipt from "./payment/PaymentReceipt";
import Pays from "./payment/pay";
import DatePicker01 from "./payment/pay";
// import MailVerification from "./Component/Registration/mailVerification";
// import { useEffect, useState } from "react";
// import { messaging } from "./firebase";
// import { getToken } from "firebase/messaging";
// import { async } from "@firebase/util";
// import { postData } from "./Services/ServerServices";

// import Home from "./Component/Registration/component/Home";
// import Login from "./Component/Registration/component/Login";
// import Signup from "./Component/Registration/component/Signup/signup";

// import { auth } from "./firebase";


function App() {
  // const [userName, setUserName] = useState("");

  // useEffect(() => {
  //   auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       setUserName(user.displayName);
  //     } else setUserName("");
  //   });
  // }, []);

  // const [Data,setData] = useState('')
  // async function requestPermission() {
  //   const permission = await Notification.requestPermission();
  //   if (permission === "granted") {
  //     // Generate Token
  //     const token = await getToken(messaging, {
  //       vapidKey:"BG9TjC3ahngJUdlyu4qbOaWss0l2DoruNuvC8ROVNjALkaz3Oqm2ef12fgpac5wvH8h4eWZO9EhrMXan3jKVJBQ",
  //     });
  //     console.log("Token Gen",token);
  //     // Send this token  to server ( db)

  //   } 
  //   else if (permission === "denied") {
  //     alert("You denied for the notification");
  //   }
  // }

  // const upload=async()=>{
  //   var formdata = new FormData()
  //   formdata.append('token',Data)
  //   var result =await  postData('events/upldtoken',formdata)
  //   console.log(result)
  // }

  // useEffect(() => {
  //   // Req user for notification permission
  //  // upload()
  //   requestPermission();
  // }, []);
  return (
    <Router>
      <Routes>
        <Route element={<ScheduleInterface />} path={"/ScheduleInterface"}></Route>
        <Route element={<Homepage />} path={"/homepage"}></Route>
        <Route element={<SliderUpdate />} path={"/sliderupdate"}></Route>
        <Route element={<WorkshopMainEvent />} path={"/WorkshopMainEvent/*"}></Route>
        <Route element={< Dashboard />} path={"/Dashboard/*"}></Route>
        {/* <Route element={<Day />} path={"/day"}></Route> */}
        <Route element={<WorkShopCard />} path={"/WorkShopCard"}></Route>
        <Route element={<DisplayAllSponsor />} path={"/DisplayAllSponsor"}></Route>
        <Route element={<Technoparv />} path={"/Technoparv/*"}></Route>
        <Route element={<Gallery />} path={"/gallery"}></Route>
        <Route element={<Gallery2018 />} path={"/Gallery2018"}></Route>
        <Route element={<InsertSliderImage />} path={"/insertslider"}></Route>
        <Route element={<VideoGallery />} path={"/video"}></Route>
        <Route element={<Vilay />} path={"/vilay"}></Route>
        <Route element={<RegistrationPage />} path={"/regs"}></Route>
        <Route element={<SignIn />} path={"/adminlogin"}></Route>
        <Route element={<TechnoparvDay01 />} path={"/TechnoparvDay01"}></Route>
        <Route element={<VilayDanceEvent />} path={"/vilaydance"}></Route>
        <Route element={<VilayCreativityEvent />} path={"/vilaycreativity"}></Route>
        <Route element={<VilayLiteraryEvent />} path={"/vilayliterary"}></Route>
        <Route element={<VilayMusicEvent />} path={"/vilaymusic"}></Route>
        <Route element={<VilaySportsEvent />} path={"/vilaysports"}></Route>
        <Route element={<RazorPay />} path={"/pay"}></Route>
        <Route element={<SendMessage />} path={"/msg"}></Route>
        <Route element={<WhatsAppShare />} path={"/whtsp"}></Route>
        <Route element={<WhatsappMain />} path={"/whtspmain"}></Route>
        <Route element={<HomePageDrawer />} path={"/drawer"}></Route>
        <Route element={<Notify />} path={"/notify"}></Route>
        <Route element={<EventCard />} path={"/eventss"}></Route>
        <Route element={<MessageSend />} path={"/message"}></Route>
        <Route element={<CoordinatorLogin />} path={"/coordinatorlogin"}></Route>
        <Route element={<PaymentReceipt />} path={"/receipt"}></Route>
        <Route element={< Pays />} path={"/pay"}></Route>
        <Route element={< DatePicker01 />} path={"/date"}></Route>
        {/* <Route element={<MailVerification />} path={"/mailVerification"}></Route> */}
        {/* <Route element={<Home />} path={"/home2"}></Route>
        <Route element={<Login />} path={"/login"}></Route>
        <Route element={<Signup />} path={"/signup"}></Route>  */}

      </Routes>
    </Router>


  );
}

export default App;
