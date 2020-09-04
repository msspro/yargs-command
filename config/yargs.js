const options = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'Imprime la consulta', options)
    .command('crear', 'Crea archivo', options)
    .help()
    .argv;


module.exports = {
    argv
}