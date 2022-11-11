import Tasks from './Task.js';
import Store from './store.js';
import addTaskToList from './control.js';

const createTask = () => {
  document.querySelector('.fa-arrow-left').addEventListener('click', (e) => {
  // Prevent the actual submit
    e.preventDefault();
    // get form values
    const taskDescription = document.querySelector('.input-task');
    const list = Store.getTask();

    const item = new Tasks(taskDescription.value, false, (list.length + 1));
    taskDescription.innerHTML = 'clear';

    addTaskToList(item);
    Store.addTask(item);
  });
};

export default createTask;