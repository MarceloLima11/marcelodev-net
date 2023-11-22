import styles from './Projects.module.css';

function Projects() {
    return (
        <section id={styles.projects_main_container}>
            <h3>Projetos</h3>

            <div className={styles.projects_main_container_cards}>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
            </div>
        </section>
    );
}

export default Projects;