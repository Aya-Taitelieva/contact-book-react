import React, { useState } from "react";

const ContactForm = ({ addContact }) => {
  const [inputName, setInputName] = useState("");
  const [inputSurname, setInputSurname] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  return (
    <div>
      <form
        className="add-todo"
        onSubmit={(e) => {
          e.preventDefault();
          if (!inputName.trim() && !inputSurname.trim() && !inputPhone.trim()) {
            return;
          }
          const newContact = {
            id: Date.now(),
            name: inputName,
            surname: inputSurname,
            phone: inputPhone,
            completed: false,
          };
          addContact(newContact);
          setInputName("");
          setInputSurname("");
          setInputPhone("");
        }}>
        <div className="inps">
          <input
            value={inputName}
            onChange={(e) => {
              setInputName(e.target.value);
            }}
            type="text"
            className="add-input"
            placeholder="Add name"
          />
          <input
            value={inputSurname}
            onChange={(e) => {
              setInputSurname(e.target.value);
            }}
            type="text"
            className="add-input2"
            placeholder="Add surname"
          />

          <input
            value={inputPhone}
            onChange={(e) => {
              setInputPhone(e.target.value);
            }}
            type="text"
            className="add-input4"
            placeholder="Add phone"
          />
        </div>

        <div className="btn">
          <button id="add-submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
