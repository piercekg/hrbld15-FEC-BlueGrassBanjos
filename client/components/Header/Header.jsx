/* eslint-disable react/prop-types */
import React from 'react';
import $ from 'jquery';
import logo from '../IconsandImages/FEClogo.png';

function Header({ searchProduct }) {
  return (
    <div>
      <div className="row">
        <img src={logo} alt="logo" className="col logo" />
        <form className="col product-search-form">
          <input type="text" id="product-search" className="form-control-lg product-search-bar" placeholder="Search For Product ID!" />
          <button type="button" className="btn btn-lg search-submit" onClick={() => { searchProduct($('#product-search').val()); }}>Search</button>
        </form>
      </div>

      <a href="#Overview" className="col-1 pt-5 Overview-link">Overview</a>
      <a href="#RelatedProducts" className="col-2 pt-5 Related-Products-link">Related Products</a>
      <a href="#QandA" className="col-2 pt-5 QandA-link">Question and Answers</a>
      <a href="#ReviewsComponent" className="col-2 pt-5 Reviews-link">Ratings and Reviews</a>
    </div>
  );
}

export default Header;
