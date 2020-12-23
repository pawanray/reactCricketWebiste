import React,{useEffect, useState} from 'react';
import MatchesService from '../../services/matches';
import MatchCard from '../../components/matchCard'
import {useDispatch, useSelector} from 'react-redux'
import { getAllMatches } from '../../store/actions/matches';
const  UpComingMatches= ({upcomingMatches}) => {
    
    return (
        <>  
        {
            upcomingMatches ? (<MatchCard matchInfo={upcomingMatches}/>) : <h5>No Data Avalible</h5>
        }
        </>
    );
}
 
export default UpComingMatches