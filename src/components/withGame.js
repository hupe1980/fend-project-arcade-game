import React from 'react';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { changeAvatar, changeState } from '../redux/game';

const withGame = Component => props => <Component {...props} />;

const mapStateToProps = ({ game }) => game;

export default compose(
  connect(mapStateToProps, { changeAvatar, changeState }),
  withGame,
);
