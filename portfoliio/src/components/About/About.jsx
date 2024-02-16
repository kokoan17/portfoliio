import React from "react";
import styles from "./About.module.css";

import Person from "../../img/person.jpeg";

const About = () => {
  return (
    <section id="about" className={styles.section_about}>
      <div className={styles.block_about}>
        <div className={styles.about_img}>
          <img src={Person} alt="" />
        </div>
        <div className={styles.about_text}>
          <h2>
            Меня зовут Костя. Я активно изучаю веб-разработку, математику и
            языки программирования, такие как JavaScript, TypeScript, C#,
            Python.
          </h2>
          <p>
            В последнее время участвую в проекте по футбольной аналитике,
            параллельно разрабатываю несколько сайтов для коммерции. В свободное
            время участвую в хакатонах как frontend разработчик.
          </p>
          <p>
            На данный момент сфокусирован на разработке веб-приложений. Хочу
            создавать интуитивно понятные, но при этом интерактивные интерфейсы.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
