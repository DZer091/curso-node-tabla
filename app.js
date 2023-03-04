//const { argv } = require('process');
const { crearArchivo, crearArchivo2 } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');




console.clear();

// console.log(process.argv);
// console.log(argv);


//const base = 9;

crearArchivo2(argv.b, argv.l, argv.h)
    .then(tablaCreada => console.log(tablaCreada.rainbow, ' correctamente.'))
    .catch(err => console.log(err));


// const [, , arg3 = 'base=5'] = process.argv;
// const [, base = 5] = arg3.split('=');

// console.log(base);


// crearArchivo(base)
//     .then(tablaCreada => console.log(tablaCreada, ' correctamente.'))
//     .catch(err => console.log(err));