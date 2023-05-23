const countEl = document.querySelector('.current-count');
const doubledCountEl = document.querySelector('.counter-text > span');

let count;
const savedCount = localStorage.getItem('Count');

count = savedCount !== null ? parseInt(savedCount) : 0;

function updateCount() {
  countEl.textContent = count;
  doubledCountEl.textContent = count * 2;
  localStorage.setItem('Count', count.toString());
}


function subtract() {
  count--;
  updateCount();
}

function timesByTwo() {
  count *= 2;
  updateCount();
}

function divideByTwo() {
  count /= 2;
  updateCount();
}

document.addEventListener('click', (event) => {
  const target = event.target;

  if (target.id === 'add') {
    count++;
    updateCount();
  } else if (target.id === 'substract') {
    subtract();
  } else if (target.id === 'timesByTwo') {
    timesByTwo();
  } else if (target.id === 'reset') {
    count = 0;
    updateCount();
  }
});

// document.addEventListener('click', (event) => {
//     const target = event.target;
  
//     switch (target.id) {
//       case 'add':
//         count++;
//         updateCount();
//         break;
//       case 'substract':
//         subtract();
//         break;
//       case 'timesByTwo':
//         timesByTwo();
//         break;
//       case 'reset':
//         count = 0;
//         updateCount();
//         break;
//       default:
//         // Handle default case or do nothing
//         break;
//     }
//   });  

updateCount();
