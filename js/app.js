const btns = [
  { class: "toolbar__btn-text-style-bold", dataset: "bold" },
  { class: "toolbar__btn-text-style-italic", dataset: "italic" },
  { class: "toolbar__btn-text-style-underline", dataset: "underline" },
  { class: "toolbar__btn-text-align-left", dataset: "justifyLeft" },
  { class: "toolbar__btn-text-align-center", dataset: "justifyCenter" },
  { class: "toolbar__btn-text-align-right", dataset: "justifyRight" },
  { class: "toolbar__btn-text-align-justify", dataset: "justifyFull" },
  { class: "toolbar__btn-text-list-ordered", dataset: "insertOrderedList" },
  { class: "toolbar__btn-text-list-unordered", dataset: "insertUnorderedList" },
];

const fonts = [
  "Arial",
  "Baskerville",
  "Brandon Grotesque",
  "Verdana",
  "Times New Roman",
  "Georgia",
  "Courier New",
  "Brush Script MT",
  "Rockwell",
  "Futura",
  "Lato",
];

// HEADER
const header = document.querySelector(".header");

const h1 = document.createElement("h1");
header.appendChild(h1);
h1.innerHTML = "Text Editor";

// TOOLBAR
const toolbar = document.querySelector(".toolbar");

const toolbarContainer = document.createElement("div");
toolbar.appendChild(toolbarContainer);
toolbarContainer.classList.add("toolbar__container");

// TOOLBAR SELECT (Font Name)
const fontName = document.createElement("div");
toolbarContainer.appendChild(fontName);
fontName.classList.add("toolbar__select-font-name");

const labelFontName = document.createElement("label");
fontName.appendChild(labelFontName);
labelFontName.htmlFor = "font-name";
labelFontName.innerHTML = "Font Name";

const selectFontName = document.createElement("select");
fontName.appendChild(selectFontName);
selectFontName.id = "font-name";

const sortFonts = fonts.sort();

for (let font of sortFonts) {
  const option = document.createElement("option");
  selectFontName.appendChild(option);
  option.value = font;
  option.innerHTML = font;

  selectFontName.addEventListener("change", (event) => {
    document.execCommand("fontName", false, event.target.value);
  });
}

// TOOLBAR SELECT (Font Size)
const fontSize = document.createElement("div");
toolbarContainer.appendChild(fontSize);
fontSize.classList.add("toolbar__select-font-size");

const labelFontSize = document.createElement("label");
fontSize.appendChild(labelFontSize);
labelFontSize.htmlFor = "font-size";
labelFontSize.innerHTML = "Font Size";

const selectFontSize = document.createElement("select");
fontSize.appendChild(selectFontSize);
selectFontSize.id = "font-size";

for (let i = 3; i <= 7; i++) {
  const option = document.createElement("option");
  selectFontSize.appendChild(option);
  option.value = i;
  option.innerHTML = i * 4 + " px";

  selectFontSize.addEventListener("change", (event) => {
    document.execCommand("fontSize", false, event.target.value);
  });
}

// TOOLBAR SELECT (Color) 
const selectColor = document.createElement("div");
toolbarContainer.appendChild(selectColor);
selectColor.classList.add("toolbar__select-color");

const labelColor = document.createElement("label");
selectColor.appendChild(labelColor);
labelColor.htmlFor = "select-color";
labelColor.innerHTML = "Color";

const inputColor = document.createElement("input");
selectColor.appendChild(inputColor);
inputColor.id = "select-color";
inputColor.type = "color";
inputColor.value = "#000";

inputColor.addEventListener("input", (event) => {
  document.execCommand("foreColor", false, event.target.value);
});

// TOOLBAR BUTTON (Text Style)
const buttonsTextStyle = document.createElement("div");
toolbarContainer.appendChild(buttonsTextStyle);
buttonsTextStyle.classList.add("toolbar__btn-text-style");

// TOOLBAR BUTTON (Text Align)
const buttonsTextAlign = document.createElement("div");
toolbarContainer.appendChild(buttonsTextAlign);
buttonsTextAlign.classList.add("toolbar__btn-text-align");

// TOOLBAR BUTTON (Text List)
const buttonsTextList = document.createElement("div");
toolbarContainer.appendChild(buttonsTextList);
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
  generalBtn.addEventListener("click", () => {
    document.execCommand(`${btn.dataset}`, false, null);
  });
}

// TEXT-BOX
const textBox = document.querySelector(".text-box");
