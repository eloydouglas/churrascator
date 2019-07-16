import Styled from 'styled-components';
import styleDefaults from '../../shared/styleDefaults';

export const Container = Styled.div`
    padding: 15px 10px 15px;
    display: flex;
    justify-content: center;
    width: 100%;
    height: calc(100vh - ${styleDefaults.headerHeight});
    background-color: ${styleDefaults.themeColor};
`;

export const LoginFormBox = Styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: transparent;
    width: 70vw;
    height: 40vh;
    z-index: 4;
`;