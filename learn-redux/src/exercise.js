import { createStore } from "redux"; //store를 만들어주는 함수

const initialState = {
  counter: 0,
  text: "",
  list: [],
};

//액션타입 정의
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";
const CHANGE_TEXT = "CHANGE_TEXT";
const ADD_TO_LIST = "ADD_TO_LIST";

//액션 생성함수를 만들 때는 화살표함수, 소문자로 작성
const increase = () => ({
  type: INCREASE,
});

const decrease = () => ({
  type: DECREASE,
});

const changeText = (text) => ({
  type: CHANGE_TEXT,
  text,
});

const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

//리듀서
//...state : 기존꺼 유지하고 counter +1
//state = initialState : redux에서 초기상태 만들 때 한번 호출하기 때문 (undefined 방지)
//list: state.list.concat(action.item) : 기존의 list에 새로운 item을 추가한 새로운 배열을 만들어서 기존 리스트를 대체
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };

    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

const store = createStore(reducer);
console.log(store.getState());

const listener = () => {
  const state = store.getState();
  console.log(state);
};

//store 구독
const unsubscribe = store.subscribe(listener);

//store 구독 해지
// unsubscribe();

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText("안녕하세요"));
store.dispatch(addToList({ id: 1, text: "하이" }));

//웹 console창에 명령어 적을 수 있게 함
window.store = store;
window.unsubscribe = unsubscribe;
