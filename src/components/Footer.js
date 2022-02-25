import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'
import logo from "../assets/logo.svg";
import { FaFacebookF,FaTwitter,FaInstagram } from "react-icons/fa";
const Footer = () => {
  return  <Wrapper className="section-full-width">
    <div className="section-center"> 
    <div className='logo-footer'> 
       <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
    </div>
    <div className="footer-wrapper">
      <div className="store-information">
        <h3>STORE INFORMATION</h3>
        <p>Monday to Friday from 9am to 12pm and from 2pm to 5pm</p>
        <p>Or <Link className='contact-form-link'>contact us </Link> <br/> online contact form</p>
        <Link className='blog-link'>Blog</Link>
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
     
      <div className='sign-up'>
        <h3>SIGN UP NOW</h3>
        <p>Receive our newsletter</p>
      <form>
      <input type="email" className='form-control' placeholder='Your email address'/>
      <button className='submit-btn' type='submit'>Ok</button>
      </form>
       
      <div className="follow-us">
       <span>  < FaFacebookF /></span>
       <span>< FaTwitter /></span>
       <span>< FaInstagram/></span>
      </div>
      </div>
    </div>
  <div className='footer-copyright'> 
    <h5>
      &copy; {new Date().getFullYear()}
      <span> Online Store</span>
    </h5>
    </div>
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
    justify-content:space-between;
  }
  .footer-wrapper>div{
    flex:0 0 33%;
    text-align:left;
  }
  .footer-wrapper>div:last-child{
    flex:0 0 23%;
  }
  .store-information p{
    padding-right: 20px;
    letter-spacing: 0.3px;
    font-size:14px;
  }
  .store-information a{
    color:#fff;
  }
  span {
    color: var(--clr-primary-5);
  }
  h3{
    font-size:16px;
    padding-bottom: 20px;
  }
  h5 {
    color: var(--clr-white);
    margin: 0.1rem;

    font-weight: 400;
    text-transform: none;
    line-height: 1.25;
  }

  .contact-form-link{
    text-decoration:underline;
  }
  .information{
    display:flex;
    flex-direction:column;
  }
  .information a{
    color:#fff;
    font-weight:600;
    padding-bottom: 6px;
  }
  .logo-footer{
    padding: 30px 0 50px 0;
  }

  .footer-copyright{
    padding:50px 0;
  }

  .footer-copyright h5{
    font-size: 14px;
    letter-spacing: 1px;
  }
  ::placeholder{
    letter-spacing: 0.3px;
    font-size:13px;
  }

  .form-control{
    font-size: .9rem;
    padding: 14px;
    border-radius: 25px;
    width: 158px;
    height: 38px;
    border: none;
  }
  .submit-btn{
    font-size: 13px;
    font-weight:600;
    padding: 0px 18px;
    border-radius: 25px;
    height: 38px;
    margin-left: 12px;
    border: none;
    color: #fff;
    background-color: #f5554c;
    border-color: #f5554c;
  }
  .sign-up h3{
    margin-bottom:0;
  }
  .sign-up p{
    font-size:14px;
  }
  .sign-up form{
    margin:12px 0;
  }
  .follow-us span{
    font-size:24px;
    margin-right:12px;
    color: #f5554c;
  }
  @media (min-width: 776px) {
    flex-direction: row;
  }
`

export default Footer
