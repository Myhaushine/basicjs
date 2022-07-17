'use strict';

function counter() {
  let seconds = 100
  setInterval(() => {
    seconds = seconds - 1;
    document.getElementById('titleId').innerHTML = `<p>New title for ${seconds} seconds.</p>`;
  }, 1000);
}






counter();

var inputs = [0, 0, 30];

function moreInput (inputs) {
    return inputs * 3;
}
var newArray = inputs.map(moreInput);

console.log(newArray);
//BBBBBFGD
