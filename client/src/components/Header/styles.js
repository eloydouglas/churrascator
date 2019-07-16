import Styled from 'styled-components';
import styleDefaults from '../../shared/styleDefaults';

export const Container = Styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
`;

export const HeaderBoxContainer = Styled.div`
    position: absolute;
    display: flex;
    align-items: bottom;
    justify-content: center;
    text-align: center;
    height: ${styleDefaults.headerBackgroundHeight} ;
    background-color: ${styleDefaults.themeColor};
    width: 100%;
    z-index: 0;
`

export const HeaderBox = Styled.div`
    padding-top: 5vh;
    position: relative;
    height: ${styleDefaults.headerHeight};
`

export const Title = Styled.h1`
    font-size: 1.6em;
`