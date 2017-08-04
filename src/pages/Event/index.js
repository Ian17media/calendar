import React, { Component } from 'react';
import Duration from './components/Duration';
import Calendar from './components/Calendar';
import Tabs from './components/Tabs';
import Board from './components/Board';

const startTime = new Date('2017-07-11T00:00:00+08:00');
const endTime = new Date('2017-08-20T00:00:00+08:00');

const items = [
  {
    label: 'lv1',
  },
  {
    label: 'lv51',
  },
  {
    label: 'lv121',
  }
]

const currentTime = new Date(Date.now());
const todayTime = new Date(currentTime.getFullYear(), currentTime.getMonth(), currentTime.getDate());
const lastTime = todayTime.getTime() > endTime.getTime() ? endTime.getTime(): todayTime.getTime();

class Event extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 0,
      activeDate: lastTime,
      userData: [],
    };

    this.handleDateClick = this.handleDateClick.bind(this);
    this.handleTabClick = this.handleTabClick.bind(this);
    this.fetchStageData = this.fetchStageData.bind(this);
  }

  handleDateClick(dateTime) {
    return (e) => {
      if (e) {
        e.preventDefault();
      }
      this.setState({ activeDate: dateTime });
    };
  }

  handleTabClick(nextTab) {
    return (e) => {
      if (e) {
        e.preventDefault();
      }
      this.fetchStageData(nextTab);
      this.setState({ activeTab: nextTab });
    };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      nextState.activeTab !== this.state.activeTab || 
      nextState.activeDate !== this.state.activeDate ||
      nextState.userData !== this.state.userData
    )
  }

  componentDidMount() {
    this.fetchStageData(this.state.activeTab);
  }
  
  fetchStageData(activeTab) {
    const fileName = activeTab+1;
    fetch(`https://s3-us-west-2.amazonaws.com/assets.17.media/campaign/allyoucantakeEventS${fileName}.json`)
      .then(res => res.json())
      .then(userData => this.setState({ userData }));
  }
  
  render() {
    const { activeDate, activeTab, userData } = this.state;
    return (
      <div>
        <Duration currentTime={currentTime} startTime={startTime} endTime={endTime} />
        <Calendar activeDate={activeDate} lastTime={lastTime} startTime={startTime} endTime={endTime} handleClick={this.handleDateClick}/>
        <Tabs items={items} activeIndex={activeTab} handleClick={this.handleTabClick} />
        <Board userData={userData} />
      </div>
    );
  }
}

export default Event;
