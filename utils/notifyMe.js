import React from "react";

const notifyMe = (notificationText = 'hi') => {
  if (!("Notification" in window)) {
    console.log("This browser does not support desktop notification");
  }

  else if (Notification.permission === "granted") {
    new Notification(notificationText);
  }

  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        new Notification("Welcome to my website");
      }
    });
  }
  return
}

export default notifyMe
