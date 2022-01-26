"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

var Person = /*#__PURE__*/function () {
  function Person(name, age) {
    _classCallCheck(this, Person);

    this.name = name;
    this.age = age;
  }

  _createClass(Person, [{
    key: "getGretting",
    value: function getGretting() {
      // return this.name + ' be quiet' + '!';
      return "Hi. My name is ".concat(this.name, ", and I am ").concat(this.age);
    }
  }]);

  return Person;
}();

var me = new Person('Frodo Baggins', 40);
console.log(me.getGretting());
var other = new Person('Sam Smells', 39);
console.log(other.getGretting());
var people = new Person('Jimbo Smalls', 100);
console.log(people.getGretting());
