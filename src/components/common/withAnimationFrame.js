import React, { Component } from 'react';

export default function withAnimationFrame(WrappedComponent) {
  return class AnimatedComponent extends Component {
    constructor(props) {
      super(props);

      this._frame = null;

      this.requestAnimationFrame = this.requestAnimationFrame.bind(this);
      this._loop = this._loop.bind(this);
      this.cancelAnimationFrame = this.cancelAnimationFrame.bind(this);
    }

    componentDidMount() {
      this.requestAnimationFrame();
    }

    componentWillUnmount() {
      this.cancelAnimationFrame();
    }

    requestAnimationFrame() {
      this._frame = window.requestAnimationFrame(this._loop);
    }

    _loop(time) {
      const target = this.refs.target;

      target.onAnimationFrame(time);

      this.requestAnimationFrame();
    }

    cancelAnimationFrame() {
      window.cancelAnimationFrame(this._frame);
    }

    render() {
      return (
        <WrappedComponent
          ref="target"
          requestAnimationFrame={this.requestAnimationFrame}
          cancelAnimationFrame={this.cancelAnimationFrame}
          {...this.props}
        />
      );
    }
  };
}
