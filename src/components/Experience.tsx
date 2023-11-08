import styles from './Experience.module.css';

import gbm from '../images/gbm_white.png';
import modal from '../images/modal_white.png';

function Experience() {
    return (
        <section id={styles.experience_main_container}>
            <h3>Onde eu trabalhei?</h3>
            <p className={styles.description}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
            <div className={styles.experience_main_container_content}>
                <article className={styles.experience_container_history}>
                    <img src={modal} alt="" />
                    <p className={styles.role}>Estágio Backend</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa quae distinctio magni quisquam excepturi, iure impedit dolore repellendus atque ducimus porro laboriosam omnis voluptatem asperiores natus veritatis nam nisi?</p>
                </article>

                <article className={styles.experience_container_history}>
                    <img src={gbm} alt="" />
                    <p className={styles.role}>Desenvolvedor de Software</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa quae distinctio magni quisquam excepturi, iure impedit dolore repellendus atque ducimus porro laboriosam omnis voluptatem asperiores natus veritatis nam nisi?</p>
                </article>
            </div>
        </section >
    );
}

export default Experience;