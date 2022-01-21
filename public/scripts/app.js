"use strict";

console.log('App.js is running');
var app = {
  title: 'Indecision App',
  subtitle: 'Give in to the power of the computer',
  options: ['One', 'Two']
};
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), app.subtitle && /*#__PURE__*/React.createElement("p", null, app.subtitle), /*#__PURE__*/React.createElement("p", null, app.options.length > 0 ? 'Here are your options' : 'No options'), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "First"), /*#__PURE__*/React.createElement("li", null, "Second")));
var user = {
  name: 'Bob',
  age: 30,
  location: 'Denver'
};

function getLocation(location) {
  if (location) {
    return /*#__PURE__*/React.createElement("p", null, "Location: ", location);
  }
}

;
var userName = 'Mike';
var userAge = 27;
var userLocation = 'Denver';
var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, user.name ? user.name : 'Anonymous'), user.age && user.age >= 18 && /*#__PURE__*/React.createElement("p", null, "Age: ", user.age), getLocation(user.location));
var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);
