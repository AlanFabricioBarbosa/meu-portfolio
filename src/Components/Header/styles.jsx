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
`

export const ListContainer = styled.ul`
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   width: 55vw;

   li {
      transition: transform 0.3s;
      &:hover{
         transform: scale(1.1);
   }
   }
`
export const Links = styled(Link)`
   font-size: 22px;
   text-transform: uppercase;
   text-decoration: none;
   font-family: 'Raleway',sans-serif;
   letter-spacing: .1rem;
   position: relative;
   color: #FFD700;

   &:hover::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 2px;
      background-color: #007bff;
      bottom: 0;
      left: 0;
   }
`