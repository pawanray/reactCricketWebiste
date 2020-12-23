import {AllPlayersData} from '../../store/data/players';

import { ALL_PLAYLERS, DELETE_PLAYER } from '../actionTypes';
export const getAllPlaylers = () => dispath =>{ 
      localStorage.getItem('playersData') ? localStorage.getItem('playersData') : localStorage.setItem('playersData',JSON.stringify(AllPlayersData));
    let getPlayersData = JSON.parse(localStorage.getItem('playersData'));
      return  dispath({type:ALL_PLAYLERS, payload:getPlayersData})
}

export const deletePlayer = (id) => dispath =>{ 
      return  dispath({type:DELETE_PLAYER, payload:id})
}