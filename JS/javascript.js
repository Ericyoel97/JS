
class Personaje {
    constructor(nombre, poder, nivel, origen, invocacion, valoracion, id) {
        this.nombre = nombre;
        this.poder = poder;
        this.nivel = nivel;
        this.origen = origen;
        this.invocacion = invocacion;
        this.valoracion = parseInt(valoracion);
        this.id = id;

    }

    asignarId(array) {
        this.id = array.length;
    }

    valorar(valoracion) {
        this.valoracion = parseInt(valoracion);
    }

}

const personajes = [
    new Personaje ("Naruto", "rasengan", "kage", "konoha", "gamakichi", 10, 1),
    new Personaje ("sakura", "curacion", "chunin", "konoha", "katsuyu", 5, 3),
    new Personaje ("kakashi", "sharingan", "jonin", "konoha", "pakkun", 7, 4),
    new Personaje ("sarutobi", "sello consumidor del demonio", "kage", "konoha", "ennma", 1, 5,),
    new Personaje ("itachi", "mangekyou sharingan", "Dios", "desertor de konoha", "cuervos", 10, 6),
    new Personaje ("gaara", "ataud de arena", "kage", "sunagakure", "shukaku", 10, 7)

]

console.log(Personaje)



//ordenando el array


let criterio = prompt("elegi un criterio deseado: \n1 - personaje (A a Z) \n2 - personaje (Z a A) \n3 - mejor a peor puntuado");

function ordenar(criterio, array) {

    let arrayOrdenado = array.slice(0);

    switch (criterio) {
        case "1":
            let nombreAscendente = arrayOrdenado.sort((a, b) => a.nombre.localeCompare(b.nombre));
            return nombreAscendente;

        case "2":
            let nombreDescendente = arrayOrdenado.sort((a, b) => b.nombre.localeCompare(a.nombre));
            return nombreDescendente;

        case "3":
            return arrayOrdenado.sort((a, b) => b.valoracion - a.valoracion);




        default:
            alert("no es un criterio valido");
            break;
    }
}


//mostrando el alert

function crearStringresultado(array) {
    let info = "";

    array.forEach(element => {

        info += "personaje: " + element.Personaje + "\nnivel: " + element.nivel + "\npoder:" + element.poder + "\norigen: " + element.origen + "\nvaloracion: " + element.valoracion + "\npuntos. \n\n"

    });

    return info;

}

alert(crearStringresultado(ordenar(criterio, personajes)))


