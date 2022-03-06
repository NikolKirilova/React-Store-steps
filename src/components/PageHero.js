import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroImage from "../assets/hero.jpg";
// import Breadcrumbs from './Breadcrumbs'
const PageHero = ({title,product}) => {
  return <Wrapper>
    <div className="category-description link-wrapper">
      <div className="category-box"> 
      <h5>
        <Link to='/'>Home</Link>
        {product && <Link to='/products'>/ Products </Link>}/ {title}
        {/* {product && <Breadcrumbs title={title} />} */}
         
      </h5>
      <div className="category-wrapper">
        <h3>
          Cap
        </h3>
        <div className="category-text">
        Cap : find the perfect cap on Headict! If you like snapbacks, fitted caps or truckers, discover a range of brands and incredible items for your head!
        </div>
        <div  > 
        <Link to='/' className="read-more-link">Read more</Link>
        </div>
      </div>
      </div>
    </div>
    <div className="hero-image">
    <img src={heroImage} alt={title} />
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  background: #917459;
  width: 100%;
  min-height: 20vh;
  display: flex;
  justify-content:center;
  color:#fff;

  .link-wrapper, .hero-image{
    flex: 0 0 50%;
  }

  .category-description{
    display: flex;
    justify-content: flex-end;
  }
  .category-box{
    width: 510px;
    h5{
      text-transform:uppercase;
      font-size: 12px;
      margin-top: 14px;
      letter-spacing: 0.3px;
    }
  }
  .category-wrapper{
    text-align: center;
    margin-top: 75px;
    padding: 0 65px;
  }
  .category-text{
    font-size: 14px;
    margin-bottom: 15px;
  }
  .read-more-link{
    position:relative;
    margin: auto;
  }
  .read-more-link::before{
    content: "";
  position: absolute;
  display: block;
  width: 100%;
  height: 1px;
  bottom: 0;
  left: 0;
  background-color: #fff;
  transform: scaleX(0);
  transition: transform 0.3s ease;
  transform-origin: top left;
  }

  .read-more-link:hover::before {
    transform: scaleX(1);
  }

  .read-more-link:hover{
    color:#fff !important;
  }

  .hero-image img{
    width:100%;
  }

  
  a {
    color: #fff;
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`

export default PageHero
