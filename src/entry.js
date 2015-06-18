var React = require('react'),
    TabSelector = require('./TabSelector'),
    data = [
      {
        name: 'Red',
        value: 'red'
      },
      {
        name: 'Green',
        value: 'green'
      },
      {
        name: 'Blue',
        value: 'blue'
      }
    ];

//create exp node 
var node = document.createElement('div');
document.body.appendChild(node);

React.render(
  React.createElement(TabSelector, {
    label: 'Color',
    data: data,
    selected: ''
  }), node);





