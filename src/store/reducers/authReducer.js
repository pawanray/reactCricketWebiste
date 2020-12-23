import {REGISTER, LOGIN} from '../../store/actionTypes';
const intitalState = {
    login:{},
    register:[]
}
const AuthReducer = (state=intitalState,{type,payload})=>{
    switch(type){
        case LOGIN:
           localStorage.setItem('login',JSON.stringify(payload));
            return {
                ...state,
                login:payload
            }
            case REGISTER:
                localStorage.setItem('register',JSON.stringify([...state.register,payload]))
            return {
                ...state,
                register:[...state.register,payload]
            }
            default:
            return{    
                ...state
            }
        
    }
}



export default AuthReducer