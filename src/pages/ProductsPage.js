import React from "react";
import styled from "styled-components";
import { Filters, ProductList, Sort, PageHero } from "../components";
import { useState } from "react";
import {BsFilter} from 'react-icons/bs'
import {FaWindowClose} from 'react-icons/fa'

const ProductsPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <main>
      <PageHero title="products" />
      <Wrapper className="page">
        <div className="section-center products">
          
            <div className="toggle-filter">
              <button
                onClick={() => setIsVisible(!isVisible)}
                className="show-filter-btn"
              >
                {!isVisible ? <span className="filter-btn"> <BsFilter/>Filter</span> :<span className="close-btn"><FaWindowClose/></span>}
              </button>
              {isVisible && <Filters />}
            </div>

            <Sort />

            <ProductList />
      
        </div>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.div`
  .products {
  
    margin: 4rem auto;
  }

  .toggle-filter{
    text-align:right;
    
  }
  .show-filter-btn{ 
    border-radius: 25px;
    font-weight: 600;
    padding: 0.2rem 1.6rem;
    outline: none!important;
    text-transform: capitalize;
    display: inline-block;
    border:2px solid #000;
    background-color:#fff;
    margin-bottom: 20px;

    svg{
      margin-bottom: -4px;
      margin-right: 2px;
      width: 20px;
      height: 17px;
    }
  }
  .show-filter-btn:hover{
    color:#fff;
    background-color:#000;
  }
  
  .close-btn{
    padding:0;
    border:0;
    width:40px;
    height:40px;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`;

export default ProductsPage;
