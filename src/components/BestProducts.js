import React from 'react' 
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import firstProduct from '../assets/first-product.jpg'
import secondProduct from '../assets/second-product.jpg'
import { BsArrowRight,BsArrowLeft } from 'react-icons/bs'


const BestProducts = () => {
    return <Wrapper className="section-full-width">
        <div className="section-center"> 
      <article className='first-product'>        
        
        <Link to='/products' className=" ">
        <img src={firstProduct} alt="nice table" className="main-img"/>
        <div className='first-product-title'>
        <span  >BARTS </span><br />
        <span className='arrow-right'>  <BsArrowRight/> </span>
        </div>
        </Link>
        
      </article>
  
      <article className='second-product'>
      <Link to='/products' className=" ">
        <img src={secondProduct} alt="nice table" className="main-img"/>
        <div className='second-product-title'>
        <span  >BRIXTON </span><br />
        <span className='arrow-left'>  <BsArrowLeft/> </span>
        </div>
         
        </Link>
         
  
      </article>
      </div>
    </Wrapper>
  }
  
  const Wrapper = styled.section`       
    background-color:#f7f7f7;

    .section-center {
        display: flex;
        justify-content: center;
    }

    article {
        flex:0 0 50%;
    }
    img {
        width: 100%;
    }
    .first-product {
        padding: 45px 7px 0px 0px;
        position: relative;
    }
    .second-product {
        padding: 140px 0px 45px 7px;
        position: relative;

    }
    .first-product-title{
        position:absolute;
        left: -26px;
        font-size: 28px;
        font-weight: 600;
        top: 68px;
        color:#000;
        transition: transform 400ms;
    }
    .second-product-title{
        position:absolute;
        right: -26px;
        font-size: 28px;
        font-weight: 600;
        bottom: 68px;
        color:#000;
        transition: transform 400ms;
    }
    .arrow-right,.arrow-left{
        font-size: 60px;        
    }
    .first-product:hover .first-product-title{
        transform:translateX(10px)
    }
    .second-product:hover .second-product-title{
        transform:translateX(-10px)
    }
    
    
     
 `

 export default BestProducts;