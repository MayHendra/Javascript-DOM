/** @format */

// ---------------> Manipulasi Element <-----------------------

// innerHTML mengubah element html
const judul = document.getElementsByTagName('h1');
judul[0].innerHTML = 'Tio';

// style menggunakan style css
judul[0].style.color = 'blue';

const p2 = document.getElementsByTagName('p')[1];

// classList.add() -> untuk menambahkan class baru pada sebuah element html
// p2.classList.add('label');

// classList.remove -> untuk menghapus class pada sebauh element yang mempunyai class tertentu

// classList.toogle -> jika suatu element tidak punya class, maka akan ditambahkan kedalam class tersebut..
// namun jika suatu element sudah mempunyai classnya, maka class tersebut akan diremove

p2.classList.toggle('label');

// ---------------------------> Manipulasi Node <------------------------------------

// buat element baru

const newParagraph = document.createElement('p');
const paragraphText = document.createTextNode('Paragraph baru');

// menyimpan tulisan ke dalam paragraph
newParagraph.appendChild(paragraphText);

// simpan newParagraph di akhir section A dengan appendCHild()

const sectionA = document.getElementsByTagName('section')[0];
sectionA.appendChild(newParagraph);
newParagraph.style.backgroundColor = 'orange';

// ---------------------------------------------------------------------------------

const newList = document.createElement('li');
const paragraphList = document.createTextNode('Paragraph baru di Section B');

// menyimpan tulisan ke dalam list
newList.appendChild(paragraphList);

// simpan newList di section B dengan insertBefore()
const ul = document.getElementsByTagName('ul')[0];
const li2 = ul.querySelector('li:nth-child(2)');

ul.insertBefore(newList, li2);
li2.style.backgroundColor = 'orange';

// -------------------------------------------------------------------------------------

// removeChild() dan replaceChild()

const linkA = sectionA.getElementsByTagName('a')[0];
sectionA.removeChild(linkA);

const newParagraph2 = document.createElement('p');
const paragraphText2 = document.createTextNode('New Paragraph 2');
newParagraph2.appendChild(paragraphText2);

const oldP2 = sectionA.getElementsByTagName('p')[1];

sectionA.replaceChild(newParagraph2, oldP2);
newParagraph2.style.backgroundColor = 'orange';
