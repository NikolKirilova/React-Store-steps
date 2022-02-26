import React from "react";
import styled from "styled-components";
import blogImage from "../assets/mea-mag.jpg";
import { Link } from "react-router-dom";
import { BsArrowRight} from "react-icons/bs";

const HomeBlog = () => {
  return (
    <Wrapper className="section-full-width">
      <div className="section-center">
        <article className="blog-intro">
          <span>NEED INSPIRATION ??</span>
          <h2 className="blog-title">
            Find all the headwear news on  </h2>
            <Link to="/products" className="blog-link">
              Headict magazine ! 
          <div className="arrow-right">
            <BsArrowRight />
          </div>
            </Link> 
          
        </article>

        <article className="blog-image">
          <Link to="/products" className=" ">
            <img src={blogImage} alt="nice table" className="main-img" />
          </Link>
        </article>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
margin-top:90px;
  .section-center {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .blog-intro {
    flex: 0 0 43%;
    margin-right:-30px;
    position: relative;
    z-index: 2;
  }
  .blog-intro span {
    font-size: 13px;
    font-weight: 600;
  }
  .blog-intro h2 {
    font-size: 42px;
    font-weight: 600;
    line-height: 1.1;
    margin-bottom:0;
  }
  .blog-link {
    text-decoration: underline;
    font-size:42px;
    font-weight:600;
    color:#000;
    line-height:1.2;
    text-underline-offset: 8px;
    text-decoration-thickness: 3px;
  }
  .blog-link:hover .arrow-right{
      transform:translateX(10px);
  }
  .arrow-right{
      font-size: 58px;
      line-height:0;
  }
  .blog-image {
    flex: 0 0 41%;
  }
  .blog-title {
    margin-top: 25px;
  }
  img {
    width: 100%;
    // height: 45px;
    // max-height: 45px;
  }
`;

export default HomeBlog;
