import React,{useEffect, useState} from 'react';
import MatchesService from '../../services/matches';

const  RecentMatches= () => {
    // useEffect(()=>{
    //     MatchesService.recentMatches().then(res=>{
    //         console.log(res.data,'res')
    //     })
    // },[])
    return (  
        <h1>Recent</h1>
    );
}
 
export default RecentMatches