import LandingPageSvg from '../assets/LandingPageSvg.svg';
import styled from 'styled-components';
import { Tilt } from 'react-tilt';
import { Button, Logo } from '../components';
import { Link } from 'react-router-dom';

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
          <Button primary>Log In</Button>
        </Link>
      </NavDiv>
      <TwoColumnFlexWrapper>
        <Left>
          <h1>
            Define<span style={{ color: '#7C37A6' }}> Yourself</span> . The Way
            You <span style={{ color: '#7C37A6' }}>Want</span>.
          </h1>
          <p>
            RSocial allows users to upload photos through RSocial website. Users
            can add a caption to each of their posts.
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
      <Button primary>Log In</Button>
      <Button style={{ marginLeft: '1rem' }}>Sign Up</Button>
    </div>
  );
};

const LandingSvg = styled.img`
  height: auto;
  width: 20%;
`;
const NavDiv = styled.div`
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
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
