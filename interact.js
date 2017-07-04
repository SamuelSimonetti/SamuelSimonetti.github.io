let anteriorEl = document.querySelector('#anterior');
let proximoEl = document.querySelector('#proximo');
let botao1El = document.querySelector('#botao1');
let botao2El = document.querySelector('#botao2');
let botao3El = document.querySelector('#botao3');
let galleryEl = document.querySelector('#gallery');
let resposta1El = document.querySelector('#resposta1');
let resposta2El = document.querySelector('#resposta2');
let resposta3El = document.querySelector('#resposta3');


let i=0;

function anterior(){
  if(i===0)
    i=3;
  i--;
  galleryEl.src='img/gallery2/gallery'+i+'.mp4';
  galleryEl.classList.remove('videoOn');
  galleryEl.classList.add('videoOff');
}

function proximo(){
  if(i===2)
    i=-1;
  i++;
  galleryEl.src='img/gallery2/gallery'+i+'.mp4';
  galleryEl.classList.remove('videoOn');
  galleryEl.classList.add('videoOff');
}

function checa1() {
  let resposta1 = resposta1El.value;
  if(resposta1 == 'Carboidrato')
    galleryEl.classList.add('videoOn');
}
function checa2() {
  let resposta2 = resposta2El.value;
  if(resposta2 == 'CO2')
    galleryEl.classList.add('videoOn');
}
function checa3() {
  let resposta3 = resposta3El.value;
  if(resposta3 == 'Luz')
    galleryEl.classList.add('videoOn');
}

anteriorEl.addEventListener('click', anterior);
proximoEl.addEventListener('click', proximo);
botao1El.addEventListener('click', checa1);
botao2El.addEventListener('click', checa2);
botao3El.addEventListener('click', checa3);
