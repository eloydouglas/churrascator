import React from 'react';
import {connect} from 'react-redux';

import {dismissModal} from '../../store/actions/general';
import * as Styled from './styles';


const mapDispatchToProps = dispatch => ({
    dismiss: () => dispatch(dismissModal())
});

const Modal = ({ dismiss }) => {

    const handleClick = ()=>{
        dismiss();
    };

    return (
        <Styled.Background onClick={()=>handleClick()}>
        </Styled.Background>
    );
};

export default connect(null, mapDispatchToProps)(Modal);
