import styled from "styled-components";

export const AboutMeContainer = styled.section`
   display: flex;
   justify-content: center;
   margin-top: 49px;
   width: 60vw;
   height: 70vh;
   gap: 60px;
`

export const AboutMeContentSocial = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   border: 1px solid red;
`

export const AboutMeFigure = styled.figure`
   img {
      width: 400px;
      border-radius: 50px;
   }
`

export const AboutMeSocialInformation = styled.section`
   nav{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 20vw;
      height: 17vh;
      gap: 5px;
      font-size: 18px;
      border: 1px solid red;
   }

   a {
      border: 1px solid blue;
      height: 7vh;
   }
`


export const AboutMeText = styled.section`
   border: 1px solid blue;


   h2 {
      white-space: pre-line;
      font-size: 40px;
      line-height: 40px;
      margin-bottom: 30px;
   }

   p {
      margin: 20px 0;
      text-align: justify;
   }
`