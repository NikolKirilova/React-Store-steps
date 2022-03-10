import React from "react";
import axios from "axios";
import { useState, useRef, useContext } from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import AuthContext from "../context/auth_context";
import { FirstTab, SecondTab } from "../components";

const FormStepOne = (props) => {
  const history = useHistory();

 
  

  const authCtx = useContext(AuthContext);
  // const id = localStorage.getItem("localId");

  const [isLogin, setIsLogin] = useState(true);

  const [isLoading, setIsLoading] = useState(false);


  const [activeTab, setActiveTab] = useState("tab1");
   //  Functions to handle Tab Switching
   const handleTab1 = () => {
    // update the state to tab1
    setActiveTab("tab1");
  };
  const handleTab2 = () => {
    // update the state to tab2
    setActiveTab("tab2");
  };



  const registerUserHandler =(userData)=>{
    console.log(userData)
    props.onSuccess(userData);
    // fetch(
    //   "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAi1TLxgD9IkUz6kypN0VRbDGqalCWdPLM",
    //   {
    //     method: "POST",
    //     body: JSON.stringify({
    //       ...userData,
    //       returnSecureToken: true,
    //     }),
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   }
    // )
    //   .then((res) => {
    //     // setIsLoading(false);
    //     if (res.ok) {
    //       return res.json();
    //     } else {
    //       return res.json().then((data) => {
    //         //show an error modal
    //         // console.log(data);
    //         let errorMessage = "Authentication failed!";
    //         if (data && data.error && data.error.message) {
    //           errorMessage = data.error.message;
    //         }
    //         // alert(errorMessage);
    //         throw new Error(errorMessage);
    //       });
    //     }
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     console.log(data.localId);
    //     console.log(data.idToken);

    //     const expirationTime = new Date(
    //       new Date().getTime() + +data.expiresIn * 1000
    //     );
    //     authCtx.login(
    //       data.idToken,
    //       expirationTime.toISOString(),
    //       data.email,
    //       data.localId
    //     );

    //     // history.replace('/');
    //   })
    //   .catch((err) => {
    //     alert(err.message);
    //   });
      
  }

  // const submitHandler = (event) => {
  //   event.preventDefault();
  

  //   setIsLoading(true);
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
 

  return (
    <Wrapper className="">
      <section className="auth">
         
        <div className="personal-info">
          <div className="personal-info-tabs">
            <div className="new-customer-title">
              <button className={activeTab === "tab1" ? "active" : ""}  onClick={handleTab1}>
                New customer
              </button>
            </div>
            <div  >
              <button className={activeTab === "tab2" ? "active" : ""} onClick={handleTab2}>
                Sign in
                </button>
            </div>
          </div>
            <div>{activeTab === "tab1" ? <FirstTab onRegisterUser={registerUserHandler}/> : <SecondTab />}  </div>
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
  .personal-info-tabs{
    margin-bottom: 20px;
  }
  
  .personal-info-tabs button{
    width: 200px;
    height: 40px;
    border: 1px solid #999;
    border-bottom: none;
    color:#d9d9d9;
    background :#f7f7f7;
  }
  .personal-info-tabs button.active{
    background:#fff;
    color:#000;
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
    background-color: #f5554c;
    border: 1px solid #f5554c !important;
    border-radius: 4px;
    padding: 0.5rem 2.5rem;
  }

  .actions button:hover {
    background-color: #f33328;;
    border-color: #f33328;;
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
export default FormStepOne;
