import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import { Link, useNavigate } from "react-router-dom";
import './Home.css';

const Home = () => {
    const navigate = useNavigate()

    return(
        <div className="home">
            <div className="landing-page">
                <div className="carousel-text">
                    <h1>
                    Discover the best car deals on Motar Cars
                    </h1>
                </div>
                <Carousel 
                    showArrows={true}
                    showStatus={false}
                    showThumbs={false}
                    infiniteLoop={true}
                    autoPlay={true}
                    interval={5000}
                >
                    <div>
                        <img src="/images/car1.jpg"  alt="caurosel-1"/>
                    </div>
                    <div>
                        <img src="/images/car2.jpg"  alt="caurosel-1"/>
                    </div>
                    <div>
                        <img src="/images/car3.jpeg"  alt="caurosel-1"/>
                    </div>
                    <div>
                        <img src="/images/car4.jpeg"  alt="caurosel-1"/>
                    </div>
                </Carousel>
            </div>
        </div>
    );
};

export default Home;

