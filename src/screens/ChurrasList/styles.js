import Styled from 'styled-components';
import styleDefaults from '../../shared/styleDefaults';

export const Container = Styled.div`
    padding: 15px 10px 15px;
    height: calc(100vh - ${styleDefaults.headerHeight});
    background-color: white;
    width:100%;
    
`;

export const ChurrasListBox = Styled.div`
    position: relative;
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40vw, auto));    
    `;