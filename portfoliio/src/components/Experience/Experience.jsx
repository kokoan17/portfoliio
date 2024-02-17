import React, { useState, useEffect } from "react";
import styles from "./Experience.module.css";

import classNames from "class-names";

const Experience = () => {

  return (
    <section id="experience" className={styles.section_experience}>
      <h2 className="title">Work</h2>
      <div className={styles.block_experience}>
        <div className={styles.experience_items_left}>
          <div
            id="expirience_item"
            className={classNames(styles.experience_item, { active: isActive })}
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
            className={classNames(
              styles.experience_item,
              styles.response_item_1
            )}
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

        <div className={styles.experience_item}>
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
          className={classNames(styles.experience_item, styles.response_item_2)}
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
