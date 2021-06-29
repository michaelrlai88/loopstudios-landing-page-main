import React from "react";
import styled from "styled-components";
import navLogo from "../images/logo.svg";

const Container = styled.div`
  background-color: black;
  @media screen and (max-width: 767px) {
    height: 470px;
    padding: 55px 24px 0 24px;
  }
  @media screen and (min-width: 768px) {
    padding: 40px 24px 0 24px;
    height: 160px;
  }
  @media screen and (min-width: 1024px) {
    padding: 40px 165px 0 165px;
  }
`;

const Contents = styled.div`
  @media screen and (max-width: 767px) {
  }
  @media screen and (min-width: 768px) {
    max-width: 1110px;
    margin: 0 auto;
  }
`;

const LogoNavContainer = styled.div`
  margin-bottom: 45px;
  @media screen and (min-width: 768px) {
    height: 70px;
    width: 380px;
    /* background-color: coral; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Logo = styled.div`
  background-image: url(${navLogo});
  background-repeat: no-repeat;
  background-position: center;

  @media screen and (max-width: 767px) {
    height: 25px;
    width: 160px;
    background-size: 145px auto;
    margin: 0 auto 40px auto;
  }
  @media screen and (min-width: 768px) {
    height: 35px;
    width: 195px;
    background-size: auto auto;
  }
`;

const Nav = styled.ul`
  font-family: "Josefin Sans", sans-serif;

  li {
    list-style-type: none;
  }

  a {
    color: white;
    text-decoration: none;
  }
  @media screen and (max-width: 767px) {
    text-align: center;
    li {
      margin-bottom: 30px;
    }
  }

  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  } ;
`;

const SocialCopyrightsContainer = styled.div``;

const Social = styled.div``;

const Copyrights = styled.div``;

const Footer = () => {
  return (
    <Container>
      <Contents>
        <LogoNavContainer>
          <Logo></Logo>
          <Nav>
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
          </Nav>
        </LogoNavContainer>
        <SocialCopyrightsContainer>
          <Social></Social>
          <Copyrights></Copyrights>
        </SocialCopyrightsContainer>
      </Contents>
    </Container>
  );
};

export default Footer;
