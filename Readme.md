# TaskHub – Scalable Task Manager Web App

A modern, secure and scalable task management application built using **React**, **Node.js**, **Express**, and **MongoDB**.  
It allows users to register, login, manage tasks, track progress, and visualize productivity — all with a clean UI and smooth UX.

🔗 Frontend: https://taskhub-blond.vercel.app
🔗 Backend API: [https://taskhub-api-xxxx.onrender.com](https://taskhub-api-ody7.onrender.com)
🔗 GitHub Repo: https://github.com/SaTadde/taskhub


---

## Features

### Authentication & Security

- JWT-based authentication
- Password hashing using bcrypt
- Protected routes and APIs
- Persistent login using localStorage

### Task Management (CRUD)

- Add, update, delete tasks
- Mark tasks as completed/pending
- Instant UI updates with toast notifications
- Search + Filter for improved usability

### Dashboard & Insights

- Beautiful statistics cards:
  - Total Tasks
  - Completed Tasks
  - Pending Tasks
- Responsive UI with framer-motion animations

### UI/UX Excellence

- Fully responsive, modern design
- Reusable React components
- Smooth animations
- Light theme + minimal professional color palette

---

## Tech Stack

### **Frontend**

- React.js (Vite)
- Context API for global auth state
- Axios, Bootstrap, Framer Motion, React-Toastify

### **Backend**

- Node.js + Express.js
- MongoDB Atlas + Mongoose
- JWT, bcryptjs

---

## Project Architecture

client/
└─ src/
├─ pages/ → Home, Login, Register, Dashboard
├─ components/ → Navbar, Footer, ProtectedRoute
├─ context/ → AuthContext.js
server/
├─ routes/ → auth.js, tasks.js
├─ models/ → User.js, Task.js
└─ middleware/ → auth.js

## Run Locally

### Clone the repo

```bash
git clone https://github.com/SaTadde/taskhub.git
cd taskhub

### Install dependencies

cd client && npm install
cd ../server && npm install

### Setup environment variables

### Create .env inside server:

MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_EXPIRES_IN=7d


### Start development mode

# Terminal 1
cd server
npm run dev

# Terminal 2
cd client
npm run dev


### API Endpoints (Backend)
Method	Endpoint	Description
POST	/api/auth/register	Register new user
POST	/api/auth/login	Login and get JWT
GET	/api/auth/profile	Fetch user profile
GET	/api/tasks	Get all tasks
POST	/api/tasks	Create new task
PUT	/api/tasks/:id	Update task status
DELETE	/api/tasks/:id	Delete task

# Deployment Notes (for production):
# Frontend deploys to Vercel
# Backend deploys to Render / Railway
# Use environment variables for secrets
# MongoDB Atlas handles scalability & security
# Add caching + rate limiting for future expansion

# Scalability Considerations
# This project is structured for growth:
# Modular backend routes
# JWT ready for role-based access
# React Context supports larger state
# MongoDB schema can extend to projects, teams, notes
# UI reusable components ensure maintainability

Sarayu Tadde
B.Tech CSE

```
