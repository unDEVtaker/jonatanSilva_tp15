
//importo el modulo peliculas
const peliculas = require('./peliculas');


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