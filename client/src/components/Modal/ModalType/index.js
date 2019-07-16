import React from 'react';

import NewChurras from './NewChurras';
import AddGuest from './AddGuest';
import RemoveGuest from './RemoveGuest';

const ModalType = ({modalType, optParams}) => {

    const renderType = (modalType) => {
        switch(modalType){
            case 'newChurras':
                return <NewChurras/>;
            case 'addGuest':
                return <AddGuest/>;
            case 'removeGuest':
                    return <RemoveGuest guest={optParams}/>;
            default: return 'Erro';
        }
    };

    return renderType(modalType);
}

export default ModalType;
