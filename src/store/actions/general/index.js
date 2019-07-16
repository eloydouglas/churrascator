export const dismissModal = () => ({
    type: 'DISMISS_MODAL',
});

export const showModal = (modalType) => ({
    type: 'SHOW_MODAL',
    modalType
});

export const removeGuest = (guest) => ({
    type: 'REMOVE_GUEST',
    guest
});