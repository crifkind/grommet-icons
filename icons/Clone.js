'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Clone = function Clone(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'Clone' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        _react2.default.createElement('path', { d: 'M7,23 L23,23 L23,7 L7,7 L7,23 Z M17,3.9997 L17,0.9997 L14,0.9997 M1,13.9997 L1,16.9997 L4,16.9997 M1,11.9997 L1,5.9997 L1,11.9997 Z M4,0.9997 L1,0.9997 L1,3.9997 M6,0.9997 L12,0.9997 L6,0.9997 Z' })
      )
    )
  );
};

exports.default = Clone;