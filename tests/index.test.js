
import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Event from '../src/pages/Event';
import renderer from 'react-test-renderer';

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <Router>
      <Route path="/*"  render={(data) => {
        return (<Event />);
      }}/>
    </Router>
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseEnter();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();

  // manually trigger the callback
  tree.props.onMouseLeave();
  // re-rendering
  tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});