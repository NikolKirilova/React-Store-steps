import React from "react";
import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../context/auth_context";

const AuthForm = () => {
  const history = useHistory();
  // const nameInputRef = useRef();
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

 const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    // const enteredName = nameInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    //add validation

    setIsLoading(true);
    let url;
    if (isLogin) {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAi1TLxgD9IkUz6kypN0VRbDGqalCWdPLM';
    } else {
      url ='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAi1TLxgD9IkUz6kypN0VRbDGqalCWdPLM'}
      
        fetch(url, {
          method: "POST",
          body: JSON.stringify({
            email: enteredEmail,
            password: enteredPassword,
            // name: enteredName,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            setIsLoading(false);
            if (res.ok) {
              return res.json();
            } else {
              return res.json().then((data) => {
                //show an error modal
                // console.log(data);
                let errorMessage = "Authentication failed!";
                if (data && data.error && data.error.message) {
                  errorMessage = data.error.message;
                }
                // alert(errorMessage);
                throw new Error(errorMessage);
              });
            }
          })
          .then((data) => {
            console.log(data);
            console.log(data.localId);
            console.log(data.idToken);

            const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000));
            authCtx.login(data.idToken, expirationTime.toISOString(), data.email,data.localId);
           
            
            history.replace('/');
          })
          .catch((err) => {
            alert(err.message);
          });
    
  };

  return (
    <Wrapper className="page">
      <section className="auth">
        <h1>{isLogin ? "Login" : "Sign Up"}</h1>
        <form onSubmit={submitHandler}>
        {/* <div className="control">
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required ref={nameInputRef} />
          </div> */}
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
            {!isLoading && (
              <button>{isLogin ? "Login" : "Create Account"} </button>
            )}
            {isLoading && <p>Sending request ...</p>}
            <button
              type="button"
              className="toggle"
              onClick={switchAuthModeHandler}
            >
              {isLogin ? "Create new account" : "Login with existing account"}
            </button>
          </div>
        </form>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .auth {
    margin: 3rem auto;
    width: 95%;
    max-width: 25rem;
    border-radius: 6px;
    background-color: #38015c;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    text-align: center;
  }

  .auth h1 {
    text-align: center;
    color: white;
  }

  .control {
    margin-bottom: 0.5rem;
  }

  .control label {
    display: block;
    color: white;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }

  .control input {
    font: inherit;
    background-color: #f1e1fc;
    color: #38015c;
    border-radius: 4px;
    border: 1px solid white;
    width: 100%;
    text-align: left;
    padding: 0.25rem;
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
export default AuthForm;
