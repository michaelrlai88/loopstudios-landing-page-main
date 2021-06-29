import React, { useContext } from 'react';
import styled from 'styled-components';
import heroImageDesktop from '../images/desktop/image-hero.jpg';
import heroImageMobile from '../images/mobile/image-hero.jpg';
import navLogo from '../images/logo.svg';

import theme from '../theme';

import { MenuContext } from '../context/MenuContext';

const { white, black, darkGray, veryDarkGray } = theme;

const HeaderContainer = styled.div`
  height: ${(props) => (props.menuOpen ? '0' : '650px')};
`;

const Hero = styled.div`
  height: 100%;

  background-size: cover;
  background-position: 50% 0;

  @media screen and (max-width: 375px) {
    background-image: url(${heroImageMobile});
  }
  @media screen and (min-width: 376px) {
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url(${heroImageDesktop});
  }
  @media screen and (max-width: 1023px) {
    padding: 0 24px;
  }
  @media screen and (min-width: 1024px) {
    padding: 0 165px;
  }
`;

const Content = styled.div`
  margin: 0 auto;

  @media screen and (min-width: 1024px) {
    max-width: 1110px;
  }
`;

const Nav = styled.div`
  padding-top: 40px;

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-top: 65px;
  }
`;

const NavBar = styled.div`
  @media screen and (max-width: 767px) {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 3;
    /*     position: ${({ menuOpen }) =>
      menuOpen
        ? 'fixed'
        : 'none'}; // experimenting different ways of writing this here and below 
    width: ${({ menuOpen }) => (menuOpen ? '100vw' : 'initial')};
    left: ${({ menuOpen }) => (menuOpen ? '0' : 'initial')}; */

    /*     ${({ menuOpen }) => {
      switch (menuOpen) {
        case true:
          return 'position: fixed; width: 100vw; left: 0;';
        default:
          return 'position: none; width: initial; left: initial;';
      }
    }} */

    ${({ menuOpen }) =>
      menuOpen
        ? 'position: fixed; width: 100vw; left: 0;'
        : 'position: none; width: initial; left: initial;'}
  }
`;

const NavLogo = styled.div`
  background-image: url(${navLogo});
  background-repeat: no-repeat;

  @media screen and (max-width: 767px) {
    height: 25px;
    width: 160px;
    background-size: 145px auto;
    margin-left: ${(props) => (props.menuOpen ? '24px' : 'initial')};
  }
  @media screen and (min-width: 768px) {
    height: 35px;
    width: 195px;
    background-size: auto auto;
  }
`;

const Burger = styled.button`
  background: transparent;
  border: none;
  margin-right: ${(props) => (props.menuOpen ? '24px' : 'initial')};

  :hover {
    cursor: pointer;
  }
  @media screen and (min-width: 768px) {
    display: none;
  }
`;

const NavMenu = styled.ul`
  list-style-type: none;
  color: ${white};

  a {
    text-decoration: none;
    color: white;
  }
  @media screen and (max-width: 767px) {
    display: ${(props) => (props.menuOpen ? 'flex' : 'none')};
    height: 100vh;
    width: 100vw;
    background-color: black;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
    flex-direction: column;
    justify-content: center;
    padding-left: 24px;
    font-weight: 400;
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 300;
    font-size: 24px;

    li {
      text-transform: uppercase;
      padding: 10px 0;
    }
  }
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    width: 380px;
  }
`;

const HeroText = styled.div`
  display: ${({ menuOpen }) => (menuOpen ? 'none' : 'block')};
  color: white;
  text-transform: uppercase;
  font-family: 'Josefin Sans', sans-serif;
  font-weight: 300;
  font-size: 40px;
  padding: 22px;
  margin-top: 160px;
  border: 2px solid white;
  max-width: 650px;
  @media screen and (min-width: 580px) {
    margin-top: 125px;
    font-size: 76px;
    font-weight: 100;
  }
`;

const Header = () => {
  const { menuOpen, setMenuOpen } = useContext(MenuContext);

  const openMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer menuOpen={menuOpen}>
      <Hero>
        <Content>
          <Nav>
            <NavBar menuOpen={menuOpen}>
              <NavLogo menuOpen={menuOpen}></NavLogo>
              <Burger onClick={openMenu} menuOpen={menuOpen}>
                {menuOpen ? (
                  <svg
                    width='20'
                    height='20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      d='M17.778.808l1.414 1.414L11.414 10l7.778 7.778-1.414 1.414L10 11.414l-7.778 7.778-1.414-1.414L8.586 10 .808 2.222 2.222.808 10 8.586 17.778.808z'
                      fill='#FFF'
                      fill-rule='evenodd'
                    />
                  </svg>
                ) : (
                  <svg
                    width='24'
                    height='16'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <g fill='#FFF' fill-rule='evenodd'>
                      <path d='M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z' />
                    </g>
                  </svg>
                )}
              </Burger>
            </NavBar>
            <NavMenu menuOpen={menuOpen}>
              <li>
                <a href='/'>About</a>
              </li>
              <li>
                <a href='/'>Careers</a>
              </li>
              <li>
                <a href='/'>Events</a>
              </li>
              <li>
                <a href='/'>Products</a>
              </li>
              <li>
                <a href='/'>Support</a>
              </li>
            </NavMenu>
          </Nav>
          <HeroText menuOpen={menuOpen}>
            Immersive experiences that deliver
          </HeroText>
        </Content>
      </Hero>
    </HeaderContainer>
  );
};

export default Header;
