import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Error503 from '../../../pages/page/503';

const setup = () => {
  const component = shallow(<Error503 />);

  return {
    component
  };
};

describe('503 page', () => {
  it('should match snapshot', () => {
    const { component } = setup();
    expect(toJson(component)).toMatchSnapshot();
  });
});
