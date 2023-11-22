import user from '../images/navbar/user.png';
import work from '../images/navbar/work.png';
import book from '../images/navbar/book.png';
import project from '../images/navbar/settings.png';

import styles from './Navbar.module.css';

function Navbar() {
    return (
        <nav className={styles.nav_main_container}>
            <input type="checkbox" />
            <div className={styles.fab}></div>
            <div className={styles.fac}>
                <a href="#"><img src={user} alt="Sobre mim icone" /></a>
                <a href="#"><img src={work} alt="Experiência icone" /></a>
                <a href="#"><img src={book} alt="Habilidades icone" /></a>
                <a href="#"><img src={project} alt="Projetos icone" /></a>
            </div>
        </nav>
    );
}

export default Navbar;