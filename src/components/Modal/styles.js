import Styled from 'styled-components';
import { Close } from 'styled-icons/material';

import styleDefaults from '../../shared/styleDefaults';

export const Background = Styled.div`
    background-color: rgba(0,0,0,0.4);
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: 10;
`;

export const Container = Styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    display: grid;
`;

export const ContentBox = Styled.div`
    padding: 15px;
    background-color: white;
    border-radius: 3px;
    z-index: 15;
    margin: auto;
    max-height: 90%;
    max-width: 90%;
`;

export const ColoredClose = Styled(Close)`
    color: ${styleDefaults.themeColor};
    width: 30px;
    height: auto;
    position:relative;
    float: right;
    &:hover{
        color: ${styleDefaults.themeColorDark};
    }
`;

