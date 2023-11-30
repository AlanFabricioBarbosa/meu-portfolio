import * as S from './styles.jsx'
import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function FormContact() {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [message,setMessage] = useState("")
   const [alertMessage, setAlertMessage] = useState("")
   const [successMessage, setSuccessMessage] = useState("")

   const sendEmail = (e) => {
      e.preventDefault();
      if(name === '' || email === '' || message === ''){
         setAlertMessage("Preencha todos os campos")
         return;
      }

      const templateParams = {
         from_name: name,
         message: message,
         email: email
      }

      emailjs.send("service_2fnp38f", "template_m56g4lj", templateParams, "63gZ6kCeUH3gBfqnY")
      .then(()=> {
         setSuccessMessage(`Email Enviado`)
         setName('')
         setEmail('')
         setMessage('')
      },(err) => {
         setAlertMessage(`Error: ${err}`)
      })
   }

   return (
      <S.FormContainer>
         <S.FormMessage>Me escreva um Email</S.FormMessage>
         <S.FormContent onSubmit={sendEmail}>
            <S.FormInputs
               type="text"
               placeholder="Digite seu nome"
               value={name}
               onChange={(e) => setName(e.target.value)}
            />
            <S.FormInputs 
               type="text"
               placeholder="Digite seu Email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
            />
            <S.FormInputsTextArea
               type="text"
               placeholder="Digite sua mensagem..."
               value={message}
               onChange={(e) => setMessage(e.target.value)}
            />
            <section>
               {alertMessage && <p>{alertMessage}</p>}
               {successMessage && <p>{successMessage}</p>}
            </section>
            <S.FormBtnSend>
               <input type="submit" value="Enviar"/>
            </S.FormBtnSend>
            </S.FormContent>
      </S.FormContainer>
   )
}