const TaskRepository = require('../repositories/TaskRepository');

const taskRepository = new TaskRepository();
let allTasks = taskRepository.getAllTasks();

const createTask = (title)=>taskRepository.createTask(title);

const getTasks = ()=>
{   allTasks = taskRepository.getAllTasks();
    return allTasks;
}

const getAllTasks = ()=>
{
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
}


const completeTask = (task) =>
{
    taskRepository.completeTask(task);
    allTasks = taskRepository.getAllTasks();
}

const deleteTask = (task) =>
{
    taskRepository.deleteTask(task);
    allTasks = taskRepository.getAllTasks();
}
    
    module.exports = 
    {
        createTask,
        getAllTasks,
        getTasks,
        completeTask,
        deleteTask,
    }