import React, { useEffect, useRef } from "react";
import "./styles.css";

//React 16.8v 부터는 Hook 을 조건문, 반복문, 중첩함수 내에서 호출할 수 없습니다.
// 아래의 코드처럼 useEffect 내에서 이벤트 바인딩을 막고,
// 최종적으로 undefinded 를 리턴 해야합니다.
const useClick = (onClick) => {
  const ref = useRef();

  useEffect(() => {
    const element = ref;
    //component가 mount 될 때(update 될 때도) event call
    //[]: dependency
    //dependency가 없을 때 ComponentDidMount, ComponentDidUpdate 발생
    //dependency가 있을 때 ComponentDidMount만 발생
    if (element.current) {
      element.current.addEventListener("click", onClick);
    }
    // componentWillUnmount일 때 eventListener 정리
    // useEffect에서 function return 받으면 componentWillUnmount로부터 호출된 것
    return () => {
      if (element.current) {
        element.current.removeEventListener("click", onClick);
      }
    };
  }, []);
  if (typeof onClick !== "function") {
    return;
  }
  return ref;
};
const App = () => {
  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      {/* ref={title} -> useClick에 접근 */}
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;

//원래 내용
// import React, { useEffect, useRef, useState } from "react";
// import "./styles.css";

// const useClick = (onClick) => {
//   if (typeof onClick !== "function") {
//     return;
//   }
//   const element = useRef();
//   useEffect(() => {
//     //component가 mount 될 때(update 될 때도) event call
//     //[]: dependency
//     //dependency가 없을 때 ComponentDidMount, ComponentDidUpdate 발생
//     //dependency가 있을 때 ComponentDidMount만 발생
//     if (element.current) {
//       element.current.addEventListener("click", onClick);
//     }
//     // componentWillUnmount일 때 eventListener 정리
//     // useEffect에서 function return 받으면 componentWillUnmount로부터 호출된 것
//     return () => {
//       if (element.current) {
//         element.current.removeEventListener("click", onClick);
//       }
//     };
//   }, []);
//   return element;
// };
// const App = () => {
//   const sayHello = () => console.log("say Hello");
//   const title = useClick(sayHello);
//   return (
//     <div className="App">
//       {/* ref={title} -> useClick에 접근 */}
//       <h1 ref={title}>Hi</h1>
//     </div>
//   );
// };

// export default App;
