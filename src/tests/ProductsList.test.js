import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import ProductsList from '../components/ProductsList';
import products from './productsMock';

describe('ProductsList', () => {
  let wrapper = shallow(
    <ProductsList products={products} />
  );

  it('has a <div> `product-listing` element', () => {
    let div = wrapper.find('div.product-listing').first()
    expect(
      div.length
      ).toEqual(1);
  });

  it('EditableProduct count agrees with number of `products`', () => {
    expect(
      wrapper.find('EditableProduct').length
    ).toEqual(products.length)
  });
});
