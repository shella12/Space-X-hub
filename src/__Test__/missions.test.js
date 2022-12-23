import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/ConfigStore';
import Missions from '../pages/Missions';

describe('testing mission component', () => {
  it('should render the mission component', () => {
    const missions = render(
      <Provider store={store}>
        <Missions />
      </Provider>,
    );
    expect(missions).toMatchSnapshot();
  });
});
