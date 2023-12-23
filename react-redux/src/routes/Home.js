import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../store";
import ToDo from "../components/ToDo";

//useSelector == getState() 같은기능이며, mapStateToProps 대체
//useDispatch -> mapDispatchToProps 대체
function Home() {
  const [text, setText] = useState("");
  const toDo = useSelector((state) => state);
  const dispatch = useDispatch();

  function onChange(e) {
    setText(e.target.value);
  }
  function onSubmit(e) {
    e.preventDefault();
    dispatch(actionCreators.addToDo(text));
    setText("");
  }
  return (
    <>
      <h1>To Do</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDo.map((item) => (
          <ToDo {...item} key={item.id} />
        ))}
      </ul>
    </>
  );
}

//mapStateToProps : Redux State로부터 home(component)에 prop으로써 전달
// function mapStateToProps(state) {
//   return { toDos: state };
// }

// function mapDispatchToProps(dispatch) {
//   return {
//     addToDo: (text) => dispatch(actionCreators.addToDo(text)),
//   };
// }
//connect : store로부터 state를 가져옴
//Home으로 보내는 Props에 추가될 수 있도록 허용
//mapStateToProps가 필요없을 경우 -> connect(null, mapDispatchToProps)
// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;
