importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyAyLOg8d8bRLaKZbDHZ35JoyTuSOc9ABFM",
  authDomain: "test-c5566.firebaseapp.com",
  projectId: "test-c5566",
  storageBucket: "test-c5566.appspot.com",
  messagingSenderId: "94691089033",
  appId: "1:94691089033:web:763940570f68b2b5b54458"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  alert(json.stringify(payload))
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});