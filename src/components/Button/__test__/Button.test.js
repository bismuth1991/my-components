import React from 'react';
import { shallow } from 'enzyme';

import Button from '../Button';

describe('Button', () => {
  const handleClick = jest.fn();
  const props = {
    label: 'Sign Up',
  };

  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<Button {...props} />);
  });

  it('should render without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });

  it('should have a label', () => {
    expect(wrapper.contains(props.label)).toBe(true);
  });

  it('should handleClick when defined', () => {
    wrapper.setProps({ handleClick });
    wrapper.simulate('click');

    expect(handleClick).toBeCalled();
  });
});
