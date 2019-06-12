import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ProductsWrapper from '../components/ProductsWrapper';

describe('ProductsWrapper', () => {
  let wrapper = shallow(
    <ProductsWrapper />
  );

  it('has a <main> element', () => {
    expect(
      wrapper.find('main').first().length
    ).toEqual(1)
  });

  it('has a <ProductsList> component', () => {
    expect(
      wrapper.find('ProductsList').first().length
    ).toEqual(1)
  });

  it('has a <ToggleableAddProduct> component', () => {
    expect(
      wrapper.find('ToggleableAddProduct').first().length
    ).toEqual(1)
  });
});



