import gbm_icon from '../images/gbm/gbm_icon_white.png';
import modal_icon from '../images/modal/modal_icon_white.png';

import styles from './Experience.module.css';

function Experience() {
    return (
        <section id={styles.experience_main_container}>
            <h3 id={styles.title}>Onde eu trabalhei?</h3>
            <p className={styles.description}>Colaborei em projetos desafiadores, fornecendo soluções inovadoras e resultados impactantes. Busco constantemente oportunidades para crescer e contribuir de forma significativa, aqui está minha trajetória no mercado de trabalho até o momento.</p>
            <div className={styles.experience_main_container_content}>
                <article className={styles.experience_container_history}>
                    <img src={modal_icon} alt="Logo ModalGr" />
                    <p className={styles.role}>Estágio Backend</p>
                    <p className={styles.job_description}>
                        Durante meu estágio na ModalGR, foquei no desenvolvimento de backend, colaborando em projetos de API's REST para otimizar o atendimento ao público, integrar sistemas e aprimorar a experiência do usuário. Trabalhei de perto com desenvolvedores experientes, envolvendo-me também com o banco de dados PostgreSQL, realizando consultas e operações pertinentes.</p>
                </article>

                <article className={styles.experience_container_history}>
                    <img src={gbm_icon} alt="Logo GBM Solutions" />
                    <p className={styles.role}>Desenvolvedor de Software</p>
                    <p className={styles.job_description}>Contribuí no desenvolvimento amplo de sistemas de controle de tráfego e gestão portuária, abrangendo monitoramento de vagões, contêineres e cargas. Realizei refatoração de um sistema legado de Delphi para C#, desenvolvimento de APIs e aplicativos desktop com tecnologias .NET/.NET Framework e EF Core. Tenho experiência sólida em gerenciamento de dados usando SQL Server, otimizando o sistema com procedimentos, visualizações e consultas avançadas.</p>
                </article>
            </div>
        </section >
    );
}

export default Experience;