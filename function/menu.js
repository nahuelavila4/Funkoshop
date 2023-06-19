const menu = document.getElementById("menu-burger");
const lista = document.getElementById("lista");

menu.addEventListener("click", () => {
  lista.classList.toggle("menu-show");
});

// ----------------------dropdown-----------------------

let filtroboton = document.querySelectorAll(".menu-texto");

filtroboton.forEach(boton => {
  boton.addEventListener("click", () => {
    
    let menu = boton.nextElementSibling;
    console.log(menu);
    let height = 0;
    if (menu.clientHeight == "0") {
      height = menu.scrollHeight;
    }
    menu.style.height = `${height}px`;
  });
});
