// 1a. 
const button1 = document.querySelector(`button`);
// 1b. 
button1.onclick = () => {
    alert("You clicked the first button! Congrats!");
}
// 2a.
const h3 = document.querySelector(`h3`);
// 2b.
h3.addEventListener(`mouseover`, () => {
  alert("You hovered over the h3 element! Congrats!");
});
// 3a.
const form = document.querySelector(`form`);
// 3b.
form.addEventListener(`submit`, e =>{
  e.preventDefault();
  alert(form.elements.entry.value);
  form.elements.entry.value = "";
});

// Bonus
// 4a.
const darkMode = document.querySelector(`#dm`);
// 4b.
const body = document.querySelector(`body`);
darkMode.addEventListener(`click`, () => {
  body.classList.toggle(`dark-mode`);
});
// 5a
const times = document.querySelector(`#times`);
// 5b. 
let num = 1;
times.addEventListener(`click`, () => {
  if (num < 3){
    alert(`You clicked the last button! Congrats!`);
  } else if (num === 3){
    alert("OH NO! This button is NOT going to work anymore");
  }
  num++;
});
