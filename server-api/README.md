# 🌟 Server API

The `server-api` folder contains a lightweight mock backend for the `Contacts Frontend App`. It uses `json-server` to simulate a RESTful API for managing contacts. This mock server is ideal for testing and development purposes, providing a quick and easy way to simulate backend functionality without requiring a full-fledged backend setup.

## ✨ Features

- 🗄️ Mock API for managing contacts.
- 🔄 Supports CRUD operations (Create, Read, Update, Delete).
- ⚡ Quick and easy setup for development and testing.

## 📋 Prerequisites

- 🖥️ Node.js (v14 or later)
- 📦 npm (Node Package Manager)

## 🚀 Installation

1. Navigate to the `server-api` directory:
   ```bash
   cd server-api
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## 🛠️ Usage

1. Start the mock server:
   ```bash
   npm start
   ```

2. The server will run on `http://localhost:3006` by default.

## 📡 API Endpoints

- `GET /contacts` - Retrieve all contacts.
- `POST /contacts` - Add a new contact.
- `GET /contacts/:id` - Retrieve a specific contact by ID.
- `PUT /contacts/:id` - Update a contact by ID.
- `DELETE /contacts/:id` - Delete a contact by ID.

## 🗂️ Project Structure

- `db.json` - Contains the mock data for the API.
- `package.json` - Configuration file for the `json-server` setup.

