const {inquirerInput, inquirerMenu, inquirerTasksMenu} = require('./helpers/inquirer')
const {getAllTasks, createTask, completeTask, deleteTask} = require('./services/fileService')


const main = async() => 
{
    
    let option = await inquirerMenu();
    
    //
    const choices = 
    [   ()=> console.log('El usuario seleccionó la opcion salir'),  //opcion 0 - si uso un do while podria darle utilidad a esta posicion del array
        //,
        async ()=>
        {
            //opcion 1
            console.log('El usuario seleccionó la opcion crear tarea: ')
            const title = await inquirerInput('Task Title');
            console.log(title);
            createTask(title);
        },

        ()=>
        {
            //opcion 2 
            getAllTasks();
        },

        async ()=>
        {
            //opcion 3 - completar tarea - me deja cambiar el estado de la tarea
            const value = await inquirerTasksMenu(getAllTasks());
            console.log(value);
            completeTask(value.task); // el objeto task esta dentro del objeto que me devuelve el menu
        },

        async ()=>
        {
            //opcion 4 - borrar tarea
            console.log("delete task")
            const value = await inquirerTasksMenu(getAllTasks());

            //decirle a task repository que elimine el objeto elegido
            deleteTask(value.task); //TODO faltaria dar la opcion de confirmar/o cancelar
        }
    ]
    
    //
        
    while(option!==0)
    {

        console.log(option)
        await choices[option]();
        option = await inquirerMenu();

    }

}

main();
