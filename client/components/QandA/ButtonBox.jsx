/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import React, { useState } from 'react';

function ButtonBox({ toggleAskQuestion }) {
  return (
    <div>
      <div>More Questions</div>
      <button type="button" onClick={toggleAskQuestion}>Add A Question</button>
    </div>
  );
}

export default ButtonBox;

// class ButtonBox extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {

//     };
//   }

//   render() {
//     return (
//       <div>
//         <div>More Questions</div>
//         <button type="button">Add A Question</button>
//       </div>
//     );
//   }
// }
