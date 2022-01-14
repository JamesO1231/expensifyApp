"use strict";

console.log('App.js is running'); // JSX - Javascript XML
// var template = <p>This is JSX from app.js</p>;

var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Nailed it"), /*#__PURE__*/React.createElement("p", null, "Words"), ";", /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "First"), /*#__PURE__*/React.createElement("li", null, "Second")));
var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "James"), /*#__PURE__*/React.createElement("p", null, "Age: 30"), /*#__PURE__*/React.createElement("p", null, "Location: New York"));
var appRoot = document.getElementById('app');
ReactDOM.render(templateTwo, appRoot);
