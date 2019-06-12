import React from 'react';
import ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Header from '../components/Header';

describe('Header', () => {
  let wrapper = shallow(
    <Header />
  );

  it('has an  <h1> element', () => {
    expect(
      wrapper.containsMatchingElement(
        <h1>The Shop!</h1>
      )
    ).toBe(true);
  });
});
