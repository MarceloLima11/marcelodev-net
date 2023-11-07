import styles from './About.module.css';

function About() {
    return (
        <main id={styles.about_main_container}>
            <h2>Olá, sou Marcelo Lima</h2>
            <p>Software Developer</p>
            <p>Desenvolvedor de software com experiência desde 2020 em projetos pessoais e de produção. Habilidades
                em C#, SQL/NoSQL, Golang, JavaScript, React, Docker e Git. Especializado em desenvolvimento de
                funcionalidades e refatoração de sistemas legados para melhorar desempenho e manutenção.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa inventore recusandae totam dolorem consequatur doloremque corrupti possimus, exercitationem repudiandae, aut, obcaecati distinctio! Maiores, quasi laborum ullam temporibus sequi fugiat iure! Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit odit aut quae? Rerum, adipisci, sunt ipsum, non aperiam ab fuga in maiores quas facilis esse numquam delectus magni quaerat vel.</p>

            <button>Baixe meu CV</button>
            <button>Contate-me!</button>
        </main>
    );
}

export default About;