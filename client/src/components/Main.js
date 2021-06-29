import React, { useContext } from "react";
import styled from "styled-components";
import theme from "../theme";

import bannerImageMobile from "../images/mobile/image-interactive.jpg";

import deepEarthMobile from "../images/mobile/image-deep-earth.jpg";
import nightArcadeMobile from "../images/mobile/image-night-arcade.jpg";
import soccerTeamMobile from "../images/mobile/image-soccer-team.jpg";
import theGridMobile from "../images/mobile/image-grid.jpg";
import fromAboveMobile from "../images/mobile/image-from-above.jpg";
import pocketBorealisMobile from "../images/mobile/image-pocket-borealis.jpg";
import curiosityMobile from "../images/mobile/image-curiosity.jpg";
import fisheyeMobile from "../images/mobile/image-fisheye.jpg";

import bannerImageDesktop from "../images/desktop/image-interactive.jpg";

import deepEarthDesktop from "../images/desktop/image-deep-earth.jpg";
import nightArcadeDesktop from "../images/desktop/image-night-arcade.jpg";
import soccerTeamDesktop from "../images/desktop/image-soccer-team.jpg";
import theGridDesktop from "../images/desktop/image-grid.jpg";
import fromAboveDesktop from "../images/desktop/image-from-above.jpg";
import pocketBorealisDesktop from "../images/desktop/image-pocket-borealis.jpg";
import curiosityDesktop from "../images/desktop/image-curiosity.jpg";
import fisheyeDesktop from "../images/desktop/image-fisheye.jpg";

import { MenuContext } from "../context/MenuContext";

const { white, black, darkGray, veryDarkGray } = theme;

const MainContainer = styled.div`
  display: ${(props) => (props.menuOpen ? "none" : "block")};
  @media screen and (max-width: 1023px) {
    padding: 180px 24px 0 24px;
  }
  @media screen and (min-width: 1024px) {
    padding: 160px 165px 0 165px;
  }
`;

const Contents = styled.div`
  margin: 0 auto;
  @media screen and (min-width: 1024px) {
    max-width: 1110px;
  }
`;

const Banner = styled.div`
  position: relative;
`;

const BannerImageContainer = styled.div`
  @media screen and (max-width: 1439px) {
    margin-bottom: 50px;
  }
`;

const BannerImageMobile = styled.img`
  display: none;
  width: 100%;
  @media screen and (max-width: 1439px) {
    display: block;
  }
`;

const BannerImageDesktop = styled.img`
  display: none;
  width: 730px;
  margin-bottom: 185px;
  @media screen and (min-width: 1440px) {
    display: block;
  }
`;

const Text = styled.div`
  @media screen and (min-width: 1440px) {
    position: absolute;
    bottom: -1px;
    right: 0;
    background-color: ${white};
    height: 315px;
    width: 545px;
    padding-left: 95px;
    padding-top: 95px;
  } ;
`;

const Title = styled.div`
  color: ${black};
  text-transform: uppercase;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 100;
  font-size: 40px;
  margin-bottom: 30px;
  @media screen and (max-width: 1439px) {
    text-align: center;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 1440px) {
    font-size: 48px;
  } ;
`;

const Para = styled.div`
  color: ${darkGray};
  @media screen and (max-width: 1439px) {
    text-align: center;
    padding: 26px;
    margin-bottom: 100px;
  }
`;

const Creations = styled.div`
  @media screen and (max-width: 1439px) {
    margin-bottom: 34px;
  }
`;

const CreationsTitleContainer = styled.div`
  height: 100%;
  margin-bottom: 55px;
  @media screen and (min-width: 1440px) {
    display: flex;
    justify-content: space-between;
    margin-bottom: 90px;
  }
`;

const CreationsTitle = styled.div`
  text-align: center;
  color: ${black};
  text-transform: uppercase;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 100;
  font-size: 40px;
  @media screen and (min-width: 1440px) {
    font-size: 48px;
    height: 48px;
  }
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
    font-family: "Josefin Sans", sans-serif;
    font-weight: 100;
    font-size: 24px;
    width: 140px;
    z-index: 1;
    bottom: 24px;
    left: 24px;
  }
  img {
    width: 100%;
    filter: brightness(0.7);
    display: block;
    position: relative;
  }

  @media screen and (max-width: 1439px) {
    display: block;
  }
`;

