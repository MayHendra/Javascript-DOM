/** @format */

const button = document.getElementsByTagName('button')[0];

button.addEventListener('click', function() {
  const r = Math.ceil(Math.random() * 255);
  const g = Math.ceil(Math.random() * 255);
  const b = Math.ceil(Math.random() * 255);
  document.body.style.backgroundColor = `rgb(${r},${g},${b})`;
});
