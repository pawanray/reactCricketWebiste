import React from 'react';
import Card from 'react-bootstrap/Card';

const PlayerCard = ({ player }) => {
    return (
        <>
            <Card className='mb-3 player-card text-center'>
                <Card.Body className='p-0 pt-2'>
                    <div className='img-scale'>
                        <img src={player.image_path} className='img-fluid' />
                    </div>
                    <div className='p-3'>
                        <Card.Subtitle className="my-2">{player.fullname}
                        </Card.Subtitle>
                        <Card.Text className='match-date text-muted'>
                           DOB: {player.dateofbirth}
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>

        </>
    )
}

export default PlayerCard