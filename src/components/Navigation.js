import React, { useState } from "react";
import styles from "../styles/navigation.module.css";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.nav}>
      <button className={styles.burger} onClick={() => setIsOpen(!isOpen)}>
        ☰ 
      </button>

      <div className={`${styles.menu} ${isOpen ? styles.open : ""}`}>
        <a href="./Body">Агентство</a>
        <a href="./Body">Услуги</a>
        <a href="./Body">Кейсы</a>
        <a href="./Body">Блог</a>
        <a href="./Body">Контакты</a>
      </div>
    </nav>
  );
};

export default Navigation;
