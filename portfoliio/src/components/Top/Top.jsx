import React from "react";
import styles from "./Top.module.css";

const Start = () => {
  return (
    <section id="start" className={styles.section_top}>
      <div className={styles.block_top}>
        <h1>
          Привет. <br className={styles.wordBetween} />Я Костя.
          <br />
          Frontend <br className={styles.wordBetween} />Developer
        </h1>
        <p>
          Я увлечен созданием интересных, интерактивных и качественных сайтов
        </p>
      </div>
    </section>
  );
};

export default Start;
