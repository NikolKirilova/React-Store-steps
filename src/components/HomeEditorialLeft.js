import React from "react";
import styled from "styled-components";
import blogImage from "../assets/alfonso_374e78.jpg";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";

const HomeEditorialLeft = () => {
  return (
    <Wrapper className="section-center"> 
     <div className="link-wrapper  ">
          <div className="inner-link-wrapper sticky-top"> 
          <div className="text-container">
              <div className="text-container-wrapper">BLOG</div>
              <h4>New Era Camo Pack Collection</h4>
              <div className="read-article-link">               
              <Link to="/products" className="text-container-link"> 
               Read the article 
              <span className="arrow-right">
                <BsArrowRight />
              </span>
              </Link>
              </div>
          </div>
          <div className="image-container">
          <img src={blogImage} alt="smile person" className="main-img" />
          </div>
          </div>
      </div>     
      <div className="text-wrapper">
        <h4>HAT, BEANIE, CAP...YOUR HEADWEAR SHOP </h4>
        <p>
          In our shop You will find the best of head wear, a great selection of
          caps, hats, beanies and berets of nearly 100 brands, from the best
          known and the most legendary to the most underground. We want to offer
          you the best.{" "}
        </p>
        <h4>Vast choice of caps.</h4>
        <p>
          More than 1500 models of caps, for all kinds of style. Whether you are
          just looking for an original cap or you are a true addict, obsessed
          with caps, we'll try to offer the widest range of the best brands (New
          Era, Two Face, Brixton, Obey, Huf ...) and the best models, from old
          school to the trendiest (snapback, fitted, trucker, five panel, six
          panel ...) so that everyone can find the perfect cap. At least we hope
          so.{" "}
        </p>
        <h4>Excellent selection of classy hats. </h4>
        <p>
          For the hat lovers and everyone who shares our belief in that a
          beautiful hat can sublime any outfit, either casual or chic, we
          selected the best hats, felt and straw. Quality, design, materials,
          all criteria were scrutinized. Legendary and authentic brands such as
          Stetson hats, Goorin Bros or Fléchet, classic or casual shape like
          fedora or trilby. Headict offers choice, quality and style.{" "}
        </p>
        <h4>Beanies for any style. </h4>
        <p>
          Headict offers more than 1,000 beanies! Because for us choosing a
          beanie is not a trivial matter: a beanie is not necessarily an
          unaesthetic winter accessory that messes up your hair. There is a
          dozen of different shapes and styles. At Headict we take the process
          of picking a beanie very seriously! Therefore we offer you all kinds
          of colors and shades, materials, pompons and patterns, from nearly 40
          brands including Barts, Nobis, Coal, New Era, Picture ....
        </p>
      </div>
      
    </Wrapper>
  );
};
const Wrapper = styled.section`
    display:flex; 
    margin-top:60px;
    .text-wrapper{
        flex: 0 0 50%;
    }
    h4 {
        font-size:18px;
    }
    .text-wrapper p{
        font-size: 14px;
        margin-bottom: 20px;
    }
    .link-wrapper{
        flex:0 0 50%;
    }
    .inner-link-wrapper{
        display:flex;

    }
    .sticky-top{
        position:sticky;
        top:30px;
        z-index:1;
    }
    .text-container{
        flex:0 0 50%;
        background-color:#374E78;
        color:#fff;
        height:168px;
        padding:24px 16px;
    }
    .text-container-link{
        font-weight: 600;
        position:relative;
        color:#fff;
    }
    .read-article-link{
        width:128px;
    }
    .read-article-link:hover{
        border-bottom:1px solid #fff;
    }
    .arrow-right{
        position:absolute;
        top: 3px;
    }
    .arrow-right svg{
        margin-left:3px;
    }
    .image-container{
        flex:0 0 50%;
    }
    .image-container img{
        width:100%;
    }
    `
export default HomeEditorialLeft;
