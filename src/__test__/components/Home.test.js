import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Home from '../../components/Home';

const setup = () => {
  const props = {};

  const component = shallow(<Home {...props} />);

  return {
    component,
    props
  };
};

describe('Home', () => {
  it('should match snapshot ', () => {
    const {
      component
    } = setup();

    expect(toJson(component)).toMatchSnapshot();
  });
});
