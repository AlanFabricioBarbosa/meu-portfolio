import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
   *, 
*:after,
*:before {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   text-decoration: none;
   list-style: none;
}

body{
   font-size: 100%;
   background: linear-gradient(196deg, rgba(2,0,36,1) 13%, rgba(34,41,47,1) 57%, rgba(34,41,47,1) 70%);
   color: #3BFA8C;
}
`