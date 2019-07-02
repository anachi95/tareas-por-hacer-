const  descripcion =  {
    demand: true,
    alias: 'd',
    desc:'descripcion de la tarea por hacer'

};
 const completadao = {
     default: true,
    alias: 'c',
    desc:'Marca como completado o pendiente la tarea'
 };




const argv = require('yargs')
            .command('crear', 'Crear un elemento por hacer', {
                descripcion: {
                demand: true,
                alias: 'd',
                desc:'descripcion de la tarea por hacer'
                }
            })
            .command('actualizar','actualizar el estado completadao de una tarea', {
                descripcion: {
                    demand: true,
                    alias: 'd',
                    desc:'descripcion de la tarea por hacer' 
                },
                  completado: {
                      default: true,
                      alias: 'c',
                      desc:'Marca como completado o pendiente la tarea' 
                  }     
            })
            .command('borrar','borrar una tarea', {
                descripcion: {
                    demand: true,
                    alias: 'd',
                    desc:'descripcion de la tarea por hacer' 
                }
                  
            })
            .help()
            .argv;

module.exports = {
    argv
}