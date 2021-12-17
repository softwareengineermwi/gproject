import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import MyProfile from '../components/MyProfile';

describe('MyProfile Component test', () => {
  it('Should render correctly', () => {
    const app = renderer.create(
      <Provider store={store}>
        <MyProfile />
      </Provider>,
    ).toJSON();
    expect(app).toMatchSnapshot();
  });
});