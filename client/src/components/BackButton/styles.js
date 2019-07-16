import Styled from 'styled-components';

export const Container = Styled.div`
    position: absolute;
    left: 0;
    bottom:0;
`;

export const Button = Styled.button`
    margin: 0 0 20px 20px
    background-color: rgb(0,0,0,0.3);
    width: 90px;
    height: 30px;
    color: white;
    text-shadow: white;
    border: none;
    border-radius: 12px;

    &:hover{
        background-color:black;
    }
`;