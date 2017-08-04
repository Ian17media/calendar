import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css';

const DAY_MS = 86400000;
const HOUR_MS = 3600000;
const MONENT_MS = 60000;

class Duration extends React.Component {
  constructor(props) {
    super(props);
    const diff = this.props.endTime.getTime() - this.props.currentTime.getTime();
    this.state = {secondsElapsed: diff};
  }

  tick() {
    this.setState((prevState) => ({
      secondsElapsed: prevState.secondsElapsed - 1000
    }));
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { secondsElapsed } =  this.state;
    const d = Math.floor(secondsElapsed / DAY_MS);
    const h = Math.floor(secondsElapsed % DAY_MS / HOUR_MS);
    const m = Math.floor(secondsElapsed % DAY_MS % HOUR_MS / MONENT_MS);
    const s = Math.floor(secondsElapsed % DAY_MS % HOUR_MS % MONENT_MS / 1000);
    return (
      <div className="event-duration">剩餘 {`${d}天 ${h}時 ${m}分 ${s}秒`}</div>
    );
  }
}

export default Duration;
