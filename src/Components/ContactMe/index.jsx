import ImgWhatsApp from '../../../public/assets/icones/whatsapp-logo-thin.svg'
import ImgGmail from '../../../public/assets/icones/envelope-simple-thin.svg'
import * as S from './styles.jsx'

export default function ContactMe() {
   return (
      <S.ContactMeContainer>
         <S.ContactTextContent>
            <h2>Contato</h2>
            <p>Olá, estou aberto para conversas! Seja para discutir projetos, fazer perguntas ou apenas bater um papo, estou à disposição. Utilize o formulário abaixo e vamos iniciar uma conversa.</p>
         </S.ContactTextContent>
         <S.FigureContent>
            <div>
               <S.FigureBox>
                  <img src={ImgWhatsApp} alt="Logo do WhatsApp" />
                  <figcaption>WhasApp</figcaption>
               </S.FigureBox>
               <p>+55 82 987377303</p>
            </div>
            <div>
               <S.FigureBox>
                  <img src={ImgGmail} alt="Logo do Gmail" />
                  <figcaption>Email</figcaption>
               </S.FigureBox>
               <p>alanfabriciobarbosa1@gmail.com</p>
            </div>
         </S.FigureContent>
      </S.ContactMeContainer>
   )
}