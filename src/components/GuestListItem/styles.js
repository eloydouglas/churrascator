import Styled from 'styled-components';
import { Delete } from 'styled-icons/material';


import styleDefaults from '../../shared/styleDefaults';

export const Container = Styled.li`
    margin: 15px 0 15px 0;
    clear:both;
    list-style: none;
    overflow: hidden;
`;

export const Name = Styled.div`
    float:left;
`;

export const Value = Styled.div`
    float:right;
`;

export const ColoredDelete = Styled(Delete)`
    float:right;
    width: 20px;
    color: ${styleDefaults.themeColor};
    margin-left:10px;

    &:hover{
        color: ${styleDefaults.themeColorDark};
    }
`;