const task_element = document.getElementById("tasks");
const task_template = document.getElementById("task-template");
const new_task_button = document.getElementById("new-task");

let tasks = getTasks();
function getTasks() {
    const value = localStorage.getItem("done-app") || "[]";
    return JSON.parse(value);

}
function setTasks() {
    const taskJSON = JSON.stringify(tasks);
    localStorage.getItem()

}
console.log(tasks);

