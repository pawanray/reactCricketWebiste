import {ALL_MATCHES} from '../actionTypes'
import MatchesService from '../../services/matches';
export const getAllMatches = () => dispatch =>{
    return MatchesService.allMatches().then(res=>{
         dispatch({type:ALL_MATCHES, payload:res.data});
         return [true,false]
    }).catch(err=>console.log(err))
}