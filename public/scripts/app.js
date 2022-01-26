"use strict";

var changeVisibility = false;

var toggleVisibility = function toggleVisibility() {
  changeVisibility = !changeVisibility;
  render();
};

var render = function render() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Visibility Toggle"), /*#__PURE__*/React.createElement("button", {
    onClick: toggleVisibility
  }, changeVisibility ? 'Hide details' : 'Show details'), changeVisibility && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Look at all of these secrets I've been hiding!")));
  ReactDOM.render(template, document.getElementById('app'));
};

render();
