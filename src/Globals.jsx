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
      background-color: #1B2835; 
      color: #ecf0f1;
   }
`