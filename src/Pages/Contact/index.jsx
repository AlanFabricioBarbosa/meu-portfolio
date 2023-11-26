import ContactMe from "../../Components/ContactMe";
import FormContact from "../../Components/FormContact";
import { ContactContainer } from "./styles";


export default function Contact() {
   return (
      <ContactContainer>
         <ContactMe/>
         <FormContact/>
      </ContactContainer>
   )
}