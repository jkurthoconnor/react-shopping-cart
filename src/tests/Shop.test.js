import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Shop from '../components/Shop';

describe('Shop', () => {
  let wrapper = shallow(
    <Shop />
  );

  it('has a <div> element', () => {
    expect(
      wrapper.find('div').first().length
    ).toEqual(1)
  });

  it('has a <Header> component', () => {
    expect(
      wrapper.find('Header').first().length
    ).toEqual(1)
  });

  it('has a <ProductsWrapper> component', () => {
    expect(
      wrapper.find('ProductsWrapper').first().length
    ).toEqual(1)
  });
});



