import Store from './store.js';

const removeTask = (id) => {
  let list = Store.getTask();

  const btn = document.getElementById(`btn-${id}`);

  list = list.filter((task) => task.index !== id);

  list.forEach((i, j) => {
    i.index = j;
  });

  btn.parentElement.remove();
  Store.removeTask(id);
};

export default removeTask;