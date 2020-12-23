import {MODAL_OPEN} from '../actionTypes';

export const ModalOpen = (modalStatus)=> dispatch =>{
    return dispatch({type:MODAL_OPEN, payload:modalStatus})
}

