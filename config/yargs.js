const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Muestra la información de la tabla'
    })
    .option('l', {
        alias: 'hasta',
        type: 'number',
        demandOption: false,
        default: 10,
        describe: 'Número hasta donde deseas multiplicar'
    })
    .check((argv, options) => {
        if (isNaN(argv.b)) {
            throw 'La base debe ser un número'
        }
        return true
    })
    .argv;


module.exports = argv;