const argv = require('./config/yargs').argv;
const colors = require(' colors/safe ');


const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {

    case 'listar':
        listarTabla(argv.base, argv.Limite);
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(` Archivo creado: `, colors.green(archivo)))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
}

//let argv2 = process.argv;

//console.log(argv.base);
//console.log('Limite', argv.limite);

//console.log(argv2);

// Requireds
//const fs = require('fs');
//const fs = require('express');
//const fs = require('fs');
//let parametro = argv[2];
//let base = parametro.split('=')[1]
//let base = '7';
// let data = '';
//console.log(parametro);

// for (let i = 1; i <= 10; i++) {

//     data += `${ base} * ${i} = ${ base * i}\n`;
// }
// fs.writeFile(`tablas/tabla-${ base }.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${ base }.txt ha  sido creado`);
// });
// //2 * 1 = 2


//