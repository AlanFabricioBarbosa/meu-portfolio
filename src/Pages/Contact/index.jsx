import ContactMe from "../../Components/ContactMe";
import FormContact from "../../Components/FormContact";
import * as S from './styles.jsx'


export default function Contact() {
   return (
      <S.ContactContainer>
         <ContactMe/>
         <FormContact/>
      </S.ContactContainer>
   )
}