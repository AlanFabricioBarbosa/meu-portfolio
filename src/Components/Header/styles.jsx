import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBarWrapp = styled.nav`
   display: flex;
   justify-content: space-evenly;
   align-items: center;
   box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
   padding: 1rem 3rem;
   position: relative;

   @media(max-width:834px) {
      flex-direction: column;
      padding: 1rem;
   }
`;

export const NavLinkWrapper = styled.section`
   @media(max-width:834px){
      display: ${(props) => (props.active ? "block" : "none")};
      text-align: center;
      padding: 2rem 0;
   }
`

export const StyledNavLink = styled(NavLink)`
   color: #FFD700;
   font-size: 22px;
   font-family: 'Raleway',sans-serif;
   letter-spacing: .1rem;
   text-decoration: none;
   text-transform: uppercase;
   transition: 0.3s;
   margin-left: 2rem;

   &.${(props) => props.activeClassname}{
      color: #0FF;
      border-bottom: 1px solid #0FF;
   }

   &:hover {
      color: #0FF;
   }

   @media(max-width: 834px) {
      display: block;
      margin: 2rem auto;
   }
`

export const StyledFontAwesomeIcon = styled(FontAwesomeIcon)`
   display: none;
   position: absolute;
   right: 20px;
   top: 21px;
   font-size: 1.8rem;
   cursor: pointer;

   @media(max-width: 834px) {
      display: block;
   }
`