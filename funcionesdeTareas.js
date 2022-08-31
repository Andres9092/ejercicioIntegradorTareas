const fs = require('fs')  // req el modulo nativo fs, que permite leer archivo.


let func = {  // objeto con propiedades de tipo metodo de funciones.

    archivo : './tareas.json',  
    listar : function () {

        let archivo = fs.readFileSync(this.archivo, 'utf-8')  // lectura de archivo a traves de modulo 'fs'. El 'this' porque hace ref a una prop mismas del objeto.
        let tareas = JSON.parse(archivo)  // transformo formato de texto a array de objetos.
        return(tareas)  // el metodo 'listar' devuelve array de objetos.
    },

    escribirJSON: function(listadoTareas){  //listadodeTareas es el objeto pasado en el archivo app.js al pasar por comando el 'guardar'. (objAd)

        let tareasJSON = JSON.stringify(listadoTareas)   //transformo el objeto pasado como parametro a formato texto.
        
        fs.writeFileSync(this.archivo, tareasJSON)  // sobreescribo el archivo tareas.js ('this.archivo') con el nuevo parametro transformado.


    },
 
    guardarTarea: function(tituloTarea){  //voy a agragar una tarea (tituloNuevo pasado en app.js)  a las ya existentes en tareas.json

        let tareasOrig = this.listar();  // variable que guarda el array de objetos transformados del archivo tareas.json, por medio del metodo. 
        let tareaNueva = {       //creo objeto nuevo a agregar al array de objetos.'
            titulo: tituloTarea,  //tituloTarea sera lo ingresado como process.arg[3] por terminal
            estado: 'pendiente'
        };
        tareasOrig.push(tareaNueva)  //agrego objeto nuevo al array de objetos de tareas.
        this.escribirJSON(tareasOrig)  //transformo nuevamente a texto las tareas a traves del metodo ya creado y sobreescribo y guardo en archivo tareas.json.

    },

    filtrarPorEstado: function(estado){

        let tareasOriginal = this.listar()  //obtengo array de objetos.                    //funcion flecha
        let tareasFiltradas = tareasOriginal.filter(objeto => objeto.estado == estado)  //me quedo con los objetos que al barrer cada uno, el valor de la prop estado para 
                                                                                        //cada objeto coincide con lo ingresado como argumento 'estado'

            console.log(tareasFiltradas) 
        }
        
    }



//console.log('funcionesdeTareas')
//func.listar()  --> no muestra por pantalla
//console.log(func.listar())  //para mostrar aca en pantalla el array de objetos de tareas creado.

module.exports = func   //exporto el modulo func, que tiene los metodos listos para ser invocados.




