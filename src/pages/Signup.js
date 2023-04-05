import styled from 'styled-components';
import { Input } from '../components';
import { Button, Logo, NavDiv } from '../components';
import { StyledButton } from '../components/Buttons.styles';
import { AiOutlineArrowRight } from 'react-icons/ai';

const Signup = () => {
  const inputs = [
    {
      placeholder: 'Name',
      type: 'text'
    },
    {
      placeholder: 'Profession',
      type: 'text'
    },
    {
      placeholder: 'Personal Website',
      type: 'text'
    },
    {
      placeholder: 'Email',
      type: 'email'
    },
    {
      placeholder: 'Username',
      type: 'text'
    },
    {
      placeholder: 'Password',
      type: 'password'
    },
    {
      placeholder: 'Confirm Password',
      type: 'password'
    }
  ];
  return (
    <div>
      <NavDiv>
        <Logo />
      </NavDiv>
      <h2>Sign Up to Blinks Social</h2>
      <InputWrapper>
        {inputs.map((input) => (
          <Input placeholder={input.placeholder} type={input.type} />
        ))}
      </InputWrapper>
      <StyledButton primary style={{ width: '20%', marginTop: '1rem' }}>
        Next <AiOutlineArrowRight style={{ marginLeft: '0.5rem' }} />
      </StyledButton>
    </div>
  );
};

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 1rem auto;
  width: 20%;
`;

export default Signup;
