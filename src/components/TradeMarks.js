import React from "react";
import styled from 'styled-components'
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import firstImage from "../assets/18-icon.svg";
import secondImage from "../assets/30-icon.svg";
import thirdImage from "../assets/39-icon.svg";
import fourImage from "../assets/58-icon.svg";
import fiveImage from "../assets/95-icon.svg";
import sixImage from "../assets/97-icon.svg";
import sevenImage from "../assets/116-icon.svg";
import eightImage from "../assets/146-icon.svg";
import nineImage from "../assets/187-icon.svg";
import tenImage from "../assets/195-icon.svg";


const options = {
    margin: 30,
    responsiveClass: true,    
    autoplay: true,   
    nav: false, 
    dots:false,
    smartSpeed: 1000,
    responsive: {
        0: {
            items: 1,
        },
        400: {
            items: 1,
        },
        600: {
            items: 2,
        },
        700: {
            items: 3,
        },
        1000: {
            items: 7,
        }
}
}
const TradeMarks = () => {
  return (
      <Wrapper> 
          <div className="section-center"> 
    <OwlCarousel className="owl-theme" {...options}>
      <div className="image">
           <img src={firstImage} alt="" className="carousel-img"/>
      </div>
      <div className="image">
      <img src={secondImage} alt="" className="carousel-img"/>
      </div>
      <div className="image">
      <img src={thirdImage} alt="" className="carousel-img"/>
      </div>
      <div className="image">
      <img src={fourImage} alt="" className="carousel-img"/>
      </div>
      <div className="image">
      <img src={fiveImage} alt="" className="carousel-img"/>
      </div>
      <div className="image">
      <img src={sixImage} alt="" className="carousel-img"/>
      </div>
      <div className="image">
      <img src={sevenImage} alt="" className="carousel-img"/>
      </div>
      <div className="image">
      <img src={eightImage} alt="" className="carousel-img"/>
      </div>
      <div className="image">
      <img src={nineImage} alt="" className="carousel-img"/>
      </div>
      <div className="image">
      <img src={tenImage} alt="" className="carousel-img"/>
      </div>
    </OwlCarousel>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
    padding: 50px 0;
.image{
    width:100%;
    height:45px;
    max-height:45px
}

.owl-theme img{
    height: 100%;
    max-height:45px;
}
.owl-carousel .owl-item img{
    height: 100% !important;
    max-height:45px !important;
}
} `

export default TradeMarks;
