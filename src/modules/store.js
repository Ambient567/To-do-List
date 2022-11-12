// eslint-disable-next-line import/no-cycle
import removeTask from './removeTask.js';

export default class Store {
  static getTask() {
    let list;
    if (localStorage.getItem('list') === null) {
      list = [];
    } else {
      list = JSON.parse(localStorage.getItem('list') || []);
    }

    return list;
  }

  static addTask = (item) => {
    const list = Store.getTask();

    list.push(item);
    localStorage.setItem('list', JSON.stringify(list));
  };

  static updateTask = (id, message) => {
    const list = Store.getTask();
    list.forEach((taskObj) => {
      if (taskObj.index === id) {
        taskObj.description = message;
      }
    });
    localStorage.setItem('list', JSON.stringify(list));
  };

  static removeTask = (id) => {
    let list = Store.getTask();

    list = list.filter((task) => task.index !== id);
    list.forEach((item, index) => {
      if (item.index === id) {
        list.splice(index, 1);
      }
    });

    localStorage.setItem('list', JSON.stringify(list));
    return list;
  };

  static checkCompleted = (id) => {
    const list = Store.getTask();
    list.forEach((task) => {
      if (task.index === id) {
        task.completed = !task.completed;
      }
    });
    localStorage.setItem('list', JSON.stringify(list));
    return Store.getTask();
  };

  static clearAllComplete = () => {
    const list = Store.getTask();
    list.forEach((task) => {
      if (task.completed) {
        removeTask(task.index);
      }
    });
  };
}
