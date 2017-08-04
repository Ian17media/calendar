import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Board = ({ userData = {} }) => {
  const { streamers = [] } = userData;
  return (
    <div className="event-board">
     {
       streamers.map((streamer, i) => (
        <div className="event-user" key={i}>
          <div className="name">{streamer.openID}</div>
          <div className="score">{streamer.score}</div>
        </div>
       ))
     }
    </div>
  );
};

export default Board;