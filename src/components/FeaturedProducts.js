import React from 'react'
import { useProductsContext } from '../context/products_context'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Error from './Error'
import Loading from './Loading'
import Product from './Product'

const FeaturedProducts = () => {
  const {products_loading:loading,products_error:error,featured_products:featured} = useProductsContext();
  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }
   

  return <Wrapper className='section'>
      <div className="title">
        <h2>discover</h2>
        {/* <div className="underline"></div> */}
        <div className="section-center featured">
           {featured.slice(1,4).map((product) => {
             return <Product key={product.id} {...product} />
           })}
        </div>
        <Link to='/products' className='btn'>
          all products
        </Link>
      </div>
  </Wrapper>
}

const Wrapper = styled.section`
  
  .featured {
    margin: 2.5rem auto;
    display: flex;
    justify-content: center;
    img {
      height: 225px;
    }
    article{
      margin:0 20px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
    color:#212529;
    font-size: 18px;
  }
  .title h2{
    text-transform:uppercase;
    font-size: 30px;
    letter-spacing: 0.2px;
  }
  
`

export default FeaturedProducts
