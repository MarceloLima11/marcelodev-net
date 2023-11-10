import team_work from '../images/navbar/team_work.png';
import dev_with_cat from '../images/navbar/dev_with_cat.png';
import ui_designing from '../images/navbar/ui_design.png';
import thinking_real_solution from '../images/navbar/thinking_real_solution.png';

import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav>
            <h1>Marcelo</h1>

            <div className={styles.navbar_main_container}>
                <div>
                    <img
                        src={dev_with_cat}
                        alt="Jovem programador com um gato no colo." />
                </div>

                <div>
                    <img
                        src={ui_designing}
                        alt="Ilustrador desenhando uma arte." />

                </div>

                <div>
                    <img
                        src={team_work}
                        alt="Equipe de trabalhadores construindo um prédio quase finalizado." />
                </div>

                <div>
                    <img
                        src={thinking_real_solution}
                        alt="Programador pensando em soluções ao lado de fora e de noite." />
                </div>
            </div>
        </nav>
    );
}

export default Navbar;