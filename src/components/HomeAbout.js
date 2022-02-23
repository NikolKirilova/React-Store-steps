import React from "react";
import styled from 'styled-components'
import homeAbout from '../assets/mea-theheadwearhome.jpg'
import { Link } from "react-router-dom";
const HomeAbout = () => {
    return <Wrapper className="section-full-width">

     <article className='img-container'>
      <img src={homeAbout} alt="nice table" className="main-img"/>      
    </article>    
    <article className='content'>
      <div className="content-wrapper">
        <div className="title-wrapper">
        <h1>
        THE <br/>
        HEADWEAR <br/>
        HOME
      </h1>
        </div>
    <div className="text-wrapper">

      <h2>Welcome, we are Headict </h2>
      <h3>
      !We are the reference online <br/>
       store "headwear<br/>
        addicts".Discover our history & <br/>
        our team of enthusiasts!<br/>
      </h3>
      <Link to='/products' className="btn btn-outline-red">
        Who are we?
      </Link>
    </div>
      </div>
    </article>

   
  </Wrapper>
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: flex;
  background-color:#D7D5CA;
  height:auto;
  .img-container {
    display: none;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-grey-5);
    font-size: 1rem;
  }
  .content{
    color:#ea534b;
    background-color: #e7d0b2;  
    flex:0 0 50%;
    height:100%;
    position:relative;
  }
  .img-container{
    flex: 0 0 50%;
  }
  
  h1{
    font-size: 7rem;
    -webkit-text-fill-color: transparent;
    -webkit-text-stroke: #f5554c 2px;
  }
  h3{
    letter-spacing:0.5px;
    margin-bottom: 1.2rem;
  }
  @media (min-width: 992px) {
 
    position:relative;

    .content{
      width:100%;
    }

    .content-wrapper{
    position: absolute;
    top: 7%;
    left:-13%;
    width:100%;    
     }

    .text-wrapper{
      margin-left:20%;
      margin-top:40px;
    }
  
    h1 {
      margin-bottom: 1rem;
    }
    p {
      font-size: 1.25rem;
    }
    .btn-outline-white{
      margin-top:32px;
    }
    .img-container {
      display: block;
      position: relative;      
    }
    
    .main-img {
      width: 100%;
      height: 100%;
      position: relative;
      border-radius: var(--radius);
      display: block;
      object-fit: cover;
    }
    .accent-img {
      position: absolute;
      bottom: 0;
      left: 0;
      width: 250px;
      transform: translateX(-50%);
      border-radius: var(--radius);
    }
   
  }
`
 

export default HomeAbout;