//argument는 function을 실행하는 동안 어떤 정보를 function에게 보낼 수 있는 방법
function sayHello(nameOfPerson, age) {
  console.log("Hello My Name is " + nameOfPerson + " and I'm" + age);
}

sayHello("sumin", 10);

function plus(firstNumber, secondNumber) {
  console.log(firstNumber + secondNumber);
}

function divide(a, b) {
  console.log(a / b);
}

plus(8, 60);
divide(98, 20);

//object 안에 function 부르는 방법
const player = {
  name: "sumin",
  sayHello: function (otherPersonName) {
    console.log("Hello! " + otherPersonName + " nice to meet you!");
  },
};

player.sayHello("lynn");
player.sayHello("sumin");

//계산기 만들어보기
const calculrator = {
  add: function (a, b) {
    console.log(a + b);
  },
  minus: function (a, b) {
    console.log(a - b);
  },
  division: function (a, b) {
    console.log(a / b);
  },
  powerOf: function (a, b) {
    console.log(a ** b);
  },
};

calculrator.add(1, 2);
calculrator.minus(1, 2);
calculrator.division(1, 2);
calculrator.powerOf(1, 2);
