# OOPJS-25

# 🧠 Atelier 2: JavaScript & Object-Oriented Programming (OOP)

## 🎯 About This Atelier
This repository contains all the exercises given by the teacher for **Atelier 2**.  
The goal is to practice **Object-Oriented Programming (OOP)** in **JavaScript (ES6)** through several small projects and implementations.

---

## 📁 Project Structure

```bash
├── 1-Cars
    ├── Car.js
    ├── Ford.js
    ├── Hyndai.js
    ├── script.js
├── 2-Student
├── 3-Vector
├── 4-MiniBlog
└── 5-LibraryManagment
```

Each folder corresponds to one exercise of the atelier.

---

## 🧩 Exercises

### **Exercise 1 – Car System (Inheritance)**
- Create a constructor function `Car` with:  
  `model`, `brand`, `year`, `type`, `fuel`
- Create a list of cars.
- Implement inheritance:
  - `Hyundai` → `series`, `hybrid`, `alarm()` method  
  - `Ford` → `options` (array)
- Sort cars by increasing year.

📂 Folder: `1-Cars`

---

### **Exercise 2 – Students & Professors**
- Create two native objects:
  - `Student` → name, surname, age, CNE
  - `Professor` → name, age, CIN
- Add:
  - `study()` to Student  
  - `teach()` to Professor
- Sort students alphabetically by **name → surname → age**.

📂 Folder: `2-Student`

---

### **Exercise 3 – Vectors, Geometry & ES6 Classes**
- Create a class `Vector2D` with default coordinates.
- Add display method and implement vector addition.
- Create:
  - `Rectangle` and `Square` (inheritance)
  - `Point`
  - `Segment` composed of two `Point` objects

📂 Folder: `3-Vector`

---

### **Exercise 4 – Mini Blog (LocalStorage + OOP)**
- Create a simple mini blog with:
  - User signup
  - User login
  - Add posts
  - List posts
- Store all data using **LocalStorage** in JSON format.
- Implement conversion **Class ↔ JSON**.
- Add basic middleware to check login state.

📂 Folder: `4-MiniBlog`

---

### **Exercise 5 – Library Management (Array, Set, Map)**
1. **Books (Array)** → add, remove, display books  
2. **Categories (Set)** → avoid duplicates, delete category  
3. **Borrows (Map)** → assign books to borrowers, check borrowed books  

📂 Folder: `5-LibraryManagment`

---

## ⚙️ Technologies Used
- JavaScript (ES6)
- TailwindCSS
- HTML5
- CSS
- OOP Principles
- LocalStorage (JSON)

---

## 📚 How to Run
- Open each folder and run its `script.js` in the console.
- For MiniBlog:
  - Open `signup.html` to register a new user  
  - Then use `login.html` to log in
  - If you go to `index.html` the Auth middleware is gonna redirect you to login.
---

## 👤 Author
**Elmehdi Achahed**  
Atelier 2 – JavaScript & OOP  
13 November 2025

---