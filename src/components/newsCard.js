import React from 'react';
import Card from 'react-bootstrap/Card';

const NewsCard = ({ news }) => {
    console.log(news, 'cr')
    return (
        <>
            <Card className='mb-3'>
                <Card.Body className='p-0'>
                    <div className='img-scale'>
                        <img src={news.imgUrl} className='img-fluid' />
                    </div>
                    <div className='p-3'>
                        <Card.Subtitle className="my-2 text-muted">{news.author}</Card.Subtitle>
                        <Card.Title>
                            {news.title}
                        </Card.Title>

                        <Card.Text className='match-date text-muted'>
                            {new Date(news.date).toLocaleString()}
                        </Card.Text>
                    </div>
                </Card.Body>
            </Card>

        </>
    )
}

export default NewsCard