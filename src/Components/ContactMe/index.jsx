import ImgWhatsApp from '.././../assets/icones/whatsapp-logo-thin.svg'
import ImgGmail from '.././../assets/icones/envelope-simple-thin.svg'
import { ContactMeContainer, ContactTextContent, FigureContent } from './styles'

export default function ContactMe() {
   return (
      <ContactMeContainer>
         <ContactTextContent>
            <h2>Contato</h2>
            <p>Olá, estou aberto para conversas! Seja para discutir projetos, fazer perguntas ou apenas bater um papo, estou à disposição. Utilize o formulário abaixo e vamos iniciar uma conversa.</p>
         </ContactTextContent>
         <FigureContent>
            <div>
               <figure>
                  <img src={ImgWhatsApp} alt="Logo do WhatsApp" />
                  <figcaption>WhasApp</figcaption>
               </figure>
               <p>+55 82 987377303</p>
            </div>
            <div>
               <figure>
                  <img src={ImgGmail} alt="Logo do Gmail" />
                  <figcaption>Email</figcaption>
               </figure>
               <p>alanfabriciobarbosa1@gmail.com</p>
            </div>
         </FigureContent>
      </ContactMeContainer>
   )
}