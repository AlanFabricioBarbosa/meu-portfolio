import { useState } from "react"
import emailjs from "@emailjs/browser"

export default function FormContact() {
   const [name, setName] = useState("")
   const [email, setEmail] = useState("")
   const [message,setMessage] = useState("")

   const sendEmail = (e) => {
      e.preventDefault();
      if(name === '' || email === '' || message === ''){
         alert("Preencha todos os campos");
         return;
      }

      const templateParams = {
         from_name: name,
         message: message,
         email: email
      }

      emailjs.send("service_2fnp38f", "template_m56g4lj", templateParams, "63gZ6kCeUH3gBfqnY")
      .then((response)=> {
         console.log("Email Enviado", response.status, response.text)
         setName('')
         setEmail('')
         setMessage('')
      },(err) => {
         console.log("Error", err)
      })
   }

   return (
      <>
         <form onSubmit={sendEmail}>
               <input 
                  type="text"
                  placeholder="Digite seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
               />
               <input 
                  type="text"
                  placeholder="Digite seu Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
               />
               <input 
                  type="text"
                  placeholder="Digite sua mensagem..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
               />
               <input type="submit" value="Enviar"/>
         </form>
      </>
   )
}