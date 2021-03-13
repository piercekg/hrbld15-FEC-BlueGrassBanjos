import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import {
  configure, shallow, mount, render,
} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import RelatedProducts from '../../components/RelatedProducts/RelatedProducts.jsx';
import RelatedProductsList from '../../components/RelatedProducts/RelatedProductsList.jsx';
import RelatedProduct from '../../components/RelatedProducts/RelatedProduct.jsx';
import ComparisonModal from '../../components/RelatedProducts/ComparisonModal.jsx';
import CompareFeature from '../../components/RelatedProducts/CompareFeature.jsx';
import OutfitItemsList from '../../components/RelatedProducts/OutfitItemsList.jsx';
import OutfitItem from '../../components/RelatedProducts/OutfitItem.jsx';
import testData from '../../components/RelatedProducts/testData';

configure({ adapter: new Adapter() });

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

describe('Check for modules', () => {
  test('RelatedProducts div shoule exist', () => {
    const wrapper = shallow(<RelatedProducts />);

    expect(wrapper.exists()).toBe(true);
  });

  test('RelatedProductsList div should exist', () => {
    const wrapper = shallow(<RelatedProductsList relatedProducts={testData.relatedProducts}/>);

    expect(wrapper.exists()).toBe(true);
  });

  test('RelatedProduct div should exist', () => {
    const wrapper = shallow(<RelatedProduct product={testData.relatedProducts[0]} selectedProduct={testData.selectedProduct}/>);

    expect(wrapper.exists()).toBe(true);
  });

  test('OutfitItemsList div should exist', () => {
    const wrapper = shallow(<OutfitItemsList products={testData.relatedProducts}/>);

    expect(wrapper.exists()).toBe(true);
  });

  test('OutfitItem div should exist', () => {
    const wrapper = shallow(<OutfitItem product={testData.relatedProducts[0]}/>);

    expect(wrapper.exists()).toBe(true);
  });
});
/*
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
*/