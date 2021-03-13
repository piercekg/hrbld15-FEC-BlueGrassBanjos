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
        <div className="dropdown col">
          <button type="button" className="dropbtn">Navigation</button>
          <div className="dropdown-content">
            <a href="#Overview" className="Overview-link dropdown-item">Overview</a>
            <a href="#RelatedProducts" className="Related-Products-link dropdown-item">Related Products</a>
            <a href="#QandA" className="QandA-link dropdown-item">Question and Answers</a>
            <a href="#ReviewsComponent" className="Reviews-link dropdown-item">Ratings and Reviews</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
