var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

import React from 'react';

import Icon from '../Icon';

var DocumentWindows = function DocumentWindows(props) {
  return React.createElement(
    Icon,
    _extends({ a11yTitle: 'DocumentWindows' }, props),
    React.createElement(
      'g',
      { stroke: 'none', strokeWidth: '1', fill: 'none', fillRule: 'evenodd' },
      React.createElement(
        'g',
        { stroke: '#000000', strokeWidth: '2' },
        React.createElement('path', { d: 'M4.99787498,8.99999999 L4.99787498,0.999999992 L19.4999998,0.999999992 L22.9999998,4.50000005 L23,23 L4,23 M18,1 L18,6 L23,6 M14.25,11.5 L8.25,18.5 M8.25,11.5 L14.25,18.5 M20.5,12 L16.5,12 L16.5,18 L20.5,18 M19.5,15 L16.5,15 M7,12 L3,12 L3,18 L7,18 M6,15 L3,15' })
      )
    )
  );
};

export default DocumentWindows;