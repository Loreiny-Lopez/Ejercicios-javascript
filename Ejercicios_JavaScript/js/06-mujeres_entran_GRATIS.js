let edad89 = prompt("¿Cuántos años tienes?");
let genero = prompt("¿Eres hombre o mujer?");


edad89 = parseInt(edad89);

if (edad89 < 18 && genero.toLowerCase() !== "mujer") {
    console.log("Lo siento, eres menor de edad y no puedes ingresar.");
} else if (genero.toLowerCase() === "mujer") {
    console.log("¡Bienvenida! Puedes ingresar gratis.");
} else {
    console.log("Lo siento, como eres hombre debes pagar para ingresar.");
}
