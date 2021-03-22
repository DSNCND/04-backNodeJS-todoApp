const {inquirerInput, inquirerMenu, inquirerTasksMenu} = require('./helpers/inquirer')
const {getAllTasks, getTasks, createTask, completeTask, deleteTask} = require('./services/fileService')


const main = async() => 
{
    
    let option = await inquirerMenu();
    
    //
    const choices = 
    [   //opcion 0 - si uso un do while podria darle utilidad a esta posicion del array
        ()=> console.log('El usuario seleccionó la opcion salir'), 
        
        //opcion 1
        async ()=>
        {
            console.log('El usuario seleccionó la opcion crear tarea: ')
            const title = await inquirerInput('Task Title');
            createTask(title);
        },

        //opcion 2
        ()=>
        { 
            getAllTasks();
        },

        //opcion 3 - completar tarea - me deja cambiar el estado de la tarea
        async ()=>
        {
            const value = await inquirerTasksMenu(getTasks());
            completeTask(value.task); // el objeto task esta dentro del objeto que me devuelve el menu
        },

        async ()=>
        {
            //opcion 4 - borrar tarea
            const value = await inquirerTasksMenu(getTasks());

            //decirle a task repository que elimine el objeto elegido
            deleteTask(value.task);
        }
    ]
    //
        
    while(option!==0)
    {
        await choices[option]();
        option = await inquirerMenu();
    }

}

main();
