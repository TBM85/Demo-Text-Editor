const btns = [
  { class: "toolbar__btn-text-align-left", dataset: "justifyLeft" },
  { class: "toolbar__btn-text-align-center", dataset: "justifyCenter" },
  { class: "toolbar__btn-text-align-right", dataset: "justifyRight" },
  { class: "toolbar__btn-text-align-justify", dataset: "justifyFull" },
  { class: "toolbar__btn-text-style-bold", dataset: "bold" },
  { class: "toolbar__btn-text-style-italic", dataset: "italic" },
  { class: "toolbar__btn-text-style-underline", dataset: "underline" },
  { class: "toolbar__btn-text-list-ordered", dataset: "insertOrderedList" },
  { class: "toolbar__btn-text-list-unordered", dataset: "insertUnorderedList" }
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

// TOOLBAR BUTTONS (Text Style)
const buttonsTextStyle = document.createElement("div");
buttons.appendChild(buttonsTextStyle);
buttonsTextStyle.classList.add("toolbar__btn-text-style");

// TOOLBAR BUTTONS (Text List)
const buttonsTextList = document.createElement("div");
buttons.appendChild(buttonsTextList);
buttonsTextList.classList.add("toolbar__btn-text-list");

let containerBtnName;

for (let btn of btns) {
  if (`${btn.class}`.slice(0, 23) === "toolbar__btn-text-align") {
    containerBtnName = buttonsTextAlign;
  } else if (`${btn.class}`.slice(0, 23) === "toolbar__btn-text-style") {
    containerBtnName = buttonsTextStyle;
  } else if (`${btn.class}`.slice(0, 22) === "toolbar__btn-text-list") {
    containerBtnName = buttonsTextList;
  }

  const generalBtn = document.createElement("button");
  containerBtnName.appendChild(generalBtn);
  generalBtn.classList.add(`${btn.class}`);
  generalBtn.dataset["command"] = `${btn.dataset}`;

  // Executes the specified command for the selected part
  generalBtn.addEventListener('click', () => {
		document.execCommand(`${btn.dataset}`, false, null);
	});
}

// TEXT-BOX
const textBox = document.querySelector(".text-box");