const {inquirerMenu, inquirerInput} = require('./helpers/inquirer')
const TaskRepository = require('./repositories/TaskRepository');



const main = async() => 
{
    const taskRepository = new TaskRepository();
    let option = await inquirerMenu();
    //
    const choices = 
    [    
            console.log('El usuario seleccionó la opcion salir')
                 
        ,
        async ()=>
        {
            console.log('El usuario seleccionó la opcion crear tarea')
            const title = await inquirerInput('Task Title');
            console.log(title);
            taskRepository.createTask(title);
        },
        ()=>
        {
            const allTasks = taskRepository.getAllTasks();
            console.log('allTasks');
            console.log(allTasks);

            allTasks.forEach(e => { 
                console.log(e.title)
            });
        }
    ]
    //
    
    while(option!==0)
    {

        /*
        switch (option)
        {
            case 1:

            //TODO: hacer que el usuario pueda ingresar el titulo de la tarea
                console.log('El usuario seleccionó la opcion crear tarea')
                const title = await inquirerInput('Task Title');

                console.log(title);
                taskRepository.createTask(title);

                break;
        
            case 2:
                const allTasks = taskRepository.getAllTasks();
                console.log(allTasks);

                //TODO: mostrar la lista de tareas de la base de datos
                break;
        
        }*/
        console.log(option)
        await choices[option]();
        option = await inquirerMenu();
    }

}

main();
