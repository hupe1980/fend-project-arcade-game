import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { compose } from 'redux';
import Modal from 'react-modal';
import styled from 'styled-components';

import { Button, Heading, Image, Text, withAnimationFrame } from './common';
import withGame from './withGame';
import { createGame } from '../game';

Modal.setAppElement('#root');

const Container = styled.section``;

const GameOverContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export function GameOver({ avatar, lives, level, points, onRestart }) {
  return (
    <Modal id="game-over" contentLabel="Game Over" isOpen={lives === 0}>
      <GameOverContainer>
        <Heading>!!! Game Over !!!</Heading>
        <Image src={`./${avatar}`} alt="avatar" />
        <Heading>Your stats:</Heading>
        <Text>{`Level: ${level}`}</Text>
        <Text>{`Points: ${points}`}</Text>
        <Button onClick={onRestart}>Restart Game</Button>
      </GameOverContainer>
    </Modal>
  );
}

GameOver.propTypes = {
  avatar: PropTypes.string.isRequired,
  lives: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  onRestart: PropTypes.func.isRequired,
};

export class Game extends Component {
  constructor(props) {
    super(props);

    this.onRestart = this.onRestart.bind(this);
  }

  componentDidMount() {
    this.game = createGame(this.refs.canvas, this.props.changeState);
  }

  componentWillReceiveProps(nextProps) {
    this.game.changeAvatar(nextProps.avatar);
  }

  onAnimationFrame(time) {
    this.game.main(time);
  }

  onRestart() {
    this.game.restart();
  }

  render() {
    const { width, height, avatar, lives, level, points } = this.props;

    return (
      <Container>
        <canvas ref="canvas" width={width} height={height} />
        <GameOver
          avatar={avatar}
          lives={lives}
          level={level}
          points={points}
          onRestart={this.onRestart}
        />
      </Container>
    );
  }
}

Game.propTypes = {
  avatar: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
  lives: PropTypes.number.isRequired,
  level: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  changeState: PropTypes.func.isRequired,
};

export default compose(withGame, withAnimationFrame)(Game);
