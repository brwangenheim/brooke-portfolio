import React, { useState } from "react";
import { projects } from "../data/projects";
import styles from "../styles/modules/projects.module.css";
import ProjectModal from "./ProjectModal";

const categories = ["Industry", "Research", "Academic", "Personal"];
const disciplines = ["SWE", "AI", "Data Science", "Other"];

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDiscipline, setSelectedDiscipline] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = projects.filter((proj) => {
    if (selectedCategory && proj.category !== selectedCategory) return false;
    if (selectedDiscipline && !proj.disciplines.includes(selectedDiscipline))
      return false;
    return true;
  });

  const handleCategoryClick = (cat) => {
    setSelectedCategory((prev) => (prev === cat ? null : cat));
    setSelectedDiscipline(null); // explicitly reset discipline
  };

  const handleDisciplineClick = (discipline) => {
    setSelectedDiscipline((prev) => (prev === discipline ? null : discipline));
    setSelectedCategory(null); // explicitly reset category
  };

  const handleProjectClick = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <main id="projects" className={styles.pageWrap}>
      <h1 className={styles.sectionTitle}>MY EXPERIENCE</h1>
      <div className={styles.projectsRow}>
        <aside className={styles.sidebar}>
          <div className={styles.sidebarBlock}>
            <div className={styles.sidebarTitle}>BY DISCIPLINE</div>
            <ul className={styles.sidebarList}>
              {disciplines.map((discipline) => (
                <li key={discipline}>
                  <button
                    className={
                      styles.sidebarLink +
                      (selectedDiscipline === discipline
                        ? " " + styles.active
                        : "")
                    }
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                    }}
                    onClick={() => handleDisciplineClick(discipline)}
                  >
                    {discipline}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className={styles.sidebarBlock}>
            <div className={styles.sidebarTitle}>BY PURPOSE</div>
            <ul className={styles.sidebarList}>
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    className={
                      styles.sidebarLink +
                      (selectedCategory === cat ? " " + styles.active : "")
                    }
                    style={{
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: 0,
                    }}
                    onClick={() => handleCategoryClick(cat)}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </aside>
        <section className={styles.projectList}>
          {filteredProjects.map((proj) => (
            <article className={styles.projectCard} key={proj.title}>
              <div className={styles.projectMeta}>
                <a href={proj.link} className={styles.projectTitle}>
                  {proj.title}
                </a>
                <div className={styles.projectTags}>
                  {proj.tags.map((tag) => (
                    <span className={styles.projectTag} key={tag}>
                      {tag}
                    </span>
                  ))}
                  <span className={styles.projectYearTag}>{proj.year}</span>
                </div>
                <p className={styles.projectDesc}>{proj.description}</p>
                <div className={styles.projectActions}>
                  <button 
                    onClick={() => handleProjectClick(proj)}
                    className={styles.learnMoreButton}
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>
      </div>
      <ProjectModal 
        project={selectedProject} 
        isOpen={isModalOpen} 
        onClose={closeModal} 
      />
    </main>
  );
}
