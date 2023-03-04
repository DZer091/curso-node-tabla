const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const colors = require('colors');


const crearArchivo = (base = 5) => {

    return new Promise((resolve, rejects) => {
        console.log('===================').green;
        console.log('    TABLA DEL'.green, colors.blue(base));
        console.log('===================').green;

        let salida = '';

        for (let i = 1; i <= 10; i++) {
            salida += ` ${base} x ${ i } = ${base * i} \n`;
        }

        console.log(salida);

        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     if (err) throw err;

        //     console.log('Archivo creado exitosamente.')
        // });

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        resolve(`Archivo creado exitosamente. Tala del ${base}`);
    })



}

const crearArchivo2 = async(base = 5, listar = false, hasta = 10) => {
    try {



        let salida = '';

        for (let i = 1; i <= hasta; i++) {
            salida += ` ${base} x ${ i } = ${base * i} \n`;
        }

        if (listar) {
            console.log('===================');
            console.log('    TABLA DEL', base);
            console.log('===================');
            console.log(salida);

        }

        // fs.writeFile(`tabla-${base}.txt`, salida, (err) => {
        //     if (err) throw err;

        //     console.log('Archivo creado exitosamente.')
        // });

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

        return `Archivo creado exitosamente. Tala del ${base}`
    } catch (error) {
        throw error;
    }

}


module.exports = {
    crearArchivo, //crearArchivo: crearArchivo
    crearArchivo2
}