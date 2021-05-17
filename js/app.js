const btns = [
  { class: "toolbar__btn-text-align-right", dataset: "justifyRight" },
  { class: "toolbar__btn-text-align-center", dataset: "justifyCenter" },
  { class: "toolbar__btn-text-align-left", dataset: "justifyLeft" },
  { class: "toolbar__btn-text-align-justify", dataset: "justifyFull" }
]

// HEADER 
const header = document.querySelector(".header");

const h1 = document.createElement("h1");
header.appendChild(h1);
h1.innerHTML = "Text Editor";


// TOOLBAR
const toolbar = document.querySelector(".toolbar");

const buttons = document.createElement("div");
toolbar.appendChild(buttons);
buttons.classList.add("toolbar__buttons");

// TOOLBAR BUTTONS (Text Align)
const buttonsTextAlign = document.createElement("div");
buttons.appendChild(buttonsTextAlign);
buttonsTextAlign.classList.add("toolbar__btn-text-align");

let containerBtnName;

for (let btn of btns) {
  
  if (`${btn.class}`.slice(0, 23) === "toolbar__btn-text-align") {
    containerBtnName = buttonsTextAlign;
  } else {
    
  }

  const generalBtn = document.createElement("button");
  containerBtnName.appendChild(generalBtn);
  generalBtn.classList.add(`${btn.class}`);
  generalBtn.dataset["command"] = `${btn.dataset}`;
}

// TEXT-BOX
const textBox = document.querySelector(".text-box");