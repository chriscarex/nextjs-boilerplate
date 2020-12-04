import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Error400 from '../../../pages/page/400';

const setup = () => {
  const component = shallow(<Error400 />);

  return {
    component
  };
};

describe('400 page', () => {
  it('should match snapshot', () => {
    const { component } = setup();
    expect(toJson(component)).toMatchSnapshot();
  });
});
