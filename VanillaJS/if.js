//prompt(문자, default) : 사용자에게 창을 띄울 수 있도록 해줌
const age = parseInt(prompt("How old are you?"));

//isNaN(): boolean으로 반환됨
if (isNaN(age) || age < 0) {
  console.log("please write a real positive number");
} else if (age < 18) {
  console.log("You are too young");
} else if (age >= 18 && age <= 50) {
  console.log("you can drink");
} else if (age > 50 && age <= 80) {
  console.log("You should exercise");
} else if (age === 100) {
  console.log("wow you are wise");
} else if (age > 80) {
  console.log("you can do whatever you want");
}

//뒤에부터 계산
if ((a && b) || (c && b) || x || w) {
}
