"use strict";

console.log('App.js is running'); // JSX - Javascript XML
// var template = <p>This is JSX from app.js</p>;
// var template = (
//   <div>
//     <h1>Nailed it</h1>
//     <p>Words</p>;
//     <ol>
//       <li>First</li>
//       <li>Second</li>
//     </ol>
//   </div>
// );

var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "James"), /*#__PURE__*/React.createElement("p", null, "Age: 30"), /*#__PURE__*/React.createElement("p", null, "Location: New York"));
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
