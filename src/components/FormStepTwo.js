import React from "react";
 
import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../context/auth_context";
 

const FormStepTwo = () => {
  const history = useHistory();

  const addressInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();
  const phoneInputRef = useRef();
  

  const authCtx = useContext(AuthContext);
  // const id = localStorage.getItem("localId");

  const [isLogin, setIsLogin] = useState(true);

  const [isLoading, setIsLoading] = useState(false);


   
  
  const submitHandler = (event) => {
    event.preventDefault();
    const address = addressInputRef.current.value;
    const postalCode = postalCodeInputRef.current.value;
    const city = cityInputRef.current.value;
    const phone = phoneInputRef.current.value;
    // const userId = id;
  

    //add validation
 
    setIsLoading(true);
    // axios({
    //   method: "post",
    //   url: "http://127.0.0.1:8000/api/users",
    //   data: {
    //     first_name: firstName,
    //     last_name: lastName,
    //     email: enteredEmail,
    //     password: enteredPassword,
    //     user_id: userId,
    //   },
    // }).then(
    //   (response) => {
    //     console.log(response);
    //   },
    //   (error) => {
    //     console.log(error);
    //   }
    // );
  };

  return (
    <Wrapper className="">
      <section className="auth">
       
        <div className="personal-info">
          <div className="personal-info-tabs">
            <div className="new-customer-title">
               
            </div>
            <div  >
            <form onSubmit={submitHandler}>
        <div className="control">
            <label htmlFor="address">Address</label>
            <input type="text" id="address" required ref={addressInputRef} />
          </div>
          <div className="control">
            <label htmlFor="postal-code">Postal Code</label>
            <input type="text" id="postal-code" required ref={postalCodeInputRef} />
          </div>
          <div className="control">
            <label htmlFor="city">City</label>
            <input type="text" id="city" required ref={cityInputRef} />
          </div>
          <div className="control">
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" required ref={phoneInputRef} />
        
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
               Continue
            </button>
          </div>
        </form>
            </div>
          </div>
           
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .auth {
    margin: 3rem auto;
    // width: 95%;
    // max-width: 25rem;
    border-radius: 6px;
    // box-shadow: 0 1px 4px rgba(0, 0, 0, 0.2);
    padding: 1rem;
    text-align: center;
    color: #212529;
  }
  .tab {
    color: #666;
    background: #000;
  }

  .auth h1 {
    text-align: left;
    letter-spacing: 0.1px;
  }
  .personal-info {
    width: 380px;
  }

  .personal-info-tabs {
    display: flex;
    justify-content: space-around;
  }

  .control {
    margin-bottom: 0.5rem;
    display: flex;
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
  .control input:focus {
    color: #495057;
    background-color: #fff;
    border-color: #404040;
    box-shadow: 0 0 0 0.2rem rgb(0 0 0 /25%);
  }
  .control input:focus-visible {
    border: none;
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
export default FormStepTwo;
