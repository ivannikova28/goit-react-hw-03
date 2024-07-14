import { Contact } from "../Contact/Contact";

import styles from './ContactsList.module.css';

export const ContactList = ({ contacts, handlerDeleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => {
        return (
          <li key={contact.id}>
            <Contact
              contact={contact}
              handlerDeleteContact={handlerDeleteContact}
            />
          </li>
        );
        })
      }
    </ul>
  )
}
