const Task = require('../models/Task');
const {getData, saveData} = require('../helpers/fileManager');


class TaskRepository{
    _tasks = null;

    constructor(){
        const data = getData();
        if(data)
        {
            this._tasks = data;
        }
        else
        {
            this._tasks = [];
        }
    }

    getAllTasks()
    {
        return this._tasks;        
    }

    createTask(title)
    {
        const task = new Task(title);
        this._tasks.push(task);
        saveData(this._tasks);
    }

    deleteTask(task)
    {   
        this._tasks = this._tasks.filter((e)=> e.id!==task.id);
        saveData(this._tasks);
    }

    completeTask(task)
    {
        this._tasks.forEach(e =>
        {
            
            if(e.id===task.id)
            {
                if(e.done==false)
                {
                    e.done=true;
                    e.finished = new Date()
                }
                else
                { 
                    e.done=false 
                    e.finished = null;
                }
            }
            
        });
        saveData(this._tasks);
    }


}

module.exports = TaskRepository;