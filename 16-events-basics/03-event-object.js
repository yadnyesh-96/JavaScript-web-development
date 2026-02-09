//EVENTS ARE ASYNCHRONOUS

console.log("Start");

button.addEventListener("click", () => {
  console.log("Clicked");
});

console.log("End");

/*
Start
End
Clicked (after user action)
*/

// THE EVENT OBJECT (VERY IMPORTANT)
// Whenever an event fires, the browser passes an event object.


button.addEventListener("click", (event) => {
  console.log(event);
});
/*
The event object contains:
What happened
What happened
Where it happened
Which element
Keyboard/mouse info

Common properties you MUST know
event.type       // "click"
event.target     // element that triggered event
event.timeStamp  // when it happened
*/