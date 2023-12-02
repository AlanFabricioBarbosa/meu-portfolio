import styled from "styled-components";

export const SideLinksContainer = styled.nav`
   position: fixed;
   left: 0;
   top: 50%;
   transform: translateY(-50%);
   display: flex;
   flex-direction: column;
   gap: 10px;
   padding: 10px;
`;

export const SideLink = styled.a`
   text-decoration: none;
   margin-left: 40px;
   padding-left: 10px;

   &:hover {
      opacity: 0.7;
   }
`;