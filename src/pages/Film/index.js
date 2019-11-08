import React, { Component } from 'react';
import PropTypes from 'prop-types';

// import { Container } from './styles';

export default class Film extends Component {
  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        title: PropTypes.string,
      }),
    }),
  };

  state = {
    search: {},
    title: {},
    resp: {},
  };

  render() {
    return <h1>Films</h1>;
  }
}
