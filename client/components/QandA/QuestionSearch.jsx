/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import $ from 'jquery';

import searchIcon from '../IconsandImages/searchIcon.png';

function QuestionSearch({ searchQuestions }) {
  return (
    <form className="row">
      <input
        type="text"
        className="col-6 search-box"
        id="search_bar"
        placeholder="HAVE A QUESTION? SEARCH FOR AN ANSWER..."
        onChange={() => {
          searchQuestions($('#search_bar').val());
        }}
      />
      <img src={searchIcon} alt="Icon" className="col-2 search-icon" />
    </form>
  );
}

export default QuestionSearch;
