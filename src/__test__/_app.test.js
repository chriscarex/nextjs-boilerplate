import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import MyApp from '../pages/_app';
import Next from '../pages/next';

const setup = (pageProps) => {
  const props = {
    Component: Next,
    pageProps
  };

  const component = shallow(<MyApp {...props} />);

  return {
    component,
    props
  };
};

describe('_app', () => {
  it('should match snapshot ', () => {
    const {
      component
    } = setup({
      success: false
    });

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should match snapshot if error occurs', () => {
    const {
      component
    } = setup({
      error: { statusCode: 400 }
    });

    expect(toJson(component)).toMatchSnapshot();
  });
});
