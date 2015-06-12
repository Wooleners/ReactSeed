var React = require('react'),
    TabSelector = require('./tabSelector'),
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
  TabSelector({
    label: 'Color',
    data: data,
    selected: null
  }), node);





