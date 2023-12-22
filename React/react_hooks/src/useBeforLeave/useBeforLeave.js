import React, { useEffect, useRef, useState } from "react";
import "./styles.css";

const useBeforeLeave = (onBefore) => {
  const handle = (event) => {
    const { clientY } = event;
    if (clientY <= 0) {
      onBefore();
    }
  };
  useEffect(() => {
    if (typeof onBefore !== "function") {
      return;
    }
    //마우스가 document를 벗어났을 때
    document.addEventListener("mouseleave", handle);
    //ComponentWillUnMount
    return () => document.removeEventListener("mouseleave", handle);
  }, []);
};
const App = () => {
  const begForLife = () => console.log("Pls dont leave");
  useBeforeLeave(begForLife);
  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
};

export default App;

//원래 코드
// import React, { useEffect, useRef, useState } from "react";
// import "./styles.css";

// const useBeforeLeave = (onBefore) => {
//   if (typeof onBefore !== "function") {
//     return;
//   }
//   const handle = (event) => {
//     const { clientY } = event;
//     if (clientY <= 0) {
//       onBefore();
//     }
//   };
//   useEffect(() => {
//     //마우스가 document를 벗어났을 때
//     document.addEventListener("mouseleave", handle);
//     //ComponentWillUnMount
//     return () => document.removeEventListener("mouseleave", handle);
//   }, []);
// };
// const App = () => {
//   const begForLife = () => console.log("Pls dont leave");
//   useBeforeLeave(begForLife);
//   return (
//     <div className="App">
//       <h1>Hello</h1>
//     </div>
//   );
// };

// export default App;
