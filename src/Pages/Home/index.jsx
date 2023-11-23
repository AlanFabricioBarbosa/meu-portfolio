import GifPortfolio from "../../assets/gifPortfolio.gif"
import { ExternalLinks, HomeContainer, WelcomeContainer } from "./styled"
import ImgGithub from "../../assets/icones/github-logo-bold.svg"
import ImgLinkedin from "../../assets/icones/linkedin-logo-bold.svg"

export default function Home() {
   return (
      <>
         <HomeContainer>
            <WelcomeContainer>
               <h2>Bem-vindo ao meu portfólio</h2>
               <p>
                  Olá, eu sou Alan Fabrício, desenvolvedor web.
               </p>
               <ExternalLinks>
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
                  </ExternalLinks>
               </WelcomeContainer>
            <figure>
               <img 
                  src={GifPortfolio} 
                  alt="GIF animado de um notebook abrindo e fechando."
               />
            </figure>
         </HomeContainer>
      </>
   )
}