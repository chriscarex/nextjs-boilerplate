import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Next from '../../components/Next';

const setup = () => {
  const props = {};

  const component = shallow(<Next {...props} />);

  return {
    component,
    props
  };
};

describe('Next', () => {
  it('should match snapshot ', () => {
    const {
      component
    } = setup();

    expect(toJson(component)).toMatchSnapshot();
  });
});
