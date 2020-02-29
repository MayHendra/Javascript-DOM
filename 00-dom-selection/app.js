/** @format */

// DOM SELECTION
// document.getElementById() -> element
const judul = document.getElementById('judul');
judul.style.color = 'red';
judul.style.backgroundColor = 'blue';
judul.innerHTML = 'May Hendra';

// document.getElementsByTagName() -> HTMLcollection
let pTag = document.getElementsByTagName('p');
for (i = 0; i < pTag.length; i++) {
  pTag[i].style.backgroundColor = 'lightblue';
}

// document.getElementByClassName()
const p1 = document.getElementsByClassName('p1');
p1[0].style.color = 'red';
