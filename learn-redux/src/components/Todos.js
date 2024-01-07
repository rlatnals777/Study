import React, { useState } from "react";

//할일 항목 하나 보여주기
const TodoItem = React.memo(function TodoItem({ todo, onToggle }) {
  return (
    <li
      style={{
        textDecoration: todo.done ? "line-through" : "none",
      }}
      //todo.id : modules/todos.js에서 todo 객체를 불러옴
      onClick={() => onToggle(todo.id)}
    >
      {todo.text}
    </li>
  );
});

// 여러개 할일 항목 보여주기
const TodoList = React.memo(function TodoList({ todos, onToggle }) {
  return (
    <ul>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} />
      ))}
    </ul>
  );
});

//TodoList랑 새항목 등록 폼 렌더링 역할
//todos: 여러개의 할일 항목들을 보여줌
//onToggle : true/false
function Todos({ todos, onCreate, onToggle }) {
  const [text, setText] = useState("");
  const onChange = (e) => setText(e.target.value);

  const onSubmit = (e) => {
    e.preventDefault();
    onCreate(text);
    setText("");
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          onChange={onChange}
          placeholder="할일을 입력하세요..."
        />
        <button type="submit">등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggle} />
    </div>
  );
}

export default React.memo(Todos);
