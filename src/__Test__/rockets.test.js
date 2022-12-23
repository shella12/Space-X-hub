import { render } from "@testing-library/react";
import React from "react";
import { Provider } from 'react-redux';
import store from '../redux/ConfigStore';
import Rocket from '../pages/Rocket/Rocket';
import RocketsContainer from '../pages/Rocket/Rockets';

describe('testing Rocket component', () => {
 it('should render the rocket component', () => {
  const rocket = render(
   <Provider store={store}>
   <Rocket />
   </Provider>
  );
  expect(rocket).toMatchSnapshot();
 });
 it('should render the rockets component', () => {
  const rockets = render(
    <Provider store={store}>
      <RocketsContainer />
    </Provider>
  );
  expect(rockets).toMatchSnapshot();
 });
})