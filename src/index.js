import './style.css';
import Tasks from './modules/Task.js';
import addTaskToList from './modules/control.js';
import createTask from './modules/createTask.js';

createTask();

window.addEventListener('DOMContentLoaded', () => {
  Tasks.forEach((i) => {
    addTaskToList(i);
  });
});