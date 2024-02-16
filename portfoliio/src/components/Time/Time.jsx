import React, { useState, useEffect } from "react";
import styles from "./Time.module.css";

import moment from "moment";

const Time = () => {
  const [duration, setDuration] = useState(moment.duration(0)); // Изменено начальное значение duration

  useEffect(() => {
    const currentDate = moment();
    const targetDate = moment("2023-07-25");
    const newDuration = moment.duration(targetDate.diff(currentDate));
    setDuration(newDuration); // Установка значения duration без setInterval

    const interval = setInterval(() => {
      const currentDate = moment();
      const newDuration = moment.duration(targetDate.diff(currentDate));
      setDuration(newDuration);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!duration) {
    return null;
  }

  const years = duration.years();
  const months = duration.months();
  const days = duration.days();
  const hours = duration.hours();
  const minutes = duration.minutes();

  return (
    <section id="time" className={styles.section_time}>
      <div className={styles.block_time}>
        <p>В разработке интерфесов уже:</p>
        <p>
          <span>{-months}</span> месяцев <span>{-days}</span> дней{" "}
          <br className={styles.spaceBetween} />
          <span>{-hours}</span> часов <span>{-minutes}</span> минут
        </p>
      </div>
    </section>
  );
};

export default Time;
