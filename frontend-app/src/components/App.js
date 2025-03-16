import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Switch is replaced with Routes in newer versions
import { v4 as uuidv4 } from "uuid"; // Correct UUID import
import api from "../api/contacts";
import "./App.css";
import Header from "./Header";
import AddContact from "./AddContact";
import ContactList from "./ContactList";
import ContactDetail from "./ContactDetail";
import EditContact from "./EditContact";

function App() {
  const LOCAL_STORAGE_KEY = "contacts";
  const [contacts, setContacts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  // Retrieve Contacts
  const retrieveContacts = async () => {
    try {
      const response = await api.get("/contacts");
      return response.data;
    } catch (error) {
      console.error("Error retrieving contacts:", error);
      return [];
    }
  };

  // Add Contact Handler
  const addContactHandler = async (contact) => {
    try {
      const request = {
        id: uuidv4(), // Updated to use uuidv4()
        ...contact,
      };

      const response = await api.post("/contacts", request);
      setContacts([...contacts, response.data]);
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  // Update Contact Handler
  const updateContactHandler = async (contact) => {
    try {
      const response = await api.put(`/contacts/${contact.id}`, contact);
      setContacts(
        contacts.map((item) =>
          item.id === contact.id ? { ...response.data } : item
        )
      );
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  // Remove Contact Handler
  const removeContactHandler = async (id) => {
    try {
      await api.delete(`/contacts/${id}`);
      const newContactList = contacts.filter((contact) => contact.id !== id);
      setContacts(newContactList);
    } catch (error) {
      console.error("Error removing contact:", error);
    }
  };

  // Enhanced Search Handler
  const searchHandler = (searchTerm) => {
    setSearchTerm(searchTerm);
    if (searchTerm.trim() !== "") {
      const filteredContacts = contacts.filter((contact) => {
        const searchString = `${contact.name || ''} ${contact.email || ''}`.toLowerCase();
        return searchString.includes(searchTerm.toLowerCase());
      });
      setSearchResults(filteredContacts);
    } else {
      setSearchResults(contacts);
    }
  };

  // Initial Data Load
  useEffect(() => {
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts && Array.isArray(allContacts)) {
        setContacts(allContacts);
        setSearchResults(allContacts); // Initialize search results
      }
    };
    getAllContacts();
  }, []);

  // Sync search results when contacts change
  useEffect(() => {
    if (searchTerm === "") {
      setSearchResults(contacts);
    } else {
      searchHandler(searchTerm);
    }
  }, [contacts]);

  return (
    <div className="ui container">
      <Router>
        <Header />
        <Routes> {/* Updated from Switch to Routes */}
          <Route
            path="/"
            exact
            element={
              <ContactList
                contacts={searchTerm.length < 1 ? contacts : searchResults}
                getContactId={removeContactHandler}
                term={searchTerm}
                searchKeyword={searchHandler}
              />
            }
          />
          <Route
            path="/add"
            element={<AddContact addContactHandler={addContactHandler} />}
          />
          <Route
            path="/edit"
            element={<EditContact updateContactHandler={updateContactHandler} />}
          />
          <Route path="/contact/:id" element={<ContactDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;