import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Next from '../../pages/next';

const setup = () => {
  const component = shallow(<Next />);

  return {
    component
  };
};

describe('Next page', () => {
  it('should match snapshot', () => {
    const { component } = setup();
    expect(toJson(component)).toMatchSnapshot();
  });
});
