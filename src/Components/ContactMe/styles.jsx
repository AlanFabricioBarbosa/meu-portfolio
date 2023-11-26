import styled from "styled-components";

export const ContactMeContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
height: 45vh;
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
   }
`

export const FigureContent = styled.section`
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   width: 40vw;
   height: 65vh;
   border: 1px solid red;

   figure {
      display: flex;
      justify-content: space-evenly;
      align-items: center;
      width: 15vw;
      border: 1px solid green;
   }
`