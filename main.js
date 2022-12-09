const subtract = document.querySelector("#subtract");
const plus = document.querySelector("#plus");
const arm = document.querySelector("#arm");

const control = document.querySelectorAll(".control-ajust");

control.forEach((element) => {
  element.addEventListener("click", (event) => {
    dataHandler(event.target.textContent);
  });
});

function dataHandler(operator) {
  if (operator === "-") {
    arm.value = parseInt(arm.value) - 1;
  } else {
    arm.value = parseInt(arm.value) + 1;
  }
}

//How to remove an item from an array
var list = ["Orange", "Red", "White", "Yellow", "Pink"];
list.splice(1, 1);
console.log(list);
