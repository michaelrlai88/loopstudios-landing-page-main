import React from 'react';
import styled from 'styled-components';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

import theme from './theme';
import './App.css';

const { white, black, darkGray, veryDarkGray } = theme;

const Container = styled.div``;

const App = () => {
  return (
    <Container>
      <Header />
      <Main />
      <Footer />
    </Container>
  );
};

export default App;
