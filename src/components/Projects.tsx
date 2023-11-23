import xcommand from '../images/Xcommand-recortado.jpeg';

import styles from './Projects.module.css';

function Projects() {
    return (
        <section id={styles.projects_main_container}>
            <h3>Projetos</h3>

            <div className={styles.projects_main_container_cards}>
                <div >
                    <div id={styles.xcommand} className={styles.card} >

                    </div>
                    <p>Xcommand</p>
                </div>
                <div >
                    <div className={styles.card}>
                    </div>
                    <p>Xcommand</p>
                </div>
                <div >
                    <div className={styles.card}>
                    </div>
                    <p>Xcommand</p>
                </div>
                <div >
                    <div className={styles.card}>
                    </div>
                    <p>Xcommand</p>
                </div>
            </div>
        </section>
    );
}

export default Projects;