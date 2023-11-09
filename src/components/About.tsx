import i from '../images/I.jpg';
import react_logo from '../images/react.png';
import go_logo from '../images/golang.png';
import csharp from '../images/csharp.png';
import linkedin from '../images/linkedinblack.png';
import github from '../images/github.png';
import wapp from '../images/wapp.png';

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
                <p className={styles.main_text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa inventore recusandae totam dolorem consequatur doloremque corrupti possimus, exercitationem repudiandae, aut, obcaecati distinctio! Maiores, quasi laborum ullam temporibus sequi fugiat iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odit aut quae? Rerum, adipisci, sunt ipsum, non aperiam ab fuga in maiores quas facilis esse numquam delectus magni quaerat vel.</p>

                <a href="#" id={styles.download}>Baixe meu CV</a>
                <a href="mailto:marcelolima152021@gmail.com" id={styles.contact}>Contate-me!</a>

                <div className={styles.social}>
                    <span><a target='_blank' href="https://www.linkedin.com/in/marcelo-lima11/"><img id={styles.linkedin} src={linkedin} alt="Logo LinkedIn" /></a> </span>
                    <span><a target='_blank' href="https://github.com/MarceloLima11"><img id={styles.github} src={github} alt="Logo GitHub" /></a></span>
                    <span><a target='_blank' href="https://api.whatsapp.com/send?0=pt_BR&phone=13997372895"><img id={styles.wapp} src={wapp} alt="Logo WhatsApp" /></a></span>
                </div>
            </div>

            <div className={styles.image_content}>
                <img id={styles.react} className={styles.tech} src={react_logo} alt="Logo reactjs" />
                <img id={styles.csharp} className={styles.tech} src={csharp} alt="Logo c#" />
                <img className={styles.profile_pic} src={i} alt="Jovem programador carregando um teclado." />
                <img id={styles.golang} className={styles.tech} src={go_logo} alt="Logo golang" />
            </div>
        </main>
    );
}

export default About;