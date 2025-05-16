# Authify 🔐 - Authentication System using JWT

A full-stack authentication system built with **Node.js**, **Express**, **MongoDB**, **JWT**, **TypeScript**, and **TailwindCSS**. It supports secure user signup, login, and access to protected routes using JSON Web Tokens (JWT).

---

## 🌐 Tech Stack

**Frontend**
- HTML + TypeScript
- TailwindCSS
- LocalStorage for JWT handling

**Backend**
- Node.js + Express
- MongoDB + Mongoose
- JWT for authentication
- TypeScript

---

## 📁 Directory Structure
```
Authify/
│
├── backend/
│ ├── server.ts # Main server setup
│ ├── models/User.ts # Mongoose user schema
│ ├── routes/auth.ts # Auth routes (signup & login)
│ ├── middleware/auth.ts # JWT verification middleware
│ └── .env # Environment variables
│
├── frontend/
│ ├── index.html # Login page
│ ├── signup.html # Signup page
│ └── dashboard.html # Protected dashboard

```


---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/authify-jwt-app.git
cd authify-jwt-app
```
### 2. Backend Setup
```
cd backend
npm install
cp .env.example .env     # Fill in Mongo URI and JWT secret
npm run dev              # Starts the server using ts-node-dev
```
MongoDB should be running locally or remotely (e.g., MongoDB Atlas)

### 3. Frontend
Open any of the HTML files directly in a browser (e.g., index.html to login).

## 🔐 Authentication Flow
1. Signup
- User enters email, password, and other required information
- Backend hashes the password using bcryptjs
- New user document is created in MongoDB
- JWT is generated and returned to the client
- Frontend stores JWT in localStorage
  
2. Login

- User provides credentials
- Backend verifies against database records
- On success, a new JWT is issued
- Frontend stores JWT in localStorage


3. Accessing Protected Routes

- Frontend includes JWT in Authorization header
- Backend middleware verifies token validity
- Access is granted or denied based on verification

4. Logout

- JWT is removed from localStorage
- User is redirected to login page

## 📦 Backend Dependencies

- express
- mongoose
- bcryptjs
- jsonwebtoken
- dotenv
- cors
- typescript
- ts-node-dev

## 🔒 Security Features
- Passwords hashed with bcryptjs
- JWT with expiration time
- Protected routes using middleware
- HTTP-only cookies option available
- CORS configuration for API security
  
## 📸 Screenshots

### 🔐 Login Page
<img width="960" alt="image" src="https://github.com/user-attachments/assets/fe54bb3c-e13c-49e7-a107-0b2d276a5aa1" />


### 📝 Signup Page
<img width="954" alt="image" src="https://github.com/user-attachments/assets/d52ae2fa-716d-4432-baf2-17f94f0f28cb" />


### 🧭 Dashboard (Protected Route)
<img width="712" alt="image" src="https://github.com/user-attachments/assets/a552c66e-b030-48d4-9a12-3c55efa89c44" />


## 📝 Note
- This app does not use sessions or cookies — JWTs are stored in localStorage.
