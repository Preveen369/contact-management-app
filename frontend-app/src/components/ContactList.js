import React, { useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import ContactCard from "./ContactCard";

const ContactList = ({ contacts, getContactId, term, searchKeyword }) => {
  const inputEl = useRef(null); 

  // Handle contact deletion
  const deleteContactHandler = useCallback((id) => {
    getContactId(id);
  }, [getContactId]); 

  // Render contact list
  const renderContactList = contacts.map((contact) => (
    <ContactCard
      contact={contact}
      clickHandler={deleteContactHandler} 
      key={contact.id}
    />
  ));

  // Handle search input
  const getSearchTerm = () => {
    if (inputEl.current) {
      searchKeyword(inputEl.current.value.trim()); 
    }
  };

  return (
    <div className="main">
      <h2>
        Contact List
        <Link to="/add">
          <button className="ui button blue" style={{ float: "right" }}>
            Add Contact
          </button>
        </Link>
      </h2>
      <div className="ui search">
        <div className="ui icon input" style={{ width: "100%" }}>
          <input
            ref={inputEl}
            type="text"
            placeholder="Search Contacts"
            className="prompt"
            value={term || ""} // Fallback to empty string to avoid uncontrolled input warning
            onChange={getSearchTerm}
            aria-label="Search contacts" // Accessibility improvement
          />
          <i className="search icon"/>
        </div>
      </div>
      <div className="ui celled list">
        {contacts.length > 0 ? (
          renderContactList
        ) : "No Contacts available"}
      </div>
    </div>
  );
};

export default ContactList;