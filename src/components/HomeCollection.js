import React from "react";
import styled from "styled-components";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import {Link} from 'react-router-dom';
import secondImage from "../assets/goal.jpg";
import thirdImage from "../assets/curve-amour02.jpg";
import fourImage from "../assets/mea-headict-collection-03.jpg";
import fiveImage from "../assets/parquetflottant.jpg";
 
const options = {
    margin: 15,
    responsiveClass: true,    
    autoplay: false,   
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
            items: 4,
        }
}
}

const HomeCollection = () => {
  return (
    <Wrapper className="section-full-width">
      <div className="section section-center">
        <h1>
          Headict <br />
          Collection
        </h1>
      </div>
      <div className="collection-wrapper">
      <OwlCarousel className="owl-theme" {...options}>
      <div className="description-carousel">
           <h4 className="title">Exclusive products</h4>
           <p className="description">Inspired by the street,music,culture... and people around us, the Headict Collections offer original creations in exclusive and limited editions.</p>
           <Link to='/products' className="btn btn-outline-white">
        Discover
      </Link>
      </div>
      <div className="product-wrapper"> 
      <div className="image">
      <img src={secondImage} alt="" className="carousel-img"/>
      </div>
      <a href="#" className="product-title">Trucker Le Gaulois</a>
      <div className="product-price">$22.17</div>
      </div>
      <div className="product-wrapper">
      <div className="image">
      <img src={thirdImage} alt="" className="carousel-img"/>
      </div>
      <a href="#" className="product-title">Broderie en rouge casquette </a>
      <div className="product-price"> $22.17</div>
      </div>
      <div className="product-wrapper">
      <div className="image">
      <img src={fourImage} alt="" className="carousel-img"/>
      </div>
      <a href="#" className="product-title">El Profesor </a>
      <div className="product-price">$22.17 </div>
      </div>
      <div className="product-wrapper">
      <div className="image">
      <img src={fiveImage} alt="" className="carousel-img"/>
      </div>
      <a href="#" className="product-title">Docker Ocean Legend black </a>
      <div className="product-price">$35.52 </div>
      </div>  
    
    </OwlCarousel>
          </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section {
    padding: 3rem 0;
    position:relative;
    z-index:2;
  }
  .collection-wrapper{
    width: 80%;
    margin: auto;
    margin-right: 0;
    margin-top:-100px;
  }
  h1 {
    font-size: 9rem;
    line-height: 7.5rem;
  }
  a {
      color:#000;
      font-weight:600;
  }
  .description-carousel{
      padding-top:100px;
      .title{
          text-align:left;
      }
      .description{
        font-size: 13px;
        line-height: 20px;
        margin-bottom: 40px;
      }
  }

  .product-wrapper img {
    -webkit-transform: scale(1);
    transform: scale(1);
    -webkit-transition: .3s ease-in-out;
    transition: .3s ease-in-out;
    width:100%;
    height:100%;
    object-fit:cover;
    
  }
  .product-wrapper:hover img {
    -webkit-transform: scale(1.2);
    transform: scale(1.2);
  }
  .image{
      overflow:hidden;
      margin-bottom: 18px;
  }
  .product-price{
      margin:5px 0;
      font-weight:600;
  }
  @media screen and (min-width: 992px) {
    .section-center {
      width: 920px;
    }
  }
`;
export default HomeCollection;
