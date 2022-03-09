import ProfileForm from "./ProfileForm";
import FormStepOne from "./FormStepOne";
import styled from "styled-components";
import React from "react";

const UserProfile = () => {
    return (
        <Wrapper>
 <section className="profile">
            <h1>Your User Profile</h1>
            <FormStepOne />
            <ProfileForm/>

        </section>
        </Wrapper>
        
    )
}

const Wrapper = styled.section`
.profile {
    margin: 3rem auto;
    text-align: center;
  }
  
  .profile h1 {
    font-size: 5rem;
  }
  `

export default UserProfile;