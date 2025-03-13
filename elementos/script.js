const titulo = document.getElementById("titulo");
const link = document.querySelector("a");
const listaNaoOrdenada = document.querySelector("ul");
const listaOrdenada = document.getElementById("lista-ordenada");

titulo.innerText = "bem vindo ao meu site";
link.innerText = "visite a Prozeducação";

listaNaoOrdenada.innerHTML = `
    <li>item 1</li>
    <li>item 2</li>
    <li>item 3</li>
`;

listaOrdenada.innerHTML = `
    <li><a href="https://www.google.com">Google</a></li>
    <li><a href="https://www.youtube.com">YouTube</a></li>
    <li><a href="https://www.github.com">GitHub</a></li>
`;