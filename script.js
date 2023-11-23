const inputRojo = document.getElementById('rojo');
const inputVerde = document.getElementById('verde');
const inputAzul = document.getElementById('azul');

const txtRojo = document.getElementById('txt-rojo');
const txtVerde = document.getElementById('txt-verde');
const txtAzul = document.getElementById('txt-azul');

let rojo = inputRojo.value;
let verde = inputVerde.value;
let azul = inputAzul.value;

txtRojo.innerText = rojo;
txtVerde.innerText = verde;
txtAzul.innerText = azul;

const actualizarColor = (rojo, verde, azul) => {
  const colorRGB = `rgb(${rojo}, ${verde}, ${azul})`;
  document.body.style.backgroundColor = colorRGB;
}

inputRojo.addEventListener('change', (e) => {
  rojo = e.target.value;
  txtRojo.innerText = rojo;
  actualizarColor(rojo, verde, azul);
});

inputVerde.addEventListener('change', (e) => {
  verde = e.target.value;
  txtVerde.innerText = verde;
  actualizarColor(rojo, verde, azul);
});

inputAzul.addEventListener('change', (e) => {
  azul = e.target.value;
  txtAzul.innerText = azul;
  actualizarColor(rojo, verde, azul);
});
