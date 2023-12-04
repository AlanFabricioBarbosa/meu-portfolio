import styled from 'styled-components';

export const CardContainer = styled.section`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   gap: 45px;
   width: 75vw;
   margin-top: 45px;
`

export const Card = styled.section`
   border-radius: 4px;
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   width: 100%;
   max-width: 400px;
   height: 45vh;
   overflow: hidden;
   padding: 16px;
   transition: transform 0.3s ease-in-out;
   border: 1px solid #ecf0f1;


   &:hover {
      transform: translateY(6px);
   }
`

export const EducationCardFigure = styled.figure`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-evenly;
   width: 100%;
   height: 100%;
   margin-bottom: 16px;
   box-shadow: rgba(236, 240, 241, 0.4) 0px 0px 0px 2px, rgba(236, 240, 241, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset;


   img {
      width: 165px;
      
      margin: 10px 0;
      text-align: center;
   }

   div {
      text-align: start;
      width: 100%;
   }

   figcaption {
      color: #0FF;
      font-size: 18px;
      margin: 0 0 8px 20px;
      text-align: start;
   }
`

export const EducationCardText = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 100%;
   margin: 2px 3px 8px 20px;
`

export const CardTitle = styled.h3`
   font-family: 'Raleway',sans-serif;
   padding-bottom: 5px;
   font-size: 22px;
   font-weight: bold;
   margin-bottom: 8px;
   text-align: center;
`

export const CardName = styled.a`
   color: #0FF;
   font-size: 16px;
   margin-bottom: 16px;
   width: 100%;
   text-decoration: none;
   text-align: start;
`

export const CardDescription = styled.p`
   font-size: 18px;
   font-family: 'Montserrat', sans-serif;
   letter-spacing: .1rem;
   text-align: justify;
   width: 100%;
`