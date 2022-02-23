import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import logo from "../assets/logo.svg";
const Footer = () => {
  return  <Wrapper className="section-full-width">
    <div className="section-center"> 
    <div> 
       <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
    </div>
    <div className="footer-wrapper">
      <div className="store-information">
        <h3>STORE INFORMATION</h3>
        <p>Monday to Friday from 9am to 12pm and from 2pm to 5pm</p>
        <p>Or <Link>contact us </Link>online contact form</p>
        <Link>Blog</Link>
      </div>
      <div className="information">
        <h3>INFORMATION</h3>
        <Link>DELIVERY</Link>
        <Link>LEGAL NOTICE</Link>
        <Link>TERMS AND CONDITIONS OF USE</Link>
        <Link>ABOUT US</Link>
        <Link>SECURE PAYMENT</Link>
        <Link>EASY RETURNS AND EXCHANGE</Link>
        <Link>ARCHIVE</Link>
      </div>
      <div className="country">
        <h3> COUNTRY </h3></div>
      <div className='sign-up'>
        <h3>SIGN UP NOW</h3>
        <p>Receive our newsletter</p>
      <span><input type="email" /></span>
      <span>Ok</span>
      <div className="follow-us">
        <span>facebook</span>
        <span>twitter</span>
        <span>instagram</span>
      </div>
      </div>
    </div>

    <h5>
      &copy; {new Date().getFullYear()}
      <span> Online Store</span>
    </h5>
    <h5>All rights reserved</h5>
    </div>
  </Wrapper>
}

const Wrapper = styled.footer`
  height: auto;
  // display: flex;
  // flex-direction: column;
  // justify-content: center;
  // align-items: center;
  background: var(--clr-black);
  text-align: center;
  color:#fff;
  .footer-wrapper{
    display:flex;
  }
  .footer-wrapper>div{
    flex:0 0 25%;
    text-align:left;
  }
  .footer-wrapper>div:not(:last-child){
    margin-right:25px;
  }
  .store-information p{
    padding-right: 20px;
  }
  .store-information a{
    color:#fff;
  }
  span {
    color: var(--clr-primary-5);
  }
  h3{
    font-size:16px;
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }
  .information{
    display:flex;
    flex-direction:column;
  }
  .information a{
    color:#fff;
    font-weight:600;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer
