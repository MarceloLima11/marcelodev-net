import js_hero from '../images/heros/js/js_hero.png';
import go_hero from '../images/heros/go/go_hero.png';
import sass_hero from '../images/heros/sass/sass_hero.png';
import csharp_hero from '../images/heros/csharp/csharp_hero.png';
import react_hero from '../images/heros/react/react_hero.png';
import sql_hero from '../images/heros/sql/sql_hero.png';
import ts_hero from '../images/heros/ts/ts_hero.png';
import figma_hero from '../images/heros/figma/figma_hero.png';

import styles from './Skills.module.css';

function Skills() {
    return (
        <section id={styles.skills_main_container}>
            <h3>Habilidades</h3>

            <div className={styles.skills_main_container_images}>
                <div id={styles.golang_card} className={styles.card}>
                    <img src={go_hero} alt="Golang em héroi de desenho animado" />
                </div>

                <div id={styles.javascript_card} className={styles.card}>
                    <img src={js_hero} alt="JavaScript em héroi de desenho animado" />
                </div>

                <div id={styles.ts_card} className={styles.card}>
                    <img src={ts_hero} alt="SQL em héroi de desenho animado" />
                </div>

                <div id={styles.csharp_card} className={styles.card}>
                    <img src={csharp_hero} alt="C# em héroi de desenho animado" />
                </div>

                <div id={styles.sass_card} className={styles.card}>
                    <img src={sass_hero} alt="Sass em héroi de desenho animado" />
                </div>

                <div id={styles.react_card} className={styles.card}>
                    <img src={react_hero} alt="ReactJS em héroi de desenho animado" />
                </div>

                <div id={styles.sql_card} className={styles.card}>
                    <img src={sql_hero} alt="SQL em héroi de desenho animado" />
                </div>

                <div id={styles.figma_card} className={styles.card}>
                    <img src={figma_hero} alt="Figma em héroi de desenho animado" />
                </div>
            </div>
        </section>
    );
}

export default Skills;