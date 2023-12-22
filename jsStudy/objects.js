const player = {
  name: "sumin",
  points: 10,
  fat: true,
};

console.log(player);
//아래 두개의 콘솔은 값이 값다.
console.log(player.name);
console.log(player["name"]);
//const object 이다. array와 다르다. array를 쓰지 않는 이유: 해당 데이터가 어떤 데이터를 설명하는지 알지 못하기때문에
//const player를 바꾸는 것이 아니기 때문에 player.fat은 수정이 가능하다.
player.fat = false;
console.log(player);
//존재하지 않는 것도 만들어 넣을 수 있다.
player.lastName = "potato";
console.log(player);
