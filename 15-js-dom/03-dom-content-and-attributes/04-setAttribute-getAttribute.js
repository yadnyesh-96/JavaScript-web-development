
const img= document.createElement("img");

img.setAttribute("src","cat.png");
img.setAttribute("alt","Cat");

console.log(img.getAttribute("src"));

/*
const input = document.getElementById("box");

console.log(input.getAttribute("value")); // "Hello"
console.log(input.value);                 // "Hello"

console.log(input.getAttribute("value")); // STILL "Hello"
console.log(input.value);                 // NEW value

*/