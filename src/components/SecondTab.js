import React from "react";
import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../context/auth_context";

const SecondTab =()=> {

    const firstNameInputRef = useRef();
    const lastNameInputRef = useRef();
    const emailInputRef = useRef();
    const passwordInputRef = useRef();

    const authCtx = useContext(AuthContext);

    const [isLogin, setIsLogin] = useState(true);

    const switchAuthModeHandler = () => {
        setIsLogin((prevState) => !prevState);
      };

    const submitHandler = (event) => {
        event.preventDefault();
        const firstName = firstNameInputRef.current.value;
        const lastName = lastNameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredPassword = passwordInputRef.current.value;
      
    
        //add validation
    }
  
    return (
        <form onSubmit={submitHandler}>
      
          <div className="control">
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailInputRef} />
          </div>
          <div className="control">
            <label htmlFor="password">Your Password</label>
            <input
              type="password"
              id="password"
              required
              ref={passwordInputRef}
            />
          </div>
          <div className="actions">
            {/* {!isLoading && (
              <button>Continue </button>
            )}
            {isLoading && <p>Sending request ...</p>} */}
            <button
            //   type="button"
            //   className="toggle"
            //   onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>)
   
    
}
const Wrapper = styled.section`
  .auth {
    margin: 3rem auto;
    // width: 95%;
    // max-width: 25rem;
    border-radius: 6px;     
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    text-align: center;
    color:#212529;
  }

  .auth h1 {
    text-align: left;
    letter-spacing: 0.1px;
  }
  .personal-info{
    width:380px;
  }

  .personal-info-tabs{
    display: flex;
    justify-content: space-around;
  }

  .control {
    margin-bottom: 0.5rem;
    display:flex;
  }

  .control label {
    flex: 0 0 35%;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .control input {
    font: inherit;
    background-color: #f7f7f7;
    color: #38015c;
    border-radius: 20px;
    border: none;
    width: 100%;
    text-align: left;
    padding: 0.25rem;
  }
  .control input:focus{
    color:#495057;
    background-color:#fff;
    border-color:#404040;
    box-shadow: 0 0 0 0.2rem rgb(0 0 0 /25%);
  }
  .control input:focus-visible{
    border:none;
  }

  .actions {
    margin-top: 1.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .actions button {
    cursor: pointer;
    font: inherit;
    color: white;
    background-color: #9f5ccc;
    border: 1px solid #9f5ccc;
    border-radius: 4px;
    padding: 0.5rem 2.5rem;
  }

  .actions button:hover {
    background-color: #873abb;
    border-color: #873abb;
  }

  .actions .toggle {
    margin-top: 1rem;
    background-color: transparent;
    color: #9f5ccc;
    border: none;
    padding: 0.15rem 1.5rem;
  }

  .actions .toggle:hover {
    background-color: transparent;
    color: #ae82cc;
  }
`;
export default SecondTab;