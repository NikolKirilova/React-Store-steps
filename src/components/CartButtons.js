import React, { useContext } from 'react'
import { FaShoppingCart, FaUserMinus, FaUserPlus } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
import AuthContext from '../context/auth_context'
// import { useUserContext } from '../context/user_context'

const CartButtons = () => {

  const authCtx = useContext(AuthContext);

  const isLoggedIn = authCtx.isLoggedIn;

  const logoutHandler = () => {
    authCtx.logout();
  }

  const { closeSidebar } = useProductsContext();
  const {total_items} = useCartContext();
  return <Wrapper className="cart-btn-wrapper">
    <Link to="/cart" className="cart-btn" onClick={closeSidebar}>
      Cart
      <span className="cart-container">
        <FaShoppingCart />
        <span className='cart-value'>{total_items}</span>
      </span>
    </Link>
    <div className="auth-wrapper"> 
    {!isLoggedIn && ( <Link to='/auth' className="auth-btn">Login <FaUserPlus /></Link>

    )}
    { isLoggedIn && ( <Link to='/profile' className="auth-btn">Profile</Link>

    )}
     { isLoggedIn && ( <button type="button" className="auth-btn" onClick={logoutHandler}>Logout</button>)
     }
     
     
     
    </div>
    {/* <button type="button" className="auth-btn">
      Login <FaUserPlus />
    </button> */}
  </Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  // grid-template-columns: 1fr 1fr;
  justify-content:space-between;
  // align-items: center;
  width: 300px;

  .auth-wrapper{
    display: flex;
    width: 300px;
    justify-content: space-between;
  }

  .cart-btn {
    color: var(--clr-grey-1);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-1);
    display: flex;

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
    top: -10px;
    right: -16px;
    background: var(--clr-primary-5);
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 0.75rem;
    color: var(--clr-white);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`
export default CartButtons
