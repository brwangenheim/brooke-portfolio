import React, { useEffect, useRef } from "react";
import styles from "../styles/modules/projectModal.module.css";

export default function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen || !project) return null;

  // Support mixed content: longDescription can be an array of strings or
  // an array of objects like { type: 'text'|'image', content|src, alt, caption }
  const longBlocksRaw = Array.isArray(project.longDescription)
    ? project.longDescription
    : project.longDescription
    ? [project.longDescription]
    : [];
  const longBlocks = longBlocksRaw.map((b) => {
    if (typeof b === "string") return { type: "text", content: b };
    return b;
  });

  const images = Array.isArray(project.images) ? project.images : [];

  const modalRef = useRef(null);
  const previouslyFocusedRef = useRef(null);

  // Accessibility: lock scroll, focus trap, ESC to close
  useEffect(() => {
    previouslyFocusedRef.current = document.activeElement;
    const body = document.body;
    const originalOverflow = body.style.overflow;
    body.style.overflow = "hidden";

    // focus first focusable in modal
    const modalEl = modalRef.current;
    const focusables = modalEl?.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusables && focusables[0];
    if (first && first.focus) first.focus();

    const handleKey = (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
      }
      if (e.key === "Tab" && focusables && focusables.length > 0) {
        const list = Array.from(focusables);
        const idx = list.indexOf(document.activeElement);
        if (e.shiftKey && (idx === 0 || idx === -1)) {
          e.preventDefault();
          list[list.length - 1].focus();
        } else if (!e.shiftKey && idx === list.length - 1) {
          e.preventDefault();
          list[0].focus();
        }
      }
    };

    document.addEventListener("keydown", handleKey, true);

    return () => {
      document.removeEventListener("keydown", handleKey, true);
      body.style.overflow = originalOverflow;
      const prev = previouslyFocusedRef.current;
      if (prev && prev.focus) prev.focus();
    };
  }, [onClose]);

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div
        className={styles.modal}
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        onClick={(e) => e.stopPropagation()}
        ref={modalRef}
      >
        <button className={styles.closeButton} onClick={onClose} aria-label="Close">
          ×
        </button>
        <div className={styles.modalContent}>
          <header className={styles.header}>
            <h2 id="project-modal-title" className={styles.title}>{project.title}</h2>
            <div className={styles.metaRow}>
              <span className={styles.year}>{project.year}</span>
              <span className={styles.dot}>•</span>
              <span className={styles.category}>{project.category}</span>
              {project.tags?.length ? (
                <>
                  <span className={styles.dot}>•</span>
                  {project.tags.map((tag, i) => (
                    <span key={tag} className={styles.tagText}>
                      {tag}
                      {i < project.tags.length - 1 && (
                        <span className={styles.sep}>•</span>
                      )}
                    </span>
                  ))}
                </>
              ) : null}
            </div>
          </header>

          <section className={styles.section}>
            <h3 className={styles.h3}>Overview</h3>
            <p className={styles.paragraph}>{project.description}</p>
          </section>

          {longBlocks.length > 0 && (
            <section className={styles.section}>
              <h3 className={styles.h3}>Details</h3>
              {longBlocks.map((block, idx) => {
                if (block.type === "image") {
                  return (
                    <figure key={idx} className={styles.figure}>
                      <img src={block.src} alt={block.alt || "Project image"} className={styles.figImg} loading="lazy" />
                      {block.caption ? (
                        <figcaption className={styles.figCap}>{block.caption}</figcaption>
                      ) : null}
                    </figure>
                  );
                }
                return (
                  <p key={idx} className={styles.paragraph}>{block.content}</p>
                );
              })}
            </section>
          )}

          {images.length > 0 && (
            <section className={styles.section}>
              <h3 className={styles.h3}>Images</h3>
              <div className={styles.imageGrid}>
                {images.map((src, idx) => (
                  <img key={idx} src={src} alt="Project" className={styles.image} />
                ))}
              </div>
            </section>
          )}

          {!!project.tags?.length && (
            <section className={styles.section}>
              <h3 className={styles.h3}>Technologies</h3>
              <div className={styles.techList}>
                {project.tags.map((tech) => (
                  <span key={tech} className={styles.techTag}>
                    {tech}
                  </span>
                ))}
              </div>
            </section>
          )}

          <div className={styles.actions}>
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionButton}
              >
                View Code
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.actionButton}
              >
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
