import React from 'react';
import HeadLogo from '../PageComponents/HeadLogo';
import NavBar from '../PageComponents/NavBar';
import { connect } from 'react-redux'; 
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


let HomePage = (props) => 
    <div className="pageLayout">
        <NavBar />
        <Carousel autoPlay={true} stopOnHover={false} showThumbs={false} showIndicators={false} showStatus={false} showArrows={false} infiniteLoop={true}>
            <div className="caroSlide">
                <img className="caroImg" src="./images/slides/board.jpg"></img>
            </div>
            <div className="caroSlide">
                <img className="caroImg" src="./images/slides/climb.jpg"></img>
            </div>
            <div className="caroSlide">
                <img className="caroImg" src="./images/slides/plan.jpg"></img>
            </div>
            <div className="caroSlide">
                <img className="caroImg" src="./images/slides/scrabble.jpg"></img>
            </div>
        </Carousel>
        <HeadLogo />
        <Link to="/about"><button className='homeBtn'>Click to Learn More</button></Link>
    </div>


let HomePageSmart = connect(state => ({user: state.user}))(HomePage);
export default HomePageSmart;