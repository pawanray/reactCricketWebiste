import TeamsService from '../../services/teams';
import {allTeamsData} from '../../store/data/team';

import { ALL_TEAMS, DELETE_TEAM } from '../actionTypes';
export const getAllTeams = () => dispath =>{
    localStorage.getItem('teamData') ? localStorage.getItem('teamData') : localStorage.setItem('teamData',JSON.stringify(allTeamsData));
    let getTeamData = JSON.parse(localStorage.getItem('teamData'));

      return  dispath({type:ALL_TEAMS, payload:getTeamData})
    // return TeamsService.allTeams().then(res=>{
    //     dispath({type:ALL_TEAMS, payload:res.data})
    // }).catch(err=>console.log(err))
}

export const deleteTeam = (id) => dispath =>{ 
  return  dispath({type:DELETE_TEAM, payload:id})
}

