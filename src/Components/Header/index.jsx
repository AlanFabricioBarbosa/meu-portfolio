import { HeaderContainer, Links, ListContainer, Title } from "./styles";

export default function Header() {
   return (
      <HeaderContainer>
         <Title>Alan</Title>
         <nav>
            <ListContainer>
               <li>
                  <Links to="/">
                     Inicio
                  </Links>
               </li>
               <li>
                  <Links to="/about">
                     Sobre Mim
                  </Links>
               </li>
               <li>
                  <Links to="/education">
                     Formações
                  </Links>
               </li>
               <li>
                  <Links to="/projects">
                     Projetos
                  </Links>
               </li>
               <li>
                  <Links to="/contact">
                     Contato
                  </Links>
               </li>
            </ListContainer>
         </nav>
      </HeaderContainer>
   )
}