/** @format */

function darkMode() {
  document.body.classList.toggle('dark-mode');
}

const h1 = document.getElementsByTagName('h1')[0];
h1.onclick = darkMode;

// menambahkan list baru saat event onclick di elemnent li pertama

const ul = document.getElementsByTagName('ul')[0];
const li = document.getElementsByTagName('li');

const li1 = li[0];

// tambahkan newLi

// dengan onclick
// li1.onclick = addNewLi;

// dengan addEvenListener()
li1.addEventListener('click', function() {
  const newLi = document.createElement('li');
  const liText = document.createTextNode(`item ${li.length + 1}`);
  newLi.appendChild(liText);
  ul.appendChild(newLi);
});
