/*jshint esversion: 6 */
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
function addItem() {
    tasks.unshift({
        description: "",
        completed: false});
    
    setTasks(tasks);
    refreshTasks();
    

}
//Set the updateTasks function to add the new data

function updateTasks(item, key, value) {
    item[key] = value;
    setTasks(tasks);
    refreshTasks();

}

//Set the refreshTasks function to take list of tasks and render them to the user
function refreshTasks() {
    task_element.innerHTML = "";
    for (const item of tasks) {
        const itemElement = task_template.content.cloneNode(true);
        const descriptionInput = itemElement.querySelector(".add");
        const completedInput = itemElement.querySelector(".completed-task");

    
        descriptionInput.value = item.description;
        completedInput.checked = item.completed;
        //Add event listener for both inputs using the updateTasks function to allow update in the local storage when the data is changed
        descriptionInput.addEventListener("change", () => {
            updateTasks(item, "description", descriptionInput.value);
        });
        completedInput.addEventListener("change", () => {
            updateTasks(item, "completed", completedInput.checked);
        });

        task_element.append(itemElement);
    }

    //Set the afphabetic order and if they were completed or not 
    tasks.sort((a,b)=>{
        if (a.completed) {
            return 1;
        }
        if(b.completed) {
            return -1;
        }
        return a.description < b.description ? -1 : 1;

    });

}



// Set the New Task button event listener to add new inputs
new_task_button.addEventListener("click", () => { 
    addItem();
});

refreshTasks();




