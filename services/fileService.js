const {inquirerInput, inquirerTasksMenu} = require('../helpers/inquirer')
const TaskRepository = require('../repositories/TaskRepository');

const taskRepository = new TaskRepository();
let allTasks = taskRepository.getAllTasks();

const createTask = (title)=>taskRepository.createTask(title);
    
const getAllTasks = ()=>
{
    
            allTasks = taskRepository.getAllTasks();
            
            allTasks.forEach(e => 
            { 
                console.log('================================'.blue);
                console.log(`tarea: ${e.title}`)
                console.log(`hecho: ${e.done}`)
                console.log(`creado: ${e.created}`)

                if(e.finished!=null)
                {
                console.log(`terminado: ${e.finished}`)
                }
                
            });
            return allTasks;
}


const completeTask = (task) =>
{
    allTasks = taskRepository.getAllTasks();
    
    taskRepository.completeTask(task);
}

const deleteTask = (task) =>
{
    taskRepository.deleteTask(task);
}
/*
//
    const taskRepository = new TaskRepository();
    let allTasks = taskRepository.getAllTasks();
    
    //
    const choices = 
    [   ()=>
        {
            //opcion 0 - si uso un do while podria darle utilidad a esta posicion del array
            console.log('El usuario seleccionó la opcion salir')
        },

        async ()=>
        {
            //opcion 1
            console.log('El usuario seleccionó la opcion crear tarea')
            const title = await inquirerInput('Task Title');
            console.log(title);
            taskRepository.createTask(title);
        },

        ()=>
        {
            //opcion 2 
            allTasks = taskRepository.getAllTasks();
            
            allTasks.forEach(e => 
            { 
                console.log('================================'.blue);
                console.log(`tarea: ${e.title}`)
                console.log(`hecho: ${e.done}`)
                console.log(`creado: ${e.created}`)

                if(e.finished!=null)
                {
                console.log(`terminado: ${e.finished}`)
                }
                
            });
        },

        async ()=>
        {
            //opcion 3 - completar tarea - me deja cambiar el estado de la tarea
            allTasks = taskRepository.getAllTasks();
            const value = await inquirerTasksMenu(allTasks);
            console.log(value);
            taskRepository.completeTask(value.task);
        },

        async ()=>
        {
            //opcion 4 - borrar tarea
            console.log("delete task")
            allTasks = taskRepository.getAllTasks();
            const value = await inquirerTasksMenu(allTasks);

            //decirle a task repository que elimine el objeto elegido
            taskRepository.deleteTask(value.task); //TODO faltaria dar la opcion de confirmar/o cancelar
        }
    ]
    //
    */
    
    module.exports = 
    {
        createTask,
        getAllTasks,
        completeTask,
        deleteTask,
    }