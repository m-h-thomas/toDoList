console.log('My code is running.'); //inital test to confirm link to html file. --it works--

/* Global variables to hold user inputs and all tasks array */
let allTasks = [];
let allInputs = '';

let addBtn = document.getElementsByClassName('btn'); //assign var addBtn to HTML button element

for (i = 0; i < addBtn.length; i++) {
  let button = addBtn[i]
  button.addEventListener('click', function(event) {
    console.log('button clicked!')
    let buttonClicked = event.target
    buttonClicked
    // addNewTask()
  })
}


/* Function to take user inputs and add new task to notStarted container */
// const function addNewTask () {
//   let newTask = ;
// }