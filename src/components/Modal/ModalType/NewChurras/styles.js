import Styled from "styled-components";

export const Container = Styled.div`
    
    margin-top: 15px;
    clear: center;
`;

export const Title = Styled.h3`
    margin:0;
`;

export const InputContainer = Styled.div`
    margin: 10px 0 10px 0;
`;

export const Label = Styled.label`
    display: block;
`;
export const Input = Styled.input`
    margin-top: 5px;
    height: 30px;
    width: 80vw;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 5px;
    &:focus{
        border-color: black;
    }
`;

export const Date = Styled.input`
    margin-top: 5px;
    height: 30px;
    width: 150px;
    border: 1px solid gray;
    border-radius: 4px;
    padding: 5px;
    &:focus{
        border-color: black;
    }
`;

export const TextArea = Styled.textarea`
    border: 1px solid gray;
    border-radius: 4px;
    margin-top: 5px;
    max-width: 70vw;
    max-height: 60vh;
    min-width: 80vw;
    min-height: 80px;
    &:focus{
        border-color: black;
    }
`;

export const SubmitButton = Styled.button`
    background-color: black;
    width: 120px;
    height: 30px;
    color: white;
    text-shadow: white;
    border: none;
    border-radius: 12px;
    float:right;

    &:hover{
        background-color:#333333;
    }
`;