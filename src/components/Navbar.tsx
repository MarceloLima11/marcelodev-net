import programmer_with_cat from '../images/cat2.png';
import ui_ux_drawing from '../images/ux.png';
import team_work from '../images/teamwork.png';
import programmer_creating_real_solution from '../images/realSolution.png';

import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav>
            <h1>Marcelo</h1>

            <div className={styles.navbar_main_container}>
                <div>
                    <img
                        src={programmer_with_cat}
                        alt="Jovem programador com um gato no colo." />
                </div>

                <div>
                    <img
                        src={ui_ux_drawing}
                        alt="Ilustrador desenhando uma arte." />

                </div>

                <div>
                    <img
                        src={team_work}
                        alt="Equipe de trabalhadores construindo um prédio quase finalizado." />
                </div>

                <div>
                    <img
                        src={programmer_creating_real_solution}
                        alt="Programador pensando em soluções ao lado de fora e de noite." />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;