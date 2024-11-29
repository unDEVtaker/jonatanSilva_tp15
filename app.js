
//importo el modulo peliculas
const peliculas = require('./peliculas');


//funcion mostrarPeliculas, para mostrar el detalle
const mostrarPeliculas = function() {
//foreach para iterar los objetos del array peliculas y lo muestro con un console.log
    peliculas.forEach(pelicula => {
        console.log(`ID: ${pelicula.id}`);
        console.log(`Rating: ${pelicula.rating}`);
        console.log(`Awards: ${pelicula.awards}`);
        console.log(`Length: ${pelicula.length} min`);
        console.log(`Price: $${pelicula.price}`);
        console.log(`Genre: ${pelicula.genre}`);
        console.log('-------------------------');
    });
};

mostrarPeliculas();

//Micro desafío 2 (opcional):
const fs = require('fs');
const filePath = './mensaje.txt';
const mensaje = fs.readFileSync(filePath, 'utf-8');
console.log(mensaje);