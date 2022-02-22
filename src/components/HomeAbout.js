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
      <h1>
        NEW <br/>
        ERA
      </h1>
      <h3>
        MLB Wild Camo
      </h3>
      <Link to='/products' className="btn btn-outline-white">
        New Collection
      </Link>
      </div>
    </article>

   
  </Wrapper>
}

const Wrapper = styled.section`
  min-height: 60vh;
  display: flex;
  background-color:#D7D5CA;
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
    color:#514633;    
    flex:0 0 50%;
    height:100%;
    position:relative;
  }
  .img-container{
    flex: 0 0 50%;
  }
  
  h1{
    font-size:12rem;
  }
  @media (min-width: 992px) {
    height: calc(100vh - 5rem);
    position:relative;

    .content-wrapper{
    position: absolute;
    top: 16%;
    left:16%;
    -webkit-animation: slideUp 0.8s;
      -moz-animation: slideUp 0.8s;
      animation-delay:1.6s;
      animation: slideUp 0.8s;
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
      -webkit-animation: slideIn 0.8s;
      -moz-animation: slideIn 0.8s;
      animation: slideIn 0.8s;
       
    }

    @-webkit-keyframes slideUp {
      0% {
        transform: translateY(900px);
      }
      100% {
        transform: translateY(0);
      }
    }
    @-moz-keyframes slideUp {
      0% {
        transform: translateY(900px);
      }
      100% {
        transform: translateY(0);
      }
    }
    @keyframes slideUp {
      0% {
        transform: translateY(900px);
      }
      100% {
        transform: translateY(0);
      }
    }

    @-webkit-keyframes slideIn {
      0% {
        transform: translateX(900px);
      }
      100% {
        transform: translateX(0);
      }
    }
    @-moz-keyframes slideIn {
      0% {
        transform: translateX(900px);
      }
      100% {
        transform: translateX(0);
      }
    }
    @keyframes slideIn {
      0% {
        transform: translateX(900px);
      }
      100% {
        transform: translateX(0);
      }
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