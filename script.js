const slider = document.querySelector("#vol");
let number = document.querySelector("#number");
let container = document.querySelector("#container");
let lowbtn = document.querySelector("#decrise");
let reset = document.querySelector("#reset");
let rise = document.querySelector("#rise");
let back = document.querySelector("#backward");
let forward = document.querySelector("#forward");
console.log(forward);
let crurntNumber = 0;

lowbtn.addEventListener("click", function () {
  crurntNumber--;
  number.innerText = crurntNumber;
  if (crurntNumber < 0) {
    number.classList.add("red");
    number.classList.remove("green");
  }
});
rise.addEventListener("click", function () {
  crurntNumber++;
  number.innerText = crurntNumber;
  if (crurntNumber > 0) {
    number.classList.add("green");
    number.classList.remove("red");
  }
});
reset.addEventListener("click", function () {
  crurntNumber = 0;
  number.innerText = crurntNumber;
});
slider.addEventListener("click", (e) => {
  crurntNumber = slider.value;
  number.innerText = crurntNumber;
  if (crurntNumber > 0) {
    number.classList.add("green");
    number.classList.remove("red");
  }
  if (crurntNumber < 0) {
    number.classList.add("red");
    number.classList.remove("green");
  }
});
document.addEventListener('click',function(e){
  if(e.target===forward ){
    crurntNumber+=1000;
  number.innerText = crurntNumber;
  if (crurntNumber > 0) {
    number.classList.add("green");
    number.classList.remove("red");
  }
  }
  if(e.target===backward ){
    crurntNumber-=1000;
  number.innerText = crurntNumber;
  if (crurntNumber < 0) {
    number.classList.add("red");
    number.classList.remove("green");
  }
  }
})
