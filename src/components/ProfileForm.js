import { useRef, useContext  } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../context/auth_context";
import React from "react";

const ProfileForm = () => {
  const history = useHistory();
  const newPasswordInputRef = useRef();
  const authCtx = useContext(AuthContext);

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredNewPassword = newPasswordInputRef.current.value;

    //add validation

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyAi1TLxgD9IkUz6kypN0VRbDGqalCWdPLM",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: authCtx.token,
          password: enteredNewPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      //assumption: Always succeeds!
      history.replace("/");
    });
  };

  return (
      <Wrapper className="page">
      
   <form className="form" onSubmit={submitHandler}>
        <div className="control">
          <label htmlFor="new-password">New Password</label>
          <input
            type="password"
            id="new-password"
            minLength="7"
            ref={newPasswordInputRef}
          />
        </div>
        <div className="action">
          <button>Change Password</button>
        </div>
      </form>
           
      </Wrapper>
  )
  
};

const Wrapper = styled.section`
  .form {
    width: 95%;
    max-width: 25rem;
    margin: 2rem auto;
  }

  .control {
    margin-bottom: 0.5rem;
  }

  .control label {
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #353336;
    display: block;
  }

  .control input {
    display: block;
    font: inherit;
    width: 100%;
    border-radius: 4px;
    border: 1px solid #38015c;
    padding: 0.25rem;
    background-color: #f7f0fa;
  }

  .action {
    margin-top: 1.5rem;
  }

  .action button {
    font: inherit;
    cursor: pointer;
    padding: 0.5rem 1.5rem;
    border-radius: 4px;
    background-color: #38015c;
    color: white;
    border: 1px solid #38015c;
  }

  .action button:hover {
    background-color: #540d83;
    border-color: #540d83;
  }
`

export default ProfileForm;
