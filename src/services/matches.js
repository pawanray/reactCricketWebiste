import HTTP from "../utility/HTTP"
class MatchesService {
     recentMatches = ()=>{
         const apikey = 'RldMxvezaSQwPTH2KT8NbAhyTRK2'
      return  HTTP.get('/cricket', {params:{apikey}})
    }

    allMatches = ()=>{
        const apikey = 'RldMxvezaSQwPTH2KT8NbAhyTRK2'
     return  HTTP.get('/matches', {params:{apikey}})
   }

}

export default new MatchesService()