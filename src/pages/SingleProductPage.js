import React, { useEffect } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import {
  Loading,
  Error,
  ProductImages,
  AddToCart,
  Stars,
  PageHero,
  Breadcrumbs,
  FeaturedProducts
} from '../components'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const SingleProductPage = () => {
  const {id} = useParams();
  const history = useHistory();
  const {
    single_product_loading:loading, 
    single_product_error:error, 
    single_product:product, 
    fetchSingleProduct
  } = useProductsContext()

  useEffect(() => {
    fetchSingleProduct(`${url}${id}`);
    // console.log(product);

  },[id])

  useEffect(() => {
    if(error){
      // setTimeout(() => {
      //   history.push('/')
      // },3000)
      console.log(error)
    }
  },[error])

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <Error />
  }

  const {name,price,description, stock,stars,reviews,id:sku,company,images} = product;
  
  return <Wrapper>
 
    <div className="section-full-width page">
      {/* <Link to="/products" className='btn'>
        back to products
      </Link> */}
      <div className="product-center">
        <div className="single-product-image">
        <Breadcrumbs title={name} product/>
        <ProductImages images={images}/>   
        </div>
         
          
        <div className="content product-info">
          <h3>{name}</h3>
          <p className="info">
            {company}
          </p>
          <div className="size-box">
          <p>One size fit all</p>
          <p>Headsize 55-60cm</p>
          </div>
           
          <h3 className="price">{formatPrice(price)}</h3>
          <p className="info">
            <span>Available :</span>
            {stock > 0 ? 'In stock' : 'out of stock'}
          </p>
          <p className="info">
            <span>SKU :</span>
            {sku}
          </p>
          {/* <p className="info">
            <span>Brand :</span>
            {company}
          </p> */}
          {/* <hr /> */}
          {stock > 0 && <AddToCart product={product}/>}

          <p className="desc">{description}</p>

          <Stars stars={stars} reviews={reviews}/>
        </div>
        <div className="content product-info"></div>
      </div>
        <FeaturedProducts/>
    </div>
  </Wrapper>
}

const Wrapper = styled.main`
  .product-center {
    display: flex;
    justify-content:center;
    
  }
  .product-info{
    flex:0 0 25%;
    max-width:25%;
    padding-left:40px;
    padding-top:35px;
  }
  .single-product-image{
    position:relative;
    flex:0 0 50%;
    max-width:50%;
  }
  .breadcrumbs-wrapper{
    position:absolute;
    right:0;
  }
  .price {
    color: #000;
    padding-top: 30px;
    font-weight: 700;
    font-size: 26px !important;
  }
  .desc {
    line-height: 2;
    max-width: 45em;
    margin: 30px auto;
    line-height: 22px;
    font-size: 14px;
  }

  .size-box{
    font-size:14px;
  }
  .size-box p:nth-child(1){
    font-weight:bold;
  }
 
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    padding-bottom: 20px;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  h3{
    font-size: 28px;
    font-weight: 900;
    letter-spacing: 0.2px;
  }

  @media (min-width: 992px) {
  
    .price {
      font-size: 1.25rem;
    }
    .link-wrapper{
      display:flex;
      justify-content:flex-end;
    }
  }
`

export default SingleProductPage
