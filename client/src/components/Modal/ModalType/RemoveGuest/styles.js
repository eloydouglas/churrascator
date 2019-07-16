import Styled from "styled-components";

export const Container = Styled.div`
    
    margin-top: 15px;
`;

export const Title = Styled.h3`
    margin-bottom:10px;
`;

export const TextContainer = Styled.div`
    margin-bottom: 20px;
    width: 70vw;
    max-width: 300px;
`;

export const DeleteButton = Styled.button`
    
    background-color: #b30018;
    width: 90px;
    height: 30px;
    color: white;
    text-shadow: white;
    border: none;
    border-radius: 12px;
    float:right;

    &:hover{
        background-color:#69000e;
    }
`;

export const CancelButton = Styled.button`
    background-color: black;
    width: 90px;
    height: 30px;
    color: white;
    text-shadow: white;
    border: none;
    border-radius: 12px;
    float:left;

    &:hover{
        background-color:#333333;
    }
`;