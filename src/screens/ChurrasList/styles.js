import Styled from 'styled-components';
import { AddCircleOutline } from 'styled-icons/material';

import styleDefaults from '../../shared/styleDefaults';

export const Container = Styled.div`
    padding: 15px 10px 15px;
    height: calc(100vh - ${styleDefaults.headerHeight});
    background-color: white;
    width:100%;
    
`;

export const ChurrasListBox = Styled.ul`
    padding:0;
    position: relative;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40vw, auto));    
`;

export const AddButtonContainer = Styled.li`
    padding: 10px 10px 0 10px;
    border-radius: 3px;
    margin: 1vh 1vw;
    display:grid;
    text-align:center;
`;

export const ColoredAdd = Styled(AddCircleOutline)`
    border-radius: 50%;
    background-color: white;
    display: block;
    margin-left: auto;
    margin-right: auto;
    width:80px;
    height:80px;
    color: ${styleDefaults.themeColor};

    &:hover{
        color: ${styleDefaults.themeColorDark};
    }
`;