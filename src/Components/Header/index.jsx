import { Link } from "react-router-dom";

export default function Header() {
   return (
      <header>
         <nav>
            <Link to="/">Inicio</Link>
            <Link to="/about">Sobre Mim</Link>
            <Link to="/education">Formação e Certificados</Link>
            <Link to="/projects">Projetos</Link>
            <Link to="/contact">Contato</Link>
         </nav>
      </header>
   )
}