import React, { useState, useEffect } from "react";
import styles from "./Experience.module.css";

import classNames from "class-names"

const Experience = () => {
  const [isScrolled1, setIsScrolled1] = useState(false);
  const [isScrolled2, setIsScrolled2] = useState(false);
  const [isScrolled3, setIsScrolled3] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const element1 = document.getElementById("expirience_item1");
      const element2 = document.getElementById("expirience_item2");
      if (element1 && element2) {
        const elementTop1 = element1.getBoundingClientRect().top;
        const elementTop2 = element2.getBoundingClientRect().top;
        
        const windowHeight = window.innerHeight;

        if (elementTop1 < windowHeight - 100) {
          setIsScrolled1(true);
        }

        if (elementTop2 < windowHeight - 200) {
          setIsScrolled2(true);
        }

        if (elementTop2 < windowHeight - 300) {
          setIsScrolled3(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="experience" className={styles.section_experience}>
      <h2 className="title">Work</h2>
      <div className={styles.block_experience}>
        <div className={styles.experience_items_left}>
          <div
            id="expirience_item1"
            className={`${styles.experience_item} ${
              isScrolled1 ? styles.active : ``
            }`}
          >
            <h3>Хакатоны</h3>
            <p className={styles.date}>14.09.23 - настоящее время</p>
            <p>
              При первой возмоности участвую в хакатонах как frontend
              разрабатчик. Хакатоны в которых я принимал участие: ITAM.hack, VTB
              More Tech 5.0, Смолатон, ЛЦТ, Урбатон. Подробнее об Урбатоне: кейс
              - оптимизация парковочных мест, решение - веб-приложение с
              отрисовкой парковочных мест в онлайн режиме, также в проекте мы
              использовали компьютерное зрение, с помощью которого получали
              актуальную инофрмацию о парковочных местах. По результатам
              Урбатона мы заняли 3 место.
            </p>
          </div>
          <div
            id="expirience_item3"
            className={`${styles.experience_item} ${styles.response_item_1} ${
              isScrolled3 ? styles.active : ``
            }`}
          >
            <h3>Проект по футбольной аналитике</h3>
            <p className={styles.date}>25.12.23 - настоящее время</p>
            <p>
              Если говорить по-простому, данный проект является русским аналогом
              smart tables. Мы собираем информацию по футбольным событиям, я
              отрисовываю ее "под разными углами". Данный проект познакомил меня
              с кросс платформенной версткой, кастомными хуками и, конечно же, с
              яндекс трекером)
            </p>
          </div>
        </div>

        <div id="expirience_item2" className={`${styles.experience_item} ${
              isScrolled2 ? styles.active : ``
            }`}>
          <h3>Фриланс</h3>
          <p className={styles.date}>16.11.23 - настоящее время</p>
          <p>
            Большинство проектов написаны на ваниле и являются лендингами. По
            мере развития меня как разработчика, проекты становились труднее и
            сейчас я вместе с одногруппниками разрабатываем сайт с серверной
            частью для строительной компании, то есть, сайт под ключ, дизайн -
            разработка - хостинг.
          </p>
        </div>
        <div
          id="expirience_item3"
          className={`${styles.experience_item} ${styles.response_item_2} ${
            isScrolled3 ? styles.active : ``
          }`}
        >
          <h3>Проект по футбольной аналитике</h3>
          <p className={styles.date}>25.12.23 - настоящее время</p>
          <p>
            Если говорить по-простому, данный проект является русским аналогом
            smart tables. Мы собираем информацию по футбольным событиям, я
            отрисовываю ее "под разными углами". Данный проект познакомил меня с
            кросс платформенной версткой, кастомными хуками и, конечно же, с
            яндекс трекером)
          </p>
        </div>
      </div>
    </section>
  );
};

export default Experience;
