import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
const CarouselComponent = ({ carouselData }) => {
    console.log(carouselData)
    return (
        <Carousel>
            {
                carouselData.length ? carouselData.map(item => {
                    return (
                        <Carousel.Item className='img-scale'>
                            <img
                                className="d-block w-100"
                                src={item.imgUrl}
                                alt="First slide"
                            />
                            <Carousel.Caption>
                                <div className='article-title'>
                                <h4>{item.title}</h4>
                                {/* <p>{item.date}</p> */}
                                </div>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                }) : null
            }

        </Carousel>);
}


export default CarouselComponent;