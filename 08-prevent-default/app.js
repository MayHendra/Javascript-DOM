/** @format */

// menghilangkan card my version

// const container = document.getElementsByTagName('div')[0];
// const card = container.getElementsByTagName('div')[0];
// const img = container.getElementsByTagName('img')[0];
// const span = container.getElementsByTagName('span')[0];
// const span2 = container.getElementsByTagName('span')[1];

// const closeBtn = container.getElementsByTagName('span')[2];

// closeBtn.addEventListener('click', function() {
//   card.removeChild(img);
//   card.removeChild(span);
//   card.removeChild(span2);
//   container.removeChild(card);
// });

// versi Pak dhika awkwkwk lebih dikit

// const container = document.getElementsByTagName('div')[0];
// const card = container.getElementsByTagName('div')[0];

// container.addEventListener('click', function() {
//   card.style.display = 'none';
// });

// karna kendala saat menghapus banyak card maka solusinya dengan cara DOM Travelsal

const closeBtn = document.querySelectorAll('.close');

// for (let i = 0; i < closeBtn.length; i++) {
//   closeBtn[i].addEventListener('click', function(e) {
//     // closeBtn[i].parentElement.style.display = 'none';
//     e.target.parentElement.style.display = 'none';
//   });
// }

// cara lain dengan foreach

closeBtn.forEach(function(el) {
  el.addEventListener('click', function(e) {
    e.target.parentElement.style.display = 'none';
    e.preventDefault();
  });
});

// DOM Travelsal Method

// parentNode -> node
// parentElement -> element
// nextSibling -> node
// nextElementSibling ->element
// previousSibling -> node
// previousElementSibling -> element
