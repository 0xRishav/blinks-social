import { Button, Logo } from '../components';
import { NavDiv } from '../components';
import { Input } from '../components';
import AuthPageSvg from '../assets/AuthPageSvg.svg';
import { StyledButton } from '../components/Buttons.styles';

import styled from 'styled-components';

const Signin = () => {
  return (
    <div>
      <NavDiv>
        <Logo />
      </NavDiv>
      <h2>Welcome back to Blinks Social</h2>
      <SignInWrapper>
        <AuthSvg src={AuthPageSvg} alt="handPic" />
        <form action="">
          <Input placeholder="Username/Email" type="text" />
          <Input placeholder="Password" type="password" />
          <StyledButton primary style={{ width: '100%' }}>
            Sign In
          </StyledButton>

          <div style={{ fontSize: '0.8rem', margin: '1rem auto' }}>
            New to Blinks Social?
          </div>
          <StyledButton style={{ width: '100%' }}>Sign Up</StyledButton>
        </form>
      </SignInWrapper>
    </div>
  );
};

const SignInWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AuthSvg = styled.img`
  width: 20%;
  height: auto;
  margin: auto;
`;

export default Signin;
