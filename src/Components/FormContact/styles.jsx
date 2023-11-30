import styled from "styled-components";

export const FormContainer = styled.section`
   padding: 80px 4%;
`

export const FormMessage = styled.h2`
   text-align: center;
   font-size: 38px;
   font-family: 'Raleway',sans-serif;
`

export const FormContent = styled.form`
   display: flex;
   flex-direction: column;
   gap: 15px;
   max-width: 500px;
   margin: 0 auto;
   margin-top: 40px;
`

export const FormInputs = styled.input`
   background-color: #999;
   color: #FFF;
   font-size: 18px;
   width: 100%;
   border: 0;
   border-radius: 15px;
   outline: 0;
   padding: 20px 15px;

      &::placeholder{
         color: red;
      }
`

export const FormInputsTextArea = styled.textarea`
   background-color: #999;
   color: #FFF;
   font-size: 18px;
   height: 40vh;
   border: 0;
   border-radius: 15px;
   outline: 0;
   padding: 20px 15px;
   max-height: 200px;
   resize: none;

   &::placeholder{
         color: red;
   }
`

export const FormBtnSend = styled.div`
   text-align: center;
   margin-top: 10px;

   input {
      height: 50px;
      border: none;
      border-radius: 15px;
      width: 120px;
      background-color: green;
      color: #000;
      font-weight: 700;
      cursor: pointer;
   }
`



