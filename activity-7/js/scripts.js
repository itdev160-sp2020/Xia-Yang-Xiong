// create an array named tasks to hold tasks
var tasks = [];

//create a taskStatus 'enum' object witht eh following active and completed properties
var taskStatus = {
    active: 'active',
    completed: 'completed'
};
            // parameters
function Task(id, name, status){
    //properties
    this.id = id;
    this.name = name;
    this.status = status;
}

function addTaskElement(task){
    //create elements
    var listEl = document.getElementById('active-list');
    var taskEl = document.createElement('li');
    var textEl = document.createTextNode(task.name);

    //set the element id attribute equal to the task object id property
    taskEl.setAttribute('id', task.id);

    //add text to task element
    taskEl.appendChild(textEl);

    //add task element to list
    listEl.appendChild(taskEl);
}

function addTask(event){
    var inputEl = document.getElementById('input-task');
    if(inputEl.value != ''){
        //create a unique id
        var id = 'item-' + tasks.length;

        //create a new task
        var task = new Task(id, inputEl.value, taskStatus.active);
        tasks.push(task);

        //add task to dom
        addTaskElement(task);

        //reset input
        inputEl.value = '';
    }
}

function completeTask(event){
    var taskEl = event.target;
    var id = taskEl.id;

    for(var i = 0; i < tasks.length; i++){
        if (tasks[i].id === id){
            tasks[i].status = taskStatus.completed;
            break;
        }
    }

    taskEl.remove();
    document.getElementById('completed-list').appendChild(taskEl);
}

function clickButton (event){
    if(event.keyCode === 13){
        document.getElementById('add-task').click();
    }
}

function init(){
    document.getElementById('add-task').onclick = addTask;
    document.getElementById('active-list').onclick = completeTask;
    document.getElementById('input-task').onkeypress = clickButton;
}

init();

