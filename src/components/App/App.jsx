import { useState, useEffect } from 'react'

import contacts_init from '../../_data/contacts.json'

import { ContactsForm, ContactsList } from "../Contacts";
import { SearchBox } from '../SearchBox/SearchBox';

const LOCALSTORAGE_KEY_CONTACTS = "contacts"

const App = () => {
  const [searchContacts, setSearchContacts] = useState('');

  const [contacts, setContacts] = useState(() => {
    const storageContact = window.localStorage.getItem(LOCALSTORAGE_KEY_CONTACTS);

    return storageContact !== null
      ? JSON.parse(storageContact)
      : contacts_init;
  });

  useEffect(() => {
    window.localStorage.setItem(LOCALSTORAGE_KEY_CONTACTS, JSON.stringify(contacts));
  }, [contacts]);


  const handlerSearchContacts = (name) => {
    setSearchContacts(name)
  }

  const handlerAddContact = (newContact) => {
    setContacts((prevContact) => {
      return [...prevContact, newContact]
    })
  }

  const handlerDeleteContact = (id) => {
    setContacts((prevContacts) => {
      return prevContacts.filter((contact) => contact.id !== id);
    });
  };

  const visibleContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchContacts.toLowerCase())
  );


  return (
    <>
      <div>
        <h1>Phonebook</h1>

        <ContactsForm handlerAddContact={handlerAddContact} />
        <SearchBox value={searchContacts} handlerSearchContacts={handlerSearchContacts} />
        {visibleContacts.length ? (
          <ContactsList contacts={visibleContacts} handlerDeleteContact={handlerDeleteContact} />
        ) : <p>Contacts Empty</p> }
       
      </div>
    </>
  );
}

export default App;
