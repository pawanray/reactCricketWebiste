import React,{useEffect, useState} from 'react';
import MatchCard from '../../components/matchCard'
const  LiveMatches= ({liveMatches}) => {
    return (
        <>  
        {
            liveMatches ? (<MatchCard matchInfo={liveMatches}/>) : <h5>No Data Avalible</h5>
        }
        </>
    );
}
 
export default LiveMatches