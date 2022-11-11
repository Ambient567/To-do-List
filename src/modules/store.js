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
  }
}
