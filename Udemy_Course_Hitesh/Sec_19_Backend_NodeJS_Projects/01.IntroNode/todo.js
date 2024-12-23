const fs = require('fs');
const filePath = "./tasks.json";

const loadTasks = () => {
    try {
        const dataBuffer = fs.readFileSync(filePath)
        // dataJson is different than regular JSON,
        const dataJson = dataBuffer.toString();
        // Parse is powerful, it will parse from any format it tries
        // its best to give you best possible output
        JSON.parse(dataJson);
    } catch (error) {
        return [];
    }
}

const saveTasks = (tasks) => {
    const dataJSON = JSON.stringify(tasks);
    fs.writeFileSync(filePath, dataJSON)
}

const addTask = (task) => {
    const tasks = loadTasks();
    tasks.push({task});
    saveTasks(tasks);
    console.log("Task added", task);
}

const command = process.argv[2]
const argument = process.argv[3]

if(command === 'add'){
    addTask(argument);
}else if(command === 'list'){
    listTasks()
}else if(command === 'remove'){
    removeTask(parseInt(argument))
}else{
    console.log("Command not found!")
}