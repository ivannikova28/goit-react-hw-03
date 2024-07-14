import { useId } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { nanoid } from "nanoid";
import * as Yup from "yup";

import styles from "./ContactForm.module.css";

export const ContactForm = ({ handlerAddContact }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const validationControlShecma = Yup.object().shape({
    name: Yup.string()
      .min(3, "Field is too short!")
      .max(50, "Field is too Long!")
      .required("Field is required"),
    number: Yup.string()
      .min(3, "Field is too short")
      .max(15, "Field is too long")
      .required("Field is required"),
  });

  const initialContact = {
    name: "",
    number: "",
  };

  const handleSubmit = (values, actions) => {
    const id = nanoid();

    handlerAddContact({
      id,
      name: values.name,
      number: values.number,
    });

    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialContact}
      onSubmit={handleSubmit}
      validationSchema={validationControlShecma}
    >
      <Form className={styles.formStyle}>
        <div className={styles.fialdStyle}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field
            className={styles.field}
            id={nameFieldId}
            type="text"
            name="name"
          />
          <ErrorMessage className={styles.err} name="name" component="span" />
        </div>

        <div className={styles.fialdStyle}>
          <label htmlFor={numberFieldId}>Number</label>
          <Field
            className={styles.field}
            id={numberFieldId}
            type="tel"
            name="number"
          />
          <ErrorMessage className={styles.err} name="number" component="span" />
        </div>

        <button type="submit" className={styles.btn}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
