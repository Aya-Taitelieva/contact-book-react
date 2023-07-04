import { useState } from "react";
import "./App.css";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

function App() {
  const [contact, setContact] = useState([]);
  function addContact(contacts) {
    setContact([...contact, contacts]);
  }
  function deleteContact(id) {
    const newArr = contact.filter((item) => item.id != id);
    setContact(newArr);
  }
  function favorites(id) {
    const newArr = contact.map((item) => {
      if (item.id === id) {
        item.completed = !item.completed;
      }
      return item;
    });
    setContact(newArr);
  }
  return (
    <div className="App">
      <h1>Contact Book</h1>
      <ContactForm addContact={addContact} />
      <ContactList
        contact={contact}
        deleteContact={deleteContact}
        favorites={favorites}
      />
    </div>
  );
}

export default App;
