const form1 = document.querySelector(".form1");
const form2 = document.querySelector(".form2");
const containerColorPick = document.querySelector(".color-picker");
const inputsColors = document.querySelectorAll(".input-color");
const inputsColors1 = document.querySelector(".input1");
const inputsColors2 = document.querySelector(".input2");
const overlay = document.querySelector(".overlay");
const btnClose = document.querySelector(".fa-solid.fa-xmark");
const popUp = document.querySelector(".popup-input-color");
const headerPhone = document.querySelector(".header-phone");
const messages = document.querySelectorAll(".message7, .message8");

let colors = [];

resetColorPicker();

btnClose.addEventListener("click", resetColorPicker);
overlay.addEventListener("click", () => {
  resetColorPicker();
});

popUp.addEventListener("click", (e) => {
  e.stopPropagation();
});

form1.addEventListener("click", openColorPicker);
headerPhone.addEventListener("click", openColorPicker);

function resetColorPicker() {
  overlay.style.display = "none";
}

function openColorPicker() {
  overlay.style.display = "flex";
  inputsColors.forEach((item) => {
    item.addEventListener("input", async (e) => {
      e.stopPropagation();
      let getColor = item.value;
      if (colors.length < 2) {
        colors.push(getColor);
      } else {
        colors.shift();
        colors.push(getColor);
      }
      setColors();
    });
  });
}

async function setColors() {
  form1.style.backgroundImage = `linear-gradient(to bottom, ${
    inputsColors1.value ? inputsColors1.value : "hsl(293, 100%, 63%)"
  }, 30%, ${
    inputsColors2.value ? inputsColors2.value : "hsl(264, 100%, 61%)"
  })`;
  headerPhone.style.backgroundImage = `linear-gradient(to left, ${
    inputsColors1.value ? inputsColors1.value : "hsl(293, 100%, 63%)"
  }, ${inputsColors2.value ? inputsColors2.value : "hsl(264, 100%, 61%)"})`;
  messages.forEach((msg) => {
    msg.style.backgroundImage = `linear-gradient(to left, ${
      inputsColors2.value ? inputsColors2.value : "hsl(293, 100%, 63%)"
    }, ${inputsColors1.value ? inputsColors1.value : "hsl(264, 100%, 61%)"})`;
  });
}


console.log(Date.prototype)