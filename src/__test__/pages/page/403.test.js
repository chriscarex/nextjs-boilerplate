import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Error403 from '../../../pages/page/403';

const setup = () => {
  const component = shallow(<Error403 />);

  return {
    component
  };
};

describe('403 page', () => {
  it('should match snapshot', () => {
    const { component } = setup();
    expect(toJson(component)).toMatchSnapshot();
  });
});
