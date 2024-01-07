import React, { useCallback } from "react"; // 재사용할 수 있도록 useCallback을 사용하여 최적화
import { connect } from "react-redux";
import Todos from "../components/Todos";
import { addTodo, toggleTodo } from "../modules/todos";

function TodosContainer({ todos, addTodo, toggleTodo }) {
  const onCreate = useCallback((text) => addTodo(text), [addTodo]);
  const onToggle = useCallback((id) => toggleTodo(id), [toggleTodo]);

  return <Todos todos={todos} onCreate={onCreate} onToggle={onToggle} />;
}

//mapStateToProps 객체 형태로 리턴
//mapDispatchToProps 객체로 만들게 된다면 bindActionCreators이 자동으로 됨
const mapStateToProps = (state) => ({ todos: state.todos });
const mapDispatchToProps = {
  addTodo,
  toggleTodo,
};

// export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
export default connect((state) => ({ todos: state.todos }), {
  addTodo,
  toggleTodo,
})(TodosContainer);
