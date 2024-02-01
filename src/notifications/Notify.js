import React, { useEffect } from 'react';
import Push from 'push.js';

function Notify() {
  function requestNotificationPermission() {
    Push.Permission.request();
  }
  useEffect(() => {
    requestNotificationPermission()
  }, []);

  const sendNotification = () => {
    Push.create("Hello world!", {
      body: "How's it hangin'?",
      icon: '/icon.png',
      timeout: 4000,
      onClick: function () {
          window.focus();
          this.close();
      }
  });
  };

  

  return (
    <div>
      <h1>Hello World!</h1>
      <button onClick={sendNotification}>Send Notification</button>
    </div>
  );
}

export default Notify;
