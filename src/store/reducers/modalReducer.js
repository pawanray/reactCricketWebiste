import {MODAL_OPEN} from '../actionTypes';
const intialState = {
    modalInfo:{}
}
const ModalReducer = (state=intialState,{type,payload})=>{
    switch(type){
        case MODAL_OPEN:
            return {
                ...state,
                modalInfo:payload
            }
            default:
                return{
                    ...state
                }
    }
}

export default ModalReducer