//Reference each element
const task_element = document.getElementById("tasks");
const task_template = document.getElementById("task-template");
const new_task_button = document.getElementById("new-task");

//Fetch the existing task items from local storage, convert a JSON string into a javascript array and set the tasks items
let tasks = getTasks();
function getTasks() {
    const value = localStorage.getItem("done-app") || "[]";
    return JSON.parse(value);

}
function setTasks(task) {
    const tasksJSON = JSON.stringify(tasks);
    localStorage.setItem("done-app", tasksJSON);

}

//Defining the logic for adding a new task and add a Set function to save the new tasks in a local storage
function addInsert() {
    tasks.unshift({
        description: "",
        completed: false});
    
    setTasks(tasks);

}



console.log(tasks);

