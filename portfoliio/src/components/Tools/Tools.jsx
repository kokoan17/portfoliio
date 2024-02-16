import React from "react";
import styles from "./Tools.module.css";

const Tools = () => {
  return (
    <section id="tools" className={styles.section_tools}>
      <h2>Tools</h2>
      <div className={styles.block_tools}>

        <div className={styles.tools_items}>
          <div className={styles.tools_item}>HTML</div>
          <div className={styles.tools_item}>CSS</div>
          <div className={styles.tools_item}>JS</div>
          <div className={styles.tools_item}>TS</div>
          <div className={styles.tools_item}>React</div>
          <div className={styles.tools_item}>Redux</div>
        </div>

        <div className={styles.tools_items}>
          <div className={styles.tools_item}>Python</div>
          <div className={styles.tools_item}>C#</div>
          <div className={styles.tools_item}>MongoDB</div>
          <div className={styles.tools_item}>PostgreSQL</div>
        </div>

        <div className={styles.tools_items}>
          <div className={styles.tools_item}>SASS</div>
          <div className={styles.tools_item}>Tailwind CSS</div>
          <div className={styles.tools_item}>Bootstarp</div>
        </div>

        <div className={styles.tools_items}>
          <div className={styles.tools_item}>Figma</div>
          <div className={styles.tools_item}>Git</div>
        </div>

        <div className={styles.tools_items}>
          <div className={styles.tools_item}>npm</div>
        </div>
        
      </div>
    </section>
  );
};

export default Tools;
