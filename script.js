window.addEventListener("load", init);

let body;
let szoveg;
let tesztSzoveg;

function init() {
  body = document.querySelector("body");
  szoveg = toggleSwitchLetrehozasa();
  body.innerHTML += szoveg;

  tesztSzoveg = document.querySelector('body h1');
  toggle = document.querySelector('input')
  toggle.addEventListener("change", function (){
    if (!toggle.checked) {
      body.style.backgroundColor='white';
      tesztSzoveg.style.color='black'
      tesztSzoveg.innerText = "Reggel"
    } else {
      body.style.backgroundColor='black';
      tesztSzoveg.style.color='white'
      tesztSzoveg.innerText = "Este"
    }
  }) 

}

function toggleSwitchLetrehozasa() {
  let text = "";

  text += `<div class="toggle-switch">`;
  text += `<input type="checkbox" id="toggle">`;
  text += `<label for="toggle">`
  text += `<div class="circle"></div>`
  text += `</label>`;
  text += `</div>`;

  return text;
}


 

