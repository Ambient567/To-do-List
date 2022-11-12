import Store from './store.js';
import removeTask from './removeTask.js';

const display = document.querySelector('.task-items');

const addTaskToList = (item) => {
  const div = document.createElement('div');
  div.classList.add('list-item');
  div.innerHTML = `
    <div class='task'>
    <input type='checkbox' class='checkbox' id='${item.index}'/>
    <input type='text' value='${item.description}' id='input-display-${item.index}' data-id='${item.index}' class='input-display'/>
    </div>
    <i class="fa-solid fa-solid fa-trash-can" data-id="${item.index}" id="btn-${item.index}"></i>
    `;
  display.appendChild(div);

  /* Remove tasks */
  const removeBtn = document.getElementById(`btn-${item.index}`);
  removeBtn.addEventListener('click', () => {
    removeTask(item.index);
  });

  /* Update tasks */
  const editTasks = document.getElementById(`input-display-${item.index}`);
  editTasks.addEventListener('change', () => {
    const task = document.getElementById(`input-display-${item.index}`);
    const taskList = Store.getTask();
    taskList.forEach((taskObj) => {
      if (taskObj.index === item.index) {
        item.description = task.value;
      }
    });
    Store.updateTask(item.index, task.value);

    display.innerHTML = '';
    // eslint-disable-next-line no-use-before-define
    displayTasks();
  });

  const taskStatus = document.getElementById(item.index);
  const inputDisplay = document.getElementById(`input-display-${item.index}`);
  taskStatus.addEventListener('click', () => {
    if (taskStatus.checked) {
      taskStatus.checked = true;
      inputDisplay.style.textDecoration = 'line-through';
      Store.checkCompleted(item.index);
    } else {
      taskStatus.checked = false;
      inputDisplay.style.textDecoration = 'none';
      Store.checkCompleted(item.index);
    }
  });

  /* clear all completed */
  const checkbox = document.querySelector('#clear-tasks');
  checkbox.addEventListener('click', () => {
    Store.clearAllComplete();
  });
};

export const displayTasks = () => {
  const list = Store.getTask();

  list.forEach((item) => addTaskToList(item));
};

window.addEventListener('DOMContentLoaded', () => {
  displayTasks();
});

export default addTaskToList;