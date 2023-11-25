import GifPortfolio from "../../assets/homeImg/gifPortfolio.gif"
import CardSkilss from "../../Components/CardSkills"
import {HomeContainer, WelcomeContainer } from "./styled"

export default function Home() {
   return (
      <HomeContainer>
         <WelcomeContainer style={{display: "flex"}}>
            <section>
               <h2>Bem-vindo ao meu portfólio</h2>
               <p>
               Olá, meu nome é Alan, tenho 25 anos e sou apaixonado por programação. Sou natural de Maceió, Alagoas. Convido você a dar uma olhada no meu portfólio, onde compartilho projetos e experiências que refletem meu comprometimento e entusiasmo pelo mundo da programação.
               </p>
            </section>
            <figure>
               <img
               src={GifPortfolio} 
               alt="GIF animado de um notebook abrindo e fechando."
               /> 
            </figure>
         </WelcomeContainer>
         <CardSkilss/>
      </HomeContainer>
   )
}