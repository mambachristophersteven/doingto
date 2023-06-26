const newTask = document.getElementById("new-task");
const todoList = document.getElementById("to-do-list");
const itemsLeft = document.getElementById("number-left");
const darkIcon = document.getElementById("moon");
const lightIcon = document.getElementById("sun");
const toggler = document.getElementById("toggler");
const topImage = document.getElementById("top");
const body = document.body;
const allTasksButton = document.getElementById("allTasks");
const activeTasksButton = document.getElementById("activeTasks");
const completedTasksButton = document.getElementById("completedTasks");
 


toggler.addEventListener("click", () =>{

    darkIcon.classList.toggle('not-active-theme');
    lightIcon.classList.toggle('not-active-theme');  
    checkTopBackground();
    body.classList.toggle("dark-mode");
}

)

function checkTopBackground(){
    if(darkIcon.classList.contains("not-active-theme")){
        topImage.style.backgroundImage = "url('./images/light.png')";
    }else{
        topImage.style.backgroundImage = "url('./images/dark.jpg')";
    }
    console.log("function is reading")
}

function addTask(){
    if (newTask.value.trim() === ''){
        alert("Type something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = newTask.value;
        todoList.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        li.setAttribute("class","activeTask");
        // li.draggable ="true";
        // li.classList.add("item");


        UpdateItemsCount();
        
    }
    newTask.value = "";
    saveData();

}


function UpdateItemsCount(){
    let itemsLeftCount = document.querySelectorAll('.activeTask').length;
    itemsLeft.innerHTML = itemsLeftCount;

}


todoList.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        e.target.classList.toggle("activeTask");
        e.target.classList.toggle("completedTask");
        
       UpdateItemsCount();
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        UpdateItemsCount();
        saveData();
    }
}, false);


//save data 
function saveData(){
    localStorage.setItem("data", todoList.innerHTML); 
}

function showList(){
    todoList.innerHTML = localStorage.getItem("data");
}
showList();
UpdateItemsCount();


function showAllTasks(){
    // let numberOfActiveTasks =  document.querySelectorAll('.activeTask');
    activeTasksButton.classList.remove('active-list');
    allTasksButton.classList.add('active-list');
    completedTasksButton.classList.remove('active-list');
}

function showActiveTasks(){
    // let numberOfActiveTasks =  document.querySelectorAll('.activeTask');
    activeTasksButton.classList.add('active-list');
    allTasksButton.classList.remove('active-list');
    completedTasksButton.classList.remove('active-list');
}

function showCompletedTasks(){
    // let numberOfActiveTasks =  document.querySelectorAll('.activeTask');
    activeTasksButton.classList.remove('active-list');
    allTasksButton.classList.remove('active-list');
    completedTasksButton.classList.add('active-list');

    let activeItems = document.querySelectorAll('.completedTask').length;
    console.log(activeItems);

}



