import './style.css';
import displayTasks from './modules/task.js';

const Tasks = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 1,
  },
  {
    description: 'Wash the dishes',
    completed: false,
    index: 2,
  },
];

window.addEventListener('DOMContentLoaded', () => {
  Tasks.forEach((i) => {
    displayTasks(i);
  });
});