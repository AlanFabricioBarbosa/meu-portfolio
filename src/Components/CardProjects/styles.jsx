import styled from "styled-components";

export const CardSection = styled.section`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 20px;
`;

export const ProjectCard = styled.section`
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   width: 70vw;
   height: 30vh;
   border-top: 1px solid #FFA500;
`

export const CardFigure = styled.figure`
   margin-bottom: 15px;
`

export const CardImage = styled.img`
   border-top-left-radius:  100px;
`

export const CardText = styled.section`
   width: 35vw;
`

export const CardTitle = styled.h2`
   font-size: 38px;
   font-family: 'Raleway',sans-serif;
   margin-bottom: 15px;
`

export const CardDescription = styled.p`
   font-size: 24px;
   font-family: 'Montserrat', sans-serif;
   text-align: justify;
   margin-bottom: 12px;
`

export const CardNav = styled.nav`
   display: flex;
   justify-content: space-evenly;
   width: 7vw;
`

export const CardLink = styled.a`
   text-decoration: none;
`

export const CardImageLink = styled.img`
`