import React, { useEffect, useState } from "react";
import "./styles.css";

const useNetwork = (onChange) => {
  //개발자도구 -> Network가 onLine인지 offLine인지 확인
  const [status, setStatus] = useState(navigator.onLine);
  const handleChange = () => {
    if (typeof onChange === "function") {
      onChange(navigator.onLine);
    }
    setStatus(navigator.onLine);
  };
  useEffect(() => {
    window.addEventListener("online", handleChange);
    window.addEventListener("offline", handleChange);
    //clean up(ComponentWillUnMount)
    return () => {
      window.removeEventListener("online", handleChange);
      window.removeEventListener("offline", handleChange);
    };
  }, []);
  return status;
};
const App = () => {
  const handleNetworkChange = (online) => {
    console.log(online ? "We just went online" : "we are offline");
  };
  const onLine = useNetwork(handleNetworkChange);
  return (
    <div className="App">
      <h1>{onLine ? "Online" : "offline"}</h1>
    </div>
  );
};

export default App;
