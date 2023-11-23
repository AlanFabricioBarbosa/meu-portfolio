import styled from "styled-components"

export const HomeContainer = styled.section`
   display: flex;
   align-items: center;
   justify-content: space-around;
   height: 85vh;
`

export const WelcomeContainer = styled.section`
   text-align: center;
   width: 45vw;
   height: 20vh;

   h2 {
      font-size: 38px;
      font-family: 'Raleway',sans-serif;
      padding: 20px;
   }

   p {
      font-size: 26px;
      font-family: 'Montserrat', sans-serif;
   }
`

export const ExternalLinks = styled.div`
      padding: 15px;

      a {
         margin-left: 25px;
      }
`