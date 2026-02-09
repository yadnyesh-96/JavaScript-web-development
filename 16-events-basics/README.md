

# ⚡JavaScript Events (Beginner to Clear Understanding)

Events are the **heart of interaction** in web pages.

> When something happens on a web page and JavaScript responds → that is an **Event**.

---

## 🎯 What is an HTML Event?

HTML events are actions that happen to HTML elements.

### Examples

* Button is clicked
* Page finishes loading
* Mouse moves over an element
* Key is pressed
* Input field value changes

---

## 💡 What are JavaScript Events?

JavaScript allows us to **detect these events** and **run code** when they happen.

This is how websites become interactive.

---

## 🧾 Event Handler in HTML (Old Way)

```html
<button onclick="myFunction()">Click</button>
```

This works, but mixing HTML and JS is **not recommended**.

---

## ✅ Modern Way — `addEventListener()`

```js
element.addEventListener("event", function);
```

Example:

```js
document.getElementById("btn").addEventListener("click", myFunction);
```

---

# 🖱️ Mouse Events

These occur when the user uses the mouse.

| Event       | Description                        |
| ----------- | ---------------------------------- |
| click       | Single click                       |
| dblclick    | Double click                       |
| mousedown   | Mouse button pressed               |
| mouseup     | Mouse button released              |
| mousemove   | Mouse moves                        |
| mouseover   | Pointer enters element             |
| mouseout    | Pointer leaves element             |
| mouseenter  | Enters element only (not children) |
| mouseleave  | Leaves element only                |
| contextmenu | Right click                        |
| wheel       | Mouse wheel scroll                 |

---

## 📍 Mouse Position (Event Object)

Mouse events provide coordinates and button info using the **event object**.

---

# ⌨️ Keyboard Events

Happen when keys are pressed.

| Event    | Description  |
| -------- | ------------ |
| keydown  | Key pressed  |
| keyup    | Key released |
| keypress | ❌ Deprecated |

### Important Properties

| Property   | Meaning           | Example (Z key) |
| ---------- | ----------------- | --------------- |
| event.key  | Actual key value  | "z" or "Z"      |
| event.code | Physical key code | "KeyZ"          |

---

# 🌐 Load Events

These occur when the page or resources finish loading.

| Event            | When it fires                  |
| ---------------- | ------------------------------ |
| DOMContentLoaded | HTML loaded, DOM ready         |
| load             | Whole page, images, CSS loaded |

### Best Use

* `DOMContentLoaded` → attach events, setup UI
* `load` → image size, full resource checks

---

# ⏱️ Timing Events (Timers)

Used to run code after delay or repeatedly.

| Function        | Work                 |
| --------------- | -------------------- |
| setTimeout()    | Run once after delay |
| setInterval()   | Run repeatedly       |
| clearTimeout()  | Stop timeout         |
| clearInterval() | Stop interval        |

### Example

```js
setTimeout(function() {
  alert("Hello");
}, 2000);
```

---

# 🧠 Event Management

Event management means:

* Adding events
* Removing events
* Controlling event behavior
* Preventing default actions

Example (prevent link opening):

```js
event.preventDefault();
```

---

# 🌟 `addEventListener()` Detailed

## Why Use It?

* Does not overwrite events
* Multiple events on same element
* Works on window, document, elements
* Supports bubbling and capturing
* Keeps JS separate from HTML
* Can remove events

---

## Syntax

```js
element.addEventListener(event, function, useCapture);
```

| Parameter  | Meaning                 |
| ---------- | ----------------------- |
| event      | "click", "mouseover"    |
| function   | Code to run             |
| useCapture | true / false (optional) |

> Do not write `"onclick"` — write `"click"`

---

## Anonymous Function

```js
element.addEventListener("click", function() {
  alert("Hello");
});
```

## Named Function

```js
element.addEventListener("click", myFunction);

function myFunction() {
  alert("Hello");
}
```

---

## Multiple Events on Same Element

```js
element.addEventListener("click", first);
element.addEventListener("click", second);
```

Different events:

```js
element.addEventListener("mouseover", one);
element.addEventListener("mouseout", two);
```

---

## Event on Window Object

```js
window.addEventListener("resize", function() {
  console.log("Resized");
});
```

---

## Passing Parameters

```js
element.addEventListener("click", function() {
  myFunction(p1, p2);
});
```

---

# 🔄 Event Propagation (Very Important)

When elements are inside other elements.

Example:

```html
<div>
  <p>Click me</p>
</div>
```

Which runs first?

## 1️⃣ Bubbling (Default)

Inner → Outer
`<p>` runs → then `<div>`

## 2️⃣ Capturing

Outer → Inner
`<div>` runs → then `<p>`

### Control Using

```js
addEventListener(event, function, true); // capturing
addEventListener(event, function, false); // bubbling
```

---

# ❌ Removing Event

```js
element.removeEventListener("click", myFunction);
```

---

# 🧪 Beginner Practice Tasks

1. Button click → change text
2. Mouseover → change color
3. Detect Enter key in input
4. Use setTimeout to show message
5. Try bubbling and capturing using div and p
6. Resize window → show message

---

# 🏁 Final Summary

JavaScript Events allow you to:

* Make pages interactive
* Handle mouse, keyboard, load, and time
* Control user actions
* Build real applications like Todo App, Forms, Games

> Mastering Events = Mastering DOM Interaction.
