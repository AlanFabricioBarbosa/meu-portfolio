import * as S from './styles.jsx'

export default function Header() {
   return (
      <S.HeaderContainer>
         <S.Title>&#60;Alan&#47;&#62;</S.Title>
         <nav>
            <S.ListContainer>
               <li>
                  <S.Links to="/">
                     Inicio
                  </S.Links>
               </li>
               <li>
                  <S.Links to="/about">
                     Sobre Mim
                  </S.Links>
               </li>
               <li>
                  <S.Links to="/education">
                     Formações
                  </S.Links>
               </li>
               <li>
                  <S.Links to="/projects">
                     Projetos
                  </S.Links>
               </li>
               <li>
                  <S.Links to="/contact">
                     Contato
                  </S.Links>
               </li>
            </S.ListContainer>
         </nav>
      </S.HeaderContainer>
   )
}