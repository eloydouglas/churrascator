import React from 'react';

import NewChurras from './NewChurras';

const ModalType = ({modalType}) => {

    const renderType = (modalType) => {
        switch(modalType){
            case 'newChurras':
                return <NewChurras/>;
            default: return 'Erro';
        }
    };

    return renderType(modalType);
}

export default ModalType;
