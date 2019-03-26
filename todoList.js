
// --------------------------
// Classes 2, 26
export default class TodoList {
  constructor(name, priority) {
    this.name = name;
    this.priority = priority;
  }

  show() {
    console.log(`${this.name} has a priority of ${this.priority}`);
  }
}

// let todo1 = new TodoList('Learn React and Redux', 'Urgent');
// let todo2 = new TodoList('Learn Python', 'Low');
// let todo3 = new TodoList('Learn RSpec', 'Medium');
// let todo4 = new TodoList('Learn Angular', 'Low');

// todo1.show();
// todo2.show();
// todo3.show();
// todo4.show();

// --------------------------
// Heritage - Extending or Inheriting Classes 2, 27
// class TodoTime extends TodoList {
//   constructor(name, priority, time) {
//     super(name, priority);
//     this.time = time;
//   }

//   show() {
//     super.show();
//     console.log(`and has a time of ${this.time}`);
//   }
//   showTime() {
//     return `${this.time}`;
//   }
// }

// let time1 = new TodoTime('Learn React and Redux', 'Urgent', '1 week');
// time1.show();
// console.log(time1.showTime());

// --------------------------
// Modules 2, 28

