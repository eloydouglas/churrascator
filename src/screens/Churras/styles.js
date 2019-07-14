import Styled from 'styled-components';
import { People, AttachMoney } from 'styled-icons/material';

import styleDefaults from '../../shared/styleDefaults';

export const Container = Styled.div`
    padding: 15px 10px 15px;
    height: calc(100vh - ${styleDefaults.headerHeight});
    background-color: white;
    width:100%;
`;

export const InfoBox = Styled.div`
    position: relative;
    box-shadow: 2px 2px 5px 1px gray;
    padding: 10px 10px 10px 10px;
    background-color:white;
    border-radius: 3px;
    margin: 1vh 1vw;
    overflow: hidden;
`;

export const InfoContainer = Styled.div`
    margin-bottom:10px;
`;

export const LeftContainer = Styled.div`
    float:left;
`;

export const RightContainer = Styled.div`
    float:right;
`;

export const Date = Styled.h3`
    margin: 0;
    width:100%;
`;

export const Title = Styled.h2`
    margin: 0;
    margin-bottom: 30px
    width:100%;
`;

export const TotalValue = Styled.div`
`;

export const TotalInvited = Styled.div`
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

export const GuestList = Styled.ul`
    padding:0;
`