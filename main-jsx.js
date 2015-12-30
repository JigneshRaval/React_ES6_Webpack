'use strict';

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _app = require('./components/app.jsx');

var _app2 = _interopRequireDefault(_app);

var _todo = require('./components/todo.jsx');

var _todo2 = _interopRequireDefault(_todo);

var _simpleClass = require('./components/simpleClass');

var _products = require('./components/products.jsx');

var _products2 = _interopRequireDefault(_products);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// RENDER COMPONENT
//=============================================

// IMPORT REACT COMPONENT
//=============================================
// main.jsx

// IMPORT REACT & REACT_DOM
//=============================================
_reactDom2.default.render(_react2.default.createElement(_app2.default, { name: 'My Test' }), document.getElementById('react-root'));
_reactDom2.default.render(_react2.default.createElement(_todo2.default, { name: 'My Test' }), document.getElementById('react-root'));

// Could come from an API, LocalStorage, another component, etc...
var products = [{ id: 1, name: 'Toast', price: 1499 }, { id: 2, name: 'Bacon', price: 3245 }, { id: 3, name: 'Coffee', price: 300 }];

_reactDom2.default.render(_react2.default.createElement(_products2.default, { products: products }), document.getElementById('react-root'));

// SIMPLE CLASS CALL
//=============================================
var newInst = new _simpleClass.Test("Hiren");
newInst.getName();
newInst.setName("Jayesh");
newInst.getName();

var newInst2 = new _simpleClass.News("Parin");
newInst2.getName();