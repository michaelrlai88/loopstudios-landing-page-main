import React from 'react';
import styled from 'styled-components';
import heroImage from '../images/desktop/image-hero.jpg';

const HeaderContainer = styled.div``;

const HeroContainer = styled.div`
  width: 100vw;
  img {
    overflow: hidden;

    @media screen and (min-width: 1441px) {
      width: 100%;
      height: 650px;
      object-fit: cover;
    }
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeroContainer>
        <img src={heroImage} alt='' className='' />
      </HeroContainer>
    </HeaderContainer>
  );
};

export default Header;
