import React from "react";
import { bindActionCreators } from "redux";
import Counter from "../components/Counter";
import { connect } from "react-redux"; //상태조회
import { decrease, increase, setDiff } from "../modules/counter";

function CounterContainer({ number, diff, increase, decrease, setDiff }) {
  //Counter에 전달
  return (
    <Counter
      number={number}
      diff={diff}
      onIncrease={increase}
      onDecrease={decrease}
      onSetDiff={setDiff}
    />
  );
}

const mapStateToProps = (state) => ({
  number: state.counter.number,
  diff: state.counter.diff,
});

////onIncrease : dispatch로 increase액션함수를 호출
// onIncrease: () => dispatch(increase()),
// onDecrease: () => dispatch(decrease()),
// onSetDiff: (diff) => dispatch(setDiff(diff)),
// 위에 내용을 아래 내용으로 간단하게 바꿈

//mapDispatchToProps 가 객체라면 connect에도 작동됨
// const mapDispatchToProps =
// {
//       increase,
//       decrease,
//       setDiff,

// }
const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      increase,
      decrease,
      setDiff,
    },
    dispatch
  );

// const enhance = connect(mapStateToProps, mapDispatchToProps)
// export default enhance(CounterContainer)
// 위에 내용을 아래 내용으로 간단하게 바꿈
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
