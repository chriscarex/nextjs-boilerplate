import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Error404 from '../../../pages/page/404';

const setup = () => {
  const component = shallow(<Error404 />);

  return {
    component
  };
};

describe('404 page', () => {
  it('should match snapshot', () => {
    const { component } = setup();
    expect(toJson(component)).toMatchSnapshot();
  });
});
