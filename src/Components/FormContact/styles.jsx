import styled from "styled-components";

export const FormContainer = styled.section`
   display: flex;
   justify-content: center;
   align-items: center;
   width: 25%;
   height: 100%;
   border: 1px solid red
`

export const FormContent = styled.form`
   display: flex;
   flex-direction: column;
   justify-content: center;
   height: 95%;
   width: 75%;
   border: 1px solid red;

   div {
      display: flex;
      flex-direction: column;
   }
`
