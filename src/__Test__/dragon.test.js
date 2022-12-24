import { render } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/ConfigStore';
import Dragons from '../pages/Dragons';

describe('testing mission component', () => {
  it('should render the mission component', () => {
    const dragons = render(
      <Provider store={store}>
        <Dragons />
      </Provider>,
    );
    expect(dragons).toMatchSnapshot();
  });
});
