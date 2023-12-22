//계산기 만들어보기
const calculrator = {
  add: function (a, b) {
    return a + b;
  },
  minus: function (a, b) {
    return a - b;
  },
  times: function (a, b) {
    return a * b;
  },
  division: function (a, b) {
    return a / b;
  },
  powerOf: function (a, b) {
    return a ** b;
  },
};

// return을 하게되서 plusResult는 3이됨
const plusResult = calculrator.add(2, 3);
const minusResult = calculrator.minus(plusResult, 10);
const timesResult = calculrator.times(10, minusResult);
const divideResult = calculrator.division(timesResult, plusResult);
const powerResult = calculrator.powerOf(divideResult, minusResult);

console.log(plusResult);
