# MERN Notes App

A production ready full stack notes management application built using the MERN stack.  
Frontend is bundled and served directly from the backend for unified deployment.

---

## 🌍 Live Demo

https://mern-notes-crud-app.onrender.com/

---

## 🚀 Tech Stack

- React
- Node.js
- Express
- MongoDB Atlas
- Axios
- Lucide Icons

---

## ✨ Features

- Create notes with multi line description
- View notes in responsive responsive grid layout
- Delete notes
- Update note description
- Preview long descriptions using line clamp
- Read full note in modal view
- Prevent blank submissions with validation
- Dark and Light theme toggle
- Persistent theme using localStorage
- Smooth theme transition animation
- Animated moon and sun icon rotation
- Custom styled scrollbar
- Fully responsive layout
- Production build served via Express

---

## 📦 Architecture

Browser  
↓  
Express Server  
↓  
Serves React production build  
↓  
REST API  
↓  
MongoDB Database  

Single server deployment architecture.

---

## 🔥 Deployment

The application is deployed on Render as a Web Service.

Frontend production build is generated using Vite and served from the backend using Express static middleware.

Environment variables are securely managed using Render environment configuration.

Live URL:

```
https://mern-notes-crud-app.onrender.com/
```

---

## 🛠 How To Run Locally

### 1. Clone the repository

```
git clone <your-repo-url>
```

### 2. Install dependencies

Frontend:

```
cd Frontend
npm install
npm run build
```

Backend:

```
cd Backend
npm install
npm run dev
```

### 3. Open in browser

```
http://localhost:3000
```

---

## 🔮 Future Improvements

- Edit note UI improvement
- Toast notifications
- Search and filter feature
- Authentication system
- Better error handling
- Custom domain setup

---

Built as a full stack MERN practice project to strengthen API integration, backend architecture, production deployment strategy, and UI theming system implementation.
