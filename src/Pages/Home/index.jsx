import CardSkilss from "../../Components/CardSkills"
import * as S from './styled'
import 'animate.css'

export default function Home() {
   return (
      <S.HomeContainer>
         <S.WelcomeContainer>
            <section className="animate__animated animate__backInLeft">
               <h2>Bem-vindo ao meu portfólio</h2>
               <p>
               Olá, meu nome é Alan, tenho 25 anos e sou apaixonado por programação. Sou natural de Maceió, Alagoas. Convido você a dar uma olhada no meu portfólio, onde compartilho projetos e experiências que refletem meu comprometimento e entusiasmo pelo mundo da programação.
               </p>
            </section>
         </S.WelcomeContainer>
         <CardSkilss/>
      </S.HomeContainer>
   )
}