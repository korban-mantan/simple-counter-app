const addBtn = document.getElementById('add')
const substractBtn = document.getElementById('substract')
const timesBtn = document.getElementById('timesByTwo')
const divideBtn = document.getElementById('divideByTwo')
const resetBtn = document.getElementById('reset')
const countEl = document.querySelector('.current-count')
const doubledCountEl = document.querySelector('span#ganda')

let count;
const savedCount = localStorage.getItem('Count')

if(localStorage.getItem('Count') != null){
  count = savedCount
}else{
  count = 0
}


function updateCount() {
  countEl.innerText = count;
  
  doubledCountEl.innerText = count*2;
  
  localStorage.setItem('Count', count)
}
function substract() {
  count--
  updateCount()
}

function timesByTwo(){
  count*=2
  updateCount()
}
function divideByTwo(){
  count/=2
  updateCount()
}

addBtn.addEventListener('click', () => {
  count++
  updateCount()
}) 

substractBtn.addEventListener('click', substract)

timesBtn.onclick = function(){timesByTwo()}

resetBtn.onclick = () =>{
  count = 0
  updateCount()
}

  updateCount()