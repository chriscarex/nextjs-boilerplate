import React from 'react';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import ErrorPage from '../../../components/page/ErrorPage';

const setup = (statusCode) => {
  const props = {
    statusCode
  };

  const component = shallow(<ErrorPage {...props} />);

  return {
    component
  };
};

describe('ErrorPage', () => {
  it('should match snapshot when 400', () => {
    const {
      component
    } = setup(400);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should match snapshot when 403', () => {
    const {
      component
    } = setup(403);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should match snapshot when 404', () => {
    const {
      component
    } = setup(404);

    expect(toJson(component)).toMatchSnapshot();
  });

  it('should match snapshot when 503', () => {
    const {
      component
    } = setup(503);

    expect(toJson(component)).toMatchSnapshot();
  });
});
