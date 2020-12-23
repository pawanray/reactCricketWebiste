import {ALL_TEAMS, DELETE_TEAM} from '../actionTypes';
const intialState = {
    allTeams:[],
    africanLeague:[],
    bigBashLeague:[],
    international:[],
    nonInternational:[]
}
const TeamReducer = (state=intialState,{type,payload})=>{
    switch(type){
        case ALL_TEAMS:
          let internationalTeam =  payload ? payload.filter(internationl=>{
                return  internationl.national_team === true;
            }): [];
            let africanLeaugeTeam =  payload ? payload.filter(african=>{
                return  african.country_id === 146;
            }): [];
            let nonInternationalTeam =  payload ? payload.filter(nonInterNationl=>{
                return  nonInterNationl.national_team === false && nonInterNationl.country_id !== 146 && nonInterNationl.country_id !== 98;
            }): [];
            let bigBashLeagueTeam =  payload ? payload.filter(bigBashLeage=>{
                return  bigBashLeage.country_id === 98;
            }): [];
            return {
                ...state,
                international:internationalTeam,
                africanLeague:africanLeaugeTeam,
                nonInternational:nonInternationalTeam,
                bigBashLeague:bigBashLeagueTeam,
                allTeams:payload
            }
            case DELETE_TEAM:
                let teamData = JSON.parse(localStorage.getItem('teamData'))
                let deleteTeam =  teamData.filter(team=>{
                    return  team.id !== payload;
                })
                localStorage.setItem('teamData', JSON.stringify(deleteTeam))
                return{
                    ...state,
                    allTeams:teamData
                }
            default:
                return{
                    ...state
                }
    }
}

export default TeamReducer