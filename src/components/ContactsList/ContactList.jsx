import { ContactsListItem } from './ContactsListItem/ContactsListItem';

import styles from './ContactsList.module.css';

export const ContactsList = ({ contacts, handlerDeleteContact }) => {
  return (
    <ul className={styles.list}>
      {contacts.map((contact) => {
        return <li key={contact.id}>
            <ContactsListItem
            
              contact={contact}
              handlerDeleteContact={handlerDeleteContact}
            />
          </li>
        })
      }
    </ul>
  )
}
