import React, { useState, useEffect } from "react";
import styles from "../styles/body.module.css";
import ProjectCard from "./ProjectCard.js";

const API_URL = "https://api.test.cyberia.studio/api/v1";

const Body = () => {
  const [projects, setProjects] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("all"); 

  useEffect(() => {
    fetch(`${API_URL}/projects`)
      .then((res) => res.json())
      .then((data) => setProjects(data.items))
      .catch((error) => console.error("Ошибка загрузки проектов:", error));
  }, []);

  useEffect(() => {
    fetch(`${API_URL}/project-categories`)
      .then((res) => res.json())
      .then((data) => setCategories(data.items))
      .catch((error) => console.error("Ошибка загрузки категорий:", error));
  }, []);

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) =>
          project.categories.some(
            (category) => String(category.id) === String(selectedCategory)
          )
        );

  return (
    <div className={styles.container}>
      <h1>Кейсы</h1>
      <div className={styles.filters}>
        <button
          className={selectedCategory === "all" ? styles.active : ""}
          onClick={() => setSelectedCategory("all")}
        >
          Все
        </button>
        {categories.map((category) => (
          <button
            key={category.id}
            className={selectedCategory === category.id ? styles.active : ""}
            onClick={() => setSelectedCategory(category.id)}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className={styles.grid}>
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
      </div>
    </div>
  );
};

export default Body;
