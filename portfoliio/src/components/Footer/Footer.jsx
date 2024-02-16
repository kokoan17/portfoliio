import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div id="contacts" className={styles.footer}>
      <div className={styles.block_contacts}>
        <div className={styles.contacts_items}>
          <div className={styles.contacts_item}>
            <p>Позвонить</p>
            <a href="tel:+79164900777">+7 (916) 490-07-77</a>
          </div>
          <div className={styles.contacts_item}>
            <p>Написать</p>
            <div className={styles.contacts_write}>
              <a href="https://t.me/kokoan23">telegram</a>
              <a href="mailto:kostya1703tsoy@gmail.com">mail</a>
            </div>
          </div>
          <div className={styles.contacts_item}>
            <p>Посмотреть</p>
            <a href="https://github.com/kokoan17">GitHub</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
