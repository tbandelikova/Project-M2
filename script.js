let taskList = document.querySelector('.new-task');
let sortButton = document.querySelector('.sort-tasks');
let sortList = document.querySelectorAll('.sortEl');

document.querySelector('.action').addEventListener('click', () => {
    let newTask = document.createElement('div');
    newTask.classList.add('item', 'sortEl');
    newTask.innerHTML = `<input class="task" type="text" maxlength="27">
    <button class="delete">X</button>`;
    taskList.append(newTask);

    let deleteTask = document.querySelectorAll('.delete');

    deleteTask.forEach((item) => {
        item.addEventListener('click', () => {
            this.document.querySelector('.item').remove();
        } )
    })
});

sortButton.addEventListener('click', () => {
    let sortRow = [];
    document.querySelectorAll('.task').forEach((item) => {
        sortRow.push(item.value);
        sortRow.sort(compare);

        function compare(a, b) {
            if (!NaN) {
                return a - b;
            }
          return (a.querySelector('.task').innerText).localeCompare(b.querySelector('.task').innerText);
        };
        // item.value  
    });
    console.log(sortRow);
    
})

sortButton.addEventListener('mouseover', () => {
    if (sortButton.innerHTML == '<img src="./img/Group 34.png" alt="alphabet"></img>') {
        this.innerHTML = '<img src="./img/Group 73.png" alt="alphabet"></img>';
        console.log("!!!");
    } else {
        this.innerHTML = '<img src="./img/Group 91.png" alt="alphabet"></img>';
    }
})