import project1 from '../images/fake_project.png';


import styles from './Projects.module.css';

function Projects() {
    return (
        <section className={styles.projects_main_container}>
            <h3>Projetos</h3>


            <div id={styles.main_screen}>
            </div>
            <div className={styles.projects_main_container_cards}>
                <div className={styles.card}><img src={project1} alt="" /></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>

            </div>
        </section>
    );
}

export default Projects;