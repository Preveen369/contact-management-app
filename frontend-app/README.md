# 🌟 Contacts Frontend App

The `Contacts Frontend App` is a React-based application for managing user contacts. It provides a user-friendly interface to perform CRUD operations on contacts, including creating, reading, updating, and deleting contacts.

## ✨ Features

- 📋 Add, edit, delete, and view contact details.
- 🔍 Search functionality to filter contacts by name or email.
- 🖼️ Responsive design using Semantic UI for styling.
- 🔗 Integration with a backend API for data persistence.

## 📋 Prerequisites

- 🖥️ Node.js (v14 or later)
- 📦 npm (Node Package Manager)

## 🚀 Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the frontend directory:
   ```bash
   cd frontend-app
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

## 🛠️ Usage

1. Start the development server:
   ```bash
   npm start
   ```

2. Open the app in your browser at `http://localhost:3000`.

## 📡 API Integration

The app communicates with a backend API for managing contacts. Update the `baseURL` in `src/api/contacts.js` to point to your backend server.

## 🗂️ Project Structure

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
- `src/images/` - Contains static assets like images.
- `public/index.html` - HTML template for the app.

## 🖌️ Styling

The app uses Semantic UI for styling. Ensure you have an internet connection to load the Semantic UI CSS from the CDN.

## 📜 License

This project is licensed under the MIT License.
