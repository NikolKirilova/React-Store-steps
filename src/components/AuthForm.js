import React from "react";
import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../context/auth_context";
import { FormStepOne,FormStepTwo,FormStepThree,FormStepFour } from "../components";

const AuthForm = () => {
  const history = useHistory();
   

 const authCtx = useContext(AuthContext);

  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [isActive, setIsActive] = useState("tab1");

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };
   
  const toggleHandler1 = () => {
      setIsActive("tab1")
  }   
  const toggleHandler2 = () => {
    setIsActive("tab2")
}  
const toggleHandler3 = () => {
  setIsActive("tab3")
}  
const toggleHandler4 = () => {
  setIsActive("tab4")
}  

  const submitHandler = (event) => {
    event.preventDefault();

    // const enteredEmail = emailInputRef.current.value;
    // const enteredName = nameInputRef.current.value;
    // const enteredPassword = passwordInputRef.current.value;

    //add validation

    // setIsLoading(true);
    // let url;
    // if (isLogin) {
    //   url = 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAi1TLxgD9IkUz6kypN0VRbDGqalCWdPLM';
    // } else {
    //   url ='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAi1TLxgD9IkUz6kypN0VRbDGqalCWdPLM'}
      
    //     fetch(url, {
    //       method: "POST",
    //       body: JSON.stringify({
    //         email: enteredEmail,
    //         password: enteredPassword,
    //         // name: enteredName,
    //         returnSecureToken: true,
    //       }),
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //     })
    //       .then((res) => {
    //         setIsLoading(false);
    //         if (res.ok) {
    //           return res.json();
    //         } else {
    //           return res.json().then((data) => {
    //             //show an error modal
    //             // console.log(data);
    //             let errorMessage = "Authentication failed!";
    //             if (data && data.error && data.error.message) {
    //               errorMessage = data.error.message;
    //             }
    //             // alert(errorMessage);
    //             throw new Error(errorMessage);
    //           });
    //         }
    //       })
    //       .then((data) => {
    //         console.log(data);
    //         console.log(data.localId);
    //         console.log(data.idToken);

    //         const expirationTime = new Date(new Date().getTime() + (+data.expiresIn * 1000));
    //         authCtx.login(data.idToken, expirationTime.toISOString(), data.email,data.localId);
           
            
    //         history.replace('/');
    //       })
    //       .catch((err) => {
    //         alert(err.message);
    //       });
    
  };

  return (
    <Wrapper className="page">
      <section className="auth-forms">
        <div className="header-box" onClick={toggleHandler1}>
        <h4>1. Personal Information</h4>
          </div>
          {isActive === "tab1" && <FormStepOne/>}          
         <div className="header-box" onClick={toggleHandler2}>
           <h4>2.Addresses</h4>
          </div>
          {isActive === "tab2" && <FormStepTwo/>} 
         <div className="header-box" onClick={toggleHandler3}>
         <h4>3. Shipping Method</h4>
          </div>
          {isActive === "tab3" && <FormStepThree/>} 
         <div className="header-box" onClick={toggleHandler4}>
         <h4>4. Payment</h4>
          </div>
          {isActive === "tab4" && <FormStepFour/>} 
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .auth-forms {
    margin: 3rem auto;
   width:100%;
  }
  .header-box{
    padding-top: 14px;
    border-top: 1px solid #f7f7f7;
  }

  
`;
export default AuthForm;
