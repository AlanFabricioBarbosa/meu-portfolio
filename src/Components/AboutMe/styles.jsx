import styled from "styled-components";

export const AboutMeContainer = styled.section`
   display: flex;
   align-items: center;
   margin-top: 49px;
`

export const AboutMeContentSocial = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   width: 35vw;
`

export const AboutMeFigure = styled.figure`
   img {
      width: 520px;
      border-radius: 70px 0;
   }
`

export const AboutMeText = styled.section`
   width: 35vw;
   margin-top: 35px;

   h2 {
      font-size: 40px;
      line-height: 40px;
      margin-bottom: 30px;
   }

   p {
      margin: 20px 0;
      text-align: justify;
      font-size: 24px;
      font-family: 'Montserrat', sans-serif;
      text-align: justify;
   }
`
