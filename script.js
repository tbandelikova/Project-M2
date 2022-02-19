let taskList = document.querySelector('.new-task');
let sortButton = document.querySelector('.sort-tasks');
let sortList = document.querySelectorAll('.sortEl');

document.querySelector('.action').addEventListener('click', () => {
    let newTask = document.createElement('div');
    newTask.classList.add('item', 'sortEl');
    newTask.innerHTML = `<input class="task" type="text" maxlength="27">
    <button class="delete">X</button>`;
    taskList.append(newTask);
    
    newTask.querySelector('.delete').addEventListener('click', () => {
        newTask.remove();
    })
    

});

sortButton.addEventListener('click', () => {
    let sortRow = [];
    document.querySelectorAll('.task').forEach((item) => {
        sortRow.push(item.value);

        sortRow.sort((a,b) => {
            if (!NaN) {
                return a - b;
            }
          return a -b;
        });
        console.log(sortRow);
        for (let i = 0; i < sortRow.length; i++) {
            item.value = sortRow[i];
        }
    });
    
    console.log(sortRow);
})