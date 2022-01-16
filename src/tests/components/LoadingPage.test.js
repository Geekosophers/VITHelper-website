import React from 'react';
import { shallow } from 'enzyme';
import LoadingPage from '../../components/Pages/LoadingPage';

test('should correctly render LoadingPage', () => {
  const wrapper = shallow(<LoadingPage />);
  expect(wrapper).toMatchSnapshot();
});
