import {ALL_PLAYLERS, DELETE_PLAYER} from '../actionTypes';
const intialState = {
    allPlayers:[],
    bastman:[],
    bowler:[],
    wicketKeeper:[],
    allRounder:[]
}
const PlayersReducer = (state=intialState,{type,payload})=>{
    switch(type){
        case ALL_PLAYLERS:
          let bastman =  payload ? payload.filter(player=>{
                return  player.position.name === "Batsman";
            }): [];
            let bowler =  payload ? payload.filter(player=>{
                return  player.position.name === "Bowler";
            }): [];
            let wicketKeeper =  payload ? payload.filter(player=>{
                return  player.position.name === "Wicketkeeper";
            }): [];
            let allRounder =  payload ? payload.filter(player=>{
                return  player.position.name === "Allrounder";
            }): [];
            return {
                ...state,
                bastman,
                bowler,
                wicketKeeper,
                allRounder,
                allPlayers:payload
            }
            case DELETE_PLAYER:
                let playerData = JSON.parse(localStorage.getItem('playersData'))
                let deletePlayer =  playerData.filter(team=>{
                    return  team.id !== payload;
                })
                localStorage.setItem('playersData', JSON.stringify(deletePlayer))
                return{
                    ...state,
                    allTeams:playerData
                }

            default:
                return{
                    ...state
                }
    }
}

export default PlayersReducer