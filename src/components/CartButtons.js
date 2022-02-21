import React, { useContext } from "react";
import { FaShoppingCart, FaUserMinus, FaRegUser } from "react-icons/fa";
import { HiOutlineUser } from "react-icons/hi";
import { BiUser, BiShoppingBag, BiSearch } from "react-icons/bi";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { useProductsContext } from "../context/products_context";
import { useCartContext } from "../context/cart_context";
import AuthContext from "../context/auth_context";
// import { useUserContext } from '../context/user_context'

const CartButtons = () => {
  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  };

  const { closeSidebar } = useProductsContext();
  const { total_items } = useCartContext();
  return (
    <Wrapper>
      <div className="auth-wrapper">
        {!isLoggedIn && (
          <Link to="/auth" className="auth-btn">
            {/* Login  */}
            {/* <FaRegUser />
       <BiUser/> */}
            <HiOutlineUser />
          </Link>
        )}
        {isLoggedIn && (
          <Link to="/profile" className="auth-btn">
            Profile
          </Link>
        )}
        {isLoggedIn && (
          <button type="button" className="auth-btn" onClick={logoutHandler}>
            Logout
          </button>
        )}
      </div>
      <div className="cart-btn-wrapper">
        <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
          <span className="cart-container">
            <BiShoppingBag />
            <span className="cart-value">{total_items}</span>
          </span>
        </Link>
      </div>
      <div className="search-btn-wrapper">
        <BiSearch />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  // grid-template-columns: 1fr 1fr;
  justify-content: center;
  align-items: center;
  width: 300px;

  .cart-btn-wrapper {
    border: 3px solid #fff;
    border-radius: 24px;
    padding: 6px 26px 6px 6px;
    margin: 0 12px;
  }

  .auth-wrapper,
  .search-btn-wrapper  {
    display: flex;
    // width: 300px;
    justify-content: center;
  }


  .auth-btn svg,
  .cart-container svg,
  .search-btn-wrapper svg {
    height: 24px;
    width: 24px;
    // stroke-width: 2;
  }

  .cart-btn {
    color: #fff;
    font-size: 16px;
    display: flex;
    font-weight: 600;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: 0px;
    right: -24px;
    // background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 16px;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 16px;
    cursor: pointer;
    color: #fff;
    font-weight: 600;
    svg {
      margin-left: 5px;
    }
  }
`;
export default CartButtons;
