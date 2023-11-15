/* Ejercicio js clase 6 */

/* const nombre = prompt("Cual es tu nombre?")
const edad = prompt("Cual es tu edad?")

console.log(`La edad del usuario es: ${edad}`);
alert("Hola " + nombre + " de " + edad + ", te interesaria adquirir tickets? 🎟️") */


/* Ejercicio DOM clase 8 */

const reqMinim = 3;
let nombre = prompt("Cual es tu nombre?").toUpperCase();

while(nombre.length < reqMinim){
    nombre = prompt("Ingrese su nombre nuevamente, debe tener 3 letras minimo.").toUpperCase();
}

const span = document.getElementById("welcome");
span.textContent = `Hola, ${nombre}`;
const i = document.querySelector("i");
i.setAttribute("class", "fa fa-ticket");