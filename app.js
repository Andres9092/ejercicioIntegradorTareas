// const fs = require('fs')  // req el modulo nativo fs, que permite leer archivo.

// let archivo = fs.readFileSync('./tareas.json', 'utf-8')
// console.log(archivo)

// let tareas = JSON.parse(archivo)
// console.log(tareas)
// console.log('-------------------------------------------')

// let comando = process.argv[2]
// console.log(comando)
// console.log('****************')

// switch(comando){

//     case 'listar':

//         for (let i= 0; i < tareas.length; i ++){

//             console.log((i+1) + ':' + tareas[i].titulo + ':' + tareas[i].estado)
//         }
//         break;

//     case 'listar1':

//         tareas.forEach(function(objeto,index){

//             console.log((index + 1)+ ':' + objeto.titulo + ':' + objeto.estado)
//         }             
//         );
//         break;
    
//     case 'undefined':
//         console.log('No ha ingresando ningun comando')
//         break;

//     default:
//         console.log('Comando no valido')
//         break;
// }


                                               // func2 puede ser cualquier adoptar cualquier nombre de variable.
const func2 = require('./funcionesdeTareas')  // req el modulo 'func' exportado del archivo funcionesdeTareas.js

console.log('-------------------------------------------')

let comando = process.argv[2]  //guardo en variable la informacion guardada en posicion 2 al pasar por terminal el comando de ejecucion.

switch(comando){  // comparo esa info pasada por terminal y guardada en 'comando' con dif opciones.

    case 'listar':
                                    // la variable ta puede tener cualquier nombre, y guarda el array de objetos.
        let ta= func2.listar();      // METODO FUNCION LISTAR DEL modulo exportado-> devuelve array de objetos que guardo en varible: ta

        for (let i= 0; i < ta.length; i ++) {  // barre el array de objetos, uno a uno.

            console.log((i+1) + ':' + ta[i].titulo + ':' + ta[i].estado) //imprimo valores de props de cada objeto barrido en el array con el contador.
        }
        break;

    case 'listar1':

        let tareas2 = func2.listar();    //METODO FUNCION listar DEL modulo exportado
        tareas2.forEach(function(objeto,index){  //.foreach barre el array y aplica para cada uno en orden el codigo interno. El indice arranca en cero.

            console.log((index + 1)+ ':' + objeto.titulo + ':' + objeto.estado)
        }             
        );
        break;

    case 'guardar':    

        let objAd = {titulo: "ch",   //creo variable con objeto para reemplazar las tareas del archivo tareas.js.
        estado: "en progreso"
       
           }
        func2.escribirJSON(objAd)  //METODO FUNCION escribirJSON DEL modulo exportado. Podria mandarle un array de objetos como parametro.

        break;

    case 'crear':

        objetoNuevo = process.argv[3]
        func2.guardarTarea(objetoNuevo)
        break;

    case 'filtrar':

           
        estado = process.argv[3]
        func2.filtrarPorEstado(estado)  //paso argumento a parametro de metodo el comando de estado ingresado por terminal
        break;
            
                
    case 'undefined':
        console.log('No ha ingresando ningun comando')
        break;

    default:
        console.log('Comando no valido')
        break;
}
