import React, { Component } from 'react';
// import PropTypes from 'prop-types';
// import lodash from 'lodash';
import './style.css';

const SPDAY = 86400000;

class Calendar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { activeDate, lastTime, startTime, endTime, handleClick } = this.props;
    const startDay = startTime.getDay();
    const periode = (endTime.getTime() - startTime.getTime()) / SPDAY + 1;
    const dates = [...Array(periode).keys()].map((i) => new Date(startTime.getTime() + SPDAY * i).getTime());
    const week = ['日', '一', '二', '三', '四', '五', '六'].map((date, i) => <div className="cell cell-week" key={i}>{date}</div>);
    const nullDay = [...Array(startDay).keys()].map((i) => (<div className="cell cell-null" key={i}></div>));

    return (
      <div className="grid">
        {week}
        {nullDay}
        { 
          dates.map((time, i) => {
            const date = new Date(time).getDate();
            const isActive = activeDate === time ? ' cell-active': '';
            const cellBar = (time <= lastTime) ? <div className="cell-bar"></div>: '';
            const cellFirst = i === 0 ? ' cell-first': '';
            const cellLast = (time === lastTime) ? ' cell-last': '';
            const cellLeft = new Date(time).getDay() === 0 ? ' cell-left': '';
            const cellRight = new Date(time).getDay() === 6 ? ' cell-right': '';

            return (
              <div className={`cell cell-date${cellFirst}${cellLast}${cellLeft}${cellRight}${isActive}`} key={i} onClick={(cellBar ? handleClick(time): ()=>{})}>
                {cellBar}
                <div className="cell-text">{date}</div>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default Calendar;