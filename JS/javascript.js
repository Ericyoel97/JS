


function saludar(nombre, momento){ //dentro del parentesis se agrega el parametro para la funcion
    
    alert ("buenas, como estas "   + nombre);
}  






//llamado de la funciom
let nombreUsuario = prompt("ingresa tu nombre");
saludar(nombreUsuario)



let savedPass = "naruto";

for (let i = 0; i < 3; i++){
    let userPass = prompt("personaje que evangeliza");
    if(userPass===savedPass){
        alert("adivinaste perro");
        break;
    }
    alert("no, no es. otro intento");

    
    
}
alert("otra pregunta")
let personajeCorrecto = "gaara";
let continuar = true;
let personajeUsuario = prompt("que personaje es el Jinchuuriki del shukaku?");

while(continuar){
    if(personajeCorrecto===personajeUsuario){
        alert("esaa, parece que sos un fan");
        continuar =false;
        break;
    }

    alert("personaje incorrecto");
    personajeUsuario = prompt("Jinchuuriki del shukaku");
}


alert ("siguiente adivinanza") 
let opcion = prompt("Que poder es caracteristico de Naruto: \n1- chidori \n2 amaterasu \n3- rasengan \n4 bola de fuego");
switch (opcion){
    case "1":
        alert("Este es de Sasuke");
        break;
    case "2":
        alert("No, no es");
        break;
    case "3":
        alert("bien ahi");
        break;
    case "4":
        alert("casi pero no");
        break
    
    default:
        alert("invalido tonto")
} 




