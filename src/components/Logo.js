import styled from 'styled-components';

const Logo = () => {
  return (
    <LogoWrapper>
      Blinks <span style={{ color: '#7C37A6' }}>Social</span>
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export default Logo;
