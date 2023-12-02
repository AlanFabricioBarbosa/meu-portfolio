import styled from 'styled-components';

export const CardContainer = styled.section`
   display: flex;
   flex-wrap: wrap;
   justify-content: center;
   align-items: center;
   gap: 40px;
   width: 70vw;
   margin-top: 45px;
   border: 1px solid green;
`

export const Card = styled.section`
   border-radius: 4px;
   display: flex;
   align-items: center;
   justify-content: space-evenly;
   width: 55vw;
   max-width: 600px;
   overflow: hidden;
   padding: 16px;
   transition: transform 0.3s ease-in-out;
   border: 1px solid red;

   &:hover {
      transform: translateY(-5px);
   }

   figure {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-bottom: 16px;
   }

   img {
      width: 200px;
      height: auto;
      margin-bottom: 8px;
   }

   figcaption {
      font-size: 14px;
      margin-bottom: 4px;
   }

   section {
      display: flex;
      flex-direction: column;
      align-items: center;
   }
`

export const CardTitle = styled.h3`
   font-size: 20px;
   font-weight: bold;
   margin-bottom: 8px;
   text-align: center;
`

export const CardName = styled.a`
   font-size: 16px;
   margin-bottom: 16px;
   text-align: center;
`

export const CardDescription = styled.p`
   font-size: 14px;
   line-height: 1.6;
   text-align: center;
`