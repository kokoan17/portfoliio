import React from "react";
import styles from "./Layout.module.css";

import { Outlet } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const Layout = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Header />
        <div className={styles.content}>
          <div className="container">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>

      <div className={styles.overlay_1}>
      </div>
    </>
  );
};

export default Layout;
