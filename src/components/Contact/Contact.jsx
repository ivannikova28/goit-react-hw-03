import { FaPhoneAlt } from "react-icons/fa";
import { IoPerson } from "react-icons/io5";

import styles from "./Contact.module.css";

export const Contact = ({ contact, handlerDeleteContact }) => {
  const { id, name, number } = contact;

  const onDelete = () => {
    handlerDeleteContact(id)
  }
  
  return (
    <div className={styles.fullContact}>
      <div className={styles.contactInfo}>

        <p><IoPerson />   {name}</p>
        <p><FaPhoneAlt />   {number}</p>
      </div>

      <button className={styles.btn} onClick={onDelete}>
        Delete
      </button>

    </div>
  )
}