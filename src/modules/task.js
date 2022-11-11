const display = document.querySelector('.task-items');

const displayTasks = (tasksObj) => {
  const div = document.createElement('div');
  div.classList.add('list-item');
  div.innerHTML = `
    <div class='task'>
    <input type='checkbox' class='checkbox' id='${tasksObj.index}'/>
    <input type='text' value='${tasksObj.description}' id='input-display-${tasksObj.index}' data-id='${tasksObj.index}' class='input-display'/>
    </div>
    <i class="fa-solid fa-ellipsis-vertical" data-id="${tasksObj.index}" id="btn-${tasksObj.index}"></i>
    `;
  display.appendChild(div);
};

export default displayTasks;