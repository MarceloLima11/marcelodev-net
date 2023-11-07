import Navbar from "./components/pages/Navbar";
import About from "./components/pages/About";

function App() {
  return (
    <>
      <Navbar />

      <About />

      <section>
        <h3>Onde eu trabalhei?</h3>
        <article>
          <p>Estágio Backend</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa quae distinctio magni quisquam excepturi, iure impedit dolore repellendus atque ducimus porro laboriosam omnis voluptatem asperiores natus veritatis nam nisi?</p>
        </article>
        <article>
          <p>Desenvolvedor de Software</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates ipsa quae distinctio magni quisquam excepturi, iure impedit dolore repellendus atque ducimus porro laboriosam omnis voluptatem asperiores natus veritatis nam nisi?</p>
        </article>
      </section>

      <section>
        <h3>Meus Projetos</h3>
      </section>

      <section>
        <h3>Habilidades</h3>
      </section>
    </>
  )
}

export default App
