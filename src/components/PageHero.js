import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import heroImage from "../assets/hero.jpg";
// import Breadcrumbs from './Breadcrumbs'
const PageHero = ({title,product}) => {
  return <Wrapper>
    <div className="section-center link-wrapper">
      <h3>
        <Link to='/'>Home</Link>
        {product && <Link to='/products'>/ Products </Link>}/ {title}
        {/* {product && <Breadcrumbs title={title} />} */}
         
      </h3>
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
  align-items: center;
  color:#fff;

  .link-wrapper, .hero-image{
    flex: 0 0 50%;
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
