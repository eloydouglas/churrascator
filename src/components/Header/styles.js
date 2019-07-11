import Styled from 'styled-components';

export const Container = Styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    position: static;
    z-index: 0;
`;

export const HeaderBox = Styled.div`
    display: flex;
    align-items: center;
	justify-content: center;
	text-align: center;
    height: 30vh;
    min-height: 200px;
    background-color: #ff6600;
    width: 100%;
`
export const TopHeaderBox = Styled.div`
    padding-bottom: 10vh;
`

export const Title = Styled.h1`
    font-size: 1.6em;
`