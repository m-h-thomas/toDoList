//console.log('My code is running.'); //inital test to confirm link to html file. --it works--

/* Global variables to hold user inputs and all tasks array */
let allTasks = [];
let allInputs = '';


/* Function to take user inputs and add new task to notStarted container */
const addNewTask = () => {
  let newTask = document.querySelector('#input-box');
  let addTask = document.querySelector('#add-task')

  newTask.addEventListener('input', (eventObj) => {
    allInputs = eventObj.target.value
  })

  addTask.addEventListener('click', () => {
    allTasks.push(allInputs);
    newTask.value = '';
    display();
  })
}

/* Dynamically displays items from allTasks array */
const display = () => {
  let notStartedTasks = document.querySelector('.notStartedContainer');
  let listTasks = allTasks.map((elm) => `<div><button class="item">${elm}</button><button class='x'>x</button></div>`)
  .reduce((acc, elm) => acc += elm, '');
  notStartedTasks.innerHTML = listTasks;
};

addNewTask();

// /* On button click, grabs input box value, adds to allItems array, and displays */
// const getInputValue = () => {
//   let inputBox = document.querySelector('#input-box');
//   let addBtn = document.querySelector('#add-item-button');

//   inputBox.addEventListener('input', (eventObj) => {
//     userInput = eventObj.target.value;
//   });

//   addBtn.addEventListener('click', () => {
//     allItems.push(userInput);
//     inputBox.value = '';
//     displayItems();
//   });
// };

// getInputValue();