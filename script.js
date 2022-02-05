let addButton = document.querySelector('.add');
let removeB = '<button class="remove">X</button>';
let taskList = document.querySelector('.task-list');

function addTask() {
    let newTask = document.createElement('div');
    newTask.innerHTML = `<p>${document.querySelector('.task').value}</p>${removeB}`;
    taskList.append(newTask);
    newTask.style.display = 'flex';
    taskList.style.display = 'block';

}

addButton.addEventListener('click', addTask);