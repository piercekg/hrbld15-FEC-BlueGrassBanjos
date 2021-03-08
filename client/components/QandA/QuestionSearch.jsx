/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import $ from 'jquery';

function QuestionSearch({ searchQuestions }) {
  return (
    <form>
      <input
        type="text"
        id="search_bar"
        placeholder="Search For A Question"
        onChange={() => {
          searchQuestions($('#search_bar').val());
        }}
      />
    </form>
  );
}

export default QuestionSearch;
