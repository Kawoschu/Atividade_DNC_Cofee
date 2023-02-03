const el1 = document.getElementById('card1');
const hiddenDiv1 = document.getElementById('botão1');

const el2 = document.getElementById('card2');
const hiddenDiv2 = document.getElementById('botão2');

const el3 = document.getElementById('card3');
const hiddenDiv3 = document.getElementById('botão3');

const el4 = document.getElementById('card4');
const hiddenDiv4 = document.getElementById('botão4');



// Botão 1
el1.addEventListener('mouseover', function handleMouseOver1() {
  hiddenDiv1.style.visibility = 'visible';});
el1.addEventListener('mouseout', function handleMouseOut1() {
  hiddenDiv1.style.visibility = 'hidden';});


// Botão 2
el2.addEventListener('mouseover', function handleMouseOver2() {
  hiddenDiv2.style.visibility = 'visible';});
el2.addEventListener('mouseout', function handleMouseOut2() {
  hiddenDiv2.style.visibility = 'hidden';});

  // Botão 3
el3.addEventListener('mouseover', function handleMouseOver3() {
  hiddenDiv3.style.visibility = 'visible';});
el3.addEventListener('mouseout', function handleMouseOut3() {
  hiddenDiv3.style.visibility = 'hidden';});

  // Botão 4
  el4.addEventListener('mouseover', function handleMouseOver4() {
    hiddenDiv4.style.visibility = 'visible';});
  el4.addEventListener('mouseout', function handleMouseOut4() {
    hiddenDiv4.style.visibility = 'hidden';});
  
  


var modal1 = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal1.style.display = "block";
}
span.onclick = function() {
  modal1.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == modal1) {
    modal1.style.display = "none";
  }
}


function highlight(selector){
  var element = document.querySelector(selector);
  element.classList.toggle("card-highlight")
  }