import styled from "styled-components"

export const HomeContainer = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
`

export const WelcomeContainer = styled.section`
   display: flex;
   align-items: center;
   height: 70vh;

   section {
   width: 40vw;
   height: 30vh;

   h2 {
      text-align: center;
      font-size: 38px;
      font-family: 'Raleway',sans-serif;
      padding-bottom: 20px;
   }

   p {
      font-size: 24px;
      font-family: 'Montserrat', sans-serif;
      letter-spacing: .1rem;
      text-align: justify
      }
   }
`