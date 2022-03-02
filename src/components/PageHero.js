import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
const PageHero = ({title,product,image}) => {
  return <Wrapper>
    <div className="section-center link-wrapper">
      <h3>
        <Link to='/'>Home</Link>
        {product && <Link to='/products'>/ Products </Link>}/ {title}
      </h3>
    </div>
    <div className="hero-image">
    <img src={image} alt={title} />
    </div>
  </Wrapper>
}

const Wrapper = styled.section`
  background: var(--clr-primary-10);
  width: 100%;
  min-height: 20vh;
  display: flex;
  justify-content:center;
  align-items: center;

  .link-wrapper, .hero-image{
    flex: 0 0 50%;
  }

  color: var(--clr-primary-1);
  a {
    color: var(--clr-primary-3);
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: var(--clr-primary-1);
  }
`

export default PageHero
