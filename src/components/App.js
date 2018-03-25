import React, { Component } from 'react';
import styled from 'styled-components';

import Game from './Game';
import AppBar from './AppBar';
import Footer from './Footer';
import { LoadingIndicator } from './common';
import { preloadImages, GAME_WIDTH, GAME_HEIGHT } from '../game';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 700px;
  min-width: ${GAME_WIDTH}px;
  margin: auto;
`;

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: true };
  }

  componentDidMount() {
    preloadImages(() => this.setState({ loading: false }));
  }

  render() {
    if (this.state.loading) return <LoadingIndicator />;

    return (
      <Container>
        <AppBar />
        <Game width={GAME_WIDTH} height={GAME_HEIGHT} />
        <Footer />
      </Container>
    );
  }
}
