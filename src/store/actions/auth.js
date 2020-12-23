import {REGISTER, LOGIN} from '../actionTypes';

export const Login = (value)=> dispatch=>{
    return dispatch({type:LOGIN,payload:value})
}

export const Register = (value)=> dispatch=>{
    return dispatch({type:REGISTER,payload:value})
}