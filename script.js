let taskList = document.querySelector('.new-task');
let newTask = `<div class="item"><input class="task" type="text" maxlength="27">
<button class="delete">X</button></div>`;

document.querySelector('.action').addEventListener('click', () => {
    taskList.innerHTML += newTask;

    let deleteTask = document.querySelectorAll('.delete');

    deleteTask.forEach((item) => {
        item.addEventListener('click', () => {
            this.document.querySelector('.item').remove();
        } )
    })
});
