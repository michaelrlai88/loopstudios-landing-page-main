import React, { useContext } from "react";
import styled from "styled-components";
import heroImageDesktop from "../images/desktop/image-hero.jpg";
import heroImageMobile from "../images/mobile/image-hero.jpg";
import navLogo from "../images/logo.svg";

import theme from "../theme";

import { MenuContext } from "../context/MenuContext";

const { white, black, darkGray, veryDarkGray } = theme;

const HeaderContainer = styled.div`
  width: 100vw;
  height: 100%;
`;

const Hero = styled.div`
  height: ${(props) => (props.menuOpen ? "0" : "650px")};
  /* height: 650px; */
  width: 100vw;

  background-size: cover;
  background-position: 50% 0;

  /*   height: 100vh;
  width: 100vw;
  background-color: dodgerblue; */

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
    position: relative;
    z-index: 1;
  }
`;

const NavLogo = styled.div`
  background-image: url(${navLogo});
  background-repeat: no-repeat;
  @media screen and (max-width: 767px) {
    height: 25px;
    width: 160px;
    background-size: 145px auto;
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
  @media screen and (max-width: 767px) {
    display: ${(props) => (props.menuOpen ? "flex" : "none")};
    height: 100vh;
    width: 100vw;
    background-color: black;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 0;
    flex-direction: column;
    justify-content: center;
    padding-left: 24px;
    font-weight: 400;
    font-family: "Josefin Sans", sans-serif;
    font-size: 24px;
    font-weight: 100;

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

const Header = (props) => {
  const { menuOpen, setMenuOpen } = useContext(MenuContext);

  const openMenu = () => {
    console.log(menuOpen);
    console.log(typeof menuOpen);
    setMenuOpen(!menuOpen);
  };

  return (
    <HeaderContainer menuOpen={menuOpen}>
      <Hero menuOpen={menuOpen}>
        <Content>
          <Nav>
            <NavBar>
              <NavLogo></NavLogo>
              <Burger onClick={openMenu}>
                <svg width='24' height='16' xmlns='http://www.w3.org/2000/svg'>
                  <g fill='#FFF' fill-rule='evenodd'>
                    <path d='M0 0h24v2H0zM0 7h24v2H0zM0 14h24v2H0z' />
                  </g>
                </svg>
              </Burger>
            </NavBar>
            <NavMenu menuOpen={menuOpen}>
              <li>About</li>
              <li>Careers</li>
              <li>Events</li>
              <li>Products</li>
              <li>Support</li>
            </NavMenu>
          </Nav>
        </Content>
      </Hero>
    </HeaderContainer>
  );
};

export default Header;
