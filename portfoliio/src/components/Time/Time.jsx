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

  const monthsCheck = (num) => {
    if ( num === 1 ) {
      return "месяц"
    } else if ( num > 1 &&  num < 5) {
      return "месяца"
    } else {
      return "месяцев"
    }
  }

  const daysCheck = (num) => {
    if ( num === 1 || num === 21 || num === 31 ) {
      return "день"
    } else if ( ( num > 1 && num < 5 ) || ( num > 20 && num < 25) ) {
      return "дня"
    } else {
      return "дней"
    } 
  }

  const hoursCheck = (num) =>  {
    if ( num === 1 || num === 21 ) {
      return "час"
    } else if ( ( num > 1 && num < 5 ) || ( num > 21 )) {
      return "часа"
    } else {
      return "часов"
    }
  }

  const minutesCheck = (num) => {
    if ( num % 10 === 1 && num !== 11) {
      return "минуту"
    } else if ( num % 10 === 2 || num % 10 === 3 || num % 10 === 4) {
      return "минуты"
    } else {
      return "минут"
    }
  }

  return (
    <section id="time" className={styles.section_time}>
      <div className={styles.block_time}>
        <p>В разработке интерфесов уже:</p>
        <p>
          <span>{-months}</span> {monthsCheck(-months)} <span>{-days}</span> {daysCheck(-days)}{" "}
          <br className={styles.spaceBetween} />
          <span>{-hours}</span> {hoursCheck(-hours)} <span>{-minutes}</span> {minutesCheck(-minutes)}
        </p>
      </div>
    </section>
  );
};

export default Time;
