import { createGlobalStyle } from "styled-components";

export const GlobalStyled = createGlobalStyle`
   *, 
*:after,
*:before {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   text-decoration: none;
}
body{
   font-size: 100%;
   list-style-type: none;
}
`