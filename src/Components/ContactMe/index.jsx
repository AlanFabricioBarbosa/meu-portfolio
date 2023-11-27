import ImgWhatsApp from '../../../public/assets/icones/whatsapp-logo-thin.svg'
import ImgGmail from '../../../public/assets/icones/envelope-simple-thin.svg'
import { ContactMeContainer, ContactTextContent, FigureBox, FigureContent } from './styles'

export default function ContactMe() {
   return (
      <ContactMeContainer>
         <ContactTextContent>
            <h2>Contato</h2>
            <p>Olá, estou aberto para conversas! Seja para discutir projetos, fazer perguntas ou apenas bater um papo, estou à disposição. Utilize o formulário abaixo e vamos iniciar uma conversa.</p>
         </ContactTextContent>
         <FigureContent>
            <div>
               <FigureBox>
                  <img src={ImgWhatsApp} alt="Logo do WhatsApp" />
                  <figcaption>WhasApp</figcaption>
               </FigureBox>
               <p>+55 82 987377303</p>
            </div>
            <div>
               <FigureBox>
                  <img src={ImgGmail} alt="Logo do Gmail" />
                  <figcaption>Email</figcaption>
               </FigureBox>
               <p>alanfabriciobarbosa1@gmail.com</p>
            </div>
         </FigureContent>
      </ContactMeContainer>
   )
}