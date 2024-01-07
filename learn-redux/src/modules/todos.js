const ADD_TODO = "todos/ADD_TODO"; //할일 항목 추가
const TOGGLE_TODO = "todos/TOGGLE_TODO"; //할일 항목 체크하는 액션

let nextId = 1;
//액션함수 생성
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODO,
  id,
});

//초기 상태 선언
const initialState = [
  /*
    {
        id:1,
        text: '예시',
        done : false
    }
  */
];

//리듀서
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.id ? { ...todo, done: !todo.done } : todo
      );
    default:
      return state;
  }
}
