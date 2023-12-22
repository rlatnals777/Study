const h1 = document.quertSelector("div.hello:first-child h1");

function handleTitleClick() {
  // toggle은 clicked가 classList에 없으면 추가해주고, 있으면 없어지게 만듬
  h1.classList.toggle("clicked");
}

h1.addEventListener("click", handleTitleClick);
