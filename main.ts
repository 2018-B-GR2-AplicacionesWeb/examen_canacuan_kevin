import * as util from "util";

const fs = require('fs');
const rxjs = require('rxjs');

// @ts-ignore
const leerBDD = new Promise(
    (resolve, reject) => {
        fs.readFile(
            'people.json',
            'utf-8',
            (error, contenidoArchivo) =>{
                if(error){
                    reject({mensaje: 'Error en la Base de Datos....'})
                }else{
                    resolve(JSON.parse(contenidoArchivo))
                }
            }
        )
    }
);



leerBDD
    .then(
        (baseDatos)=> {
            console.log('1) Busque los tipos de "gender" en el arreglo people.json');
            console.log('5) Clasifique y cree diferentes arreglos dependiendo del gender, eye_color, skin y hair_color.');
            const contenidoArchivo = JSON.parse(JSON.stringify(baseDatos));
            let genderM = [];
            let genderF = [];
            let genderNA = [];
            contenidoArchivo.forEach(
                (actual, indiceActual, arreglo)=> {
                    if(actual['gender'] === 'male') genderM.push(actual['gender']);
                    else if (actual['gender'] === 'female') genderF.push(actual['gender']);
                    else genderNA.push(actual['gender']);


                }
            );
            console.log('Existen ' + genderM.length + ' male');
            console.log('Existen ' + genderF.length + ' female');
            console.log('Existen ' + genderNA.length + ' n/a');
            console.log('\n');
        }

    );


leerBDD
    .then(
        (baseDatos)=> {
            console.log('2) Busque los tipos de "eye_color" en el arreglo people.json');
            const contenidoArchivo = JSON.parse(JSON.stringify(baseDatos));
            let blueEyes = [];
            let yellowEyes = [];
            let redEyes = [];
            let brownEyes = [];
            let othersEyes = [];
            contenidoArchivo.forEach(
                (actual, indiceActual, arreglo)=> {
                    if (actual['eye_color'] === 'blue') blueEyes.push(actual['eye_color']);
                    else if (actual['eye_color'] === 'yellow') yellowEyes.push(actual['eye_color']);
                    else if (actual['eye_color'] === 'red') redEyes.push(actual['eye_color']);
                    else if (actual['eye_color'] === 'brown') brownEyes.push(actual['eye_color']);
                    else othersEyes.push(actual['eye_color']);
                }
            );
            console.log('Existen ' + blueEyes.length + ' blue eye');
            console.log('Existen ' + yellowEyes.length + ' yellow eye');
            console.log('Existen ' + redEyes.length + ' red eye');
            console.log('Existen ' + brownEyes.length + ' brown eye');
            console.log('Existen ' + othersEyes.length + ' other eye');
            console.log('\n');
        }
    );



leerBDD.then(
    (baseDatos) => {
        console.log('3) Busque los tipos de "skin_color" en el arreglo people.json');
        const contenidoArchivo = JSON.parse(JSON.stringify(baseDatos));
        contenidoArchivo.forEach(
            (actual, indiceActual, arreglo) => {
                console.log(actual['skin_color'])
            }
        );
        console.log('\n');
    }
);



leerBDD.then(
    (baseDatos) => {
        console.log('4) Busque los tipos de "hair_color" en el arreglo people.json');
        const contenidoArchivo = JSON.parse(JSON.stringify(baseDatos));
        contenidoArchivo.forEach(
            (actual, indiActual, arrarRespuesta) => {
                console.log(actual['hair_color'])
            }
        );
        console.log('\n');
    }
);


leerBDD.then(
    (baseDatos) => {
        console.log('6) Cree un arreglo del abecedario, revisar si existe al menos un personaje con cada letra del abecedario');
        const contenidoArchivo = JSON.parse(JSON.stringify(baseDatos));
        var abecedario = ['q','w','e'];
        contenidoArchivo.forEach(
            (actual, indiActual, arrarRespuesta) => {
                console.log(actual['hair_color'])
            }
        );
        console.log('\n');
    }
);