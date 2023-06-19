const menos = document.querySelector(".btn-menos"),
  num = document.querySelector(".btn-num"),
  mas = document.querySelector(".btn-mas");

let indice = 1;

mas.addEventListener("click", () => {
  indice++;
  if (indice < 10) indice = "0" + indice;
  else indice = indice;
  num.innerHTML = indice;
});

menos.addEventListener("click", () => {
  if (indice > 1) {
    indice--;
    if (indice < 10) indice = "0" + indice;
    else indice = indice;
    num.innerHTML = indice;
  }
});
