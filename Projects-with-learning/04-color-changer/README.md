

# 🎨 Color Scheme Switcher (DOM Mini Project)

A simple and interactive **Color Scheme Switcher** built using **HTML, CSS, and JavaScript DOM manipulation**.
This project demonstrates how JavaScript can dynamically change styles and handle user interactions using event listeners.



---

## 🖥️ Preview

When a user clicks on any color box, the background color of the page changes instantly.
A reset button restores the default color.

---

## 🛠️ Tech Stack

* HTML5
* CSS3
* JavaScript (ES6)
* DOM Manipulation
* Event Handling (Basic)

---

## ✨ Features

✔️ Change background color by clicking color boxes <br>
✔️ Reset to default color <br>
✔️ Clean UI and responsive layout <br>
✔️ Demonstrates practical use of DOM and events <br>

---

## 📂 Project Structure

```
Color-Changer/
│
├── index.html
├── style.css
└── script.js
```

---

## 🧠 Concepts Practiced

* `querySelector` & `querySelectorAll`
* Event Listeners
* DOM element targeting
* Dynamic style changes
* Preventing default link behavior
* Clean and optimized JavaScript logic

---

## 📸 How It Works

1. Select all color boxes using DOM.
2. Attach click event listeners to each box.
3. Use the box `id` as the background color.
4. Reset button restores default color using `preventDefault()`.

---

## 🧪 Code Snippet

```javascript
boxes.forEach(box =>
    box.addEventListener('click', e =>
        section.style.backgroundColor = e.target.id
    )
);
```

---

## 🎯 Learning Outcome

This project helped in understanding how JavaScript interacts with HTML elements in real-time using the DOM and event-driven programming.

---

## 🔮 Future Improvements

* Add smooth color transition animation
* Add random color generator
* Save selected color using localStorage
* Add dark/light mode toggle

---

## 👨‍💻 Author

**Yadnyesh Dhangar**
GitHub: [https://github.com/yadnyesh-96](https://github.com/yadnyesh-96)

---

## ⭐ Show Your Support

If you like this project, give it a ⭐ on GitHub!
