let taskList = document.querySelector('.task-list');
let newTask = document.querySelector('.task');

document.querySelector('.action').addEventListener('click', () => {
    taskList.innerHTML += `
    <div class="task-item">
    <p>${newTask.value}</p>
    <button class="delete">X</button>
    </div>`;

    newTask.value = "";

    let deleteTask = document.querySelectorAll('.delete');

    deleteTask.forEach((item) => {
        item.addEventListener('click', () => {
            this.document.querySelector('.task-item').remove();
        } )
    })
});

document.querySelector('.clear').addEventListener('click', () => {
    newTask.value = "";
});