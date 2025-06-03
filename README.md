# 🌟 Contact Management App

![Platform](https://img.shields.io/badge/Platform-Web-blue.svg)
![Frontend](https://img.shields.io/badge/Frontend-React.js-61dafb.svg)
![Backend](https://img.shields.io/badge/Backend-Express.js-black.svg)
![Runtime](https://img.shields.io/badge/Runtime-Node.js-green.svg)
![Database](https://img.shields.io/badge/Database-MongoDB-brightgreen.svg)
![Auth](https://img.shields.io/badge/Auth-JWT-orange.svg)
![Security](https://img.shields.io/badge/Security-bcrypt-blue.svg)
![API](https://img.shields.io/badge/API-RESTful-lightgrey.svg)
![UI](https://img.shields.io/badge/UI-Semantic_UI-teal.svg)
![License](https://img.shields.io/badge/License-MIT-lightgrey.svg)
![Status](https://img.shields.io/badge/Status-Active-brightgreen.svg)

The `contact-management-app` is a full-stack web application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). It is designed to provide users with a seamless and intuitive experience to manage personal contacts. The application includes full CRUD functionality—Create, Read, Update, and Delete contacts—with secure user authentication and efficient backend services for real-time data operations.


## ✨ Features

- 📋 Add, edit, delete, and view contact details.
- 🔍 Search functionality to filter contacts by name or email.
- 🖼️ Responsive design using Semantic UI for styling.
- 🔒 User authentication with JWT (JSON Web Tokens).
- 🛡️ Secure password storage using bcrypt.
- 🗄️ MongoDB integration for data persistence.
- ⚡ Mock API for quick testing and development.

## 📂 Project Structure

### 🖥️ Contacts Frontend App (`frontend-app`)

The `frontend-app` is a React-based application that provides the user interface for managing contacts.

#### Features
- 📋 Add, edit, delete, and view contact details.
- 🔍 Search functionality to filter contacts by name or email.
- 🖼️ Responsive design using Semantic UI for styling.

#### Key Files
- `src/index.js` - Entry point of the application.
- `src/components/` - Contains React components for the app.
  - `App.js` - Main component managing routes and state.
  - `AddContact.js` - Component for adding a new contact.
  - `EditContact.js` - Component for editing an existing contact.
  - `ContactList.js` - Component for displaying the list of contacts.
  - `ContactDetail.js` - Component for viewing contact details.
  - `Header.js` - Header component for the app.
  - `ContactCard.js` - Component for rendering individual contact cards.
  - `withRouter.js` - Higher-order component for navigation.
- `src/api/contacts.js` - Axios instance for API calls.
- `public/index.html` - HTML template for the app.

### 🌐 MyContacts Backend (`mycontacts-backend`)

The `mycontacts-backend` is a Node.js and Express-based backend application for managing user contacts. It provides a RESTful API for user authentication and contact management.

#### Features
- 🔒 User authentication with JWT (JSON Web Tokens).
- 🛡️ Secure password storage using bcrypt.
- 📝 CRUD operations for managing contacts.
- ⚙️ Middleware for error handling and token validation.
- 🗄️ MongoDB integration for data persistence.

#### Key Files
- `server.js` - Entry point of the application.
- `config/dbConnection.js` - MongoDB connection setup.
- `controllers/` - Contains the logic for handling API requests.
- `middleware/` - Custom middleware for error handling and token validation.
- `models/` - Mongoose schemas for User and Contact.
- `routes/` - API route definitions.
- `constants.js` - Contains reusable constants.

### 🛠️ Server API (`server-api`)

The `server-api` folder contains a lightweight mock backend for the `Contacts Frontend App`. It uses `json-server` to simulate a RESTful API for managing contacts. This mock server is ideal for testing and development purposes.

#### Features
- 🗄️ Mock API for managing contacts.
- 🔄 Supports CRUD operations (Create, Read, Update, Delete).
- ⚡ Quick and easy setup for development and testing.

#### Key Files
- `db.json` - Contains the mock data for the API.
- `package.json` - Configuration file for the `json-server` setup.

## 📋 Prerequisites

- 🖥️ Node.js (v14 or later)
- 📦 npm (Node Package Manager)
- 🍃 MongoDB (local or cloud instance for `mycontacts-backend`)

## 🚀 Installation

### Frontend App
1. Navigate to the `frontend-app` directory:
   ```bash
   cd frontend-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### MyContacts Backend
1. Navigate to the `mycontacts-backend` directory:
   ```bash
   cd mycontacts-backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root of the `mycontacts-backend` directory and add the following environment variables:
   ```env
   PORT=5000
   CONNECTION_STRING=<your-mongodb-connection-string>
   ACCESS_TOKEN_SECRET=<your-access-token-secret>
   ```
4. Start the server in development mode:
   ```bash
   npm run dev
   ```

### Server API
1. Navigate to the `server-api` directory:
   ```bash
   cd server-api
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the mock server:
   ```bash
   npm start
   ```

## 📜 License

This project is licensed under the MIT License.
