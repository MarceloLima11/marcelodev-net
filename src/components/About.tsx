import profile from '../images/about/profile.jpg';
import go_icon from '../images/about/golang_icon.png';
import wapp_icon from '../images/social/wapp_icon_black.png';
import react_icon from '../images/about/react_icon.png';
import github_icon from '../images/social/github_icon_black.png';
import csharp_icon from '../images/about/csharp_icon.png';
import linkedin_icon from '../images/social/linkedin_icon_black.png';

import styles from './About.module.css';

function About() {
    return (
        <main id={styles.about_main_container}>
            <div className={styles.about_main_container_content}>
                <p className={styles.subtitle}>Olá, <span>sou</span></p>

                <h2>Marcelo Lima</h2>

                <p className={styles.description}>Software Developer</p>

                <p className={styles.main_text}>Sou um desenvolvedor de software com uma sólida experiência desde 2020, trabalhando em projetos pessoais e de produção. Possuo habilidades abrangentes em diversas tecnologias, incluindo C#, SQL/NoSQL, Golang, JavaScript, React, Docker e Git.</p>

                <p className={styles.main_text}>
                    Meu foco principal é o desenvolvimento de funcionalidades inovadoras e a refatoração de sistemas legados. Tenho um compromisso constante em aprimorar o desempenho e a manutenibilidade de sistemas existentes, contribuindo para a evolução contínua da tecnologia<span style={{ color: "#F26B1D" }}>.
                    </span></p>

                <a href="#" id={styles.download}>Baixe meu CV</a>
                <a href="mailto:marcelolima152021@gmail.com" id={styles.contact}>Contate-me!</a>

                <div className={styles.social}>
                    <span>
                        <a
                            target='_blank'
                            href="https://www.linkedin.com/in/marcelo-lima11/">
                            <img id={styles.linkedin} src={linkedin_icon} alt="Logo LinkedIn" />
                        </a>
                    </span>


                    <span>
                        <a
                            target='_blank'
                            href="https://github.com/MarceloLima11">
                            <img id={styles.github} src={github_icon} alt="Logo GitHub" />
                        </a>
                    </span>

                    <span>
                        <a
                            target='_blank'
                            href="https://api.whatsapp.com/send?0=pt_BR&phone=13997372895">
                            <img id={styles.wapp} src={wapp_icon} alt="Logo WhatsApp" />
                        </a>
                    </span>
                </div>
            </div>

            <div className={styles.image_content + ' ' + styles.about_main_container_content}>

                <img id={styles.react} className={styles.tech} src={react_icon} alt="Logo reactjs" />

                <img id={styles.csharp} className={styles.tech} src={csharp_icon} alt="Logo c#" />

                <div id={styles.profile_border}>
                    <div>
                    </div>
                    <img src={profile} alt="Jovem programador carregando um teclado." />
                </div>

                <img id={styles.golang} className={styles.tech} src={go_icon} alt="Logo golang" />
            </div>
        </main>
    );
}

export default About;