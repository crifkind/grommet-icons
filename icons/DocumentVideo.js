'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Icon = require('../Icon');

var _Icon2 = _interopRequireDefault(_Icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DocumentVideo = function DocumentVideo(props) {
  return _react2.default.createElement(
    _Icon2.default,
    _extends({ a11yTitle: 'DocumentVideo' }, props),
    _react2.default.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      _react2.default.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        _react2.default.createElement('path', { d: 'M4.99787498,6.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L22.9999998,23 L4,23 M18,1 L18,6 L23,6 M3,10 L12,10 L12,19 L3,19 L3,10 Z M12,13 L17,10.5 L17,18.5 L12,16 L12,13 Z' })
      )
    )
  );
};

exports.default = DocumentVideo;