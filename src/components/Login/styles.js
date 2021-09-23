import styled from "styled-components";

export const Div = styled.div`
 background-color:black;
    width: 100%;
    height: 100vh;
    position: absolute;

    display: flex;
    align-items: center;
    justify-content: center;
`
export const Form = styled.form`
    background-color: #fff;
    width: 25rem;
    height: 30rem;
    border-radius: 3rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    input{
    width: 15rem;
    height: 2rem;
    margin: 10px;
    padding-left: 15px;
    font-size: 15px;
    }
    
    button{
   background-color: yellow;
   width: 10rem;
   height: 2rem;
   color:black;
   border: 1px solid black;
   margin-top: 3rem;
   font-size: 15px;
   cursor: pointer;
   }

   h1{
    color: black;
    cursor: pointer;
    }
`
