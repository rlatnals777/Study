import React, { useEffect, useState } from "react";
import "./styles.css";

const useTitle = (initialTitle) => {
  const [title, setTitle] = useState(initialTitle);
  const updateTitle = () => {
    const htmlTitle = document.querySelector("title");
    htmlTitle.innerText = title;
  };
  useEffect(updateTitle, [title]);
  return setTitle;
};
// const App = () => {
//   const titleUpdater = useTitle("Loading...");
//   //시간지연설정
//   setTimeout(() => titleUpdater("Home"), 5000);

//   return (
//     <div className="App">
//       <div>helo</div>
//     </div>
//   );
// };

export default useTitle;
