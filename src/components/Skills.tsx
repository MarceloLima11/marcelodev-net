import js_hero from '../images/heros/js/js_hero.png';
import go_hero from '../images/heros/go/go_hero.png';
import sass_hero from '../images/heros/sass/sass_hero.png';
import csharp_hero from '../images/heros/csharp/csharp_hero.png';
import react_hero from '../images/heros/react/react_hero.png';

import styles from './Skills.module.css';

function Skills() {
    return (
        <section className={styles.skills_main_container}>
            <h3>Habilidades</h3>

            <div className={styles.skills_main_container_images}>
                <div id={styles.golang_card} className={styles.card}>
                    <img src={go_hero} alt="Golang em héroi de desenho animado" />
                </div>

                <div id={styles.javascript_card} className={styles.card}>
                    <img src={js_hero} alt="JavaScript em héroi de desenho animado" />
                </div>

                <div id={styles.csharp_card} className={styles.card}>
                    <img src={csharp_hero} alt="C# em héroi de desenho animado" />
                </div>

                <div id={styles.sass_card} className={styles.card}>
                    <img src={sass_hero} alt="Sass em héri de desenho animado" />
                </div>

                <div id={styles.react_card} className={styles.card}>
                    <img src={react_hero} alt="Sass em héri de desenho animado" />
                </div>

                <div className={styles.card}></div>
            </div>
        </section>
    );
}

export default Skills;