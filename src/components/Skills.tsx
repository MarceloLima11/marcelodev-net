import styles from './Skills.module.css';
import go_hero from '../images/go_hero.png';
import js_hero from '../images/js_hero.png';
import csharp_hero from '../images/csharp_hero.png';
import sass_hero from '../images/sass_hero.png';

function Skills() {
    return (
        <section className={styles.skills_main_container}>
            <h3>Habilidades</h3>

            <div className={styles.skills_main_container_images}>
                <div id={styles.golang_card} className={styles.card}> <img src={go_hero} alt="Golang em héroi de desenho animado" /></div>
                <div id={styles.javascript_card} className={styles.card}> <img src={js_hero} alt="JavaScript em héroi de desenho animado" /></div>
                <div id={styles.csharp_card} className={styles.card}><img src={csharp_hero} alt="C# em héroi de desenho animado" /></div>
                <div id={styles.sass_card} className={styles.card}><img src={sass_hero} alt="Sass em héri de desenho animado" /></div>
                <div className={styles.card}></div>
                <div className={styles.card}></div>
            </div>
        </section>
    );
}

export default Skills;