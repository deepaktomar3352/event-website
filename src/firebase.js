import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
    apiKey: "AIzaSyAyLOg8d8bRLaKZbDHZ35JoyTuSOc9ABFM",
    authDomain: "test-c5566.firebaseapp.com",
    projectId: "test-c5566",
    storageBucket: "test-c5566.appspot.com",
    messagingSenderId: "94691089033",
    appId: "1:94691089033:web:763940570f68b2b5b54458"
  };

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
export const auth = getAuth();