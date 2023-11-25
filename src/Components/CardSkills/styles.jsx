import styled from "styled-components";

export const SkillsText = styled.section`
   text-align: center;
   font-size: 38px;
   font-family: 'Raleway',sans-serif;

   h2 {
      text-align: center;
      padding: 45px;
   }
`

export const SkillsContainer = styled.section`
   display: grid;
   grid-template-columns: repeat(4, 1fr);
   grid-auto-rows: minmax(70px, auto);
   gap: 3rem;
`

export const SkillContent = styled.figure`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   width: 14rem;
   height: 14rem;
   border-radius: 25px;
   transition: transform 0.3s ease;
   gap: 1.3rem;
   box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
   &:hover{
      transform: rotate(10deg);
   }

   img{
      width: 100px;
      height: 10vh;
   }

   figcaption{
      font-family: 'Montserrat', sans-serif;
   }
`