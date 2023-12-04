import styled from 'styled-components';

export const FormContainer = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   max-width: 700px;
   margin: 30px auto;
   padding: 30px;
   box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
   border-radius: 5px;
`

export const FormMessage = styled.h1`
   margin-bottom: 20px;
`

export const FormContent = styled.form`
   display: flex;
   flex-direction: column;
   align-items: center;
   gap: 15px;
   width: 35vw;
   height: 45vh;
`

export const FormInputs = styled.input`
   color: #ECF0F1;
   background-color: #34495e;
   font-size: 22px;
   padding: 12px;
   margin-bottom: 20px;
   border-radius: 7px;
   border: transparent;
   width: 100%;
   max-width: 400px;
   outline: none;
`

export const FormInputsTextArea = styled.textarea`
   color: #ECF0F1;
   background-color: #34495e;
   font-size: 22px;
   padding: 12px;
   margin-bottom: 20px;
   border-radius: 7px;
   border: transparent;
   width: 100%;
   max-width: 400px;
   height: 15vh;
   resize: none;
   outline: none;
`

export const FormErrMessage = styled.p`
   color: #F00;
   text-align: start;
   font-size: 18px;
`

export const FormSuccessMessage = styled.p`
   color: #0F0;
   font-size: 18px;
`

export const FormBtnSend = styled.div`
   display: flex;
   justify-content: center;
`

export const FormBtnSendInput = styled.input`
   color: #2c3e50;
   padding: 15px 30px;
   border: none;
   border-radius: 15px;
   cursor: pointer;
`



