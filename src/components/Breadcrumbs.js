import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
 
const Breadcrumbs = ({title,product}) => {
  return <Wrapper className="breadcrumbs-wrapper">
    <div className="section-center link-wrapper">
      <h5>
        <Link to='/'>Home</Link>
        {product && <Link to='/products'>/ Products </Link>}/ {title}
        {/* {product && <Breadcrumbs title={title} />} */}
         
      </h5>
    </div>
 
  </Wrapper>
}

const Wrapper = styled.section`
 
  width: 100%;
 
  display: flex;
  justify-content:center;
  align-items: center;

 

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

export default Breadcrumbs;
