import React from 'react';
import Card from 'react-bootstrap/Card';

const TeamCard = ({ team }) => {
    console.log(team, 'cr')
    return (
        <>
            <Card className='mb-3'>
                <Card.Body>
                    <div className='img-scale text-center'>
                        <img src={team.image_path} className='img-fluid' style={{maxHeight:'140px'}} />
                    </div>
                    <div className='pt-3 text-center'>
                        <Card.Title>
                            {team.name}
                        </Card.Title>
                    </div>
                </Card.Body>
            </Card>

        </>
    )
}

export default TeamCard