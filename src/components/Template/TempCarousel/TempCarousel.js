import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import TemplateData from '../TemplateData';
import './TempCarousel.css';
import TemplateCard from '../TemplateCard';

const TempCarousel = () => {
    return (
        <div>
            <Carousel>
                {
                    TemplateData.map((val, index) => {
                        return (
                            <TemplateCard key={index} imgSrc={val.imgSrc} heading={val.heading} cont={val.cont} />
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default TempCarousel;