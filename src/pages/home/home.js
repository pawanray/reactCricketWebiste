import React, { useState, useEffect } from 'react';
import CarouselComponent from '../../components/carousel';
import CricketImg1 from '../../assets/img/cicket1.webp'
import CricketImg2 from '../../assets/img/cicket2.webp'

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Spinner from 'react-bootstrap/Spinner';


import { useDispatch, useSelector } from 'react-redux'
import { getAllMatches } from '../../store/actions/matches';
import { getCricketNews } from '../../store/actions/news';
import NewsCard from '../../components/newsCard';
import MatchCard from '../../components/matchCard';
const Home = () => {
    const { upcomingMatch, liveMatch } = useSelector(state => state.matches);
    const { cricketNews } = useSelector(state => state.news);

    //const liveMatches = useSelector(state=>state.liveMatch);
    console.log(upcomingMatch, "up")
    const dispatch = useDispatch();
    const [carouselData] = useState([
        {
            imgUrl: CricketImg1,
            title: "Ind vs Aus: We are ready with our plans to face any situation, says Kohli",
            //date:new Date()
        },
        {
            imgUrl: CricketImg2,
            title: "India vs Australia: Prithvi Shaw to open with Mayank Agarwal as visitors reveal XI for opening Test",
            //date:new Date()
        }
    ])
    const [key, setKey] = useState('live');

    useEffect(() => {
        dispatch(getAllMatches())
        dispatch(getCricketNews())

    }, [])

    return (
        <>
           
                <Row className="mt-3">
                    <Col sm={4} className='tabs'>
                        <Tabs defaultActiveKey="live" id="uncontrolled-tab-example">
                            <Tab eventKey="live" title="Live">
                            <Spinner animation="border" variant="primary" />
                            {
                            liveMatch.length ? liveMatch.map(match => {
                                return <MatchCard matchInfo={match}/>
                            }) : <h5>Please wait Lodding....</h5>
                        }
                            </Tab>
                            <Tab eventKey="recent" title="Recent">
                            {/* <RecentMatches upcomingMatches={upcomingMatches}/> */}
                            </Tab>
                            <Tab eventKey="upcoming" title="Upcoming">
                                {
                                    upcomingMatch.length ? upcomingMatch.map(match => {
                                        return <MatchCard matchInfo={match}/>
                                    }) : <h5>Please wait Lodding....</h5>
                                }
                            </Tab>
                        </Tabs>
                    </Col>
                    <Col>
                        <CarouselComponent carouselData={carouselData} />
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col>
                        <h4>Recommended For You</h4>
                    </Col>
                </Row>
                <Row className="mt-4">
                    {
                        cricketNews.length ? cricketNews.map(data => {
                           return <Col sm={3}><NewsCard news={data} /></Col>
                        }) : null
                    }

                </Row>

            
        </>
    );
}

export default Home;