const argv = require('./config/yargs').argv;
var colors = require('colors');
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let commando = argv._[0];
switch (commando) {
    case 'listar':
        {
            console.log('listar');
            listarTabla(argv.base, argv.limite).then(() => console.log('Tabla creada'))
            .catch((errr) => {
                console.log(errr);
            });
            break;
        }
    case 'crear':
        {
            console.log('crear');
            crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado : `.yellow + `${archivo}`.green))
            .catch((errr) => {
                console.log(errr);
            });
            break;
        }
    default:
        {
            console.log('defeault');
            break;
        }
}