//const 

const inquirer = require('inquirer');
const { clearLine } = require('inquirer/lib/utils/readline');
require('colors');


const inquirerTasksMenu = async (tasks) => 
{
    let choices = []
    this.tasks = tasks;
    
    this.tasks.forEach((e,i) => 
    {
        let a = {value: e, name: `${`${i+1}`.blue} task: ${e.title} - done: ${e.done}`} //agregar fecha --> - created: ${e.created} una vez formateada
        choices.push(a)
    });

    const cancel = {name: `${`${choices.length+1}`.blue} cancel`}
    choices.push(cancel);
    
    const tasksMenu =
    [
        {
            type: 'list',
            name: 'task',
            message: 'choose',
            choices,
        }
    ]
    
    console.log('================================'.blue);
    console.log('Select a task'.white);
    console.log('================================'.blue);
    const option = await inquirer.prompt(tasksMenu);

    return option;
}

const menu = 
[
    {
        type: 'list',
        name: 'option',
        message: 'what do you want to do',
        choices: 
        [
            {
                value: 1,
                name: `${'1-'.blue} Create task`,
            },
            
            {
                value: 2,
                name: `${'2-'.blue} Get tasks`,
            },
            
            {
                value: 3,
                name: `${`3-`.blue} Change State task`,
            },

            {
                value: 4,
                name: `${`4-`.blue} Delete task`,
            },

            {
                value: 0,
                name: `${`5-`.blue} Exit`,
            },
        ]

    }
];

const inquirerMenu = async() => 

{
    console.log('================================'.blue);
    console.log('Select an option'.white);
    console.log('================================'.blue);
    const {option} = await inquirer.prompt(menu);

    return option;
}

const inquirerInput = async(message) => 
{
    const question = 
    [
        {
            type: 'input',
            name: 'description',
            message
        }
    ];
    const {description} = await inquirer.prompt(question);
    return description;
}


module.exports = 
{
    inquirerMenu,
    inquirerInput,
    inquirerTasksMenu,
}