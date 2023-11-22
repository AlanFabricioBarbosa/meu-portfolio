import { Link } from "react-router-dom";
import styled from "styled-components";

export const HeaderContainer = styled.header`
   display: flex;
   justify-content: space-around;
   align-items: center;
   height: 7vh;
   box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
`

export const Title = styled.h1`
   font-size: 42px;
   font-family: 'Oswald', sans-serif;
   font-style: italic;
   letter-spacing: .2rem;
`

export const ListContainer = styled.ul`
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   width: 55vw;
`
export const Links = styled(Link)`
   font-size: 22px;
   text-transform: uppercase;
   text-decoration: none;
   color: #FFD700;
   &:hover{
         filter: brightness(1.7);
   }
`