const CreationsLinksDesktop = styled.div`
  display: none;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 161px;
  div {
    position: relative;
  }

  h3 {
    color: ${white};
    text-transform: uppercase;
    position: absolute;
    font-family: "Josefin Sans", sans-serif;
    font-weight: 100;
    font-size: 24px;
    width: 140px;
    z-index: 1;
    bottom: 44px;
    left: 24px;
  }

  img {
    width: 255px;
    filter: brightness(0.5);
    display: block;
    margin-bottom: 24px;
    position: relative;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
  }
`;

const ButtonMobileContainer = styled.div`
  display: none;
  justify-content: center;
  margin-bottom: 95px;
  @media screen and (max-width: 1439px) {
    display: flex;
  }
`;

const ButtonMobile = styled.button`
  font-family: "Alata", sans-serif;
  text-transform: uppercase;
  border: 1px solid ${black};
  background: transparent;
  padding: 10px 40px;
  font-size: 16px;
  letter-spacing: 5px;

  &:hover {
    cursor: pointer;
  }
`;

const ButtonDesktopContainer = styled.div`
  display: none;
  @media screen and (min-width: 1440px) {
    display: initial;
  }
`;

const ButtonDesktop = styled(ButtonMobile)``;

const Main = () => {
  const { menuOpen } = useContext(MenuContext);

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
          <CreationsTitleContainer>
            <CreationsTitle>Our creations</CreationsTitle>
            <ButtonDesktopContainer>
              <ButtonDesktop>See all</ButtonDesktop>
            </ButtonDesktopContainer>
          </CreationsTitleContainer>
          <CreationsLinksMobile>
            <div>
              <h3>Deep earth</h3>
              <a href='/'>
                <img src={deepEarthMobile} alt='' />
              </a>
            </div>
            <div>
              <h3>Night arcade</h3>
              <a href='/'>
                <img src={nightArcadeMobile} alt='' />
              </a>
            </div>
            <div>
              <h3>Soccer team vr</h3>
              <a href='/'>
                <img src={soccerTeamMobile} alt='' />
              </a>
            </div>
            <div>
              <h3>The grid</h3>
              <a href='/'>
                <img src={theGridMobile} alt='' />
              </a>
            </div>
            <div>
              <h3>From up above vr</h3>
              <a href='/'>
                <img src={fromAboveMobile} alt='' />
              </a>
            </div>
            <div>
              <h3>Pocket borealis</h3>
              <a href='/'>
                <img src={pocketBorealisMobile} alt='' />
              </a>
            </div>
            <div>
              <h3>The curiosity</h3>
              <a href='/'>
                <img src={curiosityMobile} alt='' />
              </a>
            </div>
            <div>
              <h3>Make it fisheye</h3>
              <a href='/'>
                <img src={fisheyeMobile} alt='' />
              </a>
            </div>
          </CreationsLinksMobile>
          <CreationsLinksDesktop>
            <div>
              <h3>Deep earth</h3>

              <a href='/'>
                <img src={deepEarthDesktop} alt='' />
              </a>
            </div>
            <div>
              <h3>Night arcade</h3>
              <a href='/'>
                <img src={nightArcadeDesktop} alt='' />
              </a>
            </div>
            <div>
              <h3>Soccer team vr</h3>
              <a href='/'>
                <img src={soccerTeamDesktop} alt='' />
              </a>
            </div>
            <div>
              <h3>The grid</h3>
              <a href='/'>
                <img src={theGridDesktop} alt='' />
              </a>
            </div>
            <div>
              <h3>From up above vr</h3>
              <a href='/'>
                <img src={fromAboveDesktop} alt='' />
              </a>
            </div>
            <div>
              <h3>Pocket borealis</h3>
              <a href='/'>
                <img src={pocketBorealisDesktop} alt='' />
              </a>
            </div>
            <div>
              <h3>The curiosity</h3>
              <a href='/'>
                <img src={curiosityDesktop} alt='' />
              </a>
            </div>
            <div>
              <h3>Make it fisheye</h3>
              <a href='/'>
                <img src={fisheyeDesktop} alt='' />
              </a>
            </div>
          </CreationsLinksDesktop>
        </Creations>
        <ButtonMobileContainer>
          <ButtonMobile>See all</ButtonMobile>
        </ButtonMobileContainer>
      </Contents>
    </MainContainer>
  );
};

export default Main;
