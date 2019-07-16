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
    width: ${props => props.width || '80vw'};
    border: 1px solid gray;
    border-radius: 4px;
    padding: 5px;
    &:focus{
        border-color: black;
    }
`;

export const Checkbox = Styled.input`
    margin-top: 5px;
    height: 25px;
    width: 25px;
    border: 1px solid gray;
    border-radius: 50%;
    padding: 5px;
    float:left;
    &:focus{
        border-color: black;
    }
`;

export const SubmitButton = Styled.button`
    clear:both;
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