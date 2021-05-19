const btns = [
  { class: "toolbar__btn-text-edit-select-all", dataset: "selectAll" },
  { class: "toolbar__btn-text-edit-cut", dataset: "cut" },
  { class: "toolbar__btn-text-edit-copy", dataset: "copy" },
  { class: "toolbar__btn-text-edit-paste", dataset: "paste" },
  { class: "toolbar__btn-text-edit-undo", dataset: "undo" },
  { class: "toolbar__btn-text-edit-redo", dataset: "redo" },
  { class: "toolbar__btn-text-style-bold", dataset: "bold" },
  { class: "toolbar__btn-text-style-italic", dataset: "italic" },
  { class: "toolbar__btn-text-style-underline", dataset: "underline" },
  { class: "toolbar__btn-text-style-subscript", dataset: "subscript" },
  { class: "toolbar__btn-text-style-superscript", dataset: "superscript" },
  { class: "toolbar__btn-text-align-left", dataset: "justifyLeft" },
  { class: "toolbar__btn-text-align-center", dataset: "justifyCenter" },
  { class: "toolbar__btn-text-align-right", dataset: "justifyRight" },
  { class: "toolbar__btn-text-align-justify", dataset: "justifyFull" },
  { class: "toolbar__btn-text-list-ordered", dataset: "insertOrderedList" },
  { class: "toolbar__btn-text-list-unordered", dataset: "insertUnorderedList" }
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
  "Inconsolata"
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

// TOOLBAR SELECTS
const toolbarSelects = document.createElement("div");
toolbarContainer.appendChild(toolbarSelects);
toolbarSelects.classList.add("toolbar-selects");

// TOOLBAR SELECT (Font Name)
const fontName = document.createElement("div");
toolbarSelects.appendChild(fontName);
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
toolbarSelects.appendChild(fontSize);
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
toolbarSelects.appendChild(selectColor);
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

// TOOLBAR BUTTONS
const toolbarButtons = document.createElement("div");
toolbarContainer.appendChild(toolbarButtons);
toolbarButtons.classList.add("toolbar-buttons");

// TOOLBAR BUTTON (Text Edit)
const buttonsTextEdit = document.createElement("div");
toolbarButtons.appendChild(buttonsTextEdit);
buttonsTextEdit.classList.add("toolbar__btn-text-edit");

// TOOLBAR BUTTON (Text Style)
const buttonsTextStyle = document.createElement("div");
toolbarButtons.appendChild(buttonsTextStyle);
buttonsTextStyle.classList.add("toolbar__btn-text-style");

// TOOLBAR BUTTON (Text Align)
const buttonsTextAlign = document.createElement("div");
toolbarButtons.appendChild(buttonsTextAlign);
buttonsTextAlign.classList.add("toolbar__btn-text-align");

// TOOLBAR BUTTON (Text List)
const buttonsTextList = document.createElement("div");
toolbarButtons.appendChild(buttonsTextList);
buttonsTextList.classList.add("toolbar__btn-text-list");

let containerBtnName;

for (let btn of btns) {
  if (`${btn.class}`.slice(18, 22) === "edit") {
    containerBtnName = buttonsTextEdit;
  } else if (`${btn.class}`.slice(18, 23) === "align") {
    containerBtnName = buttonsTextAlign;
  } else if (`${btn.class}`.slice(18, 23) === "style") {
    containerBtnName = buttonsTextStyle;
  } else if (`${btn.class}`.slice(18, 22) === "list") {
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