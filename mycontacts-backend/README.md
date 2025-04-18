# 🌟 MyContacts Backend

The `MyContacts Backend` is a Node.js and Express-based backend application for managing user contacts. It provides a RESTful API for user authentication and contact management, including creating, reading, updating, and deleting contacts.

## ✨ Features

- 🔒 User authentication with JWT (JSON Web Tokens).
- 🛡️ Secure password storage using bcrypt.
- 📝 CRUD operations for managing contacts.
- ⚙️ Middleware for error handling and token validation.
- 🗄️ MongoDB integration for data persistence.

## 📋 Prerequisites

- 🖥️ Node.js (v14 or later)
- 🍃 MongoDB (local or cloud instance)
- 📦 npm (Node Package Manager)

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the backend directory:
   ```bash
   cd mycontacts-backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root of the `mycontacts-backend` directory and add the following environment variables:
   ```env
   PORT=5000
   CONNECTION_STRING=<your-mongodb-connection-string>
   ACCESS_TOKEN_SECRET=<your-access-token-secret>
   ```

## 🛠️ Usage

1. Start the server in development mode:
   ```bash
   npm run dev
   ```

2. The server will run on `http://localhost:5000` by default.

## 📡 API Endpoints

### 👤 User Routes

- `POST /api/users/register` - Register a new user.
- `POST /api/users/login` - Login a user and get a JWT.
- `GET /api/users/current` - Get the current logged-in user's information (requires authentication).

### 📇 Contact Routes

- `GET /api/contacts` - Get all contacts for the logged-in user (requires authentication).
- `POST /api/contacts` - Create a new contact (requires authentication).
- `GET /api/contacts/:id` - Get a specific contact by ID (requires authentication).
- `PUT /api/contacts/:id` - Update a contact by ID (requires authentication).
- `DELETE /api/contacts/:id` - Delete a contact by ID (requires authentication).

## 🗂️ Project Structure

- `server.js` - Entry point of the application.
- `config/dbConnection.js` - MongoDB connection setup.
- `controllers/` - Contains the logic for handling API requests.
- `middleware/` - Custom middleware for error handling and token validation.
- `models/` - Mongoose schemas for User and Contact.
- `routes/` - API route definitions.
- `constants.js` - Contains reusable constants.

## 📜 License

This project is licensed under the MIT License.