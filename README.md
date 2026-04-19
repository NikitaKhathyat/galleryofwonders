# 🎨 Gallery of Wonder

**Gallery of Wonder** is a full-stack web application inspired by Pinterest, built to provide a space where users can **share creativity, discover inspiring content, and connect with people who share similar interests**.  
The platform focuses on community building through visual expression and seamless user interaction.

---

## 🚀 Project Overview

Gallery of Wonder allows users to:
- Showcase creative ideas visually
- Explore content shared by others
- Connect with like-minded creators
- Build and grow a creative community

---

## 🛠️ Tech Stack

### Frontend
- **Angular** `21.0.0`
- TypeScript
- HTML5, CSS3

### Backend
- **Spring Boot (Java)**
- **Maven** (Build Tool)
- RESTful APIs

### Database
- **MongoDB**

### Authentication & Security
- **JWT (JSON Web Token)** for authentication
- **BCrypt** for secure password hashing

---

## ✨ Key Features

- User Registration & Login
- Secure JWT-based authentication
- Password encryption using BCrypt
- Create and explore creative posts


## 🔗 API Endpoints

> **Base URL:** `http://localhost:8080/api`

---

## 🔐 Authentication APIs (`AuthController`)

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/auth/register` | Register a new user (password hashed using BCrypt) |
| POST | `/auth/login` | Authenticate user and return JWT token |

---

## 👤 User APIs (`UserController`)

**Base Path:** `/api/users`

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/users/register` | Register a new user |
| GET | `/users/{userId}` | Get user details by ID |
| PUT | `/users/{userId}` | Update user profile (name, image) |
| GET | `/users/{userId}/bookmarks` | Get user bookmarks |
| GET | `/users/{userId}/collections` | Get user collections (boards) |
| GET | `/users/{userId}/wonders` | Get wonders posted by user |
| GET | `/users/bookmarks` | Get logged-in user bookmarks (JWT required) |
| POST | `/users/bookmarks/{wonderId}` | Bookmark a wonder (JWT required) |
| DELETE | `/users/bookmarks/{wonderId}` | Remove bookmark (JWT required) |

**Notes**
- JWT is extracted using `Authentication`
- Logged-in user is identified via email inside JWT
- CORS enabled for `http://localhost:4200`

---

## 🎨 Wonder APIs (`WonderController`)

**Base Path:** `/api/wonders`

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/wonders` | Create a new wonder |
| GET | `/wonders` | Get all wonders |
| GET | `/wonders/{id}` | Get wonder by ID |
| POST | `/wonders/{id}/like` | Like a wonder |
| POST | `/wonders/{id}/unlike` | Unlike a wonder |

**Details**
- Wonder is linked to the creator (User)
- Posted wonders are stored inside user profile
- Likes are maintained as a list of users

---

## 💬 Comment APIs (`CommentController`)

**Base Path:** `/api/comments`

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/comments/{id}/comments` | Add a comment to a wonder |
| PUT | `/comments/{id}` | Update an existing comment |
| DELETE | `/comments/{id}` | Delete a comment |

**Note**
- `{id}` in POST refers to **Wonder ID**
- Comments are stored separately and referenced inside Wonder

---

## 📂 File Upload APIs (`FileUploadController`)

**Base Path:** `/api/files`

| Method | Endpoint | Description |
|------|---------|-------------|
| POST | `/files/upload` | Upload an image/file |
| GET | `/files/{filename}` | Fetch uploaded file |

**Details**
- Files stored in `uploads/` directory
- Multipart file upload supported
- Used for wonder images and profile images

---

## 🔐 Authentication & Security Flow

```http
Authorization: Bearer <JWT_TOKEN>
```
## 👩‍💻 Author

**Nikita Bisht**  
🔗 [LinkedIn](https://www.linkedin.com/in/nikita-bisht-a22b35207/?utm_source=share_via&utm_content=profile&utm_medium=member_android)

---

⭐ If you found this project interesting or helpful, consider giving it a star on GitHub!
