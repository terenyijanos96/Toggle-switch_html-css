window.addEventListener("load", main);

let body;
let szoveg;

function init() {
  body = document.querySelector("body");
  szoveg = toggleSwitchLetrehozasa();
}

function main() {
  init();
  body.innerHTML += szoveg;
}

function toggleSwitchLetrehozasa() {
  let text = "";

  text += `<div class="toggle-switch">`;
  text += `<input type="checkbox" id="toggle">`;
  text += `<label for="toggle"></label>`;
  text += `</div>`;

  return text;
}
