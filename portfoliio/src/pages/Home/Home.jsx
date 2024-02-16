import React from "react";
import styles from "./Home.module.css";
import Top from "../../components/Top/Top"
import Time from "../../components/Time/Time";
import About from "../../components/About/About";
import Tools from "../../components/Tools/Tools";
import Experience from "../../components/Experience/Experience";

const Home = () => {
  return (
    <div className={styles.page}>
      <Top />
      <Time />
      <About />
      <Tools />
      <Experience />
    </div>
  );
};

export default Home;
