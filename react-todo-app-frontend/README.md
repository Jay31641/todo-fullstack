# Todo Fullstack Application

This is a full-stack **Todo Application** built with a React frontend and an Express/Node.js backend.  
It provides a clean and responsive user interface along with a simple API to manage tasks.  
The project is structured into two separate folders: one for the frontend and one for the backend.

---

## 🚀 Tech Stack
- **Frontend:** React, JavaScript, CSS  
- **Backend:** Node.js, Express  
- **Database:** SQLite  
- **Tools:** Nodemon, npm  

---

## 📂 Project Structure
todo-fullstack/
│
├── react-todo-app-frontend/ # Frontend (React app)
│ ├── public/
│ ├── src/
│ └── package.json
│
└── todo-server-backend/ # Backend (Express + SQLite)
├── api/
├── database/
└── package.json


---

## ⚙️ Setup Instructions

### 1. Clone the repository

bash git clone https://github.com/Jay31641/todo-fullstack.git
cd todo-fullstack

2. Setup Backend
cd todo-server-backend
npm install
npm start

Backend will run on http://localhost:8888
 (default).

3. Setup Frontend
cd ../react-todo-app-frontend
npm install
npm start


Frontend will run on http://localhost:3000
 (default).

📌 Features

Add, edit, and delete todos

Mark tasks as completed

Persistent storage using SQLite

Clean and minimal UI

🛠 API Endpoints (Backend)
Method	Endpoint	Description
GET	/todos	Fetch all todos
POST	/todos	Add a new todo
PUT	/todos/:id	Update a specific todo
DELETE	/todos/:id	Delete a specific todo
🖼 Screenshots

(Optional – You can add app screenshots here if you like)

👨‍💻 Author

Jaya Prakash
Built with 💻, patience, and consistency.
