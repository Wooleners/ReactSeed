var React = require('react');

var TabSelector = React.createClass({
  getInitiaState: function(){
    return {selected: this.props.selected};
  },
  handleOnClick: function(e){
    this.setState({'selected': e.target.getAttribute('data-value')});
  },
  render: function(){
    var tabs = this.props.data.map(function(item){
      console.dir(this);
      var selected = item.value == this.state.selected ? 'selected' : '';
      return(
        <li data-value ={item.value}
            className = {selected}
            onCLick = {this.handleOnClick}
        >{item.value}</li>
      );

    }, this);
    return(
      <div clasName = 'tab-selected'>
        <label>{this.props.label}</label>
        <ul>
          {tabs}
        </ul>
      </div>
    );
  }
});

module.exports = TabSelector;
