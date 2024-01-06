import Button from "../Button/Button";
import styles from "./ContactForm.module.css";
import { MdMessage } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };

  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <div className={styles.top_button}>
          <Button
            text="VIA SUPPORT CHAT"
            icon={<MdMessage fontSize="24px" />}
          />

          <Button text="VIA CALL" icon={<IoIosCall fontSize="24px" />} />
        </div>

        <Button
          isOutline={true}
          text="VIA EMAIL FORM"
          icon={<MdEmail fontSize="24px" />}
        />

        <form onSubmit={onSubmit}>
          <div className={`${styles.form_controller}`}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>

          <div className={`${styles.form_controller}`}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>

          <div className={`${styles.form_controller}`}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8"></textarea>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT" />
          </div>

          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={`${styles.contact_image}`}>
        <img src="/logo.svg" alt="logo" />
      </div>
    </section>
  );
}

export default ContactForm;
