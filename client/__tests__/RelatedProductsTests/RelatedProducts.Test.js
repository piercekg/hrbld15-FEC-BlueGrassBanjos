import React from 'react';
import {
  configure, shallow, mount, render,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts.jsx';
import testData from './testData';

configure({ adapter: new Adapter() });

describe('Check for modules', () => {
  test('RelatedProducts div shoule exist', () => {
    const wrapper = shallow(<RelatedProducts />);

    expect(wrapper.exists()).toBe(true);
  });

  test('RelatedProductsList div should exist', () => {
    const wrapper = shallow(<RelatedProductsList selectedProduct={testData.selectedProduct} relatedProducts={testData.relatedProducts}/>);

    expect(wrapper.exists()).toBe(true);
  });
});

describe('Initial Tests', () => {

  test('Each Related Product should contain a product name', () => {
    const wrapper = shallow(<RelatedProducts />).dive();
    expect(wrapper.find('p.relatedProductName')).toBeDefined();
  });

  test('Each Related Product should contain a price', () => {
    const wrapper = shallow(<RelatedProducts />).dive();
    expect(wrapper.find('p.relatedProductPrice')).toBeDefined();
  });
});