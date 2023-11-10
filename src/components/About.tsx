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
            <div>
                <p className={styles.subtitle}>Olá, <span>sou</span></p>

                <h2>Marcelo Lima</h2>

                <p className={styles.description}>Software Developer</p>

                <p className={styles.main_text}>Desenvolvedor de software com experiência desde 2020 em projetos pessoais e de produção. Habilidades
                    em C#, SQL/NoSQL, Golang, JavaScript, React, Docker e Git. Especializado em desenvolvimento de
                    funcionalidades e refatoração de sistemas legados para melhorar desempenho e manutenção.</p>

                <p className={styles.main_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa inventore recusandae totam dolorem consequatur doloremque corrupti possimus, exercitationem repudiandae, aut, obcaecati distinctio! Maiores, quasi laborum ullam temporibus sequi fugiat iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odit aut quae? Rerum, adipisci, sunt ipsum, non aperiam ab fuga in maiores quas facilis esse numquam delectus magni quaerat vel<span style={{ color: "#F26B1D" }}>.
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

            <div className={styles.image_content}>

                <img id={styles.react} className={styles.tech} src={react_icon} alt="Logo reactjs" />

                <img id={styles.csharp} className={styles.tech} src={csharp_icon} alt="Logo c#" />

                <img className={styles.profile_pic} src={profile} alt="Jovem programador carregando um teclado." />

                <img id={styles.golang} className={styles.tech} src={go_icon} alt="Logo golang" />

            </div>
        </main>
    );
}

export default About;