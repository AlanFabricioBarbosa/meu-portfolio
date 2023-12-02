import CardProjects from "../../Components/CardProjects";

import * as S from "./styles.jsx"

export default function Projects() {
   return (
      <S.ProjectsContainer>
         <S.ProjectsText>
            <h2>Projetos</h2>
            <p>
               Bem-vindo à minha coleção de códigos e conquistas! Nesta seção, você terá um vislumbre dos projetos que desenvolvi com entusiasmo. Cada linha de código representa não apenas uma solução técnica, mas também um capítulo no meu constante aprendizado.
            </p>
         </S.ProjectsText>
         <CardProjects/>
      </S.ProjectsContainer>
   )
}