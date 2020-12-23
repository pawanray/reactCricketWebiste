import {CRICKET_NEWS} from '../actionTypes';
const intialState = {
    cricketNews:[]
}
const NewsReducer = (state=intialState,{type,payload})=>{
    switch(type){
        case CRICKET_NEWS:
            return {
                ...state,
                cricketNews:payload
            }
            default:
                return{
                    ...state
                }
    }
}

export default NewsReducer