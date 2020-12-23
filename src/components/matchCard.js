import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card'
import Badge from 'react-bootstrap/Badge'
import TeamLogo from '../assets/img/teamLogo.webp'
const MatchCard = ({ matchInfo }) => {
    return (
        <>
            <Card className='mb-3'>
                <Card.Body>
                    <div className="match-title divider-bottom">
                        <div className='mb-2 divider-bottom pb-2'>
                            <small className="text-muted mx-2 ">({matchInfo.type ? matchInfo.type : "ODI"})</small>
                            <span className='float-right'><Badge className={matchInfo.matchStarted ? "badge-danger" : "badge-info"}>{matchInfo.matchStarted ? "Live" : "Upcoming"}</Badge></span>
                        </div>
                        <Card.Title className='mr-1'>
                            <div className='mb-1'><img src={TeamLogo} alt='team logo' /> {matchInfo['team-1']} </div>
                            <img src={TeamLogo} alt='team logo' /> {(`${matchInfo['team-2']}`)}</Card.Title>
                    </div>
                    <Card.Subtitle className="mb-2">{matchInfo.matchStarted}</Card.Subtitle>
                    <Card.Text className='match-date text-muted'>
                        {new Date(matchInfo.date).toLocaleString()}
                    </Card.Text>
                </Card.Body>
            </Card>
        </>
    );
}

export default MatchCard;