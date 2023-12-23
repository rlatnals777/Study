import React from "react";
import { actionCreators } from "../store";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function ToDo({ text, id }) {
  const dispatch = useDispatch();

  function onDelete() {
    dispatch(actionCreators.deleteToDo(id));
  }
  return (
    <li>
      <Link to={`/${id}`}>
        {text}
        <button onClick={onDelete}>DEL</button>
      </Link>
    </li>
  );
}

export default ToDo;
