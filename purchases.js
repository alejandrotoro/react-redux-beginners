import TodoList from './todoList.js';

export default class PendingPurchases extends TodoList {
  constructor(name, priority, quantity) {
    super(name,priority);
    this.quantity = quantity;
  }
  show() {
    super.show();
    console.log(`and the quantity is ${this.quantity}`);
  }
}