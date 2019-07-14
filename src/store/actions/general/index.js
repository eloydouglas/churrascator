export const dismissModal = () => ({
    type: 'DISMISS_MODAL',
});

export const showModal = (modalType) => ({
    type: 'SHOW_MODAL',
    modalType
});