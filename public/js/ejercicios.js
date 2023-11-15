
/* alert("Esta es una BETA")

let edad;
let esNumero = false;

while (!esNumero) {
    edad = parseInt(prompt("Cual es tu edad?"))
    if (!isNaN(edad)) {
        esNumero = true;
    } else {
        alert("Debes ingresar un numero.")
    }
} */
/* BUCLE PARA QUE INGRESE UN NUMERO */


/* let nombre;
let esNombre = false;
const span = document.getElementById("#welcome");

while (!esNombre) {
    nombre = prompt("¿Cual es tu nombre?")
    if (nombre === null) {
        alert("Debe completar su nombre !! Tch...")
    } else if (nombre.length < 2) {
        alert("El nombre debe tener al menos 2 caracteres. Osea hellou, quien tiene una letra como nombre bro¿?")
    } else {
        nombre = true;
        alert(" Hola " + nombre + " de " + edad + " años, te interesaria adquirir tickets? 🎟️")
    }
} /* BUCLE PARA QUE INGRESE SU NOMBRE */
/* span.textContent = "Hola, " + nombre; */

/* let h1 = document.querySelector(h1)
h1.textContent = "Hola, ya cambie, soy diferente." */

/* let var2 = document.querySelector(h1)
h1.textContent = "No me volvio a salir" */

/* let ahoraSi = document.querySelector(h1)
h1.textContent= "Ahora si me salio, todo es practica y hablar lo que razonamos." */

/* let variableCualquiera = document.querySelector(h1)
h1.innerHTML = "<p> Ahora soy un p. jeje </p>" */
/* 
let h1 = document.querySelector("h1")
h1.innerHTML = "<p> Ahora soy un p de perrito malvado </p>" */

/* let h3 = document.querySelector('h3');
h3.innerHTML = '<p>Esto es un parrafo </p>';
 */

/* const span = document.querySelector("span")
span.getAttribute("href")
console.log(span)
span.setAttribute("") */

/* let contraseñaCorrecta = "miContraseña";
let intentos = 0;
const maxIntentos = 3;

while (intentos < maxIntentos) {
  const contraseñaIngresada = prompt("Por favor, ingrese su contraseña:");

  if (contraseñaIngresada === contraseñaCorrecta) {
    console.log("Contraseña correcta. Acceso concedido.");
    break;
  } else {
    console.log("Contraseña incorrecta. Intentelo de nuevo");
    intentos++;
  }
} // Hasta aca llega while

if (intentos === maxIntentos) {
  console.log("Cuenta bloqueada! Se excedio el numero de intentos.");
}

if (cuentaBloqueada) {
  console.log("Por favor, pongase en contacto con el soporte para desbloquear su cuenta.");
}  */

/* while(palabraSecreta !== palabraUsuario){
    alert("La palabra es incorrecta");
    palabraUsuario = prompt("Intentelo nuevamente.");

    palabraSecreta == false;
} */

