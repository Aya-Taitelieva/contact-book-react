import React from "react";
import ContactItem from "./ContactItem";

const ContactList = ({ contact, deleteContact, favorites }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}>
      {contact.map((item) => (
        <ContactItem
          key={item.id}
          item={item}
          deleteContact={deleteContact}
          favorites={favorites}
        />
      ))}
    </div>
  );
};

export default ContactList;
