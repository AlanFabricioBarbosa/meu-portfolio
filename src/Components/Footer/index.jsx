import * as S from './styles.jsx'
import ImgGithub from "../../../public/assets/icones/github-logo-bold.svg"
import ImgLinkedin from "../../../public/assets/icones/linkedin-logo-bold.svg"

export default function Footer(){
   return (
      <S.FooterContainer>
         <h3>&copy;2023 Alan Fabrício</h3>
         <S.ExternalLinks>
            <a 
               href="https://github.com/AlanFabricioBarbosa" 
               target="_blanck" 
               rel="noreferrer">
               <img 
               src={ImgGithub}
               alt="Icone do Github"
               />
            </a>
            <a 
               href="https://www.linkedin.com/in/alanfabr%C3%ADciodev/" 
               target="_blank" 
               rel="noreferrer">
               <img 
               src={ImgLinkedin} 
               alt="Icone do Linkedin"
               />
            </a>
         </S.ExternalLinks>
      </S.FooterContainer>
   )
}