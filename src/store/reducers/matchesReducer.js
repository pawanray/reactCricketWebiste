import {UPCOMMING_MATCHES, LIVE_MATCHES, RECENT_MATCHES, ALL_MATCHES} from '../actionTypes';
const intialState = {
    upcomingMatch:[],
    liveMatch:[],
    recentMatch:[],
    testMatch:[],
    twentyMatch:[]
}
const matchesReducer = (state=intialState,{type,payload})=>{
    switch(type){
        case ALL_MATCHES:
           const liveMatches = payload.matches.filter(match=>{
                return match.matchStarted === true
            })
            const upcomingMatches = payload.matches.filter(match=>{
                return match.matchStarted === false
            })
            const twentyMatches = payload.matches.filter(match=>{
                return match.type === "Twenty20"
            })
            const testMatches = payload.matches.filter(match=>{
                return match.type === "Test"
            })
            return{
                ...state,
                liveMatch:liveMatches,
                upcomingMatch:upcomingMatches,
                twentyMatch:twentyMatches,
                testMatch:testMatches,
            }
       
            case RECENT_MATCHES:
            return{
                ...state,
                recentMatch:payload
            }
            default:
                return{
                    ...state
                }
            
    }
}
export default matchesReducer