
// // Objects Section 2, 14-15-16

// // Object literal
// const person = {
//   name: 'Alejo Toro',
//   profession: 'Web Developer',
//   age: 32
// }
// console.log(person);

// // Object Constructor
// function task(name, priority) {
//   this.name = name;
//   this.priority = priority;
// }

// const task1 = new task('Task 1', 'Urgent')

// console.log(task1)
// console.log(task1.name)
// console.log(task1.priority)
// console.log(task1['name'])
// console.log(task1['priority'])

// // Prototype for the task object
// task.prototype.showTask = function() {
//   return `the task ${this.name} has a priority ${this.priority}`
// }

// console.log(task1.showTask());
// // console.log(person.showTask()); If you try to call the prototype function with another kind of object it'll show an error

// // -----------------------

// // Object Literal Enhacment 2, 18
// const band = 'Metallica';
// const genre = 'Heavy Metal';
// const songs = ['1', '2', '3']

// // Previous way
// const metallica = {
//   band: band,
//   genre: genre,
//   songs: songs
// }

// console.log("previous way: ", metallica);

// // New way
// const metallica_new = { band, genre, songs }
// console.log('new way: ', metallica_new)

// // ------------------------

// // Object keys 2, 20
// console.log(Object.keys(person));

// // ------------------------

// // Spread Operator 2, 21
// // Used to combined 2 arrays

// let programmingLanguages = ['Ruby', 'Python', 'PHP'];
// let programmingFrameworks = ['Rails', 'Laravel', 'Django'];

// // previous way
// let mixedOld = programmingLanguages.concat(programmingFrameworks);
// console.log(mixedOld)

// // new way
// let mixedNew = [...programmingLanguages, ...programmingFrameworks];
// console.log(mixedNew);
// let [last] = [...programmingLanguages].reverse();
// console.log(last);

// // Also works to pass a data array to a function
// function sum(a,b,c) {
//   console.log(a+b+c);
// }
// const numbers = [1,2,3];
// sum(...numbers);

// // ------------------------

// // Array methods .filter, .find & .reduce 2, 22
// const people = [
//   {name: 'Jon', age: 21, learning: 'JS'},
//   {name: 'A', age: 25, learning: 'Rails'},
//   {name: 'B', age: 30, learning: 'React'},
//   {name: 'C', age: 19, learning: 'Python'},
//   {name: 'D', age: 32, learning: 'Elixir'}
// ];

// console.log(people);

// // Older than 28
// const older28 = people.filter(person => {
//   return person.age > 28;
// });

// console.log(older28);

// // what is C learning?
// const cLearning = people.find(person => {
//   return person.name === 'C';
// });
// console.log(`C is learning ${cLearning.learning}`);

// // total and average age
// const total = people.reduce((totalAge, person) => {
//   return totalAge + person.age;
// }, 0);
// const peopleLength = people.length;
// console.log(`Total age ${total}`);
// console.log(`Average age ${total / peopleLength}`);

// // --------------------------
// // Promises 2, 23
// const discount = new Promise((resolve, reject) => {
//   setTimeout( () => {
//     let discount = false;
//     if(discount) {
//       resolve('Discount applied!');
//     } else {
//       reject('Discpunt disaproved!');
//     }
//   }, 3000);
// });
// discount.then(result => {
//   console.log(result);
// }).catch(error => {
//   console.log(error)
// })

// // --------------------------
// // Promises AJAX 2, 24
// const downloadUsers = quantity => new Promise((resolve, reject) => {
//   // set the api url
//   const api = `https://randomuser.me/api/?results=${quantity}&nat=us`;
//   // ajax call
//   const xhr = new XMLHttpRequest();
//   // open the conection
//   xhr.open('GET', api, true);
//   // on load
//   xhr.onload = () => {
//     if(xhr.status === 200) {
//       resolve(JSON.parse(xhr.responseText).results );
//     } else {
//       reject(Error(xhr.statusText))
//     }
//   }
//   // on error
//   xhr.onerror = (error) => reject(error);
//   // send
//   xhr.send();
// });

// downloadUsers(20)
//   .then(
//     users => printUsers(users),
//     error => console.log(
//       new Error(`There is an error ${error}`)
//     )
//   )

// // --------------------------
// // Showing results in HTML 2, 25
// function printUsers(users) {
//   let html = '';
//   users.forEach(user => {
//     html += `
//       <li>
//         Nombre: ${user.name.first} ${user.name.last}
//         Country: ${user.nat}
//         Picture: <img src="${user.picture.medium}">
//     `;
//   });
//   const containerApp = document.querySelector('#app');
//   containerApp.innerHTML = html;
// }

// ALERT! All this code was moved to task.js

// // --------------------------
// // Classes 2, 26
// class TodoList {
//   constructor(name, priority) {
//     this.name = name;
//     this.priority = priority;
//   }

//   show() {
//     console.log(`${this.name} has a priority of ${this.priority}`);
//   }
// }

// let todo1 = new TodoList('Learn React and Redux', 'Urgent');
// let todo2 = new TodoList('Learn Python', 'Low');
// let todo3 = new TodoList('Learn RSpec', 'Medium');
// let todo4 = new TodoList('Learn Angular', 'Low');

// todo1.show();
// todo2.show();
// todo3.show();
// todo4.show();

// // --------------------------
// // Heritage - Extending or Inheriting Classes 2, 27
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
import { taskName, createTask } from './task.js';
console.log(taskName);

// --------------------------
// Export functions 2, 28
const todo1 = createTask('Learn React and Redux', 'Urgent');
console.log(todo1);

// --------------------------
// Export classes 2, 30
import TodoList from './todoList.js';
import PendingPurchases from './purchases.js';

const todo5 = new TodoList('Learn Ruby on Rails', 'Low');
console.log(todo5);
todo5.show();

const purchase = new PendingPurchases('Pizza', 'Urgent', 2);
console.log(purchase);
purchase.show();
