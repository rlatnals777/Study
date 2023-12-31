import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const useNotification = (title, options) => {
  if (!("Notification" in window)) {
    return;
  }

  const fireNotif = () => {
    if (Notification.permission !== "granted") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          new Notification(title, options);
        }
        //user가 알아주길 바라지 않는다.
        else {
          return;
        }
      });
    } else {
      new Notification(title, options);
    }
  };
  return fireNotif;
};
const App = () => {
  const triggerNofif = useNotification("Can I steal your kimchi?", {
    body: "I Love Kimchi dont you",
  });
  return (
    <div className="App" style={{ height: "1000vh" }}>
      <button onClick={triggerNofif}>Hello</button>
    </div>
  );
};

export default App;
