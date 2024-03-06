"use strict";

// alert(
//   "To calculate total width of element please follow instructions in the next windows."
// );
// const content = prompt("Type in content width in format '20px'");
// const padding = prompt("Type in padding width in format '2px'");
// const border = prompt("Type in border width in format '2px'");
// getElementWidth(content, padding, border);

function getElementWidth(content, padding, border) {
  return console.log(
    Number.parseFloat(content) +
      Number.parseFloat(padding) * 2 +
      Number.parseFloat(border) * 2
  );
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200
