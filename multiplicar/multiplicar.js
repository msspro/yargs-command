const fs = require('fs');
var colors = require('colors');
let data = '';

let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject('No es un numero');
            return;
        }

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base*i} \n `;
        }

        fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
            if (err)
                reject(err);
            else
                resolve(`tabla-${base}.txt`)
        });
    });
};

let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject('Se ingreso un dato invalido');
            return;
        }

        console.log('++++++++++++++++++++++++++++++'.red);

        for (let i = 1; i <= limite; i++) {
            console.log(`${base} * ${i} = ${base*i} \n `);
        }

    });
};

module.exports = {
    crearArchivo,
    listarTabla
};