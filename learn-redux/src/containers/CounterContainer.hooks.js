import React from "react";
import Counter from "../components/Counter";
import { useSelector, useDispatch, shallowEqual } from "react-redux"; //상태조회
import { decrease, increase, setDiff } from "../modules/counter";

function CounterContainer() {
  //useSelector 최적화 방법
  //1. number, diff 각각 useSelector 선언해준다.
  //const number = useSelector(state => state.counter.number)
  //2. shallowEqual 사용하여 값이 일치하는지 비교하는 함수 넣기
  const { number, diff } = useSelector(
    (state) => ({
      number: state.counter.number,
      diff: state.counter.diff,
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  //액션함수 생성한거 불러오기
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  //Counter에 전달
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
