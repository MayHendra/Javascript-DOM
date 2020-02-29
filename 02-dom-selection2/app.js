/** @format */

// document.querySelector() -> Element
// const p4 = document.querySelector('#b p');
// p4.style.color = 'green';

// const li2 = document.querySelector('section#b ul li:nth-child(2)');
// li2.style.backgroundColor = 'orange';

const sectionB = document.getElementById('b');
const p4 = sectionB.getElementsByTagName('p');
p4[0].style.backgroundColor = 'orange';
