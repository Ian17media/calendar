import React from 'react';
import PropTypes from 'prop-types';
import './style.css';

const Tab = ({ label, isActive, handleClick }) => <div className={`event-tab${isActive ? ' active' : ''}`} onClick={handleClick}>{label}</div>;

Tab.propTypes = {
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool,
};

const Tabs = ({items, activeIndex, handleClick}) => (
  <div className="event-tabs">
    {items.map((item, i) => <Tab key={i} label={item.label} isActive={activeIndex === i} handleClick={handleClick(i)} />)}
  </div>
);

Tabs.propTypes = {
  activeIndex: PropTypes.number.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
  })).isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default Tabs;