import React from "react";
import { remove } from "../store";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function ToDo({ text, id }) {
  const dispatch = useDispatch();

  function onDelete() {
    dispatch(remove(id));
  }
  return (
    <li>
      <Link to={`/${id}`}>{text}</Link>
      <button onClick={onDelete}>DEL</button>
    </li>
  );
}

export default ToDo;
