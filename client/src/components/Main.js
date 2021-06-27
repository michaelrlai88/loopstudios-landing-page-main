import React, { useContext } from 'react';
import styled from 'styled-components';
import theme from '../theme';

import bannerImageMobile from '../images/mobile/image-interactive.jpg';
import deepEarthMobile from '../images/mobile/image-deep-earth.jpg';
import nightArcadeMobile from '../images/mobile/image-night-arcade.jpg';

import bannerImageDesktop from '../images/desktop/image-interactive.jpg';

import { MenuContext } from '../context/MenuContext';

const { white, black, darkGray, veryDarkGray } = theme;

const MainContainer = styled.div`
  display: ${(props) => (props.menuOpen ? 'none' : 'block')};
  @media screen and (max-width: 1023px) {
    padding: 180px 24px 0 24px;
  }
  @media screen and (min-width: 1024px) {
    padding: 0 165px;
  }
`;

const Contents = styled.div`
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    max-width: 1110px;
  }
`;

const Banner = styled.div``;

const BannerImageContainer = styled.div`
  img {
    width: 100%;
  }
  @media screen and (max-width: 1023px) {
    margin-bottom: 50px;
  }
`;

const BannerImageMobile = styled.img`
  display: none;
  @media screen and (max-width: 1023px) {
    display: block;
  }
`;

const BannerImageDesktop = styled.img`
  display: none;
  @media screen and (min-width: 1024px) {
    display: block;
  }
`;

const Text = styled.div``;

const Title = styled.div`
  @media screen and (max-width: 1023px) {
    text-align: center;
    color: ${black};
    text-transform: uppercase;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 100;
    font-size: 36px;
    margin-bottom: 32px;
  }
`;

const Para = styled.div`
  color: ${darkGray};
  @media screen and (max-width: 1023px) {
    text-align: center;
    padding: 26px;
    margin-bottom: 100px;
  }
`;

const Creations = styled.div``;

const CreationsTitle = styled.div`
  text-align: center;
  color: ${black};
  text-transform: uppercase;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 100;
  font-size: 30px;
  margin-bottom: 55px;
`;

const CreationsLinksMobile = styled.div`
  display: none;
  div {
    position: relative;
    margin-bottom: 24px;
  }

  h3 {
    color: ${white};
    text-transform: uppercase;
    position: absolute;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 100;
    font-size: 24px;
    width: 120px;
    z-index: 1;
    bottom: 24px;
    left: 24px;
  }
  img {
    width: 100%;
    filter: brightness(0.7);
    display: block;
  }
  @media screen and (max-width: 1023px) {
    display: block;
  }
`;

const DeepEarth = styled.div``;

const NightArcade = styled.div``;

const Main = () => {
  const { menuOpen, setMenuOpen } = useContext(MenuContext);

  return (
    <MainContainer menuOpen={menuOpen}>
      <Contents>
        <Banner>
          <BannerImageContainer>
            <BannerImageMobile src={bannerImageMobile} />
            <BannerImageDesktop src={bannerImageDesktop} />
          </BannerImageContainer>
          <Text>
            <Title>The leader in interactive VR</Title>
            <Para>
              Founded in 2011, Loopstudios has been producing world-class
              virtual reality projects for some of the best companies around the
              globe. Our award-winning creations have transformed businesses
              through digital experiences that bind to their brand.
            </Para>
          </Text>
        </Banner>
        <Creations>
          <CreationsTitle>Our creations</CreationsTitle>
          <CreationsLinksMobile>
            <div>
              <h3>Deep earth</h3>
              <img src={deepEarthMobile} alt='' />
            </div>
            <div>
              <h3>Night arcade</h3>
              <img src={nightArcadeMobile} alt='' />
            </div>
          </CreationsLinksMobile>
        </Creations>
      </Contents>
    </MainContainer>
  );
};

export default Main;
