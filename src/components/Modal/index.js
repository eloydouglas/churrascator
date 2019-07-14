import React from 'react';
import {connect} from 'react-redux';

import {dismissModal} from '../../store/actions/general';
import * as Styled from './styles';

import ModalType from './ModalType';

const mapStateToProps = state => ({
    modalType: state.general.modalType
});

const mapDispatchToProps = dispatch => ({
    dismiss: () => dispatch(dismissModal())
});

const Modal = ({ modalType, dismiss }) => {

    return (
        <React.Fragment>
            <Styled.Background onClick={()=>dismiss()}/>
            <Styled.Container>
                <Styled.ContentBox>
                    <Styled.ColoredClose onClick={()=>dismiss()}/>
                    <ModalType modalType={modalType}/>
                </Styled.ContentBox>
            </Styled.Container>
        </React.Fragment>
    );
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
