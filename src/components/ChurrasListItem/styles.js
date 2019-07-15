import Styled from 'styled-components';
import { People, AttachMoney } from 'styled-icons/material'

import styleDefaults from '../../shared/styleDefaults';

export const Container = Styled.li`
    box-shadow: 2px 2px 5px 1px gray;
    padding: 10px 10px 0 10px;
    background-color:white;
    border-radius: 3px;
    margin: 1vh 1vw;

    &:hover{
        background-color: lightgray;
    }
`;

export const Date = Styled.h2`
    font-size:1.4em;
    margin: 0;
    width:100%;
`;

export const Title = Styled.h3`
    overflow:hidden;
    margin: 0;
    margin-bottom: 30px
    width:100%;
`;

export const TotalValue = Styled.div`
    float: right;
`;

export const TotalInvited = Styled.div`
    float:left;
`;

export const ColoredPeople = Styled(People)`
    width:16px;
    height:16px;
    color: ${styleDefaults.themeColor};
    margin-bottom:3px;
`;

export const ColoredAttachMoney = Styled(AttachMoney)`
    width:16px;
    height:16px;
    color: ${styleDefaults.themeColor};
    margin-bottom:3px;
`;