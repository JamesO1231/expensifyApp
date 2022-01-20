"use strict";

console.log('App.js is running');
var app = {
  title: 'Indecision App',
  subtitle: 'Give in to the power of the computer'
};
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), /*#__PURE__*/React.createElement("p", null, app.subtitle), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "First"), /*#__PURE__*/React.createElement("li", null, "Second")));
var user = {
  name: 'Bob',
  age: 26,
  location: 'New York'
};
var userName = 'Mike';
var userAge = 27;
var userLocation = 'Denver';
var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, user.name), /*#__PURE__*/React.createElement("p", null, "Age: ", user.age), /*#__PURE__*/React.createElement("p", null, "Location: ", user.location));
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
