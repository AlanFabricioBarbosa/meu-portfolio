import styled from "styled-components";

export const ContactMeContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
height: 35vh;
margin-top: 60px;
`

export const ContactTextContent = styled.section`
   width: 35vw;

   h2 {
      text-align: center;
      font-size: 38px;
      font-family: 'Raleway',sans-serif;
      padding-bottom: 30px;
   }

   p {
      font-size: 18px;
      font-family: 'Montserrat', sans-serif;
   };
`

export const FigureContent = styled.section`
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   margin-top: 55px;
   width: 40vw;
   height: 15vh;

   div{
      display: flex;
      flex-direction: column;
      justify-content: center;
      padding-left: 15px;
      width: 18vw;
      box-shadow: rgba(59, 250, 140, .4) 0px 0px 0px 2px, rgba(59, 250, 140, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;
      height: 10vh;
      border-radius: 15px;
   }

   p {
      font-family: 'Montserrat',sans-serif;
      font-size: 18px;
   }
`

export const FigureBox = styled.figure`
   display: flex;
   margin-bottom: 10px;

   figcaption {
      font-size: 22px;
      font-family: 'Raleway',sans-serif;
      margin-left: 7px;
   }
`

