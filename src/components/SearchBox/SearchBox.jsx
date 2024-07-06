import styles from './SearchBox.module.css'

export const SearchBox = ({ value, handlerSearchContacts }) => {
  const handlerChange = (e) => {
    handlerSearchContacts(e.target.value)
  }

  return (
    <div className={styles.box}>
      <p className={styles.label}>Find contact by name</p>
      <input className={styles.input}
        type="text"
        value={value}
        onChange={handlerChange}
      />
    </div>
  );
}
