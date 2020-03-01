/** @format */

while (true) {
  let input = prompt('Masukan Pilihan anda antara Gajah, Manusia dan Semut : ');
  input = input.toLowerCase();

  let comp = Math.ceil(Math.random() * 10);
  if (comp <= 3.33333333) {
    comp = 'gajah';
  } else if (comp >= 3.33333333 && comp <= 6.66666666) {
    comp = 'manusia';
  } else {
    comp = 'semut';
  }

  let result;

  if (input === comp) {
    alert(
      `Kamu memilih ${input} dan Computer memilih ${comp}, Hasilnya Seri !!`
    );
  } else if (input === 'gajah') {
    result =
      comp === 'manusia'
        ? `Kamu memilih : ${input} dan Computer memilih ${comp} \nKamu Menang`
        : `Kamu memilih : ${input} dan Computer memilih ${comp} \nKamu Kalah`;
    alert(result);
  } else if (input === 'manusia') {
    result =
      comp === 'gajah'
        ? `Kamu memilih : ${input} dan Computer memilih ${comp} \nKamu Kalah`
        : `Kamu memilih : ${input} dan Computer memilih ${comp} \nKamu Menang`;
    alert(result);
  } else if (input === 'semut') {
    result =
      comp === 'gajah'
        ? `Kamu memilih : ${input} dan Computer memilih ${comp} \nKamu Menang`
        : `Kamu memilih : ${input} dan Computer memilih ${comp} \nKamu Kalah`;
    alert(result);
  } else {
    alert('yang kamu masukan bukan pilihan');
  }
}
