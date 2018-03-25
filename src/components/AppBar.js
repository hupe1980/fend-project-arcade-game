import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { Label, Image } from './common';
import withGame from './withGame';
import { IMAGES } from '../game';

const Container = styled.header`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  background-color: blue;
  color: white;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: -20px;
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;

export function Level({ level }) {
  return (
    <ItemContainer>
      <Label>{`Level: ${level}`}</Label>
    </ItemContainer>
  );
}

Level.propTypes = {
  level: PropTypes.number.isRequired,
};

export function Player({ avatar, onChange }) {
  return (
    <ItemContainer>
      <Label>Player: </Label>
      <Image src={`./${avatar}`} alt="avatar" />
      <select onChange={onChange}>
        <option value={IMAGES['char-boy']}>Boy</option>
        <option value={IMAGES['char-cat-girl']}>Cat Girl</option>
        <option value={IMAGES['char-horn-girl']}>Horn Girl</option>
        <option value={IMAGES['char-pink-girl']}>Pink Girl</option>
        <option value={IMAGES['char-princess-girl']}>Princess Girl</option>
      </select>
    </ItemContainer>
  );
}

Player.propTypes = {
  avatar: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export function Points({ points }) {
  return (
    <ItemContainer>
      <Label>{`${points} Points`}</Label>
    </ItemContainer>
  );
}

Points.propTypes = {
  points: PropTypes.number.isRequired,
};

export function Lives({ lives }) {
  return (
    <ItemContainer>
      <Image src={`./${IMAGES.heart}`} alt="heart" />
      <Label>{`x ${lives}`}</Label>
    </ItemContainer>
  );
}

Lives.propTypes = {
  lives: PropTypes.number.isRequired,
};

export function AppBar({ avatar, level, points, lives, changeAvatar }) {
  return (
    <Container>
      <Level level={level} />
      <Player avatar={avatar} onChange={e => changeAvatar(e.target.value)} />
      <Points points={points} />
      <Lives lives={lives} />
    </Container>
  );
}

AppBar.propTypes = {
  avatar: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  points: PropTypes.number.isRequired,
  lives: PropTypes.number.isRequired,
  changeAvatar: PropTypes.func.isRequired,
};

export default withGame(AppBar);
