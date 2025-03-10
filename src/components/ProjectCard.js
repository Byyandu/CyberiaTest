import React from "react";
import styles from "../styles/projectCard.module.css";

const ProjectCard = ({ title, description, image }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} />
      <div className={styles.title}>
    
        <div className={styles.decore}>
          <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="24.9999" height="5.46874" rx="1" transform="matrix(1 0 0 -1 0 24.9995)" fill="#2D76F9"/>
            <rect width="14.0625" height="5.46874" rx="1" transform="matrix(1 0 0 -1 10.938 14.0624)" fill="#2D76F9"/>
            <rect width="24.9999" height="5.46874" rx="1" transform="matrix(0 1 1 0 0 6.10352e-05)" fill="#2D76F9"/>
            <rect width="14.0625" height="5.46874" rx="1" transform="matrix(0 1 1 0 10.938 6.10352e-05)" fill="#2D76F9"/>
          </svg>
        </div>
        
        {title}
      </div>
      <div className={styles.overlay}>
        <p className={styles.description}>{description}</p>
        <span className={styles.more}>Подробнее</span>
      </div>
    </div>
  );
};

export default ProjectCard;
