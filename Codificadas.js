let nombre = prompt("Como te llamas?")
// alert() - enviar una alerta
// prompt() - 
// confirm() - devuelve True or False
// console.log()


// Ejercicio de Decision - Switch
let nname = prompt('¿Cómo te llamas?');
let saludo = "";

switch(nname){
    case "Maria":
        saludo = "Hola María";
        break;
    case "Pepe":
        saludo = "Hola Pepe";
        break;
    default:
        saludo = "Uy la fina"
}
console.log(saludo);


let score = prompt('¿Cuál fue tu calificación?');
let message = "";

if (score >= 0 && score <6 )
{
    message = "Insuficiente";
}
else if(score >=6 && score <= 8 )
{
    message = "Suficiente";
}
else if(score > 8 && score <= 10 )
{
    message = "Sobresaliente";
}
else
{
    message = "Eso no es un numero";
}

console.log(message);

let invitados = [];
let i = 0;
do
{
    let nombre = prompt('¿Cuál es tu nombre?');
    invitados[i] = nombre;
    i++;
} while(i <= 4)

for(let j = 0;j<invitados.length;j++)
{
    console.log('Tus invitados son: ', invitados[j]);
}

//Nuevo comentarios