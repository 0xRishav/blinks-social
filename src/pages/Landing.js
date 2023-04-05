import LandingPageSvg from '../assets/LandingPageSvg.svg';
import styled from 'styled-components';
import { Tilt } from 'react-tilt';
import { Button, Logo, NavDiv } from '../components';
import { Link } from 'react-router-dom';
import { StyledButton } from '../components/Buttons.styles';

const Landing = () => {
  const options = {
    reverse: true,
    max: 25,
    perspective: 1000,
    scale: 1,
    speed: 300,
    transition: true,
    axis: null,
    reset: true,
    easing: 'cubic-bezier(.03,.98,.52,.99)'
  };
  return (
    <div>
      <NavDiv>
        <Logo />
        <Link>
          <StyledButton primary>Log In</StyledButton>
        </Link>
      </NavDiv>
      <TwoColumnFlexWrapper>
        <Left>
          <h1>
            Define<span style={{ color: '#7C37A6' }}> Yourself</span> . The Way
            You <span style={{ color: '#7C37A6' }}>Want</span>.
          </h1>
          <p>
            Blinks Social allows users to upload photos through Blinks Social
            website. Users can add a caption to each of their posts.
          </p>
        </Left>
        <Right>
          <Tilt className="Tilt" options={options}>
            <LandingSvg
              src={LandingPageSvg}
              className="Tilt-inner"
            ></LandingSvg>
          </Tilt>
        </Right>
      </TwoColumnFlexWrapper>
      <StyledButton primary>Log In</StyledButton>
      <StyledButton style={{ marginLeft: '1rem' }}>Sign Up</StyledButton>
    </div>
  );
};

const LandingSvg = styled.img`
  height: auto;
  width: 20%;
`;

const TwoColumnFlexWrapper = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: space-around;
`;

const Left = styled.div`
  width: 100%;
`;
const Right = styled.div`
  width: 100%;
`;

export default Landing;
